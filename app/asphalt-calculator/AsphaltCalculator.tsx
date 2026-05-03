"use client";

import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

export function AsphaltCalculator() {
  const { t } = useT();
  const [length, setLength] = useState("50");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("3");
  const [pricePerTon, setPricePerTon] = useState("100");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const d = parseFloat(depth) || 0;
  const price = parseFloat(pricePerTon) || 0;

  const cubicFt = l * w * (d / 12);
  const cubicYards = cubicFt / 27;
  const tons = cubicYards * 2;
  const totalCost = tons * price;
  const sqFt = l * w;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">{t("calc_asphalt")}</h2>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { labelKey: "room_length",   value: length,      setter: setLength },
            { labelKey: "room_width",    value: width,       setter: setWidth },
            { labelKey: "depth_in",      value: depth,       setter: setDepth },
            { labelKey: "price_per_ton", value: pricePerTon, setter: setPricePerTon },
          ].map(({ labelKey, value, setter }) => (
            <div key={labelKey}>
              <label className="block text-xs text-gray-500 mb-1">{t(labelKey)}</label>
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="0.5"
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="calc-input text-center"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("area")}</p>
            <p className="text-2xl font-bold text-blue-800">{sqFt.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">sq ft</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("volume")}</p>
            <p className="text-2xl font-bold text-blue-800">{cubicYards.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">cubic yards</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("asphalt_needed")}</p>
            <p className="text-2xl font-bold text-blue-800">{tons.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">tons</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("estimated_cost")}</p>
            <p className="text-2xl font-bold text-blue-800">${totalCost.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">at ${pricePerTon}/ton</p>
          </div>
        </div>

        {tons > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            {t("with_waste")} <strong>{(tons * 1.1).toFixed(2)} tons</strong>
            {price > 0 && <> (${(totalCost * 1.1).toFixed(0)})</>}. Add 5–10% for compaction.
          </div>
        )}
      </div>
    </div>
  );
}
