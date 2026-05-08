"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";
import {
  laborAvg,
  laborRange,
  REGIONAL_MULTIPLIER,
  type Region,
} from "@/lib/labor-rates";

const DECK_MATERIALS = [
  { key: "pt",        label: "Pressure-treated pine", pricePerLF: 1.25, materialMult: 1.0,  laborMult: 1.0  },
  { key: "cedar",     label: "Cedar",                 pricePerLF: 3.0,  materialMult: 1.0,  laborMult: 1.05 },
  { key: "composite", label: "Composite (Trex-like)", pricePerLF: 5.5,  materialMult: 1.0,  laborMult: 1.15 },
  { key: "hardwood",  label: "Hardwood (ipe / mahogany)", pricePerLF: 8.0, materialMult: 1.0, laborMult: 1.25 },
] as const;

const REGIONS = Object.entries(REGIONAL_MULTIPLIER) as [Region, typeof REGIONAL_MULTIPLIER[Region]][];

export function DeckCostCalculator() {
  const [length, setLength] = useState("16");
  const [width, setWidth] = useState("12");
  const [matIdx, setMatIdx] = useState(0);
  const [hasRailing, setHasRailing] = useState(true);
  const [region, setRegion] = useState<Region>("national-avg");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const mat = DECK_MATERIALS[matIdx];

  const sqFt = l * w;
  const perimeterFt = hasRailing ? 2 * (l + w) : 0;

  // ── Materials ─────────────────────────────────────────────────────────
  // Decking surface — boards run perpendicular, ~1.1× sqft to lf at 5.5″ effective coverage
  const deckingLF = sqFt * 1.1;
  const deckingCost = deckingLF * mat.pricePerLF;

  // Frame: ~1.7 BF per sqft (joists + ledger + rim + beam)
  const frameBF = sqFt * 1.7;
  const frameCost = frameBF * getRetailDefault("lumber-bf-spf");

  // Posts: ~1 post per 32 sqft for ground-level
  const postCount = Math.max(4, Math.ceil(sqFt / 32));
  const postsCost = postCount * getRetailDefault("fence-post-4x4-8ft");

  // Concrete: 1.5 bags per post hole (80 lb)
  const concreteBags = postCount * 1.5;
  const concreteCost = concreteBags * getRetailDefault("concrete-bag-80lb");

  // Fasteners + hangers + flashing — flat $0.75/sqft of deck
  const fastenersCost = sqFt * 0.75;

  // Railing: $25/lf for PT system, $40/lf composite
  const railingPerLF = mat.key === "composite" ? 40 : 25;
  const railingCost = perimeterFt * railingPerLF;

  // Stain: 1 gallon per 175 sqft for 2 coats (≈ deck + railings)
  const stainGallons = mat.key === "composite" || mat.key === "hardwood" ? 0 : Math.ceil((sqFt + perimeterFt * 1.5) / 175);
  const stainCost = stainGallons * getRetailDefault("paint-gallon-interior");

  const materialsTotal =
    deckingCost + frameCost + postsCost + concreteCost + fastenersCost + railingCost + stainCost;

  // ── Labor ─────────────────────────────────────────────────────────────
  const laborAvgRate = laborAvg("deck-build-sqft", region) * mat.laborMult;
  const laborRng = laborRange("deck-build-sqft", region);
  const laborCost = sqFt * laborAvgRate;
  const laborLow = sqFt * laborRng.low * mat.laborMult;
  const laborHigh = sqFt * laborRng.high * mat.laborMult;

  // ── Totals ────────────────────────────────────────────────────────────
  const totalLow = materialsTotal * 0.85 + laborLow;
  const totalAvg = materialsTotal + laborCost;
  const totalHigh = materialsTotal * 1.15 + laborHigh;
  const costPerSqFt = sqFt > 0 ? totalAvg / sqFt : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Deck Cost Calculator</h2>
      </div>
      <div className="p-5">
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
          <div className="flex items-end">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer pb-1.5">
              <input type="checkbox" checked={hasRailing}
                onChange={(e) => setHasRailing(e.target.checked)} className="w-4 h-4 accent-blue-600" />
              Include railing
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Decking material</label>
          <div className="flex flex-wrap gap-2">
            {DECK_MATERIALS.map((m, i) => (
              <button key={m.key} onClick={() => setMatIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === matIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

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

        <div className="result-box mb-4">
          <p className="text-xs text-blue-600 font-medium mb-1">Estimated Total Cost</p>
          <p className="text-3xl font-bold text-blue-800">
            ${Math.round(totalLow).toLocaleString()}–${Math.round(totalHigh).toLocaleString()}
          </p>
          <p className="text-xs text-blue-500 mt-0.5">
            ~${Math.round(totalAvg).toLocaleString()} avg • ${costPerSqFt.toFixed(2)}/ft² • {sqFt.toFixed(0)} ft²
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Decking</p>
            <p className="text-xl font-bold text-blue-800">${Math.round(deckingCost)}</p>
            <p className="text-xs text-blue-500 mt-0.5">{deckingLF.toFixed(0)} lf</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Frame &amp; posts</p>
            <p className="text-xl font-bold text-blue-800">${Math.round(frameCost + postsCost)}</p>
            <p className="text-xs text-blue-500 mt-0.5">{frameBF.toFixed(0)} BF + {postCount} posts</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Footings + fasteners</p>
            <p className="text-xl font-bold text-blue-800">${Math.round(concreteCost + fastenersCost)}</p>
            <p className="text-xs text-blue-500 mt-0.5">{concreteBags.toFixed(0)} bags</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Labor</p>
            <p className="text-xl font-bold text-blue-800">${Math.round(laborCost)}</p>
            <p className="text-xs text-blue-500 mt-0.5">${laborAvgRate.toFixed(2)}/ft²</p>
          </div>
        </div>

        {hasRailing && railingCost > 0 && (
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700 mb-2">
            Railing: <strong>${Math.round(railingCost).toLocaleString()}</strong> ({perimeterFt.toFixed(0)} lf at ${railingPerLF}/lf)
            {stainGallons > 0 && (
              <> • Stain: {stainGallons} gal × ${getRetailDefault("paint-gallon-interior").toFixed(0)}</>
            )}
          </div>
        )}

        <div className="text-xs text-gray-500">
          Materials ≈ <strong>${Math.round(materialsTotal).toLocaleString()}</strong>{" • "}
          Labor ≈ <strong>${Math.round(laborCost).toLocaleString()}</strong>
          {region !== "national-avg" && <> • Region adj: <strong>×{REGIONAL_MULTIPLIER[region].factor}</strong></>}
          {mat.key !== "pt" && <> • {mat.label} adds <strong>×{mat.laborMult}</strong> on labor</>}
        </div>
      </div>
    </div>
  );
}
