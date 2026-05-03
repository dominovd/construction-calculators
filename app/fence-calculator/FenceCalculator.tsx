"use client";

import { useState } from "react";

const FENCE_TYPES = [
  { label: "Wood Privacy",  postSpacingFt: 8,  panelWidthFt: 8 },
  { label: "Wood Picket",   postSpacingFt: 8,  panelWidthFt: 8 },
  { label: "Chain Link",    postSpacingFt: 10, panelWidthFt: 10 },
  { label: "Split Rail",    postSpacingFt: 8,  panelWidthFt: 8 },
  { label: "Vinyl",         postSpacingFt: 8,  panelWidthFt: 8 },
];

export function FenceCalculator() {
  const [totalLength, setTotalLength] = useState("100");
  const [typeIdx, setTypeIdx] = useState(0);
  const [customSpacing, setCustomSpacing] = useState("");
  const [pricePerPanel, setPricePerPanel] = useState("50");
  const [pricePerPost, setPricePerPost] = useState("20");

  const ft = FENCE_TYPES[typeIdx];
  const spacing = parseFloat(customSpacing) || ft.postSpacingFt;
  const len = parseFloat(totalLength) || 0;
  const panelPrice = parseFloat(pricePerPanel) || 0;
  const postPrice = parseFloat(pricePerPost) || 0;

  const posts = Math.ceil(len / spacing) + 1;
  const panels = Math.ceil(len / ft.panelWidthFt);
  const totalCost = panels * panelPrice + posts * postPrice;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Fence Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Fence Type</label>
          <div className="flex flex-wrap gap-2">
            {FENCE_TYPES.map((f, i) => (
              <button key={f.label} onClick={() => setTypeIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === typeIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Total Length (ft)",   value: totalLength,    setter: setTotalLength },
            { label: "Post Spacing (ft)",   value: customSpacing,  setter: setCustomSpacing, placeholder: String(ft.postSpacingFt) },
            { label: "Price/Panel ($)",     value: pricePerPanel,  setter: setPricePerPanel },
            { label: "Price/Post ($)",      value: pricePerPost,   setter: setPricePerPost },
          ].map(({ label, value, setter, placeholder }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="0.5" value={value}
                placeholder={placeholder}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Posts",       value: String(posts),              sub: "posts" },
            { label: "Panels",      value: String(panels),             sub: "panels/sections" },
            { label: "Linear Feet", value: String(len),                sub: "ft of fence" },
            { label: "Est. Cost",   value: `$${totalCost.toFixed(0)}`, sub: "materials" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {len > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            {posts} posts @ {spacing} ft spacing, {panels} panels @ {ft.panelWidthFt} ft wide.
            Add gates and hardware separately.
          </div>
        )}
      </div>
    </div>
  );
}
