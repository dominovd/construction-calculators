import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

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

export default function HomePage() {
  return <HomeContent />;
}
