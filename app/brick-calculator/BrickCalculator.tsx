"use client";

import { useState } from "react";

const BRICK_TYPES = [
  { label: "Standard (7.5/ft²)", bricksPerSqFt: 7.5,  mortarBagsPerSqFt: 0.07  },
  { label: "Modular (6.75/ft²)", bricksPerSqFt: 6.75, mortarBagsPerSqFt: 0.065 },
  { label: "Queen (5.76/ft²)",   bricksPerSqFt: 5.76, mortarBagsPerSqFt: 0.06  },
  { label: "Paver (4.5/ft²)",    bricksPerSqFt: 4.5,  mortarBagsPerSqFt: 0.05  },
];

export function BrickCalculator() {
  const [length, setLength] = useState("10");
  const [height, setHeight] = useState("6");
  const [typeIdx, setTypeIdx] = useState(0);
  const [waste, setWaste] = useState("10");

  const l = parseFloat(length) || 0;
  const h = parseFloat(height) || 0;
  const w = parseFloat(waste) || 0;
  const bt = BRICK_TYPES[typeIdx];

  const sqFt = l * h;
  const bricks = Math.ceil(sqFt * bt.bricksPerSqFt * (1 + w / 100));
  const mortarBags = Math.ceil(sqFt * bt.mortarBagsPerSqFt * (1 + w / 100));

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Brick Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Brick Type</label>
          <div className="flex flex-wrap gap-2">
            {BRICK_TYPES.map((b, i) => (
              <button key={b.label} onClick={() => setTypeIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === typeIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Length (ft)", value: length, setter: setLength },
            { label: "Height (ft)", value: height, setter: setHeight },
            { label: "Waste %",     value: waste,  setter: setWaste, max: "50", step: "1" },
          ].map(({ label, value, setter, max, step }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" max={max} step={step || "0.5"} value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Area",          value: `${sqFt.toFixed(1)}`,         sub: "sq ft" },
            { label: "Bricks Needed", value: bricks.toLocaleString(),       sub: `incl. ${waste}% waste` },
            { label: "Mortar Bags",   value: String(mortarBags),            sub: "60-lb bags" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {sqFt > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Based on {bt.bricksPerSqFt} bricks per sq ft with ⅜&quot; mortar joints.
            Order an extra bag or two as buffer.
          </div>
        )}
      </div>
    </div>
  );
}
