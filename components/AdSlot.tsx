"use client";

// Placeholder — замени на реальный AdSense код после одобрения аккаунта
// Реальный код будет выглядеть так:
// <ins className="adsbygoogle" style={{display:"block"}}
//      data-ad-client="ca-pub-XXXXXXXX" data-ad-slot="XXXXXXXX"
//      data-ad-format="auto" data-full-width-responsive="true" />

interface AdSlotProps {
  position?: "top" | "middle" | "bottom";
}

export function AdSlot({ position = "middle" }: AdSlotProps) {
  // В продакшне: убери этот placeholder и вставь реальный AdSense тег
  if (process.env.NODE_ENV === "production") {
    return null; // временно — подключишь AdSense отдельно
  }

  return (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center my-6">
      <p className="text-xs text-gray-400 uppercase tracking-wide">Ad slot — {position}</p>
      <p className="text-xs text-gray-400 mt-1">728×90 leaderboard / responsive</p>
    </div>
  );
}
