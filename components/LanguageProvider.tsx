"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, LOCALES, getT } from "@/lib/i18n";

interface LangContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  mounted: boolean;
}

const LangContext = createContext<LangContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (k) => k,
  mounted: false,
});

function getInitialLocale(): Locale {
  // 1. Read from URL ?lang=xx
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang") as Locale | null;
    if (urlLang && LOCALES.some((l) => l.code === urlLang)) return urlLang;
  } catch {}

  // 2. Fallback to localStorage
  try {
    const saved = localStorage.getItem("ebc_locale") as Locale | null;
    if (saved && LOCALES.some((l) => l.code === saved)) return saved;
  } catch {}

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    try {
      localStorage.setItem("ebc_locale", l);
    } catch {}
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (l === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", l);
    }
    window.history.pushState({}, "", url.toString());
  }

  const t = getT(mounted ? locale : "en");

  return (
    <LangContext.Provider value={{ locale, setLocale, t, mounted }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  return useContext(LangContext);
}
