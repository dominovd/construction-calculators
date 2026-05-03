"use client";

import { useState } from "react";

const MATERIALS = [
  { label: "Mulch",       density: 0.25 },
  { label: "Wood Chips",  density: 0.30 },
  { label: "Compost",     density: 0.50 },
  { label: "Topsoil",     density: 1.10 },
  { label: "Rubber Mulch", density: 0.50 },
];

export function MulchCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("5");
  const [depth, setDepth] = useState("3");
  const [matIdx, setMatIdx] = useState(0);
  const [pricePerYard, setPricePerYard] = useState("45");
  const [bagCuFt, setBagCuFt] = useState("2");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const d = parseFloat(depth) || 0;
  const price = parseFloat(pricePerYard) || 0;
  const bagSize = parseFloat(bagCuFt) || 2;
  const mat = MATERIALS[matIdx];

  const cubicFeet = l * w * (d / 12);
  const cubicYards = cubicFeet / 27;
  const tons = cubicYards * mat.density;
  const bags = Math.ceil(cubicFeet / bagSize);
  const bulkCost = cubicYards * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Mulch Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Material</label>
          <div className="flex flex-wrap gap-2">
            {MATERIALS.map((m, i) => (
              <button key={m.label} onClick={() => setMatIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === matIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Length (ft)",      value: length,      setter: setLength },
            { label: "Width (ft)",       value: width,       setter: setWidth },
            { label: "Depth (in)",       value: depth,       setter: setDepth },
            { label: "Bulk price ($/yd³)", value: pricePerYard, setter: setPricePerYard },
            { label: "Bag size (cu ft)", value: bagCuFt,     setter: setBagCuFt },
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
            { label: "Cubic Feet",  value: cubicFeet.toFixed(1),   sub: "cu ft" },
            { label: "Cubic Yards", value: cubicYards.toFixed(2),  sub: "yd³" },
            { label: "Bags",        value: String(bags),            sub: `${bagSize} cu ft bags` },
            { label: "Bulk Cost",   value: `$${bulkCost.toFixed(0)}`, sub: `at $${pricePerYard}/yd³` },
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
            With 10% settling: <strong>{(cubicYards * 1.1).toFixed(2)} yd³</strong> recommended.
            Bulk delivery is typically cheaper above 3 yd³.
          </div>
        )}
      </div>
    </div>
  );
}
