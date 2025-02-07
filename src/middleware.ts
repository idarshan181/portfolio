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
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  // Allow search engine crawlers like Googlebot
  if (userAgent.includes('bot') || userAgent.includes('googlebot')) {
    return NextResponse.next();
  }

  // Allow direct access to sitemap.xml and robots.txt
  const pathname = request.nextUrl.pathname;
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    return NextResponse.next();
  }

  // Your existing middleware logic
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - /api/ routes
     * - Next.js internals
     * - Public static files
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+|sitemap.xml|robots.txt).*)',
  ],
};
