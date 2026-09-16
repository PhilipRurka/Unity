/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfAdminAuthenticated, getRegistrationRequest } from '@unity/api-methods';

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export const GET = async (req: NextRequest, context: Context) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { id: requestId } = await context.params;

  const [data, status] = await getRegistrationRequest(requestId);

  return NextResponse.json(data, status);
};
