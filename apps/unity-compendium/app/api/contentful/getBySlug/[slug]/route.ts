/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfUserAuthenticated, getBySlug } from '@unity/api-methods';

type Context = {
  params: Promise<{
    slug: string;
  }>;
};

export const GET = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { slug } = await context.params;

  const [data, status] = await getBySlug(slug);

  return NextResponse.json(data, status);
};
