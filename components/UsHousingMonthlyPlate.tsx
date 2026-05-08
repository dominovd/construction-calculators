/**
 * Серверный компонент: свежий monthly индикатор US Housing Starts из FRED.
 *
 * OECD annual data на /housing-starts ограничены 2023 годом (это лимит
 * источника, не баг). Эта плашка добавляет свежий ежемесячный сигнал по
 * США (последняя точка ~1 месяц назад) — компенсирует эту устаревшесть
 * для главного рынка.
 *
 * Использование:
 *   <UsHousingMonthlyPlate />
 *
 * Никакого 'use client'. Данные тянутся при рендере с 24h ISR cache
 * (через `lib/fred.ts`).
 */

import { fetchMaterialSeries, HOUSING, formatDate, formatPct } from "@/lib/fred";

export async function UsHousingMonthlyPlate() {
  const series = await fetchMaterialSeries(HOUSING.id);
  if (series.current === null) return null;

  const lastObs = series.observations.at(-1);
  if (!lastObs) return null;

  const up = series.mom !== null && series.mom > 0;
  const dn = series.mom !== null && series.mom < 0;

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6 flex items-center gap-4">
      <div className="text-3xl">{HOUSING.emoji}</div>
      <div className="flex-1">
        <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
          🇺🇸 US monthly — {formatDate(lastObs.date)}
        </p>
        <p className="text-2xl font-bold text-emerald-900 mt-0.5">
          {(series.current * 1000).toLocaleString()}{" "}
          <span className="text-sm font-normal text-emerald-700">housing starts (SAAR)</span>
        </p>
        <p className="text-xs text-emerald-700 mt-0.5">
          <span className={`font-semibold ${up ? "text-green-700" : dn ? "text-red-600" : ""}`}>
            {up ? "↑" : dn ? "↓" : ""} {formatPct(series.mom)} MoM
          </span>
          {" • "}
          <span className={`font-semibold ${series.yoy !== null && series.yoy > 0 ? "text-green-700" : "text-red-600"}`}>
            {series.yoy !== null && series.yoy > 0 ? "↑" : "↓"} {formatPct(series.yoy)} YoY
          </span>
          {" • Source: FRED HOUST"}
        </p>
      </div>
    </div>
  );
}
