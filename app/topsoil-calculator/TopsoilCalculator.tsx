"use client";

import { useState } from "react";

export function TopsoilCalculator() {
  const [length, setLength]   = useState("20");
  const [width, setWidth]     = useState("15");
  const [depth, setDepth]     = useState("4");
  const [priceYd, setPriceYd] = useState("35");

  const l     = parseFloat(length) || 0;
  const w     = parseFloat(width) || 0;
  const d     = parseFloat(depth) || 0;
  const price = parseFloat(priceYd) || 0;

  const cubicFeet  = l * w * (d / 12);
  const cubicYards = cubicFeet / 27;
  const bags040    = Math.ceil(cubicFeet / 0.40); // 0.40 cu ft bags
  const bags075    = Math.ceil(cubicFeet / 0.75); // 0.75 cu ft bags
  const bags100    = Math.ceil(cubicFeet / 1.00); // 1.00 cu ft bags
  const totalCost  = cubicYards * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Topsoil Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Length (ft)",    value: length,  setter: setLength },
            { label: "Width (ft)",     value: width,   setter: setWidth },
            { label: "Depth (in)",     value: depth,   setter: setDepth },
            { label: "Price / yd³ ($)", value: priceYd, setter: setPriceYd },
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
            { label: "Cubic Feet",   value: cubicFeet.toFixed(1),    sub: "cu ft" },
            { label: "Cubic Yards",  value: cubicYards.toFixed(2),   sub: "bulk order" },
            { label: "Tons",         value: (cubicYards * 1.08).toFixed(2), sub: "≈ 1.08 t/yd³" },
            { label: "Est. Cost",    value: `$${totalCost.toFixed(0)}`, sub: `at $${priceYd}/yd³` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {cubicYards > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-600">
            <p className="font-semibold text-gray-700 mb-2">Bags needed (if buying bagged):</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { size: "0.4 cu ft", count: bags040 },
                { size: "0.75 cu ft", count: bags075 },
                { size: "1 cu ft", count: bags100 },
              ].map(({ size, count }) => (
                <div key={size} className="bg-white border border-gray-200 rounded-lg p-2 text-center">
                  <p className="text-gray-500 mb-0.5">{size} bags</p>
                  <p className="font-bold text-gray-800">{count} bags</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-gray-400">Tip: Bulk delivery is usually cheaper above 2–3 cubic yards.</p>
          </div>
        )}
      </div>
    </div>
  );
}
