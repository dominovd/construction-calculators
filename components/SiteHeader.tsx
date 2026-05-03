"use client";

import { useT } from "./LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { href: "/board-foot-calculator", key: "nav_board_foot" },
  { href: "/stud-calculator",       key: "nav_stud" },
  { href: "/roof-pitch-calculator", key: "nav_roof_pitch" },
  { href: "/rebar-calculator",      key: "nav_rebar" },
] as const;

export function SiteHeader() {
  const { t, locale } = useT();

  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href={prefix || "/"} className="text-lg font-semibold text-blue-700 hover:text-blue-800">
          🔧 EasyBuildCalc
        </a>
        <nav className="hidden sm:flex gap-5 text-sm text-gray-600">
          {NAV.map(({ href, key }) => (
            <a key={href} href={`${prefix}${href}`} className="hover:text-blue-600">
              {t(key)}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
