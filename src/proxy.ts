import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

// Addresses without a language prefix ("/", "/blog", …) go to the same
// address in the default language with a permanent (308) redirect. The
// visitor's browser language is deliberately NOT used: Google advises
// against redirecting by guessed language, and one fixed answer gives
// search engines one clear canonical. The header's language switch is how
// visitors change language.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
