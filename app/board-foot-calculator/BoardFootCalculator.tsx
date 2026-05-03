"use client";

import { useState } from "react";

interface Board {
  id: number;
  thickness: string;
  width: string;
  length: string;
  quantity: string;
}

function calcBF(t: number, w: number, l: number, qty: number): number {
  return (t * w * l * qty) / 12;
}

export function BoardFootCalculator() {
  const [boards, setBoards] = useState<Board[]>([
    { id: 1, thickness: "1", width: "6", length: "8", quantity: "1" },
  ]);
  const [pricePerBF, setPricePerBF] = useState("5.00");

  const updateBoard = (id: number, field: keyof Board, value: string) => {
    setBoards((prev) =>
      prev.map((b) => (b.id === id ? { ...b, [field]: value } : b))
    );
  };

  const addRow = () => {
    setBoards((prev) => [
      ...prev,
      { id: Date.now(), thickness: "1", width: "6", length: "8", quantity: "1" },
    ]);
  };

  const removeRow = (id: number) => {
    if (boards.length === 1) return;
    setBoards((prev) => prev.filter((b) => b.id !== id));
  };

  const totalBF = boards.reduce((sum, b) => {
    const t = parseFloat(b.thickness) || 0;
    const w = parseFloat(b.width) || 0;
    const l = parseFloat(b.length) || 0;
    const q = parseInt(b.quantity) || 0;
    return sum + calcBF(t, w, l, q);
  }, 0);

  const price = parseFloat(pricePerBF) || 0;
  const totalCost = totalBF * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Board Foot Calculator</h2>
      </div>

      <div className="p-5">
        {/* Board rows — карточки на мобильном, таблица на десктопе */}
        <div className="space-y-3">
          {boards.map((board, idx) => {
            const t = parseFloat(board.thickness) || 0;
            const w = parseFloat(board.width) || 0;
            const l = parseFloat(board.length) || 0;
            const q = parseInt(board.quantity) || 0;
            const bf = calcBF(t, w, l, q);
            return (
              <div key={board.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50">
                {/* Row header */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-500">Board {idx + 1}</span>
                  {boards.length > 1 && (
                    <button
                      onClick={() => removeRow(board.id)}
                      className="text-gray-300 hover:text-red-400 text-sm"
                      aria-label="Remove board"
                    >
                      Remove
                    </button>
                  )}
                </div>
                {/* 2×2 grid of inputs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(
                    [
                      { field: "thickness", label: "Thickness (in)" },
                      { field: "width",     label: "Width (in)" },
                      { field: "length",    label: "Length (ft)" },
                      { field: "quantity",  label: "Qty" },
                    ] as const
                  ).map(({ field, label }) => (
                    <div key={field}>
                      <label className="block text-xs text-gray-400 mb-1">{label}</label>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.25"
                        value={board[field]}
                        onChange={(e) => updateBoard(board.id, field, e.target.value)}
                        className="calc-input text-center w-full"
                      />
                    </div>
                  ))}
                </div>
                {/* Result per board */}
                <div className="mt-2 text-right text-sm font-semibold text-blue-700">
                  {bf.toFixed(2)} board feet
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={addRow}
          className="mt-3 text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          + Add another board
        </button>

        {/* Price per BF */}
        <div className="mt-4">
          <label className="block text-sm text-gray-600 mb-1">
            Price per board foot ($) <span className="text-gray-400 text-xs">(optional)</span>
          </label>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.25"
            value={pricePerBF}
            onChange={(e) => setPricePerBF(e.target.value)}
            className="calc-input w-32"
          />
        </div>

        {/* Results */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Total Board Feet</p>
            <p className="text-2xl font-bold text-blue-800">{totalBF.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">board feet</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Estimated Cost</p>
            <p className="text-2xl font-bold text-blue-800">
              ${totalCost.toFixed(2)}
            </p>
            <p className="text-xs text-blue-500 mt-0.5">at ${pricePerBF}/bf</p>
          </div>
        </div>

        {/* Waste tip */}
        {totalBF > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            With 10% waste: <strong>{(totalBF * 1.1).toFixed(2)} bf</strong>
            {price > 0 && <> (${(totalCost * 1.1).toFixed(2)})</>}
          </div>
        )}
      </div>
    </div>
  );
}
