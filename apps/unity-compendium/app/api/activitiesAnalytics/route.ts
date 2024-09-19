/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { addActivity, checkIfUserAuthenticated } from '@unity/api-methods';
import { ActivityReqType } from '@unity/types';

export const PUT = async (req: NextRequest) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  // if (process.env.NODE_ENV === 'development') {
  //   return NextResponse.json({}, { status: 200 });
  // }

  const reqData: ActivityReqType = await req.json();

  const [data, status] = await addActivity(reqData);

  return NextResponse.json(data, status);
};
