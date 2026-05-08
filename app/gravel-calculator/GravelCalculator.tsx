"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

const GRAVEL_TYPES = [
  { label: "Crushed Stone",    density: 1.50 },
  { label: "Pea Gravel",       density: 1.47 },
  { label: "River Rock",       density: 1.35 },
  { label: "#57 Limestone",    density: 1.45 },
  { label: "Decomposed Granite", density: 1.40 },
  { label: "Crushed Concrete", density: 1.42 },
];

export function GravelCalculator() {
  const [length, setLength] = useState("50");
  const [width, setWidth] = useState("12");
  const [depth, setDepth] = useState("4");
  const [typeIdx, setTypeIdx] = useState(0);
  const [pricePerTon, setPricePerTon] = useState(String(getRetailDefault("gravel-3-4-ton")));

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const d = parseFloat(depth) || 0;
  const price = parseFloat(pricePerTon) || 0;
  const mat = GRAVEL_TYPES[typeIdx];

  const cubicFeet = l * w * (d / 12);
  const cubicYards = cubicFeet / 27;
  const tons = cubicYards * mat.density;
  const totalCost = tons * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Gravel Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Gravel Type</label>
          <div className="flex flex-wrap gap-2">
            {GRAVEL_TYPES.map((g, i) => (
              <button key={g.label} onClick={() => setTypeIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === typeIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Length (ft)",      value: length,      setter: setLength },
            { label: "Width (ft)",       value: width,       setter: setWidth },
            { label: "Depth (in)",       value: depth,       setter: setDepth },
            { label: "Price / ton ($)",  value: pricePerTon, setter: setPricePerTon },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="0.5" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Cubic Feet",   value: cubicFeet.toFixed(1),     sub: "cu ft" },
            { label: "Cubic Yards",  value: cubicYards.toFixed(2),    sub: "yd³" },
            { label: "Tons",         value: tons.toFixed(2),           sub: "tons" },
            { label: "Est. Cost",    value: `$${totalCost.toFixed(0)}`, sub: `at $${pricePerTon}/ton` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {cubicYards > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            With 10% compaction & waste: <strong>{(tons * 1.1).toFixed(2)} tons</strong> (${(totalCost * 1.1).toFixed(0)}).
            Density: {mat.density} t/yd³.
          </div>
        )}
      </div>
    </div>
  );
}
