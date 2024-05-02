/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import getByContentModel from './methods/GET';

export const GET = async (req: NextRequest) => {
  const reqData = await req.json();
  const [data, status] = await getByContentModel(reqData);

  return NextResponse.json(data, status);
};
