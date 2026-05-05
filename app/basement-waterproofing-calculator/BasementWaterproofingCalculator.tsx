"use client";

import { useState } from "react";

type ProblemType = "minor" | "moderate" | "severe";
type WaterproofingMethod = "interior" | "exterior" | "crack" | "sump";

interface CostRange {
  low: number;
  high: number;
}

const PROBLEM_LABELS: Record<ProblemType, string> = {
  minor: "Minor seepage",
  moderate: "Moderate leaking",
  severe: "Severe flooding",
};

const METHOD_LABELS: Record<WaterproofingMethod, string> = {
  interior: "Interior drainage",
  exterior: "Exterior excavation",
  crack: "Crack injection",
  sump: "Sump pump only",
};

function calcCosts(
  perimeter: number,
  problem: ProblemType,
  method: WaterproofingMethod
): CostRange {
  if (method === "crack") {
    const ranges: Record<ProblemType, CostRange> = {
      minor: { low: 500, high: 1500 },
      moderate: { low: 1500, high: 3000 },
      severe: { low: 3000, high: 6000 },
    };
    return ranges[problem];
  }

  if (method === "sump") {
    const ranges: Record<ProblemType, CostRange> = {
      minor: { low: 800, high: 1500 },
      moderate: { low: 1200, high: 2500 },
      severe: { low: 2000, high: 4000 },
    };
    return ranges[problem];
  }

  const multipliers: Record<ProblemType, number> = {
    minor: method === "interior" ? 0.8 : 0.7,
    moderate: 1.0,
    severe: method === "interior" ? 1.3 : 1.4,
  };

  const perFtRanges: Record<WaterproofingMethod, CostRange> = {
    interior: { low: 50, high: 100 },
    exterior: { low: 100, high: 300 },
    crack: { low: 0, high: 0 },
    sump: { low: 0, high: 0 },
  };

  const mult = multipliers[problem];
  const base = perFtRanges[method];

  return {
    low: Math.round(base.low * mult * perimeter),
    high: Math.round(base.high * mult * perimeter),
  };
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function BasementWaterproofingCalculator() {
  const [length, setLength] = useState<string>("30");
  const [width, setWidth] = useState<string>("25");
  const [problem, setProblem] = useState<ProblemType>("moderate");
  const [method, setMethod] = useState<WaterproofingMethod>("interior");

  const len = parseFloat(length) || 0;
  const wid = parseFloat(width) || 0;
  const perimeter = 2 * (len + wid);

  const isPerimeterBased = method === "interior" || method === "exterior";
  const costs = calcCosts(perimeter, problem, method);
  const midpoint = Math.round((costs.low + costs.high) / 2);

  const problems: ProblemType[] = ["minor", "moderate", "severe"];
  const methods: WaterproofingMethod[] = ["interior", "exterior", "crack", "sump"];

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Basement Waterproofing Estimator</h2>
      </div>

      <div className="p-5 space-y-5">
        {/* Dimensions */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Basement Length (ft)
            </label>
            <input
              type="number"
              min={0}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="calc-input"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Basement Width (ft)
            </label>
            <input
              type="number"
              min={0}
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        {/* Problem type */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">Problem Type</label>
          <div className="flex flex-wrap gap-2">
            {problems.map((p) => (
              <button
                key={p}
                onClick={() => setProblem(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  problem === p
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                }`}
              >
                {PROBLEM_LABELS[p]}
              </button>
            ))}
          </div>
        </div>

        {/* Method */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">
            Waterproofing Method
          </label>
          <div className="flex flex-wrap gap-2">
            {methods.map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  method === m
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                }`}
              >
                {METHOD_LABELS[m]}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {isPerimeterBased && (
            <div className="result-box col-span-2 sm:col-span-4">
              <div className="text-blue-600 text-xs font-medium mb-0.5">Wall Perimeter</div>
              <div className="text-blue-800 text-xl font-bold">{perimeter} LF</div>
            </div>
          )}
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Low Estimate</div>
            <div className="text-blue-800 text-lg font-bold">{fmt(costs.low)}</div>
          </div>
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">High Estimate</div>
            <div className="text-blue-800 text-lg font-bold">{fmt(costs.high)}</div>
          </div>
          <div className="result-box col-span-2">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Likely Cost (midpoint)</div>
            <div className="text-blue-800 text-xl font-bold">{fmt(midpoint)}</div>
          </div>
        </div>

        {/* Amber tip */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800">
          <strong>Tip:</strong> Always get 3 quotes. Waterproofing costs vary 50%+ between
          contractors.
        </div>
      </div>
    </div>
  );
}
