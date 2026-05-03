"use client";

import { useState } from "react";

export function StairCalculator() {
  const [totalRise, setTotalRise] = useState("108");
  const [riserHeight, setRiserHeight] = useState("7");
  const [runDepth, setRunDepth] = useState("11");
  const [stairWidth, setStairWidth] = useState("36");

  const rise  = parseFloat(totalRise) || 0;
  const riser = parseFloat(riserHeight) || 7;
  const run   = parseFloat(runDepth) || 11;
  const sw    = parseFloat(stairWidth) || 36;

  const steps         = Math.ceil(rise / riser);
  const actualRiser   = steps > 0 ? rise / steps : 0;
  const totalRun      = steps * run;
  const stringerLen   = Math.sqrt(rise * rise + totalRun * totalRun) / 12; // ft
  const angle         = Math.atan(rise / totalRun) * (180 / Math.PI);

  // Lumber: 2×12 stringers (typical 3 stringers for 36" wide stair)
  const stringerCount = sw <= 36 ? 3 : Math.ceil(sw / 16);

  const riserOk  = actualRiser >= 4 && actualRiser <= 7.75;
  const runOk    = run >= 10 && run <= 11.25;
  const angleOk  = angle >= 30 && angle <= 35;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Stair Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Total Rise (in)",   value: totalRise,   setter: setTotalRise,   hint: "floor-to-floor height" },
            { label: "Riser Height (in)", value: riserHeight, setter: setRiserHeight, hint: "4–7¾\" (code)" },
            { label: "Run Depth (in)",    value: runDepth,    setter: setRunDepth,    hint: "10–11¼\" (code)" },
            { label: "Stair Width (in)",  value: stairWidth,  setter: setStairWidth,  hint: "min 36\" (code)" },
          ].map(({ label, value, setter, hint }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-0.5">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="0.25" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
              <p className="text-[10px] text-gray-400 mt-0.5">{hint}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Number of Steps", value: steps.toString(),              sub: "risers" },
            { label: "Actual Riser",    value: `${actualRiser.toFixed(2)}"`,  sub: riserOk ? "✓ code ok" : "⚠ check code" },
            { label: "Total Run",       value: `${(totalRun / 12).toFixed(2)} ft`, sub: "horizontal length" },
            { label: "Stringer Length", value: `${stringerLen.toFixed(2)} ft`, sub: "diagonal" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {steps > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs space-y-2">
            <div className="flex items-center gap-4 flex-wrap">
              <span className={`flex items-center gap-1 font-medium ${riserOk ? "text-green-700" : "text-red-600"}`}>
                {riserOk ? "✓" : "✗"} Riser {actualRiser.toFixed(2)}" ({riserOk ? "code compliant" : "out of 4–7¾\" range"})
              </span>
              <span className={`flex items-center gap-1 font-medium ${runOk ? "text-green-700" : "text-red-600"}`}>
                {runOk ? "✓" : "✗"} Run {run}" ({runOk ? "code compliant" : "out of 10–11¼\" range"})
              </span>
              <span className={`flex items-center gap-1 font-medium ${angleOk ? "text-green-700" : "text-amber-600"}`}>
                {angleOk ? "✓" : "~"} Angle {angle.toFixed(1)}° ({angleOk ? "ideal" : "check comfort"})
              </span>
            </div>
            <p className="text-gray-600">
              Lumber: <strong>{stringerCount} stringers</strong> at 2×12, each {stringerLen.toFixed(2)} ft long.
              Total {steps} treads at {run}″ depth, {sw}″ wide.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
