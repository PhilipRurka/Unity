/* eslint-disable import/prefer-default-export */
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { checkIfUserAuthenticated, getByContentModel } from '@unity/api-methods';
import type { AllContentModelTypes } from '@unity/types';

type Context = {
  params: {
    contentModel: AllContentModelTypes;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const { contentModel } = context.params;

  const adminKey = headers().get('adminKey');

  if (adminKey) {
    if (adminKey !== process.env.ADMIN_KEY) return NextResponse.json({}, {});
  } else {
    const isUserAuthenticated = await checkIfUserAuthenticated(req);

    if (!isUserAuthenticated) return NextResponse.json({}, {});
  }

  const [result, status] = await getByContentModel(contentModel);

  return NextResponse.json(result, status);
};
