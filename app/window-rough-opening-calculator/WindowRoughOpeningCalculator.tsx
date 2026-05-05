"use client";

import { useState } from "react";

function getHeaderSize(roWidth: number): string {
  if (roWidth <= 42) return "Doubled 2×6";
  if (roWidth <= 66) return "Doubled 2×8";
  if (roWidth <= 90) return "Doubled 2×10";
  if (roWidth <= 120) return "Doubled 2×12";
  return "LVL — consult engineer";
}

export function WindowRoughOpeningCalculator() {
  const [windowWidth, setWindowWidth] = useState("36");
  const [windowHeight, setWindowHeight] = useState("48");
  const [ceilingHeight, setCeilingHeight] = useState("8");
  const [sillHeight, setSillHeight] = useState("36");

  const ww = parseFloat(windowWidth) || 0;
  const wh = parseFloat(windowHeight) || 0;
  const ch = parseFloat(ceilingHeight) || 0;
  const sh = parseFloat(sillHeight) || 0;

  const roWidth = ww + 2; // rough opening width in inches
  const roHeight = wh + 2.5; // rough opening height in inches

  const headerSize = getHeaderSize(roWidth);
  const jackStudHeight = sh + roHeight; // in inches

  const ceilingHeightInches = ch * 12;
  const kingStudLength = ceilingHeightInches - 3; // subtract top + bottom plates (1.5" each)
  const crippleHeight = Math.max(0, sh - 1.5); // below-window cripple studs

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Window Rough Opening Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        {/* Inputs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Window Width (in)</label>
            <input
              type="number"
              inputMode="decimal"
              min="12"
              step="0.5"
              value={windowWidth}
              onChange={(e) => setWindowWidth(e.target.value)}
              className="calc-input text-center"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Window Height (in)</label>
            <input
              type="number"
              inputMode="decimal"
              min="12"
              step="0.5"
              value={windowHeight}
              onChange={(e) => setWindowHeight(e.target.value)}
              className="calc-input text-center"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Ceiling Height (ft)</label>
            <input
              type="number"
              inputMode="decimal"
              min="7"
              step="0.5"
              value={ceilingHeight}
              onChange={(e) => setCeilingHeight(e.target.value)}
              className="calc-input text-center"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Sill Height from Floor (in)</label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.5"
              value={sillHeight}
              onChange={(e) => setSillHeight(e.target.value)}
              className="calc-input text-center"
            />
          </div>
        </div>

        {/* Primary results */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">RO Width</p>
            <p className="text-2xl font-bold text-blue-800">{roWidth.toFixed(1)}&Prime;</p>
            <p className="text-xs text-blue-500 mt-0.5">rough opening</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">RO Height</p>
            <p className="text-2xl font-bold text-blue-800">{roHeight.toFixed(1)}&Prime;</p>
            <p className="text-xs text-blue-500 mt-0.5">rough opening</p>
          </div>
          <div className="result-box col-span-2 sm:col-span-1">
            <p className="text-xs text-blue-600 font-medium mb-1">Header Size</p>
            <p className="text-lg font-bold text-blue-800 leading-tight">{headerSize}</p>
            <p className="text-xs text-blue-500 mt-0.5">structural header</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Jack Stud Height</p>
            <p className="text-2xl font-bold text-blue-800">{jackStudHeight.toFixed(1)}&Prime;</p>
            <p className="text-xs text-blue-500 mt-0.5">trimmer stud</p>
          </div>
        </div>

        {/* Details panel */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm space-y-1.5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Additional Framing Details</p>
          <div className="flex justify-between">
            <span className="text-gray-600">King stud length</span>
            <span className="font-medium text-gray-900">{kingStudLength > 0 ? `${kingStudLength.toFixed(1)}"` : "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Cripple stud height (below sill)</span>
            <span className="font-medium text-gray-900">{crippleHeight > 0 ? `${crippleHeight.toFixed(1)}"` : "0" }</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Top of rough opening from floor</span>
            <span className="font-medium text-gray-900">{(sh + roHeight).toFixed(1)}&Prime;</span>
          </div>
        </div>

        {/* Note on LVL */}
        {roWidth > 120 && (
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            <strong className="text-amber-800">Engineer required:</strong> A rough opening wider
            than 120&Prime; (10 ft) exceeds standard doubled 2×12 capacity. Consult a structural
            engineer and specify an LVL or PSL beam sized for your span and load.
          </div>
        )}
      </div>
    </div>
  );
}
