import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";
import { fetchMarketSummary, MATERIALS } from "@/lib/fred";

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
    { emoji: MATERIALS.lumber.emoji,   label: MATERIALS.lumber.label,   ...market.lumber },
    { emoji: MATERIALS.steel.emoji,    label: MATERIALS.steel.label,    ...market.steel },
    { emoji: MATERIALS.concrete.emoji, label: MATERIALS.concrete.label, ...market.concrete },
  ];

  const hasData = items.some((i) => i.mom !== null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HomeContent market={{ items, hasData }} />
    </>
  );
}
