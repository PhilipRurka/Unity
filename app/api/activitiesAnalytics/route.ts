/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import activityPut from './methods/PUT';

export const PUT = async (req: NextRequest) => {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json({}, { status: 200 });
  }

  const reqData = await req.json();

  const [data, status] = await activityPut(reqData);

  return NextResponse.json(data, status);
};
