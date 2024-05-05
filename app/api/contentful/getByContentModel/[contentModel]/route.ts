/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { AllContentModels } from '@/Types/contentful-codegen/AllContentModels';

import getByContentModel from './methods/GET';

type Context = {
  params: {
    contentModel: AllContentModels;
  };
};

export const GET = async (_req: NextRequest, context: Context) => {
  const { contentModel } = context.params;

  const [data, status] = await getByContentModel(contentModel);

  return NextResponse.json(data, status);
};
