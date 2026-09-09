/**
 * Single source of truth for everything that identifies Codilated.
 *
 * Nothing in the app should hardcode the company name, a contact detail or a social
 * URL — import it from here so a change lands everywhere at once (metadata, JSON-LD,
 * header, footer, contact page, llms.txt and the sitemap all read from this file).
 */

export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://codilated.com"
).replace(/\/$/, "");

export const site = {
  name: "Codilated",
  legalName: "Codilated",
  /** Used as the OpenGraph site name and the browser-tab suffix. */
  titleSuffix: "Codilated",
  tagline: "AI-first software studio",
  /** One line. Used on the home hero and as the default meta description fallback. */
  shortDescription:
    "Codilated is an AI-first software studio. We design, build and ship web apps, AI automation and digital products for teams that need them working in production, not in a deck.",
  description:
    "Codilated is an AI-first software studio building AI automation, conversational agents, web and SaaS products, e-commerce stores and the brand and growth systems around them.",
  foundingYear: 2024,
  locale: "en-US",
  contact: {
    email: "info@codilated.com",
    phone: "+1-805-251-9188",
    /** Pre-formatted for display; `phone` stays E.164 for tel: and schema. */
    phoneDisplay: "+1 (805) 251-9188",
    areaServed: "Worldwide",
  },
} as const;

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/codilated", icon: "linkedin" },
  { label: "X", href: "https://x.com/codilated", icon: "x" },
  { label: "GitHub", href: "https://github.com/codilated", icon: "github" },
  { label: "Instagram", href: "https://www.instagram.com/codilated", icon: "instagram" },
] as const;

export type SocialLink = (typeof socials)[number];

/** Absolute URL for a site-relative path. Used by metadata, JSON-LD and the sitemap. */
export const absoluteUrl = (path = "/") =>
  `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * The default social share image.
 *
 * Generated at build time by , so there is no static
 * asset to keep in sync with the brand.
 */
export const OG_IMAGE = "/opengraph-image";
