/* eslint-disable no-console */

/* eslint-disable import/prefer-default-export */
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const authPaths = ['/login', '/reset-password'];

export default async function middleware(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;

    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) throw new Error('Missing secret for NextAuth');

    const token = await getToken({ req, secret });

    const isAuthPath = authPaths.includes(pathname);

    if (token) {
      if (isAuthPath) {
        return NextResponse.redirect(new URL('/', req.url));
      }

      return NextResponse.next();
    }

    if (!isAuthPath) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export const config = {
  matcher: ['/login', '/reset-password', '/articles/:path*'],
};
