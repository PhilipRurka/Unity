/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfAdminAuthenticated, getRegistrationRequest } from '@unity/api-methods';

export const GET = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const [data, status] = await getRegistrationRequest();

  return NextResponse.json(data, status);
};
