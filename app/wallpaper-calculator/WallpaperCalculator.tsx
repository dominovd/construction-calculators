"use client";

import { useState } from "react";

// Standard roll sizes
const ROLL_SIZES = [
  { label: "US Standard (20.5\"×16.5 ft)", sqFt: 28, rolls: 1 },
  { label: "Euro Double Roll (20.5\"×33 ft)", sqFt: 56, rolls: 2 },
  { label: "US Double Roll (20.5\"×33 ft)",  sqFt: 57, rolls: 2 },
  { label: "Bolt (27\"×15 yd)",              sqFt: 101.25, rolls: 1 },
];

export function WallpaperCalculator() {
  const [roomLength, setRoomLength] = useState("15");
  const [roomWidth, setRoomWidth]   = useState("12");
  const [wallHeight, setWallHeight] = useState("9");
  const [doors, setDoors]           = useState("1");
  const [windows, setWindows]       = useState("2");
  const [rollIdx, setRollIdx]       = useState(0);
  const [priceRoll, setPriceRoll]   = useState("45");
  const [waste, setWaste]           = useState("15");

  const l   = parseFloat(roomLength) || 0;
  const w   = parseFloat(roomWidth)  || 0;
  const h   = parseFloat(wallHeight) || 0;
  const d   = parseInt(doors)        || 0;
  const win = parseInt(windows)      || 0;
  const wPct= parseFloat(waste)      || 0;
  const pR  = parseFloat(priceRoll)  || 0;
  const roll= ROLL_SIZES[rollIdx];

  // Total wall area
  const perimeter     = 2 * (l + w);
  const grossWallArea = perimeter * h;

  // Deduct openings: std door ~21 sq ft, std window ~15 sq ft
  const deductions    = d * 21 + win * 15;
  const netWallArea   = Math.max(0, grossWallArea - deductions);
  const areaWithWaste = netWallArea * (1 + wPct / 100);

  // Rolls needed
  const rollsNeeded = Math.ceil(areaWithWaste / roll.sqFt);
  const totalCost   = rollsNeeded * pR;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Wallpaper Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        {/* Roll type */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Roll Size</label>
          <div className="flex flex-wrap gap-2">
            {ROLL_SIZES.map((r, i) => (
              <button key={r.label} onClick={() => setRollIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === rollIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>{r.label}</button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Room Length (ft)",  value: roomLength,  setter: setRoomLength },
            { label: "Room Width (ft)",   value: roomWidth,   setter: setRoomWidth },
            { label: "Wall Height (ft)",  value: wallHeight,  setter: setWallHeight },
            { label: "Doors",             value: doors,       setter: setDoors },
            { label: "Windows",           value: windows,     setter: setWindows },
            { label: "Price / Roll ($)",  value: priceRoll,   setter: setPriceRoll },
            { label: "Waste (%)",         value: waste,       setter: setWaste },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="1" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Wall Area",      value: `${netWallArea.toFixed(0)} sq ft`,   sub: `${grossWallArea.toFixed(0)} − ${deductions} openings` },
            { label: "With Waste",     value: `${areaWithWaste.toFixed(0)} sq ft`, sub: `+${waste}%` },
            { label: "Rolls Needed",   value: rollsNeeded.toString(),              sub: `${roll.sqFt} sq ft each` },
            { label: "Est. Cost",      value: `$${totalCost.toFixed(0)}`,           sub: `at $${priceRoll}/roll` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {rollsNeeded > 0 && (
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            <strong>Pattern repeat tip:</strong> Wallpaper with a pattern repeat requires additional waste — use 20–25% waste instead of 15% to account for matching drops between strips.
          </div>
        )}
      </div>
    </div>
  );
}
