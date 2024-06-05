import { createClient } from 'contentful';

import { ApiMethodResponseType } from '@unity/types';

type GetByContentModel = (slug: string) => ApiMethodResponseType<unknown>;

type CatchError = {
  message: string;
};

const getBySlug: GetByContentModel = async (slug) => {
  let client;
  let entries;

  try {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    });

    const { items } = await client.getEntries({
      content_type: 'article',
      include: 10,
      'fields.slug[in]': slug,
    });

    entries = items;
  } catch (err) {
    const error = err as CatchError;

    console.error(error.message);

    return [{ error: { message: error.message } }, { status: 503 }];
  }

  return [{ result: entries[0] }, { status: 200 }];
};

export default getBySlug;
