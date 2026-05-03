"use client";

import { useState } from "react";

const PANEL_TYPES = [
  { label: "Standing Seam (16\")",  width: 16, waste: 0.10 },
  { label: "R-Panel (36\")",        width: 36, waste: 0.08 },
  { label: "Corrugated (26\")",     width: 26, waste: 0.10 },
  { label: "Metal Shingle",         width: 0,  waste: 0.10 }, // sq ft based
];

export function MetalRoofingCalculator() {
  const [length, setLength]       = useState("40");
  const [width, setWidth]         = useState("30");
  const [pitch, setPitch]         = useState("4");      // rise per 12
  const [panelIdx, setPanelIdx]   = useState(0);
  const [priceSqFt, setPriceSqFt] = useState("3.50");
  const [wastePct, setWastePct]   = useState("10");

  const l    = parseFloat(length)    || 0;
  const w    = parseFloat(width)     || 0;
  const rise = parseFloat(pitch)     || 0;
  const pSF  = parseFloat(priceSqFt) || 0;
  const wPct = parseFloat(wastePct)  || 0;

  // Pitch multiplier: hypotenuse / run = sqrt(rise² + 12²) / 12
  const pitchMult = Math.sqrt(rise * rise + 144) / 12;

  // Flat footprint → actual roof area
  const flatSqFt    = l * w;
  const roofSqFt    = flatSqFt * pitchMult;
  const roofSqFtWaste = roofSqFt * (1 + wPct / 100);

  // Squares (1 square = 100 sq ft)
  const squares = roofSqFtWaste / 100;

  // Ridge cap: typically 1 linear ft per 1 ft of ridge
  const ridgeLinFt = l; // one ridge along the length

  const materialCost = roofSqFtWaste * pSF;

  // Fasteners / trim: roughly 15% of material cost
  const trimCost = materialCost * 0.15;
  const totalCost = materialCost + trimCost;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Metal Roofing Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        {/* Panel type */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Panel Style</label>
          <div className="flex flex-wrap gap-2">
            {PANEL_TYPES.map((p, i) => (
              <button key={p.label} onClick={() => setPanelIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === panelIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>{p.label}</button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Roof Length (ft)",    value: length,    setter: setLength },
            { label: "Roof Width (ft)",     value: width,     setter: setWidth },
            { label: "Roof Pitch (x/12)",   value: pitch,     setter: setPitch },
            { label: "Price ($/sq ft)",     value: priceSqFt, setter: setPriceSqFt },
            { label: "Waste (%)",           value: wastePct,  setter: setWastePct },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="0.5" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Roof Area",     value: `${roofSqFt.toFixed(0)} sq ft`,    sub: `pitch ×${pitchMult.toFixed(3)}` },
            { label: "With Waste",    value: `${roofSqFtWaste.toFixed(0)} sq ft`, sub: `+${wastePct}% waste` },
            { label: "Squares",       value: squares.toFixed(2),                 sub: "100 sq ft each" },
            { label: "Est. Cost",     value: `$${totalCost.toFixed(0)}`,          sub: "incl. trim & fasteners" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {roofSqFt > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-700 mb-1">Material breakdown:</p>
            <p>Roof panels: <strong>{roofSqFtWaste.toFixed(0)} sq ft</strong> at ${priceSqFt}/sq ft = <strong>${materialCost.toFixed(0)}</strong></p>
            <p>Ridge cap, trim & fasteners (~15%): <strong>${trimCost.toFixed(0)}</strong></p>
            <p>Estimated ridge length: <strong>{ridgeLinFt} linear ft</strong></p>
            <p className="text-gray-400 mt-1">Does not include underlayment, decking, or labor.</p>
          </div>
        )}
      </div>
    </div>
  );
}
