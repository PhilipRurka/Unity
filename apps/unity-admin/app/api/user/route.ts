/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { addUser, isUserAuthenticated as checkIfUserAuthenticated } from '@unity/api-methods';
import { AddUserReq } from '@unity/types';

export const POST = async (req: NextRequest) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const reqData: AddUserReq = await req.json();

  const [data, status] = await addUser(reqData);

  return NextResponse.json(data, status);
};
