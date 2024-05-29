import { createClient } from 'contentful';

import type { AllContentModelTypes } from '@unity/types';

type SuccessGet = [{ entries: unknown[] }, { status: number }];
type ErrorGet = [{ data: { message: string } }, { status: number }];

type GetByContentModel = (contentModel: AllContentModelTypes) => Promise<SuccessGet | ErrorGet>;

type CatchError = {
  message: string;
};

const getByContentModel: GetByContentModel = async (contentModel) => {
  let client;
  let entries;

  try {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    });

    const { items } = await client.getEntries({
      content_type: contentModel,
      include: 10,
    });

    entries = items;
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    return [{ data: { message: error.message } }, { status: 503 }];
  }

  return [{ entries }, { status: 200 }];
};

export default getByContentModel;
