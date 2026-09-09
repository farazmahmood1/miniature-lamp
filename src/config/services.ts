/**
 * The service catalogue — the spine of the site.
 *
 * Drives the header menu, the footer columns, the services index, every service page,
 * the contact form's project-type field, the sitemap and the JSON-LD offer catalogue.
 * Adding a service here adds it everywhere.
 *
 * `hasCustomPage` marks the three services with a hand-built page under
 * `src/app/services/<slug>/`. The rest are rendered by the shared
 * `src/app/services/[slug]/` template, which reads `detail` below.
 */

export type ServiceDetail = {
  /** Hero headline on the service page. Short enough to hold one line on desktop. */
  headline: string;
  /** Hero sub-paragraph. Two sentences at most. */
  intro: string;
  /** What the engagement actually includes. */
  deliverables: string[];
  /** The tools we reach for first. Shown as a mono-cased chip row. */
  stack: string[];
  /** Objection handling, rendered near the closing CTA. */
  faqs: { question: string; answer: string }[];
};

export type Service = {
  slug: string;
  /** Full name. Used in page titles and on the services index. */
  name: string;
  /** Short name for nav and chips, where the full name would wrap. */
  shortName: string;
  href: string;
  group: "ai" | "digital";
  tag: "FLAGSHIP" | "POPULAR" | null;
  /** One line. Used on cards and in the nav dropdown. */
  summary: string;
  /** Meta description for the service page. */
  metaDescription: string;
  hasCustomPage: boolean;
  detail: ServiceDetail;
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    name: "AI Automation & Process Optimisation",
    shortName: "AI Automation",
    href: "/services/ai-automation",
    group: "ai",
    tag: "FLAGSHIP",
    summary: "Agents that run lead generation, outreach and back-office work around the clock.",
    metaDescription:
      "Codilated builds AI automation that runs lead generation, outreach and back-office work without a human in the loop. Scoped, built and monitored in production.",
    hasCustomPage: true,
    detail: {
      headline: "Put the repetitive work on autopilot.",
      intro:
        "Most teams do not need another dashboard. They need the work between the dashboards to stop landing on someone's desk. We build the agents that close that gap, and we stay on to keep them honest.",
      deliverables: [
        "Process audit naming the steps worth automating and the ones worth leaving alone",
        "Agent workflows wired into the tools you already pay for",
        "Human checkpoints wherever a wrong call would be expensive",
        "Evaluation harness so a model change cannot quietly degrade output",
        "Runbooks, logging and alerting for the day something drifts",
      ],
      stack: ["OpenAI", "Anthropic", "LangGraph", "Temporal", "Postgres", "n8n"],
      faqs: [
        {
          question: "How do you decide what to automate first?",
          answer:
            "We rank candidate processes by volume, error cost and how cleanly the inputs are structured. The first build is usually the highest-volume process with the most forgiving failure mode, so time comes back while the riskier work is still being scoped.",
        },
        {
          question: "What happens when the agent gets it wrong?",
          answer:
            "Every workflow ships with a confidence threshold and an escalation path. Below the threshold the task routes to a person with the model's reasoning attached, so the exception is faster to clear than the original manual task was.",
        },
        {
          question: "Do we need clean data before we start?",
          answer:
            "No. Waiting for clean data is how automation projects die. We start with the data you have, make the gaps visible in the first build, then fix the source systems in the order the automation actually cares about.",
        },
      ],
    },
  },
  {
    slug: "conversational-ai",
    name: "Conversational AI & Voice Agents",
    shortName: "Conversational AI",
    href: "/services/conversational-ai",
    group: "ai",
    tag: null,
    summary: "Chat and voice agents for the web, WhatsApp, social and the phone line.",
    metaDescription:
      "Codilated builds conversational AI and voice agents that answer, qualify and book, on the web, on WhatsApp and on the phone, with latency low enough to feel human.",
    hasCustomPage: true,
    detail: {
      headline: "Agents that answer, qualify and book.",
      intro:
        "A conversation is only useful if it ends somewhere. We build assistants that carry a caller or a visitor to a booked meeting, a resolved ticket or a clean handoff, then tune them until latency stops being the thing people notice.",
      deliverables: [
        "Voice pipeline tuned end to end, from speech recognition through response to speech",
        "Chat assistants for the site, WhatsApp and the social inboxes",
        "Retrieval over your own documents so answers cite something real",
        "Calendar, CRM and helpdesk actions the agent can actually take",
        "Transcript review workflow so the team can correct the agent as it learns",
      ],
      stack: ["Deepgram", "ElevenLabs", "Twilio", "LiveKit", "Pinecone", "WhatsApp API"],
      faqs: [
        {
          question: "Will it sound like a robot?",
          answer:
            "The tell is almost always latency, not the voice. We budget the whole round trip and cut it until replies land fast enough that callers stop waiting for a beep. Voice selection and phrasing come after that, not before.",
        },
        {
          question: "Can it hand off to a person?",
          answer:
            "Yes, and it should. Handoff carries the full transcript and the agent's read of the situation, so whoever picks up is not starting the conversation over.",
        },
        {
          question: "What about languages other than English?",
          answer:
            "Multilingual is a configuration question, not a rebuild. We pick recognition and synthesis models per language, then test each one against real recordings from your callers rather than trusting a benchmark.",
        },
      ],
    },
  },
  {
    slug: "custom-ai-development",
    name: "Custom AI Web & SaaS Development",
    shortName: "Custom AI Development",
    href: "/services/custom-ai-development",
    group: "ai",
    tag: null,
    summary: "AI-native products, copilots and internal tools built to be shipped and sold.",
    metaDescription:
      "Codilated designs and builds AI-native SaaS products, copilots and internal tools, from first prototype to a production system with real users on it.",
    hasCustomPage: true,
    detail: {
      headline: "AI products, not AI demos.",
      intro:
        "The gap between a convincing prototype and something you can charge for is mostly unglamorous: permissions, cost control, evaluation, and the twelve edge cases that only appear once strangers use it. That gap is the work.",
      deliverables: [
        "Product definition sharp enough to build against",
        "Working prototype in the first weeks, not the first quarter",
        "Multi-tenant application with authentication, billing and roles",
        "Token and inference cost modelling before it becomes a surprise",
        "Evaluation suite that runs on every change to a prompt or a model",
      ],
      stack: ["Next.js", "TypeScript", "Postgres", "Prisma", "Stripe", "Vercel"],
      faqs: [
        {
          question: "Can you start from a prototype we already have?",
          answer:
            "Usually. We audit what exists, keep the parts that earned their place and rewrite the parts that were only ever meant to survive a demo. Throwing the whole thing away is rarely the cheaper option.",
        },
        {
          question: "Who owns the code?",
          answer:
            "You do, from the first commit. Work happens in your repository or one we transfer at the end, with no runtime dependency on us.",
        },
        {
          question: "How do you keep inference costs under control?",
          answer:
            "We model cost per action before building, route easy requests to smaller models, cache at the semantic layer, and set a per-tenant ceiling so one heavy user cannot rewrite your margins.",
        },
      ],
    },
  },
  {
    slug: "ai-data-analytics",
    name: "AI Data & Predictive Analytics",
    shortName: "AI Data Analytics",
    href: "/services/ai-data-analytics",
    group: "ai",
    tag: null,
    summary: "Forecasts, scoring models and dashboards built on data you already collect.",
    metaDescription:
      "Codilated turns the data you already collect into forecasts, scoring models and dashboards a team actually opens on a Monday morning.",
    hasCustomPage: false,
    detail: {
      headline: "Answers, not another dashboard nobody opens.",
      intro:
        "Most companies are not short of data. They are short of a reason to trust it and a place to act on it. We build the pipeline, the model and the one view that changes what somebody does next.",
      deliverables: [
        "Data audit covering what is collected, what is trustworthy and what is missing",
        "Pipelines that keep the warehouse current without manual intervention",
        "Forecasting and scoring models validated against held-out history",
        "Dashboards designed around decisions rather than around available columns",
        "Alerting when a number moves far enough to be worth a person's attention",
      ],
      stack: ["Python", "dbt", "BigQuery", "Postgres", "Metabase", "scikit-learn"],
      faqs: [
        {
          question: "How much data do we need?",
          answer:
            "Less than people expect for scoring and segmentation, more than people expect for forecasting anything seasonal. We tell you which of the two you are in during the audit, before you commit to a model build.",
        },
        {
          question: "Do you replace our BI tool?",
          answer:
            "Rarely. We usually make the tool you have worth using by fixing what feeds it. Replacing it is a separate decision, and we will say so if we think it is warranted.",
        },
      ],
    },
  },
  {
    slug: "web-development",
    name: "Full-Stack Web & App Development",
    shortName: "Web & App Development",
    href: "/services/web-development",
    group: "digital",
    tag: null,
    summary: "React, Next.js and Node builds engineered to survive their own success.",
    metaDescription:
      "Codilated builds full-stack web and mobile applications in React, Next.js and Node, engineered for the traffic you expect and the traffic you do not.",
    hasCustomPage: false,
    detail: {
      headline: "Built for the traffic you did not plan for.",
      intro:
        "A site that buckles the week it works is an expensive kind of success. We build applications that hold their shape under load, stay fast on a mid-range phone, and remain legible to whoever inherits them.",
      deliverables: [
        "Architecture and data model agreed before the first screen is built",
        "Responsive front end tested on real devices, not just a resized window",
        "API and database layer with migrations, seeding and backups",
        "Continuous deployment with a preview environment per pull request",
        "Performance budget enforced in CI so speed does not erode release by release",
      ],
      stack: ["Next.js", "React", "TypeScript", "Node.js", "Postgres", "React Native"],
      faqs: [
        {
          question: "Do you work with our existing team?",
          answer:
            "Often. We can lead the build, pair alongside your engineers, or take a defined slice and hand it back. What we will not do is work without a named decision-maker on your side.",
        },
        {
          question: "What about maintenance after launch?",
          answer:
            "Launch is the beginning of the interesting data. We offer a retainer covering dependency updates, monitoring and a monthly block of iteration, and we are happy to hand everything over instead if you would rather run it in-house.",
        },
      ],
    },
  },
  {
    slug: "shopify-ecommerce",
    name: "Shopify & E-Commerce Development",
    shortName: "Shopify & E-Commerce",
    href: "/services/shopify-ecommerce",
    group: "digital",
    tag: "POPULAR",
    summary: "Storefronts, custom themes and checkout work aimed squarely at conversion.",
    metaDescription:
      "Codilated builds and optimises Shopify stores, custom themes, private apps and checkout flows, with conversion rate as the number that matters.",
    hasCustomPage: false,
    detail: {
      headline: "A storefront judged on conversion, not compliments.",
      intro:
        "Storefront work is measured at checkout. We build fast, clear stores, then keep testing the handful of steps where revenue actually leaks.",
      deliverables: [
        "Custom theme built on your brand rather than a bought template",
        "Product and collection templates merchandisers can edit without a developer",
        "Checkout and cart optimisation, including one-page and express paths",
        "Private apps for the logic your catalogue needs and the platform lacks",
        "Analytics and event tracking wired correctly before the first campaign runs",
      ],
      stack: ["Shopify", "Liquid", "Hydrogen", "Klaviyo", "GA4", "Stripe"],
      faqs: [
        {
          question: "Can you migrate us from WooCommerce or Magento?",
          answer:
            "Yes. Migrations live or die on the redirect map and the historical order data, so we plan both before touching the theme, and we keep search rankings intact through the cutover.",
        },
        {
          question: "Will the site stay fast with our apps installed?",
          answer:
            "Only if somebody is watching. We audit every installed app for its script weight, remove what is not earning it, and set a performance budget the store is measured against after we leave.",
        },
      ],
    },
  },
  {
    slug: "wordpress-development",
    name: "WordPress Design & Development",
    shortName: "WordPress Development",
    href: "/services/wordpress-development",
    group: "digital",
    tag: null,
    summary: "Fast, secure, genuinely editable WordPress and WooCommerce builds.",
    metaDescription:
      "Codilated builds WordPress and WooCommerce sites that load fast, resist the usual security problems and stay editable by the people who own the content.",
    hasCustomPage: false,
    detail: {
      headline: "WordPress your marketing team can actually run.",
      intro:
        "A WordPress build fails when every change needs a developer. We ship structured, well-labelled editing that lets content owners move without breaking the design.",
      deliverables: [
        "Custom theme with block patterns matched to how your team writes",
        "WooCommerce configuration for catalogue, tax and shipping rules",
        "Security hardening, managed updates and off-site backups",
        "Caching and image pipeline tuned for Core Web Vitals",
        "Editor documentation and a walkthrough with the people who will use it",
      ],
      stack: ["WordPress", "WooCommerce", "PHP", "ACF", "Cloudflare", "MySQL"],
      faqs: [
        {
          question: "Do you use page builders?",
          answer:
            "Sparingly. Builders trade long-term performance and portability for short-term speed. We prefer native blocks with custom patterns, which give editors the same freedom without the weight.",
        },
        {
          question: "Can you take over a site somebody else built?",
          answer:
            "Yes. We start with an audit of the plugin surface, the theme's custom code and the update history, then give you a straight answer on whether repairing or rebuilding is the better spend.",
        },
      ],
    },
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing, SEO & Paid Ads",
    shortName: "Digital Marketing & SEO",
    href: "/services/digital-marketing",
    group: "digital",
    tag: null,
    summary: "Search, paid acquisition and lifecycle email measured against pipeline.",
    metaDescription:
      "Codilated runs SEO, Google and Meta advertising, funnels and lifecycle email, reported against pipeline and revenue rather than impressions.",
    hasCustomPage: false,
    detail: {
      headline: "Reported in pipeline, not impressions.",
      intro:
        "Traffic is easy to buy and easy to misread. We run acquisition against numbers a finance team recognises, and we tell you when a channel is not working rather than reframing it.",
      deliverables: [
        "Technical and content SEO with a roadmap ranked by realistic upside",
        "Google and Meta campaigns structured for clean attribution",
        "Landing pages built and tested against a single conversion goal",
        "Lifecycle email and automation across the whole customer journey",
        "Monthly reporting tied to pipeline, with the losing tests included",
      ],
      stack: ["GA4", "Google Ads", "Meta Ads", "Ahrefs", "Klaviyo", "Looker Studio"],
      faqs: [
        {
          question: "How long before SEO shows anything?",
          answer:
            "Technical fixes and existing-page optimisation can move within weeks. Ranking for genuinely competitive terms is a two to three quarter effort, and anyone promising faster is either lucky or selling you branded traffic you already had.",
        },
        {
          question: "Do you need a big budget to start?",
          answer:
            "No, but you need enough to learn from. Below a certain spend the data is too thin to make decisions on, so we will tell you the floor for your market before you commit.",
        },
      ],
    },
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing & Management",
    shortName: "Social Media Marketing",
    href: "/services/social-media-marketing",
    group: "digital",
    tag: null,
    summary: "Content, community and paid social that compounds month over month.",
    metaDescription:
      "Codilated runs social media strategy, content production, community management and paid social, built around a format your audience actually stops for.",
    hasCustomPage: false,
    detail: {
      headline: "A format worth stopping for, published often enough to matter.",
      intro:
        "Social rewards consistency far more than polish. We find the format your audience responds to, then build a production rhythm that can sustain it without a heroic effort every week.",
      deliverables: [
        "Channel strategy naming the platforms worth your time and the ones to skip",
        "Content calendar with a real production process behind it",
        "Short-form video, static and carousel production",
        "Community management with response-time targets",
        "Paid amplification behind the posts the data says deserve it",
      ],
      stack: ["Meta Business", "LinkedIn", "TikTok", "Buffer", "Figma", "CapCut"],
      faqs: [
        {
          question: "Do you need us on camera?",
          answer:
            "It helps, and on some platforms it is close to decisive. Where a founder cannot be on camera we lean on motion, product footage and customer material instead, and we will be honest about the ceiling that sets.",
        },
        {
          question: "How do you measure this?",
          answer:
            "Saves, shares and qualified profile visits over follower counts, tied back to site traffic and enquiries. Follower growth is a lagging side effect, not the goal.",
        },
      ],
    },
  },
  {
    slug: "branding-design",
    name: "Branding & Creative Design",
    shortName: "Branding & Design",
    href: "/services/branding-design",
    group: "digital",
    tag: null,
    summary: "Identity, messaging and interface systems that hold up everywhere they land.",
    metaDescription:
      "Codilated builds brand identity, messaging, UI systems and creative direction designed to stay coherent across every surface a customer meets.",
    hasCustomPage: false,
    detail: {
      headline: "A brand that survives contact with the product.",
      intro:
        "Identity work fails when it stops at a logo file. We design the system underneath, then prove it on the surfaces that carry it every day: the product, the store, the deck and the feed.",
      deliverables: [
        "Positioning and messaging platform agreed before any visual work",
        "Identity system covering logo, type, colour and photographic direction",
        "Interface design system delivered as components engineers can build from",
        "Templates for the recurring formats your team produces without design help",
        "Brand guidelines written to be used rather than admired",
      ],
      stack: ["Figma", "Adobe CC", "Framer", "Storybook", "After Effects"],
      faqs: [
        {
          question: "Do we have to rebrand everything at once?",
          answer:
            "No, and it is usually a bad idea. We sequence the rollout so the highest-traffic surfaces change first and the long tail follows as things come up for update anyway.",
        },
        {
          question: "Can you work from our existing brand?",
          answer:
            "Yes. Most engagements are an extension rather than a replacement: we keep the equity you have built and fix the places the system runs out of answers.",
        },
      ],
    },
  },
];

export const aiServices = services.filter((s) => s.group === "ai");
export const digitalServices = services.filter((s) => s.group === "digital");

export const serviceGroups = [
  { title: "AI & Automation", caption: "Our flagship practice", items: aiServices },
  { title: "Web, Commerce & Growth", caption: "Everything around the AI", items: digitalServices },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Slugs rendered by the shared `services/[slug]` template. */
export const templatedServiceSlugs = services
  .filter((s) => !s.hasCustomPage)
  .map((s) => s.slug);

/** Options for the contact form's project-type select. */
export const projectTypeOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: "other", label: "Something else / not sure yet" },
];
