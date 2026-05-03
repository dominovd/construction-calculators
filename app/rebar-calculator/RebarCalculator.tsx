"use client";

import { useState } from "react";

const REBAR_SIZES = [
  { label: "#3 (⅜\")", weightPerFt: 0.376 },
  { label: "#4 (½\")", weightPerFt: 0.668 },
  { label: "#5 (⅝\")", weightPerFt: 1.043 },
  { label: "#6 (¾\")", weightPerFt: 1.502 },
];

export function RebarCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("20");
  const [spacing, setSpacing] = useState("12");
  const [rebarIdx, setRebarIdx] = useState(1); // default #4
  const [pricePerFt, setPricePerFt] = useState("0.65");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const sp = parseFloat(spacing) || 12;
  const price = parseFloat(pricePerFt) || 0;
  const rebar = REBAR_SIZES[rebarIdx];

  // Bars running in each direction (add 1 for start + end)
  const barsAlongLength = Math.ceil(w / (sp / 12)) + 1;
  const barsAlongWidth = Math.ceil(l / (sp / 12)) + 1;
  const totalBars = barsAlongLength + barsAlongWidth;

  // Linear feet: bars along length each run full length, bars along width each run full width
  const linearFt = barsAlongLength * l + barsAlongWidth * w;
  const weightLbs = linearFt * rebar.weightPerFt;
  const totalCost = linearFt * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Rebar Calculator</h2>
      </div>

      <div className="p-5">
        {/* Rebar size selector */}
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Rebar Size</label>
          <div className="flex flex-wrap gap-2">
            {REBAR_SIZES.map((r, i) => (
              <button
                key={r.label}
                onClick={() => setRebarIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === rebarIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Slab Length (ft)", value: length, setter: setLength },
            { label: "Slab Width (ft)", value: width, setter: setWidth },
            { label: "Spacing (in)", value: spacing, setter: setSpacing },
            { label: "Price / ft ($)", value: pricePerFt, setter: setPricePerFt },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="0.5"
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="calc-input text-center"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Total Bars</p>
            <p className="text-2xl font-bold text-blue-800">{totalBars}</p>
            <p className="text-xs text-blue-500 mt-0.5">pieces</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Linear Feet</p>
            <p className="text-2xl font-bold text-blue-800">{linearFt.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">ft total</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Weight</p>
            <p className="text-2xl font-bold text-blue-800">{weightLbs.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">lbs</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Est. Cost</p>
            <p className="text-2xl font-bold text-blue-800">${totalCost.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">materials</p>
          </div>
        </div>

        {linearFt > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            {barsAlongLength} bars × {l} ft + {barsAlongWidth} bars × {w} ft.
            With 10% waste: <strong>{Math.ceil(linearFt * 1.1)} ft</strong> / <strong>{(weightLbs * 1.1).toFixed(0)} lbs</strong>
          </div>
        )}
      </div>
    </div>
  );
}
