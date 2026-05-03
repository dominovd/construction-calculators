import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://easybuildcalc.com"),
  title: {
    default: "Free Construction Calculators | EasyBuildCalc",
    template: "%s | EasyBuildCalc",
  },
  description:
    "Free online construction calculators for contractors, builders, and DIY projects. Board foot, roof pitch, rebar, concrete, flooring, and more.",
  keywords: ["construction calculator", "building calculator", "contractor tools", "DIY calculator"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EasyBuildCalc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") as Locale) || "en";

  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content="ZQ1waCH9VzWxNtRgULBPxZ3yTGbg4VLAroLQpsnlsdQ" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider initialLocale={locale}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
