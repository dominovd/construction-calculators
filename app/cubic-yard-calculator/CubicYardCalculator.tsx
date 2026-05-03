"use client";

import { useState } from "react";

const SHAPES = ["Rectangle", "Circle", "Triangle"] as const;
type Shape = typeof SHAPES[number];

const MATERIALS = [
  { label: "Concrete",       density: 2.03 },
  { label: "Topsoil",        density: 1.08 },
  { label: "Gravel",         density: 1.45 },
  { label: "Sand",           density: 1.35 },
  { label: "Mulch",          density: 0.43 },
  { label: "Fill Dirt",      density: 1.08 },
  { label: "Crushed Stone",  density: 1.50 },
];

export function CubicYardCalculator() {
  const [shape, setShape]     = useState<Shape>("Rectangle");
  const [length, setLength]   = useState("12");
  const [width, setWidth]     = useState("10");
  const [diameter, setDiam]   = useState("10");
  const [base, setBase]       = useState("10");
  const [height2d, setH2d]    = useState("8");
  const [depth, setDepth]     = useState("4");
  const [matIdx, setMatIdx]   = useState(0);
  const [priceYd, setPriceYd] = useState("50");

  const d    = parseFloat(depth) || 0;
  const price = parseFloat(priceYd) || 0;
  const mat  = MATERIALS[matIdx];

  let cubicFeet = 0;
  if (shape === "Rectangle") {
    cubicFeet = (parseFloat(length) || 0) * (parseFloat(width) || 0) * (d / 12);
  } else if (shape === "Circle") {
    const r = (parseFloat(diameter) || 0) / 2;
    cubicFeet = Math.PI * r * r * (d / 12);
  } else {
    cubicFeet = 0.5 * (parseFloat(base) || 0) * (parseFloat(height2d) || 0) * (d / 12);
  }

  const cubicYards = cubicFeet / 27;
  const tons       = cubicYards * mat.density;
  const totalCost  = cubicYards * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Cubic Yard Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex gap-2 flex-wrap">
          {SHAPES.map((s) => (
            <button key={s} onClick={() => setShape(s)}
              className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
                s === shape ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
              }`}>{s}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {shape === "Rectangle" && <>
            <div><label className="block text-xs text-gray-500 mb-1">Length (ft)</label>
              <input type="number" inputMode="decimal" min="0" value={length} onChange={e => setLength(e.target.value)} className="calc-input text-center" /></div>
            <div><label className="block text-xs text-gray-500 mb-1">Width (ft)</label>
              <input type="number" inputMode="decimal" min="0" value={width} onChange={e => setWidth(e.target.value)} className="calc-input text-center" /></div>
          </>}
          {shape === "Circle" && (
            <div><label className="block text-xs text-gray-500 mb-1">Diameter (ft)</label>
              <input type="number" inputMode="decimal" min="0" value={diameter} onChange={e => setDiam(e.target.value)} className="calc-input text-center" /></div>
          )}
          {shape === "Triangle" && <>
            <div><label className="block text-xs text-gray-500 mb-1">Base (ft)</label>
              <input type="number" inputMode="decimal" min="0" value={base} onChange={e => setBase(e.target.value)} className="calc-input text-center" /></div>
            <div><label className="block text-xs text-gray-500 mb-1">Height (ft)</label>
              <input type="number" inputMode="decimal" min="0" value={height2d} onChange={e => setH2d(e.target.value)} className="calc-input text-center" /></div>
          </>}
          <div><label className="block text-xs text-gray-500 mb-1">Depth (in)</label>
            <input type="number" inputMode="decimal" min="0" value={depth} onChange={e => setDepth(e.target.value)} className="calc-input text-center" /></div>
          <div><label className="block text-xs text-gray-500 mb-1">Price / yd³ ($)</label>
            <input type="number" inputMode="decimal" min="0" value={priceYd} onChange={e => setPriceYd(e.target.value)} className="calc-input text-center" /></div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Material</label>
          <div className="flex flex-wrap gap-2">
            {MATERIALS.map((m, i) => (
              <button key={m.label} onClick={() => setMatIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === matIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>{m.label}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Cubic Feet",  value: cubicFeet.toFixed(1),   sub: "cu ft" },
            { label: "Cubic Yards", value: cubicYards.toFixed(2),  sub: "yd³" },
            { label: "Tons",        value: tons.toFixed(2),         sub: mat.label },
            { label: "Est. Cost",   value: `$${totalCost.toFixed(0)}`, sub: `at $${priceYd}/yd³` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
