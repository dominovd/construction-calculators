"use client";

import { useT } from "./LanguageProvider";

export function SiteFooter() {
  const { t, locale } = useT();
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} EasyBuildCalc. Free construction calculators.</p>
        <nav className="flex gap-4">
          <a href={`${prefix}/contact`} className="hover:text-gray-700">{t("footer_contact")}</a>
          <a href={`${prefix}/privacy`} className="hover:text-gray-700">{t("footer_privacy")}</a>
        </nav>
      </div>
    </footer>
  );
}
