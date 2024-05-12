/* eslint-disable import/prefer-default-export */
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) throw new Error('Missing secret for NextAuth');

  const token = await getToken({ req, secret });

  if (token) {
    return NextResponse.next();
  }

  return new NextResponse('Unauthorized', { status: 401 });
}
