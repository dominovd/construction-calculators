"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

const FLOORING_TYPES = [
  { label: "Hardwood",     coveragePerBox: 20, pricePerSqFt: getRetailDefault("flooring-hardwood-sqft")     },
  { label: "Laminate",     coveragePerBox: 22, pricePerSqFt: getRetailDefault("flooring-laminate-sqft")     },
  { label: "Vinyl Plank",  coveragePerBox: 24, pricePerSqFt: getRetailDefault("flooring-vinyl-plank-sqft")  },
  { label: "Tile (12×12)", coveragePerBox: 16, pricePerSqFt: getRetailDefault("flooring-tile-sqft")         },
  { label: "Carpet",       coveragePerBox: 0,  pricePerSqFt: getRetailDefault("flooring-carpet-sqft")       },
];

export function FlooringCalculator() {
  const [length, setLength] = useState("15");
  const [width, setWidth] = useState("12");
  const [waste, setWaste] = useState("10");
  const [typeIdx, setTypeIdx] = useState(0);
  const [customPrice, setCustomPrice] = useState("");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const wasteP = parseFloat(waste) || 0;
  const ft = FLOORING_TYPES[typeIdx];
  const price = parseFloat(customPrice) || ft.pricePerSqFt;

  const sqFt = l * w;
  const sqFtWithWaste = sqFt * (1 + wasteP / 100);
  const boxes = ft.coveragePerBox > 0 ? Math.ceil(sqFtWithWaste / ft.coveragePerBox) : null;
  const totalCost = sqFtWithWaste * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Flooring Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Flooring Type</label>
          <div className="flex flex-wrap gap-2">
            {FLOORING_TYPES.map((f, i) => (
              <button key={f.label} onClick={() => setTypeIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === typeIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
            <label className="block text-xs text-gray-500 mb-1">Waste %</label>
            <input type="number" inputMode="decimal" min="0" max="30" step="1" value={waste}
              onChange={(e) => setWaste(e.target.value)} className="calc-input text-center" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Price/ft² ($) <span className="text-gray-400">(optional)</span></label>
            <input type="number" inputMode="decimal" min="0" step="0.25"
              placeholder={ft.pricePerSqFt.toString()} value={customPrice}
              onChange={(e) => setCustomPrice(e.target.value)} className="calc-input text-center" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Room Area</p>
            <p className="text-2xl font-bold text-blue-800">{sqFt.toFixed(1)}</p>
            <p className="text-xs text-blue-500 mt-0.5">sq ft</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Order This Much</p>
            <p className="text-2xl font-bold text-blue-800">{sqFtWithWaste.toFixed(1)}</p>
            <p className="text-xs text-blue-500 mt-0.5">sq ft (+{waste}% waste)</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{boxes !== null ? "Boxes" : "Sq Yards"}</p>
            <p className="text-2xl font-bold text-blue-800">
              {boxes !== null ? boxes : (sqFtWithWaste / 9).toFixed(1)}
            </p>
            <p className="text-xs text-blue-500 mt-0.5">
              {boxes !== null ? `≈ ${ft.coveragePerBox} ft²/box` : "sq yd"}
            </p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Est. Material Cost</p>
            <p className="text-2xl font-bold text-blue-800">${totalCost.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">at ${price}/ft²</p>
          </div>
        </div>
      </div>
    </div>
  );
}
