"use client";

import { useState } from "react";

const MIX_RATIOS = [
  { label: "1:2:3 (Standard)", cement: 1, sand: 2, gravel: 3 },
  { label: "1:1.5:3 (Strong)", cement: 1, sand: 1.5, gravel: 3 },
  { label: "1:3:6 (Lean)",     cement: 1, sand: 3, gravel: 6 },
  { label: "1:2:4 (General)",  cement: 1, sand: 2, gravel: 4 },
];

// Approximate dry volume multiplier: 1.54 (accounts for voids)
// Cement density ~1500 kg/m³, sand ~1700, gravel ~1600
// 1 bag of cement (94 lb) ≈ 0.031 m³ ≈ 1.1 cu ft

export function ConcreteMixCalculator() {
  const [cubicYards, setCubicYards] = useState("1");
  const [ratioIdx, setRatioIdx] = useState(0);

  const vol = parseFloat(cubicYards) || 0;
  const ratio = MIX_RATIOS[ratioIdx];
  const totalParts = ratio.cement + ratio.sand + ratio.gravel;
  const dryVolCuFt = vol * 27 * 1.54; // 1 wet yd³ needs ~1.54× dry materials

  const cementCuFt = (ratio.cement / totalParts) * dryVolCuFt;
  const sandCuFt   = (ratio.sand   / totalParts) * dryVolCuFt;
  const gravelCuFt = (ratio.gravel / totalParts) * dryVolCuFt;

  const cementBags = Math.ceil(cementCuFt / 1.1); // 94-lb bag ≈ 1.1 cu ft
  const sandLbs    = Math.ceil(sandCuFt * 100);    // ~100 lb/cu ft
  const gravelLbs  = Math.ceil(gravelCuFt * 100);

  const sandTons   = (sandLbs / 2000).toFixed(2);
  const gravelTons = (gravelLbs / 2000).toFixed(2);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Concrete Mix Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Mix Ratio (Cement : Sand : Gravel)</label>
          <div className="flex flex-wrap gap-2">
            {MIX_RATIOS.map((m, i) => (
              <button key={m.label} onClick={() => setRatioIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === ratioIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-xs">
          <label className="block text-xs text-gray-500 mb-1">Volume needed (yd³)</label>
          <input type="number" inputMode="decimal" min="0" step="0.25" value={cubicYards}
            onChange={(e) => setCubicYards(e.target.value)} className="calc-input text-center" />
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Cement (94-lb bags)", value: String(cementBags),          sub: "bags" },
            { label: "Sand",                value: `${parseFloat(sandTons).toFixed(2)} tons`,  sub: `${sandLbs.toLocaleString()} lbs` },
            { label: "Gravel / Aggregate",  value: `${parseFloat(gravelTons).toFixed(2)} tons`, sub: `${gravelLbs.toLocaleString()} lbs` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {vol > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Mix ratio {ratio.cement}:{ratio.sand}:{ratio.gravel} — dry materials include 54% shrinkage factor.
            Water ratio is typically 0.45–0.55 per bag of cement (4–5 gallons/bag).
          </div>
        )}
      </div>
    </div>
  );
}
