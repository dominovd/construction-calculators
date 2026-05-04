"use client";

import Link from "next/link";
import { GUIDES, type Tag } from "@/lib/guides";

const TAG_COLORS: Record<Tag, string> = {
  Roofing:    "bg-blue-100 text-blue-700",
  Foundation: "bg-stone-100 text-stone-700",
  Flooring:   "bg-amber-100 text-amber-700",
  Driveway:   "bg-gray-100 text-gray-700",
  Framing:    "bg-orange-100 text-orange-700",
  Insulation: "bg-green-100 text-green-700",
  Concrete:   "bg-yellow-100 text-yellow-800",
};

export function HowToHub() {
  const guides = GUIDES.filter(g => g.section === "howto");

  return (
    <div className="space-y-3">
      {guides.map(guide => (
        <Link
          key={guide.slug}
          href={`/howto/${guide.slug}`}
          className="block border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 leading-snug mb-1">
                {guide.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-2">
                {guide.summary}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {guide.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${TAG_COLORS[tag]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-gray-300 group-hover:text-blue-400 flex-shrink-0 text-lg mt-0.5">→</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
