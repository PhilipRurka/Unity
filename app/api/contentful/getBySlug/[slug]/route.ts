/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import getBySlug from '@/Methods/getBySlug/methods/GET';

type Context = {
  params: {
    slug: string;
  };
};

export const GET = async (_req: NextRequest, context: Context) => {
  const { slug } = context.params;

  const [data, status] = await getBySlug(slug);

  return NextResponse.json(data, status);
};
