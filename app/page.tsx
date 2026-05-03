import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

const BASE_URL = "https://easybuildcalc.com";

export const metadata: Metadata = {
  title: "Free Construction Calculators for Builders & DIY",
  description:
    "Accurate, free construction calculators: board foot, roof pitch, rebar, stud framing, flooring, concrete, and more. Used by contractors and DIY homeowners.",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "x-default": BASE_URL,
      en: BASE_URL,
      uk: BASE_URL,
      ru: BASE_URL,
      pl: BASE_URL,
      de: BASE_URL,
      es: BASE_URL,
      fr: BASE_URL,
      ja: BASE_URL,
      ar: BASE_URL,
      it: BASE_URL,
    },
  },
  openGraph: {
    title: "Free Construction Calculators for Builders & DIY",
    description:
      "Accurate, free construction calculators: board foot, roof pitch, rebar, stud framing, flooring, and more.",
    url: BASE_URL,
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
