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
  const rafterLen = (span / 2) * multiplier;
  const ridgeHeight = ru > 0 ? ((span / 2) * r) / ru : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Roof Pitch Calculator</h2>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Rise (in)",            value: rise,   setter: setRise,   step: "0.5", min: "0" },
            { label: "Run (in)",             value: run,    setter: setRun,    step: "1",   min: "1" },
            { label: "Building Span (ft)",   value: spanFt, setter: setSpanFt, step: "1",   min: "0" },
          ].map(({ label, value, setter, step, min }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min={min} step={step} value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Pitch",         value: `${r}:${ru}`,          sub: "rise : run" },
            { label: "Angle",         value: `${angleDeg.toFixed(1)}°`, sub: "degrees" },
            { label: "Rafter Length", value: rafterLen.toFixed(2),  sub: "feet" },
            { label: "Ridge Height",  value: ridgeHeight.toFixed(2), sub: "feet" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {r > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Rafter multiplier: <strong>{multiplier.toFixed(4)}</strong>
            {r <= 3 && " ⚠ Low pitch — check local snow load requirements."}
            {r >= 9 && " ⚠ Steep pitch — consider extra safety measures during installation."}
          </div>
        )}
      </div>
    </div>
  );
}
