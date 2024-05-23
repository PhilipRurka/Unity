/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import getAlgoliaResults from '@/Methods/getAlgoliaResults/GET';

type Context = {
  params: {
    query: string;
  };
};

export const GET = async (_req: NextRequest, context: Context) => {
  const { query } = context.params;

  const [data, status] = await getAlgoliaResults(query);

  return NextResponse.json(data, status);
};
