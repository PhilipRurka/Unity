/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfUserAuthenticated, getByContentModel } from '@unity/api-methods';
import type { AllContentModelTypes } from '@unity/types';

type Context = {
  params: {
    contentModel: AllContentModelTypes;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { contentModel } = context.params;

  const [result, status] = await getByContentModel(contentModel);

  return NextResponse.json(result, status);
};
