/**
 * Every internal route the chrome links to, in one place.
 *
 * The header and footer both read from here, so a route rename cannot leave one of
 * them pointing at a dead URL. `routes` is the canonical list the sitemap walks.
 */

import { services } from "./services";

export const routes = {
  home: "/",
  services: "/services",
  work: "/work",
  about: "/about",
  blog: "/blog",
  pricing: "/pricing",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

/** Primary nav, left of the sign-in group. */
export const primaryNav = [
  { label: "Services", href: routes.services },
  { label: "Work", href: routes.work },
  { label: "Pricing", href: routes.pricing },
  { label: "Blog", href: routes.blog },
  { label: "About", href: routes.about },
];

/** The two calls to action that appear in the header and at the foot of every page. */
export const primaryCta = {
  label: "Start a project",
  href: routes.contact,
};

export const secondaryCta = {
  label: "Book a call",
  href: `${routes.contact}#book`,
};

export const footerColumns = [
  {
    title: "AI & Automation",
    links: services
      .filter((s) => s.group === "ai")
      .map((s) => ({ label: s.shortName, href: s.href })),
  },
  {
    title: "Web & Growth",
    links: services
      .filter((s) => s.group === "digital")
      .map((s) => ({ label: s.shortName, href: s.href })),
  },
  {
    title: "Codilated",
    links: [
      { label: "Work", href: routes.work },
      { label: "About", href: routes.about },
      { label: "Pricing", href: routes.pricing },
      { label: "Blog", href: routes.blog },
      { label: "Contact", href: routes.contact },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: routes.privacy },
  { label: "Terms of Service", href: routes.terms },
];
