import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";
import { fetchMarketSummary, formatPct, formatDate, MATERIALS } from "@/lib/fred";

export const metadata: Metadata = {
  title: "Free Construction Calculators for Builders & DIY",
  description:
    "Accurate, free construction calculators: board foot, roof pitch, rebar, stud framing, flooring, concrete, and more. Used by contractors and DIY homeowners.",
  alternates: {
    canonical: "https://easybuildcalc.com",
  },
  openGraph: {
    title: "Free Construction Calculators for Builders & DIY",
    description: "Accurate, free construction calculators for contractors and DIY homeowners.",
    url: "https://easybuildcalc.com",
    type: "website",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EasyBuildCalc",
  url: "https://easybuildcalc.com",
  description: "Free online construction calculators for contractors, builders, and DIY homeowners.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are these construction calculators really free?", acceptedAnswer: { "@type": "Answer", text: "Yes — every calculator on EasyBuildCalc is completely free to use. No account, no subscription, and no paywall. All calculations run in your browser and your data is never sent to any server." } },
    { "@type": "Question", name: "How accurate are the results?", acceptedAnswer: { "@type": "Answer", text: "All calculators use standard industry formulas from construction estimating references and manufacturer coverage tables. Results are accurate estimates and should be used for planning and budgeting. For structural applications, always verify with your engineer or supplier." } },
    { "@type": "Question", name: "Do I need to sign up or create an account?", acceptedAnswer: { "@type": "Answer", text: "No sign-up required. All tools are free and open — just enter your dimensions and get instant results." } },
    { "@type": "Question", name: "What construction calculators do you offer?", acceptedAnswer: { "@type": "Answer", text: "EasyBuildCalc offers 19 free calculators covering concrete, lumber board feet, roof pitch, rebar, drywall, paint, flooring, studs, asphalt, mulch, fence, deck, shingles, concrete mix, insulation, gravel, sand, and more." } },
    { "@type": "Question", name: "Can I use these calculators on my phone?", acceptedAnswer: { "@type": "Answer", text: "Yes. All calculators are fully responsive and work on any device — phone, tablet, or desktop. No app download needed." } },
  ],
};

export default async function HomePage() {
  const market = await fetchMarketSummary();

  const items = [
    { key: "lumber",   label: MATERIALS.lumber.label,   emoji: MATERIALS.lumber.emoji,   ...market.lumber },
    { key: "steel",    label: MATERIALS.steel.label,    emoji: MATERIALS.steel.emoji,    ...market.steel },
    { key: "concrete", label: MATERIALS.concrete.label, emoji: MATERIALS.concrete.emoji, ...market.concrete },
  ];

  const hasData = items.some((i) => i.mom !== null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HomeContent />
      {hasData && (
        <section className="max-w-3xl mx-auto px-4 pb-10 -mt-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">
                📊 Material Price Index — this month
              </h2>
              <a href="/material-prices" className="text-xs text-blue-600 hover:underline">
                View full history →
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {items.map(({ key, emoji, label, mom, lastDate }) => {
                const up = mom !== null && mom > 0;
                const dn = mom !== null && mom < 0;
                return (
                  <div key={key} className="text-center">
                    <div className="text-xl mb-1">{emoji}</div>
                    <p className="text-[11px] text-gray-500 leading-tight mb-1">{label.split(" ")[0]}</p>
                    <p
                      className={`text-base font-bold ${
                        up ? "text-red-600" : dn ? "text-green-600" : "text-gray-700"
                      }`}
                    >
                      {up ? "↑" : dn ? "↓" : "→"} {formatPct(mom)}
                    </p>
                    {lastDate && (
                      <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(lastDate)}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
