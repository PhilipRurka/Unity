/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import getUsersDetails from '@/Methods/usersDetails/GET.getUsersDetails';

export const GET = async (req: NextRequest) => {
  const isUserAuthenticated = checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const [data, status] = await getUsersDetails();

  return NextResponse.json(data, status);
};
