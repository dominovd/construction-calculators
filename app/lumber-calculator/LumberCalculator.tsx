"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

const COMMON_SIZES = [
  { label: "2×4",   thickIn: 1.5, widthIn: 3.5 },
  { label: "2×6",   thickIn: 1.5, widthIn: 5.5 },
  { label: "2×8",   thickIn: 1.5, widthIn: 7.25 },
  { label: "2×10",  thickIn: 1.5, widthIn: 9.25 },
  { label: "2×12",  thickIn: 1.5, widthIn: 11.25 },
  { label: "4×4",   thickIn: 3.5, widthIn: 3.5 },
  { label: "1×6",   thickIn: 0.75, widthIn: 5.5 },
  { label: "Custom", thickIn: 0,  widthIn: 0 },
];

export function LumberCalculator() {
  const [sizeIdx, setSizeIdx] = useState(0);
  const [customThick, setCustomThick] = useState("1.5");
  const [customWidth, setCustomWidth] = useState("3.5");
  const [lengthFt, setLengthFt] = useState("8");
  const [quantity, setQuantity] = useState("10");
  const [pricePerBF, setPricePerBF] = useState(String(getRetailDefault("lumber-bf-spf")));

  const size = COMMON_SIZES[sizeIdx];
  const isCustom = sizeIdx === COMMON_SIZES.length - 1;
  const thickIn = isCustom ? parseFloat(customThick) || 0 : size.thickIn;
  const widthIn = isCustom ? parseFloat(customWidth) || 0 : size.widthIn;
  const len = parseFloat(lengthFt) || 0;
  const qty = parseFloat(quantity) || 0;
  const price = parseFloat(pricePerBF) || 0;

  const bfPerBoard = (thickIn * widthIn * len) / 12;
  const totalBF = bfPerBoard * qty;
  const totalCost = totalBF * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Lumber Cost Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Lumber Size (actual dimensions)</label>
          <div className="flex flex-wrap gap-2">
            {COMMON_SIZES.map((s, i) => (
              <button key={s.label} onClick={() => setSizeIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === sizeIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {isCustom && (
            <>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Thickness (in)</label>
                <input type="number" inputMode="decimal" min="0" step="0.25" value={customThick}
                  onChange={(e) => setCustomThick(e.target.value)} className="calc-input text-center" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Width (in)</label>
                <input type="number" inputMode="decimal" min="0" step="0.25" value={customWidth}
                  onChange={(e) => setCustomWidth(e.target.value)} className="calc-input text-center" />
              </div>
            </>
          )}
          {[
            { label: "Length (ft)",      value: lengthFt,   setter: setLengthFt },
            { label: "Quantity (boards)", value: quantity,   setter: setQuantity, step: "1" },
            { label: "Price / BF ($)",   value: pricePerBF, setter: setPricePerBF },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step={step || "0.25"} value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "BF / Board",   value: bfPerBoard.toFixed(2),    sub: "board feet" },
            { label: "Total BF",     value: totalBF.toFixed(1),       sub: `${qty} boards` },
            { label: "Dimensions",   value: `${thickIn}″×${widthIn}″`, sub: `${len}′ long` },
            { label: "Est. Cost",    value: `$${totalCost.toFixed(2)}`, sub: `at $${pricePerBF}/BF` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {totalBF > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Formula: (Thickness × Width × Length) ÷ 12 = board feet per board.
            Hardwood is typically priced by BF; framing lumber by linear foot or per board.
          </div>
        )}
      </div>
    </div>
  );
}
