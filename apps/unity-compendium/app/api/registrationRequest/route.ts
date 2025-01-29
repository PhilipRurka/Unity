/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { addRegistrationRequest } from '@unity/api-methods';

type RegistrationRequestReqType = {
  name: string;
  email: string;
  message: string;
};

export const POST = async (req: NextRequest) => {
  const { name, email, message }: RegistrationRequestReqType = await req.json();

  const [data, status] = await addRegistrationRequest({ name, email, message });

  return NextResponse.json(data, status);
};
