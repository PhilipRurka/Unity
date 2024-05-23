/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import getBySlug from '@/Methods/getBySlug/methods/GET';

type Context = {
  params: {
    slug: string;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { slug } = context.params;

  const [data, status] = await getBySlug(slug);

  return NextResponse.json(data, status);
};
