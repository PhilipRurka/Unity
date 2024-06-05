/* eslint-disable no-console */

/* eslint-disable import/prefer-default-export */
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  try {
    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) throw new Error('Missing secret for NextAuth');

    const token = await getToken({ req, secret });

    if (token) {
      if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/articles/unity-race', req.url));
      }

      return NextResponse.next();
    }

    if (req.nextUrl.pathname !== '/') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export const config = {
  matcher: ['/', '/articles/:path*'],
};
