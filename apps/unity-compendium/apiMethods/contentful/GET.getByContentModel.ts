import { createClient } from 'contentful';

import type { AllContentModelTypes, ApiMethodResponseType } from '@unity/types';

type GetByContentModel = (contentModel: AllContentModelTypes) => ApiMethodResponseType<unknown[]>;

type CatchError = {
  message: string;
};

const getByContentModel: GetByContentModel = async (contentModel) => {
  let client;

  try {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    });

    const { items } = await client.getEntries({
      content_type: contentModel,
      include: 10,
    });

    return [{ result: items }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    return [{ error: { message: error.message } }, { status: 503 }];
  }
};

export default getByContentModel;
