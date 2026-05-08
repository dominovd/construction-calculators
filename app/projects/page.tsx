import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Project Cost Estimators (2026) — EasyBuildCalc",
  description:
    "Plan and budget complete construction projects: deck, garage, basement, fence, and room paint. Each project bundles the calculators you need with step-by-step cost.",
  alternates: { canonical: "https://easybuildcalc.com/projects" },
};

const PROJECTS = [
  {
    slug: "build-a-deck",
    title: "Build a Deck (12×16)",
    description: "Total cost, materials list, and step-by-step plan for a standard 12×16 ground-level deck.",
    emoji: "🪜",
    status: "live" as const,
  },
  // Stubs for upcoming bundles — keep them visible so internal links resolve later.
  { slug: "finish-a-basement",    title: "Finish a Basement",     description: "Coming soon — drywall, insulation, flooring, paint, waterproofing.",        emoji: "🏠", status: "soon" as const },
  { slug: "build-a-garage",       title: "Build a Garage",        description: "Coming soon — slab, framing, roofing, drywall, insulation, paint.",          emoji: "🚗", status: "soon" as const },
  { slug: "install-a-fence",      title: "Install a Fence",       description: "Coming soon — panels, posts, post concrete, stain.",                          emoji: "🪵", status: "soon" as const },
  { slug: "paint-a-room",         title: "Paint a Room",          description: "Coming soon — paint coverage, primer, supplies, drywall patching.",           emoji: "🎨", status: "soon" as const },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://easybuildcalc.com/projects" },
  ],
};

export default function ProjectsIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Projects</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Construction Project Cost Estimators</h1>
      <p className="text-gray-600 mb-6">
        Each project bundles the calculators you actually need plus a step-by-step plan and a total cost
        estimate — so you don&apos;t have to add up four spreadsheets.
      </p>

      <ul className="grid sm:grid-cols-2 gap-3">
        {PROJECTS.map((p) => (
          <li key={p.slug}>
            {p.status === "live" ? (
              <Link href={`/projects/${p.slug}`}
                className="block border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{p.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{p.description}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="block border border-gray-200 rounded-xl p-4 bg-gray-50 opacity-70">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {p.title}{" "}
                      <span className="text-xs font-normal text-gray-500 bg-gray-200 rounded-full px-2 py-0.5 ml-1">
                        Coming soon
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">{p.description}</p>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
