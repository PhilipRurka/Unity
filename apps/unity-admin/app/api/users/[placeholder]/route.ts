/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { isUserAuthenticated as checkIfUserAuthenticated, getUsers } from '@unity/api-methods';

export const GET = async (req: NextRequest) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const [data, status] = await getUsers();

  return NextResponse.json(data, status);
};
