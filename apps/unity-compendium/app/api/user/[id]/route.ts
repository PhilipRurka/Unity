/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfUserAuthenticated, editUser, getUser } from '@unity/api-methods';
import { EditUserReq } from '@unity/types';

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const tokenSub = await checkIfUserAuthenticated(req);
  if (!tokenSub) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  if (userId !== tokenSub)
    return NextResponse.json([{ error: { message: 'You are not who you say you are!' } }, { status: 503 }]);

  const [data, status] = await getUser(userId);

  return NextResponse.json(data, status);
};

export const PUT = async (req: NextRequest, context: Context) => {
  const tokenSub = await checkIfUserAuthenticated(req);
  if (!tokenSub) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  const reqData: EditUserReq = await req.json();

  if (userId !== tokenSub)
    return NextResponse.json([{ error: { message: 'You are not who you say you are!' } }, { status: 503 }]);

  const [data, status] = await editUser(userId, reqData);

  return NextResponse.json(data, status);
};
