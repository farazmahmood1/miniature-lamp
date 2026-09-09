import "./globals.css";
import "./motion.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

import { site, SITE_ORIGIN, OG_IMAGE, socials } from "../config/site";
import { services } from "../config/services";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import Preloader from "../components/layout/Preloader";
import ScrambleTextRuntime from "../components/motion/ScrambleTextRuntime";
import SmoothScroll from "../components/motion/SmoothScroll";
import StickyHeader from "../components/motion/StickyHeader";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN || "http://localhost:3000"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    // Every page sets its own title; this appends the brand consistently.
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_ORIGIN }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: SITE_ORIGIN,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "any" },
    ],
    apple: [{ url: "/icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101421",
};

/**
 * Organisation, website and offer-catalogue structured data.
 *
 * Built from the same config the pages read, so a service added to the catalogue
 * appears in the markup and in the structured data at the same time.
 */
function structuredData() {
  const organisation = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_ORIGIN}/#organization`,
    name: site.name,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/icon.png`,
    image: `${SITE_ORIGIN}${OG_IMAGE}`,
    description: site.description,
    email: site.contact.email,
    telephone: site.contact.phone,
    foundingDate: String(site.foundingYear),
    priceRange: "$$",
    areaServed: { "@type": "Place", name: site.contact.areaServed },
    sameAs: socials.map((s) => s.href),
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.name} services`,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.summary,
          url: `${SITE_ORIGIN}${s.href}`,
        },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.contact.phone,
        email: site.contact.email,
        url: `${SITE_ORIGIN}/contact`,
        availableLanguage: ["en"],
        areaServed: site.contact.areaServed,
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: site.name,
    description: site.shortDescription,
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    inLanguage: site.locale,
  };

  return [organisation, website];
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {structuredData().map((node, i) => (
          <script
            key={`ld-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
          />
        ))}
      </head>
      <body
        className="block text-foreground [font-family:'Suisse_Int'l',_sans-serif] text-base font-medium not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr]"
        data-cid="n0"
      >
        {/* Skip link: the first tab stop, jumping past the header to the page body. */}
        <a className="ct-skip-link" href="#content">
          Skip to content
        </a>

        <Preloader />

        {/* Page-wide behaviours: they attach to markup the routes already render. */}
        <ScrambleTextRuntime />
        <SmoothScroll />
        <StickyHeader />

        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
