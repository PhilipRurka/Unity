/* eslint-disable no-await-in-loop */
import { createClient } from 'contentful';

import type { AllContentModelTypes, ApiMethodResponsePromise } from '@unity/types';

type GetByContentModel = (contentModel: AllContentModelTypes) => ApiMethodResponsePromise<unknown[]>;

type CatchError = {
  message: string;
};

const getByContentModel: GetByContentModel = async (contentModel) => {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    });

    const limit = 100;

    // 1. Fetch the first page to get total
    const firstPage = await client.getEntries({ content_type: contentModel, include: 10, skip: 0, limit });
    const { total } = firstPage;
    const allItems = [...firstPage.items];

    // 2. Prepare skip values for all remaining pages
    const skips = [];
    for (let skip = limit; skip < total; skip += limit) {
      skips.push(skip);
    }

    // 3. Fetch in batches
    const batchSize = 5; // adjust based on your rate limits
    for (let i = 0; i < skips.length; i += batchSize) {
      const batch = skips.slice(i, i + batchSize);
      const pages = await Promise.all(
        batch.map((skip) => client.getEntries({ content_type: contentModel, include: 10, skip, limit }))
      );
      pages.forEach((page) => allItems.push(...page.items));
    }
    return [{ result: allItems }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    return [{ error: { message: error.message } }, { status: 503 }];
  }
};

export default getByContentModel;
