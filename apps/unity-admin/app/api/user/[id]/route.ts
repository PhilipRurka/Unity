/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfAdminAuthenticated, editUser, getUser } from '@unity/api-methods';
import { EditUserReq } from '@unity/types';

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  const [data, status] = await getUser(userId);

  return NextResponse.json(data, status);
};

export const PUT = async (req: NextRequest, context: Context) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  const reqData: EditUserReq = await req.json();

  const [data, status] = await editUser(userId, reqData);

  return NextResponse.json(data, status);
};
