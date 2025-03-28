import { jwtDecode } from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';

import { TOKEN_KEYS } from './constants';

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get(TOKEN_KEYS.accessToken)?.value;
  const refreshToken = req.cookies.get(TOKEN_KEYS.refreshToken)?.value;

  const getPayload = (): Payload | null => {
    if (accessToken) {
      return jwtDecode(accessToken);
    }

    return null;
  };

  const { pathname } = req.nextUrl;
  const tokenPayload = getPayload();

  if (pathname.includes('admin')) {
    if (pathname === '/admin/login') {
      if (tokenPayload && tokenPayload.authority === 'ADMIN') {
        return NextResponse.redirect(new URL('/admin/dashboard', req.url));
      }
      return NextResponse.next();
    }
    if (!tokenPayload) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    if (tokenPayload && tokenPayload.authority !== 'ADMIN') {
      const logoutResponse = NextResponse.redirect(new URL('/admin/login', req.url));
      logoutResponse.cookies.delete(TOKEN_KEYS.accessToken);
      logoutResponse.cookies.delete(TOKEN_KEYS.refreshToken);
      return logoutResponse;
    }

    return NextResponse.next();
  }

  if (pathname === '/' || pathname.includes('auth')) {
    return NextResponse.next();
  }

  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  try {
    if (tokenPayload && tokenPayload.exp * 1000 < Date.now()) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          accessToken,
          refreshToken,
        }),
      });

      if (!response.ok) {
        const logoutResponse = NextResponse.redirect(new URL('/', req.url));
        logoutResponse.cookies.delete(TOKEN_KEYS.accessToken);
        logoutResponse.cookies.delete(TOKEN_KEYS.refreshToken);
        return logoutResponse;
      }
    }
  } catch (error) {
    console.error(error);
    const errorResponse = NextResponse.redirect(new URL('/', req.url));
    errorResponse.cookies.delete(TOKEN_KEYS.accessToken);
    errorResponse.cookies.delete(TOKEN_KEYS.refreshToken);
    return errorResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
