/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { ActivityReqType } from '@unity/types';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import activityPut from '@/Methods/activitiesAnalytics/PUT.addActivity';

export const PUT = async (req: NextRequest) => {
  const isUserAuthenticated = checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json({}, { status: 200 });
  }

  const reqData: ActivityReqType = await req.json();

  const [data, status] = await activityPut(reqData);

  return NextResponse.json(data, status);
};
