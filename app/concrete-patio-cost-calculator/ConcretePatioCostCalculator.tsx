"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";
import {
  laborAvg,
  laborRange,
  REGIONAL_MULTIPLIER,
  type Region,
} from "@/lib/labor-rates";

const FINISH_GRADES = [
  { key: "broom",    label: "Broom-finish (standard)",     materialMult: 1.0,  laborMult: 1.0  },
  { key: "stamped",  label: "Stamped concrete",            materialMult: 1.1,  laborMult: 1.6  },
  { key: "stained",  label: "Acid-stained / colored",      materialMult: 1.15, laborMult: 1.4  },
  { key: "exposed",  label: "Exposed aggregate",           materialMult: 1.05, laborMult: 1.5  },
] as const;

const REGIONS = Object.entries(REGIONAL_MULTIPLIER) as [Region, typeof REGIONAL_MULTIPLIER[Region]][];

export function ConcretePatioCostCalculator() {
  const [length, setLength] = useState("16");
  const [width, setWidth] = useState("12");
  const [thickness, setThickness] = useState("4");
  const [finishIdx, setFinishIdx] = useState(0);
  const [region, setRegion] = useState<Region>("national-avg");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const t = parseFloat(thickness) || 0;
  const finish = FINISH_GRADES[finishIdx];
  const regionalFactor = REGIONAL_MULTIPLIER[region].factor;

  const sqFt = l * w;
  const cuYd = (l * w * (t / 12)) / 27;

  // Materials: concrete + ~1 lb rebar/sqft + ~2" gravel base
  const concretePricePerYd = getRetailDefault("concrete-readymix");
  const rebarPerLF = getRetailDefault("rebar-no4-lf");
  const gravelTon = getRetailDefault("gravel-3-4-ton");

  const concreteCost = cuYd * concretePricePerYd * finish.materialMult;
  // Rough rebar grid: 18" o.c. both ways
  const rebarLF = sqFt * 1.3;
  const rebarCost = rebarLF * rebarPerLF;
  // 2-inch gravel base ≈ 0.0125 ton/sqft (1.5 ton/yd³)
  const gravelTons = sqFt * 0.0125;
  const gravelCost = gravelTons * gravelTon;

  const materialsTotal = concreteCost + rebarCost + gravelCost;

  // Labor
  const laborAvgRate = laborAvg("concrete-patio-install-sqft", region) * finish.laborMult;
  const laborRng = laborRange("concrete-patio-install-sqft", region);
  const laborCost = sqFt * laborAvgRate;
  const laborLow = sqFt * laborRng.low * finish.laborMult;
  const laborHigh = sqFt * laborRng.high * finish.laborMult;

  const totalLow = materialsTotal * 0.85 + laborLow;
  const totalAvg = materialsTotal + laborCost;
  const totalHigh = materialsTotal * 1.15 + laborHigh;
  const costPerSqFt = sqFt > 0 ? totalAvg / sqFt : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Concrete Patio Cost Calculator</h2>
      </div>
      <div className="p-5">
        {/* Inputs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Length (ft)</label>
            <input type="number" inputMode="decimal" min="0" step="0.5" value={length}
              onChange={(e) => setLength(e.target.value)} className="calc-input text-center" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Width (ft)</label>
            <input type="number" inputMode="decimal" min="0" step="0.5" value={width}
              onChange={(e) => setWidth(e.target.value)} className="calc-input text-center" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Thickness (in)</label>
            <input type="number" inputMode="decimal" min="2" max="8" step="0.5" value={thickness}
              onChange={(e) => setThickness(e.target.value)} className="calc-input text-center" />
          </div>
        </div>

        {/* Finish grade */}
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Finish</label>
          <div className="flex flex-wrap gap-2">
            {FINISH_GRADES.map((f, i) => (
              <button key={f.key} onClick={() => setFinishIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === finishIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Region */}
        <div className="mb-5">
          <label className="block text-xs text-gray-500 mb-1">Region</label>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map(([key, info]) => (
              <button key={key} onClick={() => setRegion(key)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  key === region ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {info.label}
              </button>
            ))}
          </div>
        </div>

        {/* Headline cost */}
        <div className="result-box mb-4">
          <p className="text-xs text-blue-600 font-medium mb-1">Estimated Total Cost</p>
          <p className="text-3xl font-bold text-blue-800">
            ${Math.round(totalLow).toLocaleString()}–${Math.round(totalHigh).toLocaleString()}
          </p>
          <p className="text-xs text-blue-500 mt-0.5">
            ~${Math.round(totalAvg).toLocaleString()} avg • ${costPerSqFt.toFixed(2)}/ft² • {sqFt.toFixed(0)} ft²
          </p>
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Concrete</p>
            <p className="text-xl font-bold text-blue-800">${Math.round(concreteCost)}</p>
            <p className="text-xs text-blue-500 mt-0.5">{cuYd.toFixed(2)} yd³</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Rebar &amp; Mesh</p>
            <p className="text-xl font-bold text-blue-800">${Math.round(rebarCost)}</p>
            <p className="text-xs text-blue-500 mt-0.5">{rebarLF.toFixed(0)} lf</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Gravel Base</p>
            <p className="text-xl font-bold text-blue-800">${Math.round(gravelCost)}</p>
            <p className="text-xs text-blue-500 mt-0.5">{gravelTons.toFixed(2)} ton</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Labor</p>
            <p className="text-xl font-bold text-blue-800">${Math.round(laborCost)}</p>
            <p className="text-xs text-blue-500 mt-0.5">${laborAvgRate.toFixed(2)}/ft²</p>
          </div>
        </div>

        {/* Per-sqft summary */}
        <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
          Materials ≈ <strong>${Math.round(materialsTotal).toLocaleString()}</strong> (
          {sqFt > 0 ? ((materialsTotal / sqFt).toFixed(2)) : "0"}/ft²) •
          Labor ≈ <strong>${Math.round(laborCost).toLocaleString()}</strong> ({laborAvgRate.toFixed(2)}/ft²)
          {region !== "national-avg" && (
            <> • Regional adjustment: <strong>×{regionalFactor}</strong></>
          )}
        </div>
      </div>
    </div>
  );
}
