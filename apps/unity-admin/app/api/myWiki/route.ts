/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { buildMyWikiVectorIndex, checkIfUserAuthenticated } from '@unity/api-methods';

export const POST = async (req: NextRequest) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  try {
    await buildMyWikiVectorIndex();

    return NextResponse.json({});
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};
