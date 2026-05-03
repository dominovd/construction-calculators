"use client";

import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

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
  const { t } = useT();
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
    const th = parseFloat(b.thickness) || 0;
    const w = parseFloat(b.width) || 0;
    const l = parseFloat(b.length) || 0;
    const q = parseInt(b.quantity) || 0;
    return sum + calcBF(th, w, l, q);
  }, 0);

  const price = parseFloat(pricePerBF) || 0;
  const totalCost = totalBF * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">{t("calc_board_foot")}</h2>
      </div>

      <div className="p-5">
        <div className="space-y-3">
          {boards.map((board, idx) => {
            const th = parseFloat(board.thickness) || 0;
            const w = parseFloat(board.width) || 0;
            const l = parseFloat(board.length) || 0;
            const q = parseInt(board.quantity) || 0;
            const bf = calcBF(th, w, l, q);
            return (
              <div key={board.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-500">{t("board")} {idx + 1}</span>
                  {boards.length > 1 && (
                    <button
                      onClick={() => removeRow(board.id)}
                      className="text-gray-300 hover:text-red-400 text-sm"
                      aria-label="Remove board"
                    >
                      {t("remove")}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(
                    [
                      { field: "thickness", labelKey: "thickness" },
                      { field: "width",     labelKey: "width_in" },
                      { field: "length",    labelKey: "length_ft" },
                      { field: "quantity",  labelKey: "qty" },
                    ] as const
                  ).map(({ field, labelKey }) => (
                    <div key={field}>
                      <label className="block text-xs text-gray-400 mb-1">{t(labelKey)}</label>
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
                <div className="mt-2 text-right text-sm font-semibold text-blue-700">
                  {bf.toFixed(2)} {t("board_feet")}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={addRow}
          className="mt-3 text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          {t("add_board")}
        </button>

        <div className="mt-4">
          <label className="block text-sm text-gray-600 mb-1">
            {t("price_per_bf")} <span className="text-gray-400 text-xs">{t("optional")}</span>
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

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("total_board_feet")}</p>
            <p className="text-2xl font-bold text-blue-800">{totalBF.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">{t("board_feet")}</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("estimated_cost")}</p>
            <p className="text-2xl font-bold text-blue-800">${totalCost.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">at ${pricePerBF}/bf</p>
          </div>
        </div>

        {totalBF > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            {t("with_waste")} <strong>{(totalBF * 1.1).toFixed(2)} bf</strong>
            {price > 0 && <> (${(totalCost * 1.1).toFixed(2)})</>}
          </div>
        )}
      </div>
    </div>
  );
}
