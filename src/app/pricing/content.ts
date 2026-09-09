/**
 * Pricing page copy.
 *
 * Three engagement models rather than three feature tiers, because agency work is
 * bought by the shape of the commitment, not by seat count.
 */

export type Engagement = {
  slug: string;
  name: string;
  price: string;
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
    price: "$2,500",
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
    price: "From $12k",
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
    price: "From $6k/mo",
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
