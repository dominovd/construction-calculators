import { NextRequest, NextResponse } from "next/server";

const LOCALE_CODES = ["uk", "ru", "pl", "de", "es", "fr", "ja", "ar", "it"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Find locale prefix in URL: /ru/board-foot-calculator → locale = "ru"
  const locale = LOCALE_CODES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (locale) {
    // Rewrite to English path: /ru/board-foot-calculator → /board-foot-calculator
    const rewritePath = pathname.slice(locale.length + 1) || "/";
    const url = request.nextUrl.clone();
    url.pathname = rewritePath;
    const response = NextResponse.rewrite(url);
    // Pass locale to server components and LanguageProvider via header
    response.headers.set("x-locale", locale);
    return response;
  }

  // English (default) — no prefix, pass locale header
  const response = NextResponse.next();
  response.headers.set("x-locale", "en");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|icon.png).*)",
  ],
};
