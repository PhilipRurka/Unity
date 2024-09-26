/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfAdminAuthenticated, updateInternalTools } from '@unity/api-methods';
import { AuditFrontendType } from '@unity/types';

export const PUT = async (req: NextRequest) => {
  const isAdminAuthenticated = await checkIfAdminAuthenticated(req);
  if (!isAdminAuthenticated) return NextResponse.json({}, {});

  const reqData: AuditFrontendType = await req.json();

  const [data, status] = await updateInternalTools(reqData);

  return NextResponse.json(data, status);
};
