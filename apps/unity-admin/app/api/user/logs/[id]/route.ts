/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import checkIfUserAuthenticated from '@/Lib/isUserAuthenticated';
import getUserLogs from '@/Methods/user/GET.getUserLogs';

type Context = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, context: Context) => {
  const isUserAuthenticated = await checkIfUserAuthenticated(req);
  if (!isUserAuthenticated) return NextResponse.json({}, {});

  const { id: userId } = context.params;

  const [data, status] = await getUserLogs(userId);

  return NextResponse.json(data, status);
};