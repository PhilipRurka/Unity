/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfUserAuthenticated } from '@unity/api-methods';
import { askMyWiki, getMyWiki } from '@unity/api-methods/src/myWiki';

export const GET = async (req: NextRequest) => {
  const userId = await checkIfUserAuthenticated(req);
  if (!userId) return NextResponse.json({}, {});

  const [data, status] = await getMyWiki(userId);

  return NextResponse.json(data, status);
};

export const POST = async (req: NextRequest) => {
  const userId = await checkIfUserAuthenticated(req);
  if (!userId) return NextResponse.json({}, {});

  try {
    const { query } = await req.json();

    const [data, status] = await askMyWiki(userId, query);

    return NextResponse.json(data, status);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};
