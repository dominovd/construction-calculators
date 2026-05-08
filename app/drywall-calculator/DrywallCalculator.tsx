"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

export function DrywallCalculator() {
  const [length, setLength] = useState("12");
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("8");
  const [doors, setDoors] = useState("1");
  const [windows, setWindows] = useState("1");
  const [includeCeiling, setIncludeCeiling] = useState(true);
  const [pricePerSheet, setPricePerSheet] = useState(
    String(getRetailDefault("drywall-half-4x8")),
  );

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const h = parseFloat(height) || 0;
  const d = parseFloat(doors) || 0;
  const win = parseFloat(windows) || 0;
  const price = parseFloat(pricePerSheet) || 0;

  const wallArea = 2 * (l + w) * h;
  const ceilingArea = includeCeiling ? l * w : 0;
  const openings = d * 21 + win * 15; // ~21 sqft door, ~15 sqft window
  const netArea = Math.max(0, wallArea + ceilingArea - openings);
  const sheets = Math.ceil(netArea / 32); // 4×8 sheet = 32 sqft
  const totalCost = sheets * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Drywall Calculator</h2>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
          {[
            { label: "Room Length (ft)", value: length, setter: setLength },
            { label: "Room Width (ft)",  value: width,  setter: setWidth },
            { label: "Ceiling Height (ft)", value: height, setter: setHeight },
            { label: "Doors",            value: doors,  setter: setDoors, step: "1" },
            { label: "Windows",          value: windows, setter: setWindows, step: "1" },
            { label: "Price/Sheet ($)",  value: pricePerSheet, setter: setPricePerSheet },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step={step || "0.5"} value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-600 mb-5 cursor-pointer">
          <input type="checkbox" checked={includeCeiling} onChange={(e) => setIncludeCeiling(e.target.checked)}
            className="w-4 h-4 accent-blue-600" />
          Include ceiling
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Wall Area",   value: `${wallArea.toFixed(0)}`,   sub: "sq ft" },
            { label: "Net Area",    value: `${netArea.toFixed(0)}`,    sub: "sq ft (minus openings)" },
            { label: "Sheets (4×8)", value: String(sheets),             sub: "sheets" },
            { label: "Est. Cost",   value: `$${totalCost.toFixed(0)}`, sub: `at $${pricePerSheet}/sheet` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {sheets > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            With 10% waste: <strong>{Math.ceil(sheets * 1.1)} sheets</strong> (${(Math.ceil(sheets * 1.1) * price).toFixed(0)}).
            Order extra for cuts around doors and windows.
          </div>
        )}
      </div>
    </div>
  );
}
