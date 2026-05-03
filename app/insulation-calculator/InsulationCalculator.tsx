"use client";

import { useState } from "react";

const INSULATION_TYPES = [
  {
    label: "Fiberglass Batt",
    options: [
      { rValue: "R-11", thickness: '3.5"', coverage: 40.0, label: "R-11 (2×4 wall)" },
      { rValue: "R-13", thickness: '3.5"', coverage: 40.0, label: "R-13 (2×4 wall)" },
      { rValue: "R-19", thickness: '5.5"', coverage: 48.0, label: "R-19 (2×6 wall)" },
      { rValue: "R-21", thickness: '5.5"', coverage: 40.0, label: "R-21 (2×6 wall)" },
      { rValue: "R-30", thickness: '10"',  coverage: 48.0, label: "R-30 (attic)" },
      { rValue: "R-38", thickness: '12"',  coverage: 40.0, label: "R-38 (attic)" },
    ],
  },
];

const BLOWN_BAGS: { rValue: string; label: string; sqFtPerBag: number; depthIn: number }[] = [
  { rValue: "R-19", label: "R-19 (attic)", sqFtPerBag: 40, depthIn: 7 },
  { rValue: "R-30", label: "R-30 (attic)", sqFtPerBag: 25, depthIn: 11 },
  { rValue: "R-38", label: "R-38 (attic)", sqFtPerBag: 19, depthIn: 14 },
  { rValue: "R-49", label: "R-49 (attic)", sqFtPerBag: 14, depthIn: 18 },
  { rValue: "R-60", label: "R-60 (attic)", sqFtPerBag: 11, depthIn: 22 },
];

export function InsulationCalculator() {
  const [area, setArea] = useState("500");
  const [mode, setMode] = useState<"batt" | "blown">("batt");
  const [battOptIdx, setBattOptIdx] = useState(1); // R-13 default
  const [blownOptIdx, setBlownOptIdx] = useState(1); // R-30 default
  const [waste, setWaste] = useState("10");
  const [pricePerBag, setPricePerBag] = useState("55");

  const sqFt = parseFloat(area) || 0;
  const wasteP = parseFloat(waste) || 0;
  const price = parseFloat(pricePerBag) || 0;
  const sqFtWithWaste = sqFt * (1 + wasteP / 100);

  const battOpt = INSULATION_TYPES[0].options[battOptIdx];
  const blownOpt = BLOWN_BAGS[blownOptIdx];

  const battBags = Math.ceil(sqFtWithWaste / battOpt.coverage);
  const blownBags = Math.ceil(sqFtWithWaste / blownOpt.sqFtPerBag);
  const bags = mode === "batt" ? battBags : blownBags;
  const totalCost = bags * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Insulation Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4 flex gap-3">
          {(["batt", "blown"] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className={`text-xs px-4 py-1.5 rounded-full border font-medium transition-colors ${
                mode === m ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
              }`}>
              {m === "batt" ? "Batt / Roll" : "Blown-in"}
            </button>
          ))}
        </div>

        {mode === "batt" && (
          <div className="mb-4">
            <label className="block text-xs text-gray-500 mb-1">R-Value</label>
            <div className="flex flex-wrap gap-2">
              {INSULATION_TYPES[0].options.map((o, i) => (
                <button key={o.label} onClick={() => setBattOptIdx(i)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    i === battOptIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {mode === "blown" && (
          <div className="mb-4">
            <label className="block text-xs text-gray-500 mb-1">R-Value</label>
            <div className="flex flex-wrap gap-2">
              {BLOWN_BAGS.map((o, i) => (
                <button key={o.label} onClick={() => setBlownOptIdx(i)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    i === blownOptIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Area (sq ft)",      value: area,        setter: setArea },
            { label: "Waste %",           value: waste,       setter: setWaste, step: "1" },
            { label: "Price / bag ($)",   value: pricePerBag, setter: setPricePerBag },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step={step || "0.5"} value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Area",        value: `${sqFt.toFixed(0)}`,  sub: "sq ft" },
            { label: mode === "batt" ? "Bags / Rolls" : "Bags",
              value: String(bags),    sub: mode === "batt" ? `${battOpt.rValue} batt` : `${blownOpt.rValue} blown` },
            { label: "Coverage",    value: mode === "batt" ? `${battOpt.coverage} ft²/bag` : `${blownOpt.sqFtPerBag} ft²/bag`, sub: "per bag" },
            { label: "Est. Cost",   value: `$${totalCost.toFixed(0)}`, sub: `at $${pricePerBag}/bag` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
