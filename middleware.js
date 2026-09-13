import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionToken =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");

  if (!sessionToken) {
    return NextResponse.redirect(
      new URL("/auth/signin", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/desk/:path*"]
};