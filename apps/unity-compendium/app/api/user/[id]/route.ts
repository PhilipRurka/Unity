/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import { checkIfUserAuthenticated, getUser } from '@unity/api-methods';

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const tokenSub = await checkIfUserAuthenticated(req);
  if (!tokenSub) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  if (userId !== tokenSub)
    return NextResponse.json([{ error: { message: 'You are not who you say you are!' } }, { status: 503 }]);

  const [data, status] = await getUser(userId);

  return NextResponse.json(data, status);
};
