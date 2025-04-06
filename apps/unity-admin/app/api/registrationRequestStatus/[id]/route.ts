/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfAdminAuthenticated, updateRegistrationRequestStatus } from '@unity/api-methods';
import { RegistrationRequestStatus } from '@unity/types';

type Context = {
  params: {
    id: string;
  };
};

type ReqData = {
  status: RegistrationRequestStatus;
};

export const PUT = async (req: NextRequest, context: Context) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const { id: requestId } = context.params;

  const reqData: ReqData = await req.json();

  const [data, status] = await updateRegistrationRequestStatus({ id: requestId, ...reqData });

  return NextResponse.json(data, status);
};
