import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";
import { localeAlternates } from "@/lib/locale-meta";

export async function generateMetadata(): Promise<Metadata> {
  const { canonical, languages } = await localeAlternates("");
  return {
    title: "Free Construction Calculators for Builders & DIY",
    description:
      "Accurate, free construction calculators: board foot, roof pitch, rebar, stud framing, flooring, concrete, and more. Used by contractors and DIY homeowners.",
    alternates: { canonical, languages },
    openGraph: {
      title: "Free Construction Calculators for Builders & DIY",
      description:
        "Accurate, free construction calculators: board foot, roof pitch, rebar, stud framing, flooring, and more.",
      url: canonical,
      type: "website",
    },
  };
}

export default function HomePage() {
  return <HomeContent />;
}
