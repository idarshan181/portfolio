// import type { NextRequest } from 'next/server';
// import createMiddleware from 'next-intl/middleware';
// import { routing } from './libs/i18nNavigation';

// const intlMiddleware = createMiddleware(routing);

// export default function middleware(
//   request: NextRequest,
// ) {
//   return intlMiddleware(request);
// }

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Remove or adjust rate limiting for crawlers
  const isBot = request.headers.get('user-agent')?.toLowerCase().includes('bot');
  const isGoogleBot = request.headers.get('user-agent')?.toLowerCase().includes('googlebot');

  if (isBot || isGoogleBot) {
    // Allow crawlers to access the site
    return NextResponse.next();
  }

  // Your existing middleware logic
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt)
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};
