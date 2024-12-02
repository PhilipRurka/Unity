/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { resetPassword } from '@unity/api-methods';

type ResetReqType = {
  email: string;
};

export const POST = async (req: NextRequest) => {
  const { email }: ResetReqType = await req.json();

  const [data, status] = await resetPassword(email);

  return NextResponse.json(data, status);
};
