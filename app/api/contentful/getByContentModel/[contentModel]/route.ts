/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import getByContentModel from '@/Methods/getByContentModel/methods/GET';
import { AllContentModelTypes } from '@/Types/contentful-codegen/SimplerContentfulTypes';

type Context = {
  params: {
    contentModel: AllContentModelTypes;
  };
};

export const GET = async (_req: NextRequest, context: Context) => {
  const { contentModel } = context.params;

  const [data, status] = await getByContentModel(contentModel);

  return NextResponse.json(data, status);
};
