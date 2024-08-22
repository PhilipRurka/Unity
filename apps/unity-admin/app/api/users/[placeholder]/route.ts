/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import getUsers from '@/Methods/users/GET.getUsers';

export const GET = async (req: NextRequest) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const [data, status] = await getUsers();

  return NextResponse.json(data, status);
};
