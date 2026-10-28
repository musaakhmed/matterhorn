import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidLocale } from '@/lib/i18n/config';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Redirect /en or /en/... to the canonical clean default / or /...
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const cleanPath = pathname.replace(/^\/en(\/|$)/, '$1') || '/';
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    return NextResponse.redirect(url, { status: 308 });
  }

  // 2. Returning visitor cookie preference redirect on root visit '/'
  if (pathname === '/') {
    const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
    if (savedLocale && isValidLocale(savedLocale) && savedLocale !== 'en') {
      const url = request.nextUrl.clone();
      url.pathname = `/${savedLocale}`;
      return NextResponse.redirect(url, { status: 307 });
    }
  }

  const requestHeaders = new Headers(request.headers);
  const firstSegment = pathname.split('/')[1] ?? '';
  requestHeaders.set('x-locale', isValidLocale(firstSegment) ? firstSegment : 'en');

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    // Match all routes except internal Next.js assets, API endpoints, and static files
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|widget.js|.*\\..*).*)',
  ],
};
