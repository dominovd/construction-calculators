"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

const CALCS = [
  { slug: "board-foot-calculator",  nameKey: "calc_board_foot",  descKey: "desc_board_foot",  icon: "🪵" },
  { slug: "stud-calculator",        nameKey: "calc_stud",         descKey: "desc_stud",         icon: "🏗️" },
  { slug: "roof-pitch-calculator",  nameKey: "calc_roof_pitch",   descKey: "desc_roof_pitch",   icon: "🏠" },
  { slug: "rebar-calculator",       nameKey: "calc_rebar",        descKey: "desc_rebar",        icon: "⚙️" },
  { slug: "brick-calculator",       nameKey: "calc_brick",        descKey: "desc_brick",        icon: "🧱" },
  { slug: "flooring-calculator",    nameKey: "calc_flooring",     descKey: "desc_flooring",     icon: "📐" },
  { slug: "sand-calculator",        nameKey: "calc_sand",         descKey: "desc_sand",         icon: "🏖️" },
  { slug: "asphalt-calculator",     nameKey: "calc_asphalt",      descKey: "desc_asphalt",      icon: "🛣️" },
];

export function HomeContent() {
  const { t } = useT();

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("tagline")}
          </h1>
          <p className="text-lg text-gray-600">
            {t("tagline_sub")}
          </p>
        </div>
      </section>

      {/* Calculator grid */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CALCS.map((calc) => (
            <Link
              key={calc.slug}
              href={`/${calc.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-sm transition-all group"
            >
              <div className="text-2xl mb-2">{calc.icon}</div>
              <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 mb-1">
                {t(calc.nameKey)}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{t(calc.descKey)}</p>
              <span className="text-xs text-blue-600 font-medium">{t("use_calculator")}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust section */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            {t("trusted_title")}
          </h2>
          <p className="text-sm text-blue-700 max-w-xl mx-auto">
            {t("trusted_desc")}
          </p>
        </div>
      </section>
    </>
  );
}
