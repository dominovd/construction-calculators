"use client";

import { useState } from "react";

type SystemType = "cooling" | "heating" | "both";
type DuctType = "supply" | "return";

const STANDARD_SIZES = [4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20];

const RECT_EQUIVALENTS: Record<number, string[]> = {
  4: ["4×3", "3×4"],
  5: ["4×5", "5×4"],
  6: ["4×7", "5×6"],
  7: ["4×10", "5×8", "6×7"],
  8: ["5×10", "6×9", "7×8"],
  9: ["6×11", "7×9", "8×8"],
  10: ["7×11", "8×10", "9×9"],
  12: ["8×14", "10×12"],
  14: ["10×16", "12×13"],
  16: ["12×17", "14×15"],
  18: ["14×18", "16×16"],
  20: ["16×20", "18×18"],
};

const CFM_PER_SQFT: Record<SystemType, number> = {
  cooling: 1.0,
  heating: 1.2,
  both: 1.1,
};

function nextStandardSize(diameter: number): number {
  return STANDARD_SIZES.find((s) => s >= diameter) ?? STANDARD_SIZES[STANDARD_SIZES.length - 1];
}

export function HvacDuctCalculator() {
  const [area, setArea] = useState<string>("200");
  const [ceilingHeight, setCeilingHeight] = useState<string>("9");
  const [systemType, setSystemType] = useState<SystemType>("cooling");
  const [ductType, setDuctType] = useState<DuctType>("supply");
  const [velocity, setVelocity] = useState<number>(800);

  const roomArea = parseFloat(area) || 0;
  const height = parseFloat(ceilingHeight) || 9;

  const heightMultiplier = height > 9 ? height / 9 : 1;
  const cfm = Math.round(roomArea * CFM_PER_SQFT[systemType] * heightMultiplier);

  // Duct area in sq ft
  const ductAreaSqFt = velocity > 0 ? cfm / velocity : 0;
  // Round duct diameter in inches
  const rawDiameter = Math.sqrt((4 * ductAreaSqFt) / Math.PI) * 12;
  const standardDiameter = nextStandardSize(rawDiameter);

  // Duct area in sq inches (based on standard diameter)
  const ductAreaSqIn = Math.round(Math.PI * Math.pow(standardDiameter / 2, 2));

  const rectOptions = RECT_EQUIVALENTS[standardDiameter] ?? [];
  const rectDisplay = rectOptions.length > 0 ? rectOptions.slice(0, 2).join(" or ") : "—";

  const systemTypes: SystemType[] = ["cooling", "heating", "both"];
  const ductTypes: DuctType[] = ["supply", "return"];
  const velocities = [600, 700, 800, 900, 1000];

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">HVAC Duct Size Calculator</h2>
      </div>

      <div className="p-5 space-y-5">
        {/* Room dimensions */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Room Area (sq ft)
            </label>
            <input
              type="number"
              min={0}
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="calc-input"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Ceiling Height (ft)
            </label>
            <input
              type="number"
              min={0}
              step={0.5}
              value={ceilingHeight}
              onChange={(e) => setCeilingHeight(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        {/* System type */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">System Type</label>
          <div className="flex flex-wrap gap-2">
            {systemTypes.map((s) => (
              <button
                key={s}
                onClick={() => setSystemType(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border capitalize transition-colors ${
                  systemType === s
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                }`}
              >
                {s === "both" ? "Both" : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Duct type */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">Duct Type</label>
          <div className="flex flex-wrap gap-2">
            {ductTypes.map((d) => (
              <button
                key={d}
                onClick={() => setDuctType(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border capitalize transition-colors ${
                  ductType === d
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                }`}
              >
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Velocity */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">
            Target Air Velocity (FPM)
          </label>
          <div className="flex flex-wrap gap-2">
            {velocities.map((v) => (
              <button
                key={v}
                onClick={() => setVelocity(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  velocity === v
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                }`}
              >
                {v} FPM
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-3">
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Required CFM</div>
            <div className="text-blue-800 text-xl font-bold">{cfm} CFM</div>
          </div>
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Round Duct Diameter</div>
            <div className="text-blue-800 text-xl font-bold">{standardDiameter} in</div>
          </div>
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Duct Area</div>
            <div className="text-blue-800 text-xl font-bold">{ductAreaSqIn} sq in</div>
          </div>
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Rect. Equivalent</div>
            <div className="text-blue-800 text-lg font-bold">{rectDisplay}</div>
          </div>
        </div>

        {/* Amber tip */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800">
          <strong>Tip:</strong> These are estimates for single-room sizing. A full Manual J load
          calculation is required for whole-house HVAC design.
        </div>
      </div>
    </div>
  );
}
