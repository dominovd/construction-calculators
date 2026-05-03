"use client";

import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

const MATERIALS = [
  { label: "Sand (dry)", density: 1.35 },
  { label: "Gravel",     density: 1.50 },
  { label: "Topsoil",    density: 1.10 },
  { label: "Mulch",      density: 0.25 },
  { label: "Pea Gravel", density: 1.47 },
];

export function SandCalculator() {
  const { t } = useT();
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("2");
  const [matIdx, setMatIdx] = useState(0);
  const [pricePerTon, setPricePerTon] = useState("35");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const d = parseFloat(depth) || 0;
  const price = parseFloat(pricePerTon) || 0;
  const mat = MATERIALS[matIdx];

  const cubicFt = l * w * (d / 12);
  const cubicYards = cubicFt / 27;
  const tons = cubicYards * mat.density;
  const bags50lb = Math.ceil((tons * 2000) / 50);
  const totalCost = tons * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">{t("calc_sand")}</h2>
      </div>

      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">{t("material")}</label>
          <div className="flex flex-wrap gap-2">
            {MATERIALS.map((m, i) => (
              <button
                key={m.label}
                onClick={() => setMatIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === matIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { labelKey: "room_length",  value: length,      setter: setLength },
            { labelKey: "room_width",   value: width,       setter: setWidth },
            { labelKey: "depth_in",     value: depth,       setter: setDepth },
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
            <p className="text-xs text-blue-600 font-medium mb-1">{t("cubic_yards")}</p>
            <p className="text-2xl font-bold text-blue-800">{cubicYards.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">yd³</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("tons")}</p>
            <p className="text-2xl font-bold text-blue-800">{tons.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">tons</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("bags_50lb")}</p>
            <p className="text-2xl font-bold text-blue-800">{bags50lb}</p>
            <p className="text-xs text-blue-500 mt-0.5">bags</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("estimated_cost")}</p>
            <p className="text-2xl font-bold text-blue-800">${totalCost.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">bulk delivery</p>
          </div>
        </div>

        {cubicYards > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            {t("with_waste")} <strong>{(cubicYards * 1.1).toFixed(2)} yd³</strong> / <strong>{(tons * 1.1).toFixed(2)} t</strong> / <strong>{Math.ceil(bags50lb * 1.1)} bags</strong>
          </div>
        )}
      </div>
    </div>
  );
}
