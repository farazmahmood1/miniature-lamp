/**
 * Case studies shown on /work and /work/[slug].
 *
 * PLACEHOLDER CONTENT — replace with real engagements before launch.
 * These are written in the shape a finished case study takes (situation, approach,
 * outcome, quantified result) so swapping in real projects is an edit rather than a
 * rebuild. Client names below are illustrative; do not publish them as references
 * without permission.
 */

export type CaseStudy = {
  slug: string;
  /** Client or product name. */
  client: string;
  /** Headline for the card and the case-study hero. */
  title: string;
  /** One line for the card. */
  summary: string;
  /** Which service this engagement sat under. Links the case study back to the service. */
  serviceSlug: string;
  /** Groups the case study under a filter on the home page and the work index. */
  category: "ai" | "product" | "growth";
  /** Shown in the meta row on the case study page. */
  location: string;
  /** The three-phase breakdown, in the order the engagement ran. */
  phases: { name: string; duration: string; items: string[] }[];
  /** Artwork. Placeholder abstracts until real project imagery exists. */
  images: { hero: string; gallery: string[] };
  /** Short labels shown as chips on the card. */
  tags: string[];
  industry: string;
  year: string;
  /** Engagement length, in the form shown on the page. */
  duration: string;
  /** The mono-cased headline numbers. Two or three is the right amount. */
  results: { value: string; label: string }[];
  /** Long-form body. Each block renders as a titled section. */
  sections: { heading: string; body: string[] }[];
  /** Optional pull quote. Attributed, or omitted entirely. */
  quote?: { text: string; author: string; role: string };
  /**
   * Neutral geometric mark used as the card's logo mask. Deliberately abstract:
   * these are illustrative case studies, so no real company mark belongs here.
   */
  logoSrc: string;
  logoWidth: string;
  logoHeight: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northwind-logistics-quote-automation",
    client: "Northwind Logistics",
    title: "Cutting freight quote turnaround from two days to eleven minutes",
    summary:
      "An agent pipeline that reads inbound quote requests, prices them against live carrier rates and drafts the reply for a human to approve.",
    serviceSlug: "ai-automation",
    category: "ai",
    location: "Manchester, UK",
    images: {
      hero: "/assets/site/images/4d8a8180db80.jpg",
      gallery: [
        "/assets/site/images/191ec76fa273.jpg",
        "/assets/site/images/ca1833da6f43.jpg",
      ],
    },
    phases: [
      {
        name: "Discovery",
        duration: "2 weeks",
        items: [
          "Intake mapping across four channels",
          "Volume and error-cost ranking",
          "Shadow-run baseline",
        ],
      },
      {
        name: "Design",
        duration: "3 weeks",
        items: [
          "Extraction schema",
          "Confidence thresholds",
          "Exception queue for humans",
        ],
      },
      {
        name: "Build",
        duration: "9 weeks",
        items: [
          "Rating-tool integration",
          "Reply drafting in-template",
          "Logging and drift alerts",
        ],
      },
    ],
    tags: ["AI Automation", "Operations", "Integrations"],
    industry: "Freight & logistics",
    year: "2025",
    duration: "14 weeks",
    results: [
      { value: "11 min", label: "Median quote turnaround" },
      { value: "94%", label: "Quotes needing no human edit" },
      { value: "3.2x", label: "Quote volume handled per rep" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "Northwind's inside sales team was fielding around four hundred quote requests a week across email, a web form and two customer portals. Every one of them was re-keyed by hand into a rating tool, cross-checked against carrier contracts and sent back as a formatted email. Median turnaround was just under two days.",
          "The cost was not the labour. It was the lost business. Their own win-rate analysis showed that quotes returned within an hour converted at roughly three times the rate of quotes returned the next day, and they were losing the fast lane entirely.",
        ],
      },
      {
        heading: "What we built",
        body: [
          "We started by mapping where requests actually entered the business, which turned up two intake paths nobody on the leadership team knew were still live. Consolidating intake came before any model work.",
          "The pipeline extracts structured shipment details from unstructured requests, resolves origin and destination against a normalised location table, prices the lane against live carrier rates, and drafts a reply in the account manager's own template. Anything the extractor is not confident about, or any lane priced outside historical bounds, routes to a person with the reasoning attached rather than being sent.",
          "We shipped the extraction and routing first and let it run in shadow mode for three weeks, comparing its output against what the team actually sent. That comparison, not a benchmark, is what set the confidence thresholds.",
        ],
      },
      {
        heading: "Where it landed",
        body: [
          "Median turnaround is now eleven minutes, and the team handles roughly three times the quote volume per person without new headcount. Ninety-four percent of drafted quotes go out with no human edit.",
          "The part the team values most is the exception queue. Rather than every quote being equally manual, the six percent that genuinely need judgement now arrive with the pricing rationale attached and get proper attention.",
        ],
      },
    ],
    quote: {
      text: "We expected to save time. What we did not expect was that the exceptions would get better attention, because they stopped competing with three hundred routine quotes for the same hour.",
      author: "Operations Director",
      role: "Northwind Logistics",
    },
    logoSrc: "/assets/brand/marks/mark-01.svg",
    logoWidth: "120",
    logoHeight: "32",
  },
  {
    slug: "meridian-health-intake-agent",
    client: "Meridian Health Group",
    title: "A voice agent that books appointments without sounding like one",
    summary:
      "After-hours call handling for a twelve-clinic group, answering, triaging and booking straight into the practice management system.",
    serviceSlug: "conversational-ai",
    category: "ai",
    location: "Twelve clinics, UK",
    images: {
      hero: "/assets/site/images/ca1833da6f43.jpg",
      gallery: [
        "/assets/site/images/3f516d703cfa.jpg",
        "/assets/site/images/9b60c7e691bd.jpg",
      ],
    },
    phases: [
      {
        name: "Discovery",
        duration: "2 weeks",
        items: [
          "Call-recording review",
          "Clinical governance constraints",
          "Booking-system audit",
        ],
      },
      {
        name: "Design",
        duration: "2 weeks",
        items: [
          "Triage classifier boundary",
          "Transfer path to the nurse line",
          "Latency budget per stage",
        ],
      },
      {
        name: "Build",
        duration: "6 weeks",
        items: [
          "Streaming voice pipeline",
          "Live availability lookup",
          "Transcript review workflow",
        ],
      },
    ],
    tags: ["Conversational AI", "Voice", "Healthcare"],
    industry: "Healthcare",
    year: "2025",
    duration: "10 weeks",
    results: [
      { value: "640ms", label: "Median response latency" },
      { value: "71%", label: "After-hours calls resolved without a callback" },
      { value: "0", label: "Clinical questions answered by the agent" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "Meridian's twelve clinics shared a single after-hours answering service that took a message and passed it on in the morning. Roughly a third of those callers had booked elsewhere by the time anyone rang back.",
          "The constraint that shaped the whole build was a hard one: the agent could take bookings and answer logistics questions, and it could not answer anything clinical. Not cautiously, not with a disclaimer. Not at all.",
        ],
      },
      {
        heading: "What we built",
        body: [
          "A voice agent on the after-hours line that recognises the caller, checks availability against the practice management system in real time, books the appointment and sends confirmation by text before hanging up.",
          "Clinical triage was solved by classification rather than by prompt instructions. Anything the classifier reads as symptom-related or urgent leaves the conversational path immediately and transfers to the on-call nurse line, with the transcript. The agent never gets an opportunity to improvise, because on that branch it is no longer driving the call.",
          "Getting the latency under a second took most of the engineering time. We tuned the recognition endpointing, moved to a streaming response, and started synthesis on the first clause rather than waiting for a complete reply.",
        ],
      },
      {
        heading: "Where it landed",
        body: [
          "Seventy-one percent of after-hours calls now end with a confirmed booking and no callback required. Median response latency sits at 640 milliseconds, which is the point where callers stopped talking over the agent.",
          "Across six months of reviewed transcripts, the agent has answered zero clinical questions. Every one of them transferred, which is exactly the behaviour the clinical governance team signed off on.",
        ],
      },
    ],
    quote: {
      text: "The bar was never whether it could book an appointment. It was whether it would stay in its lane at two in the morning with a worried caller. It does.",
      author: "Practice Manager",
      role: "Meridian Health Group",
    },
    logoSrc: "/assets/brand/marks/mark-02.svg",
    logoWidth: "120",
    logoHeight: "32",
  },
  {
    slug: "atlas-supply-pricing-platform",
    client: "Atlas Supply Co.",
    title: "From spreadsheet pricing to a product their customers log into",
    summary:
      "A multi-tenant quoting platform with role-based access, usage billing and an assistant that explains how a price was reached.",
    serviceSlug: "custom-ai-development",
    category: "product",
    location: "Rotterdam, NL",
    images: {
      hero: "/assets/site/images/191ec76fa273.jpg",
      gallery: [
        "/assets/site/images/b4e3c148cedf.jpg",
        "/assets/site/images/4d8a8180db80.jpg",
      ],
    },
    phases: [
      {
        name: "Discovery",
        duration: "3 weeks",
        items: [
          "Prototype audit",
          "Contract and tier modelling",
          "Cost-per-action ceiling",
        ],
      },
      {
        name: "Design",
        duration: "4 weeks",
        items: [
          "Tenancy and role model",
          "Quote and explanation flows",
          "Billing surfaces",
        ],
      },
      {
        name: "Build",
        duration: "13 weeks",
        items: [
          "Multi-tenant application",
          "Audit trail on every price",
          "Stripe usage billing",
        ],
      },
    ],
    tags: ["SaaS", "Custom AI", "Multi-tenant"],
    industry: "Industrial supply",
    year: "2026",
    duration: "20 weeks",
    results: [
      { value: "5 weeks", label: "First prototype in front of customers" },
      { value: "38", label: "Customer accounts migrated off spreadsheets" },
      { value: "$0.04", label: "Inference cost per quote explained" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "Atlas priced every order through a shared spreadsheet that four people understood and nobody could safely change. Their largest customers had started asking for self-service pricing, which the spreadsheet could not become.",
          "They had a prototype from a previous engagement that demonstrated the pricing logic convincingly and could not be shown to two customers at once. There was no tenancy, no permissions and no way to bill.",
        ],
      },
      {
        heading: "What we built",
        body: [
          "We kept the pricing engine from the prototype, which was genuinely good work, and rebuilt everything around it. Multi-tenant data model, role-based permissions, audit trail on every price change, and usage-based billing through Stripe.",
          "The assistant layer answers the question customers actually asked, which was never what is the price but why is it that price. It walks back through the applied rules in plain language, citing the contract terms and volume tiers that produced the number.",
          "Cost control was designed in from the start. Explanations are cached against the rule set that produced them, so repeat questions on an unchanged quote cost nothing. Inference runs about four cents per explained quote.",
        ],
      },
      {
        heading: "Where it landed",
        body: [
          "A working prototype was in front of real customers in five weeks. Thirty-eight accounts have since moved off the spreadsheet entirely.",
          "The audit trail turned out to matter more than the assistant. Being able to show a customer exactly which contract term produced a price ended a category of dispute that used to consume a day a week.",
        ],
      },
    ],
    logoSrc: "/assets/brand/marks/mark-03.svg",
    logoWidth: "120",
    logoHeight: "32",
  },
  {
    slug: "kestrel-outdoors-storefront",
    client: "Kestrel Outdoors",
    title: "Rebuilding a storefront around the two steps that were leaking revenue",
    summary:
      "A Shopify replatform that started with checkout analytics rather than with a design, and ended with a faster store on a smaller app footprint.",
    serviceSlug: "shopify-ecommerce",
    category: "growth",
    location: "Cumbria, UK",
    images: {
      hero: "/assets/site/images/3f516d703cfa.jpg",
      gallery: [
        "/assets/site/images/ca1833da6f43.jpg",
        "/assets/site/images/b801ad8f31a6.jpg",
      ],
    },
    phases: [
      {
        name: "Discovery",
        duration: "2 weeks",
        items: [
          "Funnel instrumentation",
          "App script-weight audit",
          "Two leaks isolated",
        ],
      },
      {
        name: "Design",
        duration: "2 weeks",
        items: [
          "Theme on their own brand",
          "Merchandiser-editable templates",
          "Checkout and express paths",
        ],
      },
      {
        name: "Build",
        duration: "5 weeks",
        items: [
          "Custom theme",
          "Eleven apps removed",
          "Performance budget in CI",
        ],
      },
    ],
    tags: ["Shopify", "E-commerce", "Performance"],
    industry: "Outdoor retail",
    year: "2025",
    duration: "9 weeks",
    results: [
      { value: "+31%", label: "Checkout completion rate" },
      { value: "1.4s", label: "Largest contentful paint on mobile" },
      { value: "11", label: "Apps removed from the store" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "Kestrel came to us wanting a redesign. Their traffic was healthy and growing, and revenue was not following it.",
          "Before designing anything we instrumented the funnel properly, which had never been done. Two steps accounted for most of the loss: a variant selector that silently failed on mobile when a size was out of stock, and a shipping calculator that took eleven seconds to return on a slow connection.",
        ],
      },
      {
        heading: "What we built",
        body: [
          "We fixed both leaks in the first fortnight, on the existing theme, before the replatform started. That alone recovered most of the gap and paid for the rest of the engagement.",
          "The new theme was built on their brand rather than on a purchased template, with product and collection layouts the merchandising team can rearrange without a developer. We audited all twenty-three installed apps for script weight and removed eleven that were not earning their load time.",
          "Analytics and event tracking were wired correctly before launch, so the first campaign after the rebuild produced data anybody could trust.",
        ],
      },
      {
        heading: "Where it landed",
        body: [
          "Checkout completion is up thirty-one percent against the pre-engagement baseline. Largest contentful paint on mobile sits at 1.4 seconds, down from just over four.",
          "The store now runs on twelve apps instead of twenty-three, and there is a performance budget in place that flags a regression before it ships.",
        ],
      },
    ],
    quote: {
      text: "We asked for a redesign and got told to fix two bugs first. That was not the answer we wanted and it was the right one.",
      author: "Founder",
      role: "Kestrel Outdoors",
    },
    logoSrc: "/assets/brand/marks/mark-04.svg",
    logoWidth: "120",
    logoHeight: "32",
  },
  {
    slug: "orbit-labs-demand-forecasting",
    client: "Orbit Labs",
    title: "Forecasting that a planning team stopped overriding",
    summary:
      "Demand forecasts built on the history they already had, delivered in the planning tool the team already used.",
    serviceSlug: "ai-data-analytics",
    category: "product",
    location: "Leeds, UK",
    images: {
      hero: "/assets/site/images/9b60c7e691bd.jpg",
      gallery: [
        "/assets/site/images/4d8a8180db80.jpg",
        "/assets/site/images/191ec76fa273.jpg",
      ],
    },
    phases: [
      {
        name: "Discovery",
        duration: "3 weeks",
        items: [
          "Data audit",
          "Override-rate baseline",
          "Promotional calendar recovery",
        ],
      },
      {
        name: "Design",
        duration: "2 weeks",
        items: [
          "Driver attribution",
          "Planner-facing view",
          "Two dashboards retired",
        ],
      },
      {
        name: "Build",
        duration: "7 weeks",
        items: [
          "Warehouse pipelines",
          "Validated forecast model",
          "Delivery into the planning tool",
        ],
      },
    ],
    tags: ["Forecasting", "Data", "Analytics"],
    industry: "Consumer goods",
    year: "2026",
    duration: "12 weeks",
    results: [
      { value: "-42%", label: "Forecast error against prior method" },
      { value: "18%", label: "Reduction in held stock" },
      { value: "2", label: "Dashboards retired" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "Orbit had bought a forecasting module with their planning system two years earlier. The planning team overrode its output on roughly eight of every ten lines, which is a polite way of saying nobody used it.",
          "The forecasts were not obviously wrong. They were unexplainable, and a planner who cannot see why a number moved will trust their own judgement instead, correctly.",
        ],
      },
      {
        heading: "What we built",
        body: [
          "We started with an audit of what they actually collected. Three years of clean sales history, promotional calendars kept in a separate spreadsheet nobody had connected, and returns data that turned out to be the strongest signal in the set.",
          "The model is deliberately simple and validated against held-out history rather than fitted to everything available. More importantly, every forecast carries the two or three drivers that moved it, shown in the planning tool the team already opens each morning.",
          "We retired two dashboards during the build. Neither had been opened in four months.",
        ],
      },
      {
        heading: "Where it landed",
        body: [
          "Forecast error dropped forty-two percent against the previous method, and held stock is down eighteen percent.",
          "The number that mattered internally was the override rate, which fell from eight in ten lines to fewer than two. The forecasts did not just get better. They became arguable, which is what made them usable.",
        ],
      },
    ],
    logoSrc: "/assets/brand/marks/mark-05.svg",
    logoWidth: "120",
    logoHeight: "32",
  },
  {
    slug: "verdant-studio-identity",
    client: "Verdant Studio",
    title: "An identity system that survived the product it was made for",
    summary:
      "Positioning, identity and a component library delivered together, so the brand held its shape once engineers started building.",
    serviceSlug: "branding-design",
    category: "growth",
    location: "Copenhagen, DK",
    images: {
      hero: "/assets/site/images/b4e3c148cedf.jpg",
      gallery: [
        "/assets/site/images/3f516d703cfa.jpg",
        "/assets/site/images/ca1833da6f43.jpg",
      ],
    },
    phases: [
      {
        name: "Discovery",
        duration: "2 weeks",
        items: [
          "Audience argument settled",
          "Screen and surface inventory",
          "Four button styles catalogued",
        ],
      },
      {
        name: "Design",
        duration: "3 weeks",
        items: [
          "Positioning and messaging",
          "Identity system",
          "Token set for colour and type",
        ],
      },
      {
        name: "Build",
        duration: "3 weeks",
        items: [
          "62 Storybook components",
          "Figma library on one token set",
          "Eleven-page guidelines",
        ],
      },
    ],
    tags: ["Branding", "Design System", "UI"],
    industry: "Architecture software",
    year: "2025",
    duration: "8 weeks",
    results: [
      { value: "62", label: "Components shipped to Storybook" },
      { value: "1", label: "Source of truth for colour and type" },
      { value: "3 days", label: "From design to built page" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "Verdant had a good logo and nothing underneath it. Every new screen was a fresh negotiation about type scale and spacing, and the product had drifted into four different button styles.",
          "They had been quoted for a rebrand that would have delivered a guidelines PDF. A PDF was not the problem.",
        ],
      },
      {
        heading: "What we built",
        body: [
          "Positioning and messaging came first, and settled an argument about who the product was for that had been running for a year.",
          "The visual system was then designed against real screens rather than against a moodboard, and delivered twice: as a Figma library for designers and as sixty-two components in Storybook that engineers build from directly. Colour and type live in one token set that both consume.",
          "Guidelines are eleven pages and describe how to make decisions, not how to admire the logo.",
        ],
      },
      {
        heading: "Where it landed",
        body: [
          "There is one button style. More usefully, a new page goes from design to built in about three days, because the pieces already exist and match.",
          "Six months on, the system has absorbed two features it was not designed for without a redesign, which is the only real test of one.",
        ],
      },
    ],
    logoSrc: "/assets/brand/marks/mark-06.svg",
    logoWidth: "120",
    logoHeight: "32",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const caseStudiesForService = (serviceSlug: string) =>
  caseStudies.filter((c) => c.serviceSlug === serviceSlug);

/** The three shown on the home page carousel. */
export const featuredCaseStudies = caseStudies.slice(0, 3);

/** Filter groups for the work grid. "all" is synthesised, not stored. */
export const workFilters = [
  { id: "all", label: "All work" },
  { id: "ai", label: "AI" },
  { id: "product", label: "Product" },
  { id: "growth", label: "Growth" },
] as const;

export const caseStudiesIn = (filter: string) =>
  filter === "all" ? caseStudies : caseStudies.filter((c) => c.category === filter);

/**
 * The case-study page reads its overview, challenge and impact from the write-up
 * rather than storing them twice.
 */
export const overviewOf = (c: CaseStudy) => c.sections[0]?.body[0] ?? c.summary;
export const challengeOf = (c: CaseStudy) =>
  c.sections[0]?.body[1] ?? c.sections[0]?.body[0] ?? c.summary;
export const impactOf = (c: CaseStudy) =>
  c.sections[c.sections.length - 1]?.body[0] ?? c.summary;

/** The next study in the list, wrapping at the end. */
export const nextCaseStudy = (slug: string) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
};

/**
 * The write-up with the paragraphs the case-study page already shows as pull
 * statements removed, so nothing is printed twice. Matching on the text rather
 * than on an index keeps this correct if the accessors above ever change which
 * paragraph they take. A section left with no body drops out entirely.
 */
export const narrativeOf = (c: CaseStudy) => {
  const used = new Set([overviewOf(c), challengeOf(c), impactOf(c)]);
  return c.sections
    .map((s) => ({ ...s, body: s.body.filter((p) => !used.has(p)) }))
    .filter((s) => s.body.length > 0);
};
