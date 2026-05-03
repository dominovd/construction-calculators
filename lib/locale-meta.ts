import { headers } from "next/headers";
import type { Locale } from "./i18n";

const BASE = "https://easybuildcalc.com";

// All supported locales (en = no prefix)
const ALL_LOCALES: Locale[] = ["en", "uk", "ru", "pl", "de", "es", "fr", "ja", "ar", "it"];

function pageUrl(locale: Locale, slug: string): string {
  const path = slug ? `/${slug}` : "";
  return locale === "en" ? `${BASE}${path}` : `${BASE}/${locale}${path}`;
}

/**
 * Call inside generateMetadata() to get locale-aware canonical + hreflang alternates.
 * slug = "" for homepage, "board-foot-calculator" for calculator pages.
 */
export async function localeAlternates(slug: string) {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") as Locale) || "en";

  const canonical = pageUrl(locale, slug);

  const languages: Record<string, string> = {
    "x-default": pageUrl("en", slug),
  };
  for (const l of ALL_LOCALES) {
    languages[l] = pageUrl(l, slug);
  }

  return { canonical, languages };
}
