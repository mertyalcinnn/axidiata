import { NextResponse } from 'next/server';

export function middleware() {
  // Add custom headers for security
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  return response;
}

// Specify which paths this middleware will run on
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
