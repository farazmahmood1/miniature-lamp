/**
 * Pricing page copy.
 *
 * Three engagement models rather than three feature tiers, because agency work is
 * bought by the shape of the commitment, not by seat count.
 */

export type Engagement = {
  slug: string;
  name: string;
  /** The number, so the delivery-speed toggle can act on it. */
  amount: number;
  /** Rendered before and after the formatted amount. */
  pricePrefix: string;
  priceSuffix: string;
  priceNote: string;
  description: string;
  includes: string[];
  bestFor: string;
  cta: string;
  href: string;
  badge?: string;
  /** Painted dark, as the recommended path. */
  featured?: boolean;
};

export const engagements: Engagement[] = [
  {
    slug: "discovery",
    name: "Discovery",
    amount: 2500,
    pricePrefix: "",
    priceSuffix: "",
    priceNote: "Two weeks, fixed",
    description:
      "A short, paid piece of work that ends with a scope you could hand to any competent team, including one that is not us.",
    includes: [
      "Interviews with the people who do the work today",
      "A ranked list of what to build, and what to leave alone",
      "Technical approach with the risky parts named",
      "A sequenced plan and a price for the build",
      "Deducted from the project fee if you go ahead",
    ],
    bestFor: "a problem nobody has written down yet",
    cta: "Book discovery",
    href: "/contact?service=discovery",
  },
  {
    slug: "project",
    name: "Project",
    amount: 12000,
    pricePrefix: "From ",
    priceSuffix: "",
    priceNote: "Fixed scope, fixed price",
    description:
      "A defined build with an agreed scope, an agreed price and a date. Change requests are priced and decided rather than absorbed quietly.",
    includes: [
      "Design and engineering by the people who scoped it",
      "Weekly demo against working software, not a status deck",
      "Your repository, your infrastructure accounts, from commit one",
      "Monitoring and analytics wired in before launch",
      "Thirty days of post-launch fixes included",
    ],
    bestFor: "a build with a known shape and a deadline",
    cta: "Start a project",
    href: "/contact",
    badge: "Most common",
    featured: true,
  },
  {
    slug: "retainer",
    name: "Retainer",
    amount: 6000,
    pricePrefix: "From ",
    priceSuffix: "/mo",
    priceNote: "Monthly, cancel any time",
    description:
      "A standing block of design and engineering time, spent against whatever the evidence says matters most that month.",
    includes: [
      "An agreed capacity each month, not an unlimited promise",
      "Monitoring, dependency updates and security patching",
      "Monthly report against the number we agreed to move",
      "Priority on incidents affecting live systems",
      "Thirty days' notice, in either direction",
    ],
    bestFor: "a live product that should keep improving",
    cta: "Talk to us",
    href: "/contact?service=retainer",
  },
];

export const comparison = [
  {
    label: "Commitment",
    values: ["Two weeks", "Length of the build", "Rolling monthly"],
  },
  {
    label: "Scope",
    values: ["Fixed", "Fixed, changes priced", "Agreed each month"],
  },
  {
    label: "What you get",
    values: ["A plan and a price", "Working software", "Continuous improvement"],
  },
  {
    label: "Typical duration",
    values: ["2 weeks", "6 to 20 weeks", "Ongoing"],
  },
  {
    label: "Team",
    values: ["One senior lead", "Two to four people", "Named, consistent"],
  },
  {
    label: "You can stop",
    values: ["At the end", "At any milestone", "With 30 days' notice"],
  },
];

export const priceFactors = [
  {
    title: "How much is genuinely unknown",
    body: "A build where the requirements are settled prices differently from one where the shape is still being argued. Discovery exists to move a project from the second category into the first.",
  },
  {
    title: "How many systems it has to touch",
    body: "Integrations are where estimates go wrong. A workflow crossing four systems with four different authentication models is not four times one system, it is considerably more.",
  },
  {
    title: "Whether compliance is in scope",
    body: "Designing for GDPR, HIPAA or SOC 2 from the first sprint costs less than retrofitting it, and it does cost something. We price it explicitly rather than burying it.",
  },
  {
    title: "How fast you need it",
    body: "Compressing a timeline means more people in parallel, which costs more per unit of work and raises coordination risk. We will tell you when a deadline is not worth what it costs.",
  },
];

export const pricingFaqs = [
  {
    question: "Why charge for discovery?",
    answer:
      "Because free scoping is scoping done quickly enough to win the deal, and it produces the estimates that later slip. Two paid weeks buys the version we would actually build against, and you keep it whether or not you hire us for the build.",
  },
  {
    question: "What happens when the scope changes mid-project?",
    answer:
      "We price the change and you decide. Nothing gets absorbed silently, and nothing gets added without a conversation about what it displaces. Most projects have two or three of these, and they are healthier than the alternative.",
  },
  {
    question: "Do you work hourly?",
    answer:
      "No. Hourly billing rewards taking longer and makes the total unknowable until it arrives. Fixed scope or a fixed monthly capacity gives you a number you can plan around and gives us a reason to be efficient.",
  },
  {
    question: "What about ongoing hosting and tool costs?",
    answer:
      "Those run in your own accounts and you pay the providers directly, which is usually cheaper and always more portable. We size them during discovery so there are no surprises, and we never mark them up.",
  },
  {
    question: "Is there a minimum engagement?",
    answer:
      "Discovery is the smallest thing we take on. Below that the setup cost outweighs the value, and we would rather point you to someone better suited than take a project neither of us will enjoy.",
  },
];
/* ---------------------------------------------------------------------------
 * Delivery speed
 *
 * PLACEHOLDER MULTIPLIER — confirm the accelerated premium before launch.
 * Compressing a timeline means more people working in parallel, which costs more
 * per unit of work. The toggle above the plans applies this to the numeric prices
 * so the page states the premium rather than leaving it to be discovered on a call.
 * ------------------------------------------------------------------------- */

export type DeliverySpeed = {
  id: string;
  label: string;
  /** Applied to every numeric price on the page. */
  multiplier: number;
  note: string;
};

export const deliverySpeeds: DeliverySpeed[] = [
  {
    id: "standard",
    label: "Standard",
    multiplier: 1,
    note: "Our normal cadence. One team, sequenced work, weekly demos.",
  },
  {
    id: "accelerated",
    label: "Accelerated",
    multiplier: 1.35,
    note: "More people in parallel to hit a fixed date. Costs more per unit of work.",
  },
];

/* ---------------------------------------------------------------------------
 * Estimator
 *
 * Indicative only. It exists so a visitor can sanity-check whether we are in their
 * range before booking a call, not to produce a quote. Every real number comes out
 * of discovery.
 * ------------------------------------------------------------------------- */

export type EstimatorInput = {
  id: string;
  label: string;
  help: string;
  min: number;
  max: number;
  step: number;
  initial: number;
  /** Added to the base estimate per unit. */
  unitCost: number;
  /** How the value reads next to the slider. */
  unit: (n: number) => string;
};

/** Every estimate starts here: project setup, environments, CI and handover. */
export const ESTIMATE_BASE = 9000;

/** The band we quote around the midpoint, because a single number would be a lie. */
export const ESTIMATE_SPREAD = 0.25;

export const estimatorInputs: EstimatorInput[] = [
  {
    id: "screens",
    label: "Screens or workflows",
    help: "Distinct things a user can do, not pages of marketing copy.",
    min: 3,
    max: 40,
    step: 1,
    initial: 10,
    unitCost: 950,
    unit: (n) => `${n}`,
  },
  {
    id: "integrations",
    label: "Systems to integrate",
    help: "Anything with its own authentication: a CRM, an ERP, a payment provider.",
    min: 0,
    max: 10,
    step: 1,
    initial: 2,
    unitCost: 3200,
    unit: (n) => `${n}`,
  },
  {
    id: "ai",
    label: "AI or agent workflows",
    help: "Each one needs evaluation, guardrails and an exception path for humans.",
    min: 0,
    max: 8,
    step: 1,
    initial: 1,
    unitCost: 5400,
    unit: (n) => `${n}`,
  },
];

/** Options that change the total by a proportion rather than a unit count. */
export const estimatorOptions = [
  {
    id: "compliance",
    label: "Regulated data",
    help: "GDPR, HIPAA or SOC 2 in scope from the first sprint.",
    multiplier: 1.22,
  },
  {
    id: "mobile",
    label: "Native mobile app",
    help: "A React Native build alongside the web application.",
    multiplier: 1.4,
  },
  {
    id: "migration",
    label: "Data migration",
    help: "Moving live records off an existing system without downtime.",
    multiplier: 1.15,
  },
];

/**
 * Prices read as thousands from $5k up, which is how they get said out loud, with one
 * decimal where the delivery multiplier produces one. Rounded to the nearest hundred
 * so a multiplier cannot produce more precision than the estimate actually has.
 */
export const formatPrice = (amount: number) => {
  const rounded = Math.round(amount / 100) * 100;
  if (rounded < 5000) return `$${rounded.toLocaleString("en-US")}`;
  const thousands = Math.round(rounded / 100) / 10;
  return `$${thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)}k`;
};
