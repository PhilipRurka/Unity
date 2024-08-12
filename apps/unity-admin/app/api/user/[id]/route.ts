/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { EditUserReq } from '@unity/types';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import editUser from '@/Methods/user/PUT.editUser';

export const PUT = async (req: NextRequest) => {
  const isUserAuthenticated = checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const reqData: EditUserReq = await req.json();

  const [data, status] = await editUser(reqData);

  return NextResponse.json(data, status);
};
