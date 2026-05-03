"use client";

import { useState } from "react";

export function RoofPitchCalculator() {
  const [rise, setRise] = useState("4");
  const [run, setRun] = useState("12");
  const [spanFt, setSpanFt] = useState("24");

  const r = parseFloat(rise) || 0;
  const ru = parseFloat(run) || 0;
  const span = parseFloat(spanFt) || 0;

  const angleDeg = ru > 0 ? Math.atan(r / ru) * (180 / Math.PI) : 0;
  const multiplier = ru > 0 ? Math.sqrt(r * r + ru * ru) / ru : 0;
  const halfSpan = span / 2;
  const rafterLen = halfSpan * multiplier;
  const ridgeHeight = ru > 0 ? (halfSpan * r) / ru : 0;

  const pitchLabel = `${r}:${ru}`;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Roof Pitch Calculator</h2>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Rise (in)</label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.5"
              value={rise}
              onChange={(e) => setRise(e.target.value)}
              className="calc-input text-center"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Run (in, usually 12)</label>
            <input
              type="number"
              inputMode="decimal"
              min="1"
              step="1"
              value={run}
              onChange={(e) => setRun(e.target.value)}
              className="calc-input text-center"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Building Span (ft)</label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="1"
              value={spanFt}
              onChange={(e) => setSpanFt(e.target.value)}
              className="calc-input text-center"
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Pitch</p>
            <p className="text-2xl font-bold text-blue-800">{pitchLabel}</p>
            <p className="text-xs text-blue-500 mt-0.5">rise : run</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Angle</p>
            <p className="text-2xl font-bold text-blue-800">{angleDeg.toFixed(1)}°</p>
            <p className="text-xs text-blue-500 mt-0.5">degrees</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Rafter Length</p>
            <p className="text-2xl font-bold text-blue-800">{rafterLen.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">feet</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Ridge Height</p>
            <p className="text-2xl font-bold text-blue-800">{ridgeHeight.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">feet</p>
          </div>
        </div>

        {r > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Rafter multiplier: <strong>{multiplier.toFixed(4)}</strong> — multiply half-span by this to get rafter length.
            {r <= 3 && " ⚠ Low pitch — check local snow load requirements."}
            {r >= 9 && " ⚠ Steep pitch — consider extra safety measures during installation."}
          </div>
        )}
      </div>
    </div>
  );
}
