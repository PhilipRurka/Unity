/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { isUserAuthenticated as checkIfUserAuthenticated, updateStatus } from '@unity/api-methods';
import type { UserStatusChangeReq } from '@unity/types';

type Context = {
  params: {
    id: string;
  };
};

export const PUT = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  const reqData: UserStatusChangeReq = await req.json();

  const [data, status] = await updateStatus(userId, reqData);

  return NextResponse.json(data, status);
};
