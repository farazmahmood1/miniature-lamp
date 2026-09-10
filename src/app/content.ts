/**
 * Home page copy.
 *
 * Kept separate from the markup so the wording can be edited without touching layout.
 * Anything that also appears elsewhere on the site (services, case studies, posts)
 * is imported from `src/config` rather than repeated here.
 */

import { services } from "../config/services";
import { featuredCaseStudies } from "../config/work";
import { featuredPosts, formatPostDate } from "../config/blog";

/** Sticky rail beside the four capability blocks. Anchors into the blocks below. */
export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
  { href: "#strategy", label: "Strategy" },
  { href: "#design", label: "Design" },
  { href: "#build", label: "Build" },
  { href: "#launch-and-growth", label: "Launch & Growth" },
];

/**
 * Time from kickoff to a first production release, by delivery model.
 *
 * Two series, one per tab on the benchmark card. `bar` is the drawn length as a
 * percentage of the row width, so the fastest option fills the track.
 */
export type FeatureCardDataItem = {
  title: string;
  description: string;
  bar?: number;
};

export type BenchmarkSeries = {
  /** Tab label. */
  label: string;
  /** Caption under the chart, naming what is being measured. */
  caption: string;
  rows: FeatureCardDataItem[];
};

export const benchmarkSeries: BenchmarkSeries[] = [
  {
    label: "Web & SaaS",
    caption: "Weeks to a first production release",
    rows: [
      { title: "Codilated", description: "4wk", bar: 100 },
      { title: "Typical agency", description: "9wk", bar: 62 },
      { title: "Offshore team", description: "14wk", bar: 40 },
      { title: "New in-house hire", description: "22wk", bar: 24 },
    ],
  },
  {
    label: "AI automation",
    caption: "Weeks to the first process running unattended",
    rows: [
      { title: "Codilated", description: "3wk", bar: 100 },
      { title: "Typical agency", description: "8wk", bar: 48 },
      { title: "Offshore team", description: "13wk", bar: 30 },
      { title: "New in-house hire", description: "26wk", bar: 15 },
    ],
  },
];

/** The default series, for anything that renders the chart without tabs. */
export const featureCardData: FeatureCardDataItem[] = benchmarkSeries[0].rows;

/** The four scramble cards in the capability grid. Each links to a service page. */
export type CardsItem = {
  style: { maskImage: string };
  height: string;
  imgSrc: string;
  width: string;
  title: string;
  description: string;
  id: string;
  href: string;
  label: string;
};
export const cards: CardsItem[] = [
  {
    style: { maskImage: 'url("/assets/site/svg/8fb27f8bf195.svg")' },
    height: "719",
    imgSrc: "/assets/site/svg/8fb27f8bf195.svg",
    width: "719",
    title: "AI agents that clear real work",
    description: "Lead handling, outreach and back-office tasks, running without a person in the loop",
    id: "scrambletext-38",
    href: "/services/ai-automation",
    label: "AI agents that clear real work",
  },
  {
    style: { maskImage: 'url("/assets/site/svg/2de6c88b4fd2.svg")' },
    height: "54",
    imgSrc: "/assets/site/svg/2de6c88b4fd2.svg",
    width: "82",
    title: "Voice agents under a second",
    description: "Phone and chat assistants that answer, qualify and book straight into your calendar",
    id: "scrambletext-39",
    href: "/services/conversational-ai",
    label: "Voice agents under a second",
  },
  {
    style: { maskImage: 'url("/assets/site/svg/9f4b00338b4d.svg")' },
    height: "32",
    imgSrc: "/assets/site/svg/9f4b00338b4d.svg",
    width: "32",
    title: "SaaS products, not prototypes",
    description: "Multi-tenant applications with auth, billing and roles, built to be sold",
    id: "scrambletext-40",
    href: "/services/custom-ai-development",
    label: "SaaS products, not prototypes",
  },
  {
    style: { maskImage: 'url("/assets/site/svg/7ba46c6d7a62.svg")' },
    height: "32",
    imgSrc: "/assets/site/svg/7ba46c6d7a62.svg",
    width: "32",
    title: "Storefronts judged on checkout",
    description: "Shopify builds measured where revenue actually leaks, not on how they look",
    id: "scrambletext-41",
    href: "/services/shopify-ecommerce",
    label: "Storefronts judged on checkout",
  },
];

/** Capability chips. Every entry points at the service page that covers it. */
export type MediaTile2DataItem = {
  href: string;
  label: string;
};
export const mediaTile2Data: MediaTile2DataItem[] = [
  { href: "/services/ai-automation", label: "Workflow automation" },
  { href: "/services/conversational-ai", label: "Voice agents" },
  { href: "/services/conversational-ai", label: "WhatsApp & chat assistants" },
  { href: "/services/custom-ai-development", label: "Multi-tenant SaaS" },
  { href: "/services/custom-ai-development", label: "Retrieval over your documents" },
  { href: "/services/ai-data-analytics", label: "Forecasting & scoring models" },
  { href: "/services/web-development", label: "Next.js & React builds" },
  { href: "/services/web-development", label: "APIs & backend systems" },
  { href: "/services/web-development", label: "Mobile apps" },
  { href: "/services/shopify-ecommerce", label: "Shopify & Hydrogen" },
  { href: "/services/wordpress-development", label: "WordPress & WooCommerce" },
  { href: "/services/branding-design", label: "Design systems" },
  { href: "/services/digital-marketing", label: "SEO & paid acquisition" },
  { href: "/services/social-media-marketing", label: "Content & paid social" },
];

/** Blog teasers, derived from the post index so the home page cannot go stale. */
export type FeaturesItem = {
  /** Post slug — the card links to it. */
  variant: string;
  title: string;
  /** Display date. */
  date: string;
  category: string;
  /** ISO date for the <time> element. */
  dateTime: string;
};
export const features: FeaturesItem[] = featuredPosts.map((p) => ({
  variant: p.slug,
  title: p.title,
  date: formatPostDate(p.date),
  dateTime: p.date,
  category: p.category,
}));

/** Footer nav data kept for pages that still read it. Sourced from the service catalogue. */
export type ListRow5DataItem = {
  href: string;
  label: string;
};
export const listRow5Data: ListRow5DataItem[] = services
  .filter((s) => s.group === "ai")
  .map((s) => ({ href: s.href, label: s.shortName }));

export type ListRow6DataItem = {
  href: string;
  target: string;
  label: string;
  rel?: string;
};
export const listRow6Data: ListRow6DataItem[] = [
  { href: "/services", target: "_self", label: "Services" },
  { href: "/work", target: "_self", label: "Work" },
  { href: "/about", target: "_self", label: "About" },
  { href: "/pricing", target: "_self", label: "Pricing" },
  { href: "/blog", target: "_self", label: "Blog" },
  { href: "/contact", target: "_self", label: "Contact" },
];

export type ListRow7DataItem = {
  href: string;
  label: string;
};
export const listRow7Data: ListRow7DataItem[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of service" },
];

/** Case-study carousel on the home page. */
export const homeCaseStudies = featuredCaseStudies.map((c) => ({
  text: c.tags[0],
  text2: c.tags[1] ?? c.industry,
  style: { maskImage: `url("${c.logoSrc}")` },
  kind: "image",
  height: c.logoHeight,
  imgSrc: c.logoSrc,
  width: c.logoWidth,
  title: ` ${c.title} `,
  kind2: "icon",
  href: `/work/${c.slug}`,
  label: ` ${c.title} `,
}));
