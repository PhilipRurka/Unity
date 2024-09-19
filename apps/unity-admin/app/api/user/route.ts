/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { addUser, checkIfAdminAuthenticated } from '@unity/api-methods';
import { AddUserReq } from '@unity/types';

export const POST = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const reqData: AddUserReq = await req.json();

  const [data, status] = await addUser(reqData);

  return NextResponse.json(data, status);
};
