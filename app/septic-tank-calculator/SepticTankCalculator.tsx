"use client";

import { useState } from "react";

type SoilType = "sandy" | "loamy" | "clay";

const SOIL_LABELS: Record<SoilType, string> = {
  sandy: "Sandy / Fast draining",
  loamy: "Loamy / Average",
  clay: "Clay / Slow draining",
};

const LOADING_RATES: Record<SoilType, number> = {
  sandy: 1.2,
  loamy: 0.6,
  clay: 0.3,
};

// Code-minimum tank size by bedroom count (index 0 = 1 bedroom)
const CODE_MINIMUMS: number[] = [1000, 1000, 1000, 1250, 1500, 1750];
const STANDARD_TANK_SIZES = [750, 1000, 1250, 1500, 1750, 2000];

function getCodeMinimum(bedrooms: number): number {
  const index = Math.min(bedrooms - 1, CODE_MINIMUMS.length - 1);
  return CODE_MINIMUMS[Math.max(0, index)];
}

function nextStandardTankSize(gallons: number): number {
  return (
    STANDARD_TANK_SIZES.find((s) => s >= gallons) ??
    STANDARD_TANK_SIZES[STANDARD_TANK_SIZES.length - 1]
  );
}

export function SepticTankCalculator() {
  const [bedrooms, setBedrooms] = useState<string>("3");
  const [occupants, setOccupants] = useState<string>("4");
  const [gallonsPerPerson, setGallonsPerPerson] = useState<string>("75");
  const [soilType, setSoilType] = useState<SoilType>("loamy");

  const bedroomCount = Math.max(1, parseInt(bedrooms) || 1);
  const occupantCount = parseFloat(occupants) || 0;
  const gpPerson = parseFloat(gallonsPerPerson) || 0;

  const dailyFlow = Math.round(occupantCount * gpPerson);
  const codeMin = getCodeMinimum(bedroomCount);
  const requiredRaw = Math.max(codeMin, dailyFlow * 2);
  const minTankSize = nextStandardTankSize(requiredRaw);

  const loadingRate = LOADING_RATES[soilType];
  const drainFieldArea = loadingRate > 0 ? Math.round(dailyFlow / loadingRate) : 0;
  // Linear feet of trench assuming 2 ft wide trenches
  const trenchLength = Math.round(drainFieldArea / 2);

  const soilTypes: SoilType[] = ["sandy", "loamy", "clay"];

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Septic Tank Size Calculator</h2>
      </div>

      <div className="p-5 space-y-5">
        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Number of Bedrooms
          </label>
          <input
            type="number"
            min={1}
            max={10}
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="calc-input"
          />
        </div>

        {/* Occupants + GPD */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Number of Occupants
            </label>
            <input
              type="number"
              min={1}
              value={occupants}
              onChange={(e) => setOccupants(e.target.value)}
              className="calc-input"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Gallons per Person per Day
            </label>
            <input
              type="number"
              min={50}
              max={150}
              value={gallonsPerPerson}
              onChange={(e) => setGallonsPerPerson(e.target.value)}
              className="calc-input"
            />
          </div>
        </div>

        {/* Soil type */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">Soil Type</label>
          <div className="flex flex-wrap gap-2">
            {soilTypes.map((s) => (
              <button
                key={s}
                onClick={() => setSoilType(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  soilType === s
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                }`}
              >
                {SOIL_LABELS[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-3">
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Daily Flow</div>
            <div className="text-blue-800 text-xl font-bold">{dailyFlow} GPD</div>
          </div>
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Min Tank Size</div>
            <div className="text-blue-800 text-xl font-bold">
              {minTankSize.toLocaleString()} gal
            </div>
          </div>
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Drain Field Area</div>
            <div className="text-blue-800 text-xl font-bold">
              {drainFieldArea.toLocaleString()} sq ft
            </div>
          </div>
          <div className="result-box">
            <div className="text-blue-600 text-xs font-medium mb-0.5">Trench Length (2 ft wide)</div>
            <div className="text-blue-800 text-xl font-bold">
              {trenchLength.toLocaleString()} LF
            </div>
          </div>
        </div>

        {/* Amber tip */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800">
          <strong>Tip:</strong> Septic sizing requirements vary by state and county. Always verify
          with your local health department before installation.
        </div>
      </div>
    </div>
  );
}
