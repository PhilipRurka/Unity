/* eslint-disable no-console */

/* eslint-disable import/prefer-default-export */
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  try {
    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) throw new Error('Missing secret for NextAuth');

    // Get the token for authentication
    const token = await getToken({ req, secret });

    // Create the response object and set CORS headers
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    // Authentication logic
    if (token) {
      if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      return response; // Return the response with CORS headers
    }

    if (req.nextUrl.pathname !== '/') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return response; // Allow access if the path is '/'
  } catch (error) {
    console.error('Middleware error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Apply middleware to both authentication routes and API routes
export const config = {
  matcher: ['/', '/dashboard', '/users', '/user/:path*', '/api/:path*'], // Include API routes for CORS handling
};
