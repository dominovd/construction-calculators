"use client";

import { useState } from "react";

const SOD_TYPES = [
  { label: "Bermuda",    rollSqFt: 9,  palletSqFt: 450 },
  { label: "Zoysia",    rollSqFt: 9,  palletSqFt: 450 },
  { label: "St. Augustine", rollSqFt: 9, palletSqFt: 450 },
  { label: "Fescue",    rollSqFt: 9,  palletSqFt: 504 },
  { label: "Kentucky Bluegrass", rollSqFt: 9, palletSqFt: 450 },
];

export function SodCalculator() {
  const [length, setLength]     = useState("40");
  const [width, setWidth]       = useState("30");
  const [waste, setWaste]       = useState("5");
  const [typeIdx, setTypeIdx]   = useState(0);
  const [priceRoll, setPriceRoll] = useState("5");

  const l    = parseFloat(length) || 0;
  const w    = parseFloat(width) || 0;
  const wPct = parseFloat(waste) || 0;
  const pr   = parseFloat(priceRoll) || 0;
  const sod  = SOD_TYPES[typeIdx];

  const areaSqFt      = l * w;
  const areaWithWaste = areaSqFt * (1 + wPct / 100);
  const rollsNeeded   = Math.ceil(areaWithWaste / sod.rollSqFt);
  const palletsNeeded = Math.ceil(areaWithWaste / sod.palletSqFt);
  const totalCost     = rollsNeeded * pr;

  // Topsoil: 4" depth recommended
  const topsoilYds = (areaSqFt * (4 / 12)) / 27;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Sod Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Grass Type</label>
          <div className="flex flex-wrap gap-2">
            {SOD_TYPES.map((t, i) => (
              <button key={t.label} onClick={() => setTypeIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === typeIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Length (ft)",     value: length,   setter: setLength },
            { label: "Width (ft)",      value: width,    setter: setWidth },
            { label: "Waste (%)",       value: waste,    setter: setWaste },
            { label: "Price / Roll ($)", value: priceRoll, setter: setPriceRoll },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="1" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Area",          value: `${areaSqFt.toFixed(0)} sq ft`, sub: "total lawn" },
            { label: "Rolls Needed",  value: rollsNeeded.toLocaleString(),    sub: `${sod.rollSqFt} sq ft/roll` },
            { label: "Pallets",       value: palletsNeeded.toLocaleString(),  sub: `${sod.palletSqFt} sq ft/pallet` },
            { label: "Est. Cost",     value: `$${totalCost.toFixed(0)}`,      sub: `at $${priceRoll}/roll` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {areaSqFt > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-600">
            <p className="font-semibold text-gray-700 mb-1">Also estimate:</p>
            <p>Topsoil (4″ bed): <strong>{topsoilYds.toFixed(2)} cu yd</strong> — roughly {Math.ceil(topsoilYds * 14)} bags of 0.75 cu ft</p>
            <p className="mt-0.5">Starter fertilizer: 1 bag per 5,000 sq ft = <strong>{Math.ceil(areaSqFt / 5000)} bags</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}
