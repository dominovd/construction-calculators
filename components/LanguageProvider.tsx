"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";
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

/** Extract locale from pathname like /ru/board-foot-calculator → "ru" */
function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  const found = LOCALES.find((l) => l.code === segment);
  return found ? (found.code as Locale) : "en";
}

/** Strip locale prefix from pathname: /ru/board-foot-calculator → /board-foot-calculator */
function stripLocale(pathname: string): string {
  const segment = pathname.split("/")[1];
  if (LOCALES.some((l) => l.code === segment)) {
    const rest = pathname.slice(segment.length + 1) || "/";
    return rest;
  }
  return pathname;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const locale = localeFromPath(pathname);

  function setLocale(next: Locale) {
    const clean = stripLocale(pathname);
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
