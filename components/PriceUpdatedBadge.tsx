/**
 * Server component badge: "Prices updated April 2026".
 *
 * Reads the oldest `pricedAt` from `lib/retail-prices.ts` so the badge is
 * conservative — if any SKU in the table is stale, the badge reflects that.
 *
 * Place this above the calculator's `result-box` row, e.g.:
 *
 *   <PriceUpdatedBadge />
 *   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">...</div>
 *
 * No `'use client'` — this is a pure server component. Renders zero JS.
 */

import { getOldestPricedAt, formatPricedMonth } from "@/lib/retail-prices";

export function PriceUpdatedBadge({ className = "" }: { className?: string }) {
  const month = formatPricedMonth(getOldestPricedAt());

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1 ${className}`}
    >
      <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      <span>
        Prices updated <strong className="font-semibold">{month}</strong>
      </span>
    </div>
  );
}

/**
 * One-liner disclaimer to drop near the result-box / page footer.
 *
 *   <PriceDisclaimer />
 *
 * Plain text, no styles forced — wrap in your own container if you want.
 */
export function PriceDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-gray-500 leading-snug ${className}`}>
      Prices are estimates based on national retail averages (Home Depot, mid-grade SKUs). Local
      retail prices vary by region, supplier, and grade — check with your local supplier before
      finalizing a budget.
    </p>
  );
}
