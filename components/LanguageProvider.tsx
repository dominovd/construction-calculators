"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Locale, LOCALES, getT } from "@/lib/i18n";

interface LangContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (k) => k,
});

const LOCALE_CODES = LOCALES.map((l) => l.code);

function stripLocalePrefix(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (LOCALE_CODES.includes(seg as Locale)) {
    const rest = pathname.slice(seg.length + 1);
    return rest || "/";
  }
  return pathname;
}

interface Props {
  children: ReactNode;
  initialLocale: Locale;
}

export function LanguageProvider({ children, initialLocale }: Props) {
  // initialLocale comes from the server (middleware x-locale header) — no SSR mismatch
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const pathname = usePathname(); // used only for navigation, client-only
  const router = useRouter();

  function setLocale(next: Locale) {
    setLocaleState(next);
    // Navigate to locale-prefixed URL without page reload
    const clean = stripLocalePrefix(pathname);
    if (next === "en") {
      router.push(clean);
    } else {
      router.push(`/${next}${clean === "/" ? "" : clean}`);
    }
  }

  const t = getT(locale);

  return (
    <LangContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  return useContext(LangContext);
}
