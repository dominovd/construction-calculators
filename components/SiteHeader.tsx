"use client";

import { useT } from "./LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader() {
  const { t } = useT();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-blue-700 hover:text-blue-800">
          🔧 EasyBuildCalc
        </a>
        <nav className="hidden sm:flex gap-5 text-sm text-gray-600">
          <a href="/board-foot-calculator" className="hover:text-blue-600">{t("nav_board_foot")}</a>
          <a href="/stud-calculator" className="hover:text-blue-600">{t("nav_stud")}</a>
          <a href="/roof-pitch-calculator" className="hover:text-blue-600">{t("nav_roof_pitch")}</a>
          <a href="/rebar-calculator" className="hover:text-blue-600">{t("nav_rebar")}</a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
