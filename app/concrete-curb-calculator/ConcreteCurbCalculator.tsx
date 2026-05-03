"use client";

import { useState } from "react";

// Standard curb profiles
const CURB_PROFILES = [
  { label: "Standard Curb (6\"×18\")",      area: (6 * 18) / 144 },      // sq ft cross-section
  { label: "Curb & Gutter (6\"×24\")",      area: (6 * 24) / 144 },
  { label: "Barrier Curb (8\"×18\")",       area: (8 * 18) / 144 },
  { label: "Mountable Curb (4\"×12\")",     area: (4 * 12) / 144 },
  { label: "Extruded Curb (6\"×12\")",      area: (6 * 12) / 144 },
];

export function ConcreteCurbCalculator() {
  const [length, setLength]       = useState("200");
  const [profileIdx, setProfileIdx] = useState(0);
  const [waste, setWaste]         = useState("5");
  const [priceCuYd, setPriceCuYd] = useState("150");
  const [priceLinFt, setPriceLinFt] = useState("25"); // installed cost

  const l    = parseFloat(length)     || 0;
  const wPct = parseFloat(waste)      || 0;
  const pCY  = parseFloat(priceCuYd)  || 0;
  const pLF  = parseFloat(priceLinFt) || 0;

  const profile = CURB_PROFILES[profileIdx];

  // Volume = cross-section area × length
  const cuFt    = profile.area * l;
  const cuFtWaste = cuFt * (1 + wPct / 100);
  const cuYd    = cuFtWaste / 27;

  // 80-lb bags: 0.6 cu ft per bag
  const bags80  = Math.ceil(cuFtWaste / 0.6);

  const concreteCost  = cuYd * pCY;
  const installedCost = l * pLF;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Concrete Curb Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        {/* Profile selector */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Curb Profile</label>
          <div className="flex flex-wrap gap-2">
            {CURB_PROFILES.map((p, i) => (
              <button key={p.label} onClick={() => setProfileIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === profileIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>{p.label}</button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Curb Length (ft)",      value: length,     setter: setLength },
            { label: "Waste (%)",             value: waste,      setter: setWaste },
            { label: "Concrete ($/yd³)",      value: priceCuYd,  setter: setPriceCuYd },
            { label: "Installed ($/lin ft)",  value: priceLinFt, setter: setPriceLinFt },
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
            { label: "Cubic Yards",    value: `${cuYd.toFixed(2)} yd³`,    sub: `${cuFtWaste.toFixed(1)} cu ft` },
            { label: "80-lb Bags",     value: bags80.toLocaleString(),      sub: "if hand-mixing" },
            { label: "Concrete Cost",  value: `$${concreteCost.toFixed(0)}`, sub: `at $${priceCuYd}/yd³` },
            { label: "Installed Est.", value: `$${installedCost.toFixed(0)}`, sub: `at $${priceLinFt}/lin ft` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {cuYd > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-700 mb-1">Profile details:</p>
            <p>Cross-section area: <strong>{(profile.area * 144).toFixed(0)} sq in</strong> ({profile.area.toFixed(4)} sq ft)</p>
            <p>Linear footage: <strong>{l} ft</strong> → <strong>{cuYd.toFixed(2)} yd³</strong> concrete</p>
            <p className="text-gray-400 mt-1">Ready-mix is more economical above 1 yard. Bags suit small repairs.</p>
          </div>
        )}
      </div>
    </div>
  );
}
