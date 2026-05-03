"use client";

import { useState } from "react";

export function PaintCalculator() {
  const [length, setLength] = useState("12");
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("8");
  const [coats, setCoats] = useState("2");
  const [doors, setDoors] = useState("1");
  const [windows, setWindows] = useState("1");
  const [includeCeiling, setIncludeCeiling] = useState(false);
  const [pricePerGallon, setPricePerGallon] = useState("40");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const h = parseFloat(height) || 0;
  const c = parseFloat(coats) || 1;
  const d = parseFloat(doors) || 0;
  const win = parseFloat(windows) || 0;
  const price = parseFloat(pricePerGallon) || 0;

  const wallArea = 2 * (l + w) * h;
  const ceilingArea = includeCeiling ? l * w : 0;
  const openings = d * 21 + win * 15;
  const paintableArea = Math.max(0, wallArea + ceilingArea - openings);
  const totalArea = paintableArea * c;
  const gallons = Math.ceil(totalArea / 350); // 1 gal covers ~350 sqft
  const quarts = Math.ceil(totalArea / 87.5);
  const totalCost = gallons * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Paint Calculator</h2>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
          {[
            { label: "Room Length (ft)",   value: length,       setter: setLength },
            { label: "Room Width (ft)",    value: width,        setter: setWidth },
            { label: "Ceiling Height (ft)", value: height,      setter: setHeight },
            { label: "Coats",             value: coats,        setter: setCoats,  step: "1" },
            { label: "Doors",             value: doors,        setter: setDoors,  step: "1" },
            { label: "Windows",           value: windows,      setter: setWindows, step: "1" },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step={step || "0.5"} value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-5">
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" checked={includeCeiling} onChange={(e) => setIncludeCeiling(e.target.checked)}
              className="w-4 h-4 accent-blue-600" />
            Include ceiling
          </label>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500">$/gallon</label>
            <input type="number" inputMode="decimal" min="0" step="1" value={pricePerGallon}
              onChange={(e) => setPricePerGallon(e.target.value)} className="calc-input text-center w-24" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Paintable Area", value: `${paintableArea.toFixed(0)}`, sub: "sq ft" },
            { label: "Gallons",        value: String(gallons),                sub: `${c} coat${c > 1 ? "s" : ""}` },
            { label: "Quarts",         value: String(quarts),                 sub: "if buying quarts" },
            { label: "Est. Cost",      value: `$${totalCost.toFixed(0)}`,    sub: `at $${pricePerGallon}/gal` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {gallons > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Coverage based on 350 sq ft/gallon. Rough or porous surfaces may need 10–20% more.
          </div>
        )}
      </div>
    </div>
  );
}
