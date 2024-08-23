/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { EditUserReq } from '@unity/types';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import getUser from '@/Methods/user/GET.getUser';
import editUser from '@/Methods/user/PUT.editUser';

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  const [data, status] = await getUser(userId);

  return NextResponse.json(data, status);
};

export const PUT = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  const reqData: EditUserReq = await req.json();

  const [data, status] = await editUser(userId, reqData);

  return NextResponse.json(data, status);
};
