/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import getBySlug from './methods/GET';

type Context = {
  params: {
    slug: string;
  };
};

export const GET = async (_req: NextRequest, context: Context) => {
  console.log(_req, context);
  const { slug } = context.params;

  const [data, status] = await getBySlug(slug);

  return NextResponse.json(data, status);
};
