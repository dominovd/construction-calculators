"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

const PITCH_FACTORS: { label: string; factor: number }[] = [
  { label: "2:12 (flat)",   factor: 1.02 },
  { label: "3:12",          factor: 1.03 },
  { label: "4:12",          factor: 1.05 },
  { label: "5:12",          factor: 1.08 },
  { label: "6:12",          factor: 1.12 },
  { label: "7:12",          factor: 1.16 },
  { label: "8:12",          factor: 1.20 },
  { label: "9:12",          factor: 1.25 },
  { label: "12:12 (steep)", factor: 1.41 },
];

export function ShinglesCalculator() {
  const [footprintL, setFootprintL] = useState("40");
  const [footprintW, setFootprintW] = useState("30");
  const [pitchIdx, setPitchIdx] = useState(3);
  const [waste, setWaste] = useState("15");
  const [pricePerSq, setPricePerSq] = useState(String(getRetailDefault("shingles-square")));

  const l = parseFloat(footprintL) || 0;
  const w = parseFloat(footprintW) || 0;
  const wasteP = parseFloat(waste) || 0;
  const price = parseFloat(pricePerSq) || 0;
  const factor = PITCH_FACTORS[pitchIdx].factor;

  const footprint = l * w;
  const roofArea = footprint * factor;
  const roofAreaWithWaste = roofArea * (1 + wasteP / 100);
  const squares = roofAreaWithWaste / 100;
  const bundles = Math.ceil(squares * 3); // 3 bundles per square for standard 3-tab / arch
  const totalCost = squares * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Shingles Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Roof Pitch</label>
          <div className="flex flex-wrap gap-2">
            {PITCH_FACTORS.map((p, i) => (
              <button key={p.label} onClick={() => setPitchIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === pitchIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Building Length (ft)", value: footprintL, setter: setFootprintL },
            { label: "Building Width (ft)",  value: footprintW, setter: setFootprintW },
            { label: "Waste %",              value: waste,      setter: setWaste, step: "1" },
            { label: "Price / square ($)",   value: pricePerSq, setter: setPricePerSq },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step={step || "0.5"} value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Roof Area",    value: `${roofArea.toFixed(0)}`,          sub: "sq ft" },
            { label: "Squares",      value: squares.toFixed(1),                sub: "roofing squares" },
            { label: "Bundles",      value: String(bundles),                   sub: "3-tab / architectural" },
            { label: "Est. Cost",    value: `$${totalCost.toFixed(0)}`,        sub: `at $${pricePerSq}/sq` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {squares > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Pitch factor {factor.toFixed(2)}× applied. Add starter course (~1 bundle per 100 lf eave) and ridge cap (~1 bundle per 35 lf ridge) separately.
          </div>
        )}
      </div>
    </div>
  );
}
