/**
 * Серверный компонент: блок «People also calculate» с 4–6 родственными
 * калькуляторами. Источник правды — `lib/calc-categories.ts`.
 *
 * Использование на странице калькулятора:
 *
 *   <RelatedCalculators currentSlug="drywall-calculator" />
 *
 * Для cost-калькуляторов или bundle-страниц можно передать кастомный список:
 *
 *   <RelatedCalculators
 *     currentSlug="concrete-patio-cost-calculator"
 *     override={["concrete-calculator", "paver-calculator", "rebar-calculator"]}
 *   />
 *
 * Никакого `'use client'` — нулевой JS, чисто HTML/CSS, отлично для SEO.
 */

import Link from "next/link";
import { CALCULATORS, getCalcEntry, pickRelated } from "@/lib/calc-categories";

type Props = {
  currentSlug: string;
  /** Если задан, ним заменяется автоподбор — слаги в порядке приоритета */
  override?: string[];
  /** Сколько ссылок показать (default 6) */
  limit?: number;
  /** Заголовок блока (default "People also calculate") */
  title?: string;
  className?: string;
};

export function RelatedCalculators({
  currentSlug,
  override,
  limit = 6,
  title = "People also calculate",
  className = "",
}: Props) {
  const items = override
    ? override
        .map((slug) => getCalcEntry(slug))
        .filter((e): e is NonNullable<typeof e> => Boolean(e))
        .slice(0, limit)
    : pickRelated(currentSlug, limit);

  if (items.length === 0) return null;

  return (
    <section className={`mt-10 ${className}`} aria-labelledby="related-calcs-heading">
      <h2 id="related-calcs-heading" className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {items.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${c.slug}`}
              className="block text-sm text-blue-700 hover:text-blue-900 hover:underline px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              {c.label} Calculator
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Защитная функция для отладки — раз в build вывести предупреждение,
 * если кто-то передал неизвестный slug.
 */
export function assertSlugExists(slug: string): void {
  if (process.env.NODE_ENV !== "production" && !getCalcEntry(slug)) {
    // eslint-disable-next-line no-console
    console.warn(
      `[RelatedCalculators] Unknown slug "${slug}". Add it to lib/calc-categories.ts.`,
    );
  }
}

/** Re-export — чтобы не плодить импорты в page.tsx */
export { CALCULATORS };
