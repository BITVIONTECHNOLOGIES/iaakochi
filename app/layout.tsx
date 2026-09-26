import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { site } from "@/data/site";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.shortName,
    title: site.title,
    description: site.description,
    url: site.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.shortName }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  icons: { icon: "/favicon.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  alternateName: site.shortName,
  slogan: site.tagline,
  email: site.email,
  telephone: "+919567429928",
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "St. George Centenary Arcade, Arackappady, Vengola P.O",
    addressLocality: "Perumbavoor",
    addressRegion: "Kerala",
    postalCode: "683556",
    addressCountry: "IN",
  },
  sameAs: [site.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory font-sans text-ink antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <Grain />
      </body>
    </html>
  );
}
