/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import getAlgoliaResults from '@/Methods/getAlgoliaResults/GET';

type Context = {
  params: {
    query: string;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { query } = context.params;

  const [data, status] = await getAlgoliaResults(query);

  return NextResponse.json(data, status);
};