"use client";

import { useState } from "react";

const WINDOW_TYPES = [
  { label: "Double-Hung",   laborMult: 1.0 },
  { label: "Casement",      laborMult: 1.2 },
  { label: "Sliding",       laborMult: 1.0 },
  { label: "Bay / Bow",     laborMult: 2.0 },
  { label: "Skylight",      laborMult: 2.5 },
  { label: "Picture",       laborMult: 0.9 },
];

type Window = { width: string; height: string; qty: string; typeIdx: number; price: string };

const makeRow = (): Window => ({ width: "36", height: "48", qty: "1", typeIdx: 0, price: "350" });

export function WindowCalculator() {
  const [windows, setWindows] = useState<Window[]>([makeRow()]);
  const [laborRate, setLaborRate] = useState("75"); // per window

  const updateRow = (i: number, field: keyof Window, val: string | number) => {
    setWindows(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: val } : r));
  };

  const addRow = () => setWindows(prev => [...prev, makeRow()]);
  const removeRow = (i: number) => setWindows(prev => prev.filter((_, idx) => idx !== i));

  const labor = parseFloat(laborRate) || 0;

  // Compute per row
  const rows = windows.map(r => {
    const w    = parseFloat(r.width)  || 0;
    const h    = parseFloat(r.height) || 0;
    const qty  = parseInt(r.qty)      || 0;
    const price= parseFloat(r.price)  || 0;
    const type = WINDOW_TYPES[r.typeIdx];
    const sqFt = (w * h) / 144;
    const materialCost = price * qty;
    const laborCost    = labor * type.laborMult * qty;
    return { w, h, qty, sqFt, materialCost, laborCost, type };
  });

  const totalWindows = rows.reduce((s, r) => s + r.qty, 0);
  const totalSqFt    = rows.reduce((s, r) => s + r.sqFt * r.qty, 0);
  const totalMat     = rows.reduce((s, r) => s + r.materialCost, 0);
  const totalLabor   = rows.reduce((s, r) => s + r.laborCost, 0);
  const grandTotal   = totalMat + totalLabor;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3 flex items-center justify-between">
        <h2 className="text-white font-semibold text-sm">Window Calculator</h2>
        <span className="text-blue-200 text-xs">Labor: $</span>
        <input type="number" inputMode="decimal" min="0" step="5" value={laborRate}
          onChange={e => setLaborRate(e.target.value)}
          className="w-16 text-xs text-center bg-blue-600 border border-blue-400 text-white rounded px-1 py-0.5 ml-1" />
        <span className="text-blue-200 text-xs ml-1">/window</span>
      </div>

      <div className="p-5 space-y-4">
        {/* Window rows */}
        <div className="space-y-3">
          {windows.map((r, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-gray-600">Window {i + 1}</span>
                <div className="flex gap-1 ml-1">
                  {WINDOW_TYPES.map((t, ti) => (
                    <button key={t.label} onClick={() => updateRow(i, "typeIdx", ti)}
                      className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                        ti === r.typeIdx
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-white border-gray-300 text-gray-500 hover:border-blue-400"
                      }`}>{t.label}</button>
                  ))}
                </div>
                {windows.length > 1 && (
                  <button onClick={() => removeRow(i)} className="ml-auto text-xs text-red-400 hover:text-red-600">✕</button>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Width (in)", field: "width",  val: r.width },
                  { label: "Height (in)",field: "height", val: r.height },
                  { label: "Qty",        field: "qty",    val: r.qty },
                  { label: "Price/ea ($)",field: "price", val: r.price },
                ].map(({ label, field, val }) => (
                  <div key={field}>
                    <label className="block text-xs text-gray-400 mb-0.5">{label}</label>
                    <input type="number" inputMode="decimal" min="0" value={val}
                      onChange={e => updateRow(i, field as keyof Window, e.target.value)}
                      className="calc-input text-center text-sm" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button onClick={addRow}
          className="w-full text-xs border border-dashed border-blue-300 text-blue-500 rounded-lg py-2 hover:bg-blue-50 transition-colors">
          + Add Another Window
        </button>

        {/* Totals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Total Windows",  value: totalWindows.toString(),           sub: "all types" },
            { label: "Total Glass",    value: `${totalSqFt.toFixed(1)} sq ft`,   sub: "rough opening area" },
            { label: "Materials",      value: `$${totalMat.toFixed(0)}`,          sub: "windows only" },
            { label: "Total w/ Labor", value: `$${grandTotal.toFixed(0)}`,        sub: `labor $${totalLabor.toFixed(0)}` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
