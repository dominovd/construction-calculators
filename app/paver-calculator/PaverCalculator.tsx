"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

const PAVER_SIZES = [
  { label: '4"×8"',   w: 4,  h: 8  },
  { label: '6"×6"',   w: 6,  h: 6  },
  { label: '6"×9"',   w: 6,  h: 9  },
  { label: '12"×12"', w: 12, h: 12 },
  { label: '16"×16"', w: 16, h: 16 },
  { label: '12"×18"', w: 12, h: 18 },
];

export function PaverCalculator() {
  const [length, setLength]       = useState("20");
  const [width, setWidth]         = useState("15");
  const [paverIdx, setPaverIdx]   = useState(0);
  const [waste, setWaste]         = useState("10");
  const [priceEach, setPriceEach] = useState(String(getRetailDefault("paver-4x8-each")));

  const l    = parseFloat(length) || 0;
  const w    = parseFloat(width) || 0;
  const wPct = parseFloat(waste) || 0;
  const pp   = parseFloat(priceEach) || 0;
  const paver = PAVER_SIZES[paverIdx];

  const areaSqFt      = l * w;
  const areaWithWaste = areaSqFt * (1 + wPct / 100);
  const paverSqFt     = (paver.w * paver.h) / 144;
  const paversNeeded  = Math.ceil(areaWithWaste / paverSqFt);
  const totalCost     = paversNeeded * pp;

  // Base material: 1" bedding sand + 4" gravel base
  const sandTons   = (areaSqFt * (1 / 12)) / 27 * 1.35;
  const gravelTons = (areaSqFt * (4 / 12)) / 27 * 1.4;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Paver Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Paver Size</label>
          <div className="flex flex-wrap gap-2">
            {PAVER_SIZES.map((p, i) => (
              <button key={p.label} onClick={() => setPaverIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === paverIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Length (ft)",      value: length,    setter: setLength },
            { label: "Width (ft)",       value: width,     setter: setWidth },
            { label: "Waste (%)",        value: waste,     setter: setWaste },
            { label: "Price / paver ($)", value: priceEach, setter: setPriceEach },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="0.5" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Area",           value: `${areaSqFt.toFixed(0)} sq ft`, sub: "total area" },
            { label: "Pavers Needed",  value: paversNeeded.toLocaleString(),   sub: `${paver.label} each` },
            { label: "Est. Cost",      value: `$${totalCost.toFixed(0)}`,      sub: `at $${priceEach}/paver` },
            { label: "Pavers / sq ft", value: (1 / paverSqFt).toFixed(2),     sub: "density" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {areaSqFt > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-700 mb-2">Estimated base materials:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white border border-gray-200 rounded-lg p-2 text-center">
                <p className="text-gray-500 mb-0.5">Bedding Sand (1")</p>
                <p className="font-bold text-gray-800">{sandTons.toFixed(2)} tons</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-2 text-center">
                <p className="text-gray-500 mb-0.5">Gravel Base (4")</p>
                <p className="font-bold text-gray-800">{gravelTons.toFixed(2)} tons</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
