/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfUserAuthenticated, getAlgoliaResults } from '@unity/api-methods';

type Context = {
  params: {
    query: string;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { query } = context.params;

  const [result, status] = await getAlgoliaResults(query);

  return NextResponse.json(result, status);
};
