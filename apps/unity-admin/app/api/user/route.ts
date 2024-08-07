/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import addUser from '@/Methods/user/PUT.addUser';

export const PUT = async (req: NextRequest) => {
  const isUserAuthenticated = checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const reqData = await req.json();

  const [data, status] = await addUser(reqData);

  return NextResponse.json(data, status);
};
