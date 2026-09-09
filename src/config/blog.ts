/**
 * Blog index and post bodies.
 *
 * Posts are stored here rather than in MDX because the site is a static export with
 * no content pipeline, and the design renders a fixed set of block types. `body` is a
 * small block union the post template knows how to lay out — adding a post is a data
 * edit, not a new page.
 */

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; language: string; code: string };

export type Post = {
  slug: string;
  title: string;
  /** One line, used on the card and as the meta description. */
  excerpt: string;
  category: "Engineering" | "AI" | "Design" | "Growth" | "Practice";
  /** ISO date. Rendered with `formatPostDate`. */
  date: string;
  author: string;
  /** Whole minutes. Shown next to the date. */
  readingMinutes: number;
  /** Slugs of related posts. Falls back to same-category posts when empty. */
  related: string[];
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "shipping-ai-features-that-survive-real-users",
    title: "Shipping AI features that survive contact with real users",
    excerpt:
      "The demo works. The launch does not. Here is the gap, and the five things that close it.",
    category: "AI",
    date: "2026-08-18",
    author: "Codilated Engineering",
    readingMinutes: 7,
    related: ["what-an-ai-automation-audit-actually-looks-like", "cost-modelling-llm-features"],
    body: [
      {
        type: "paragraph",
        text: "Almost every AI feature demos well. That is the problem. A demo is a controlled setting with a cooperative user and inputs the builder chose, and it tells you almost nothing about whether the feature survives a Tuesday afternoon with three hundred strangers on it.",
      },
      {
        type: "paragraph",
        text: "The gap between those two states is consistent enough across projects that it is worth naming. Here is what actually closes it.",
      },
      { type: "heading", text: "1. Decide what wrong looks like before you build" },
      {
        type: "paragraph",
        text: "Most teams can tell you what a good output looks like. Far fewer have written down what an unacceptable one looks like, and the difference matters because the second definition is what your thresholds, escalation paths and evaluation suite are all built from.",
      },
      {
        type: "paragraph",
        text: "Be specific. Not \"the summary should be accurate\" but \"the summary must never state a delivery date that does not appear in the source thread\". The first is a hope. The second is testable.",
      },
      { type: "heading", text: "2. Run in shadow mode before you run in production" },
      {
        type: "paragraph",
        text: "Ship the feature so it produces output nobody sees, and compare that output against what your team actually did. Two or three weeks of this will teach you more about your confidence thresholds than any benchmark, because it is measured on your inputs rather than someone else's test set.",
      },
      {
        type: "paragraph",
        text: "It also surfaces the inputs you did not know existed. Every shadow run we have done has turned up at least one intake path nobody on the leadership team knew was still live.",
      },
      { type: "heading", text: "3. Make the escalation better than the manual path" },
      {
        type: "paragraph",
        text: "When the model is not confident, the task goes to a person. If that handoff arrives as a bare task with no context, you have made that person's job worse than it was before automation, and they will route around the system.",
      },
      {
        type: "paragraph",
        text: "Attach the reasoning, the extracted fields, the confidence score and what the model would have done. The exception should be faster to clear than the original manual task was. That is what makes the team an ally rather than an obstacle.",
      },
      { type: "heading", text: "4. Evaluate on every change, automatically" },
      {
        type: "paragraph",
        text: "A prompt edit is a code change with no type system behind it. Without an evaluation suite running in CI, a two-word tweak that fixes one case can quietly degrade forty others, and you will find out from a customer.",
      },
      {
        type: "list",
        items: [
          "Twenty to fifty real cases with known-good outputs, drawn from the shadow run",
          "A scoring function per case, exact-match where possible and model-graded only where it is not",
          "A hard failure threshold that blocks the merge, not a report nobody reads",
          "New cases added every time production surprises you",
        ],
      },
      { type: "heading", text: "5. Put a ceiling on cost per tenant" },
      {
        type: "paragraph",
        text: "Inference cost scales with usage, and usage is not evenly distributed. One enthusiastic customer can consume more compute than your next forty combined, and if your pricing assumed an average you will find out at the end of the month.",
      },
      {
        type: "paragraph",
        text: "Model cost per action before you build. Route easy requests to smaller models. Cache at the semantic layer rather than on exact string match. Then set a per-tenant ceiling that degrades gracefully instead of billing silently.",
      },
      { type: "heading", text: "The short version" },
      {
        type: "paragraph",
        text: "None of this is about model selection, which is the part teams spend most of their time on and which matters least. The features that survive are the ones where somebody decided what failure looked like, measured against reality before launching, and built the boring machinery that catches drift. That work is unglamorous and it is the whole job.",
      },
    ],
  },
  {
    slug: "what-an-ai-automation-audit-actually-looks-like",
    title: "What an AI automation audit actually looks like",
    excerpt:
      "Before automating anything we spend a fortnight finding out which processes deserve it. Here is the method.",
    category: "Practice",
    date: "2026-07-29",
    author: "Codilated",
    readingMinutes: 6,
    related: ["shipping-ai-features-that-survive-real-users", "why-we-fix-analytics-before-redesign"],
    body: [
      {
        type: "paragraph",
        text: "The most expensive automation projects are the ones that work. A process gets automated flawlessly, and eighteen months later somebody notices it should not have existed in the first place.",
      },
      {
        type: "paragraph",
        text: "So the first two weeks of an automation engagement are not spent building. They are spent working out which processes are worth the effort, and saying so plainly when the answer is none of them.",
      },
      { type: "heading", text: "Count the work before describing it" },
      {
        type: "paragraph",
        text: "Ask a team how they handle a process and you get the intended path. Look at the actual volume and you get the real one, including the three exception routes that account for most of the effort.",
      },
      {
        type: "paragraph",
        text: "We pull whatever system data exists first, then interview against it. The gap between those two accounts is usually where the interesting work lives.",
      },
      { type: "heading", text: "Rank on three axes, not on enthusiasm" },
      {
        type: "list",
        items: [
          "Volume: how often does this happen, honestly, over a full quarter rather than a busy week",
          "Error cost: what does a wrong output actually cost, in money, time or trust",
          "Input structure: how cleanly does the information arrive, and from how many places",
        ],
      },
      {
        type: "paragraph",
        text: "High volume with a forgiving failure mode and structured inputs is where you start. High volume with an expensive failure mode is where you go second, once the team trusts the system. Low volume is almost never worth it regardless of how annoying it is, and people will lobby hard for it precisely because it is annoying.",
      },
      { type: "heading", text: "Name what to leave alone" },
      {
        type: "paragraph",
        text: "An audit that recommends automating everything examined is not an audit, it is a proposal. Every one we have run has identified at least one process that should stay manual, usually because the volume does not justify the maintenance or because the judgement involved is the actual product.",
      },
      {
        type: "quote",
        text: "The deliverable is a ranked list with reasons, including the things at the bottom and why they are there.",
      },
      { type: "heading", text: "Check the data honestly, then start anyway" },
      {
        type: "paragraph",
        text: "Data quality will be worse than anybody claims. It always is. This is not a reason to delay, because a cleanup project with no consumer will drift for a year and produce a tidy warehouse nobody queries.",
      },
      {
        type: "paragraph",
        text: "Start with the data you have. The first build makes the gaps visible and specific, and then you fix the source systems in the order the automation actually cares about. That sequencing is the difference between a data project that finishes and one that becomes a permanent line item.",
      },
    ],
  },
  {
    slug: "cost-modelling-llm-features",
    title: "Cost modelling an LLM feature before you build it",
    excerpt:
      "Inference cost is a product decision, not an infrastructure detail. Model it at the design stage.",
    category: "Engineering",
    date: "2026-07-11",
    author: "Codilated Engineering",
    readingMinutes: 8,
    related: ["shipping-ai-features-that-survive-real-users", "the-latency-budget-for-voice-agents"],
    body: [
      {
        type: "paragraph",
        text: "Teams routinely spend a month choosing a database and about ten minutes thinking about what a feature costs to run per use. For anything with a model in the loop, that ratio is backwards.",
      },
      { type: "heading", text: "Cost per action, not cost per token" },
      {
        type: "paragraph",
        text: "Token pricing is the input to the calculation, not the calculation. The number that matters is what one complete user-visible action costs, including retries, the retrieval calls around it and any second pass you do for quality.",
      },
      {
        type: "paragraph",
        text: "Write it out as an equation during design. A support reply might be one retrieval call, one generation of roughly 900 output tokens, and a 15% retry rate. That is a number you can hold against your pricing before a line of code exists.",
      },
      { type: "heading", text: "Route on difficulty" },
      {
        type: "paragraph",
        text: "Most workloads have a long tail of easy requests and a short head of hard ones, and sending both to your largest model is the single most common source of avoidable spend.",
      },
      {
        type: "paragraph",
        text: "Classify first, cheaply, then route. In practice a small model handles the majority of traffic at a fraction of the cost, and the classifier itself costs almost nothing. The engineering effort is modest and the saving is usually the difference between a viable margin and an awkward conversation.",
      },
      { type: "heading", text: "Cache at the semantic layer" },
      {
        type: "paragraph",
        text: "Exact-string caching almost never hits, because users do not phrase things identically. Embedding the request and matching against recent requests above a similarity threshold hits far more often, particularly in support and internal-tool workloads where the same twenty questions dominate.",
      },
      {
        type: "paragraph",
        text: "Cache against the inputs that determine the answer, and invalidate when those change. A pricing explanation cached against a rule set is safe until the rule set moves.",
      },
      { type: "heading", text: "Ceiling per tenant, degrade visibly" },
      {
        type: "paragraph",
        text: "Usage is never evenly distributed. Set a per-tenant ceiling that degrades to a cheaper path or a queue rather than one that fails, and surface it in your own dashboards before the customer notices.",
      },
      {
        type: "code",
        language: "text",
        code: "cost_per_action =\n    (retrieval_calls x retrieval_price)\n  + (input_tokens x input_price)\n  + (output_tokens x output_price)\n  x (1 + retry_rate)\n  x (1 - cache_hit_rate)",
      },
      {
        type: "paragraph",
        text: "Fill that in with real numbers at design time. If the answer is uncomfortable, it is far cheaper to learn it now than after the feature is in front of customers and the pricing page is printed.",
      },
    ],
  },
  {
    slug: "the-latency-budget-for-voice-agents",
    title: "The latency budget that decides whether a voice agent works",
    excerpt:
      "Callers do not judge a voice agent on its voice. They judge it on the pause before it answers.",
    category: "Engineering",
    date: "2026-06-24",
    author: "Codilated Engineering",
    readingMinutes: 6,
    related: ["cost-modelling-llm-features", "shipping-ai-features-that-survive-real-users"],
    body: [
      {
        type: "paragraph",
        text: "Teams building voice agents spend a surprising amount of time auditioning voices. The voice is rarely the problem. The problem is the silence between the caller finishing and the agent starting, and past roughly a second that silence is the only thing anybody notices.",
      },
      { type: "heading", text: "Where the time actually goes" },
      {
        type: "list",
        items: [
          "Endpointing: deciding the caller has stopped speaking, typically 200-500ms and the largest single lever",
          "Speech recognition: finalising the transcript, 100-200ms when streaming",
          "Retrieval: any lookup the answer depends on, 50-300ms depending on how careful you were",
          "Generation: first token out of the model, 200-600ms depending on model and prompt size",
          "Synthesis: first audio out, 100-300ms if you start on the first clause rather than the full reply",
        ],
      },
      {
        type: "paragraph",
        text: "Added naively that is well over two seconds, which is unusable. Getting under 700ms is a matter of overlapping these stages rather than making any one of them dramatically faster.",
      },
      { type: "heading", text: "Overlap everything you can" },
      {
        type: "paragraph",
        text: "Start retrieval on the partial transcript rather than waiting for the final one. Begin generation before endpointing fully commits, and discard if the caller continues. Start synthesis on the first complete clause instead of the full response.",
      },
      {
        type: "paragraph",
        text: "Each of these trades a small amount of wasted compute for a large amount of perceived responsiveness, and perceived responsiveness is the entire product.",
      },
      { type: "heading", text: "Tune endpointing against your callers" },
      {
        type: "paragraph",
        text: "Default endpointing settings are tuned for a generic speaker in a quiet room. Your callers are in cars and corridors, and some of them pause mid-sentence to think.",
      },
      {
        type: "paragraph",
        text: "Pull a hundred real recordings and tune against those. Aggressive endpointing makes the agent feel fast and makes it interrupt people, which is worse than being slow. The right setting is specific to your caller base and cannot be read off a benchmark.",
      },
      { type: "heading", text: "Measure the whole round trip" },
      {
        type: "paragraph",
        text: "Instrument end of caller speech to start of agent audio, as one number, in production. Component-level metrics will each look fine while the total is two seconds, because the time is lost in the handoffs between them.",
      },
    ],
  },
  {
    slug: "why-we-fix-analytics-before-redesign",
    title: "Why we fix your analytics before we touch the design",
    excerpt:
      "A redesign without a baseline is a coin flip you cannot even score. Two weeks of instrumentation first.",
    category: "Growth",
    date: "2026-06-03",
    author: "Codilated",
    readingMinutes: 5,
    related: ["what-an-ai-automation-audit-actually-looks-like", "a-performance-budget-that-holds"],
    body: [
      {
        type: "paragraph",
        text: "A client comes to us wanting a redesign. Traffic is up, revenue is flat, and the site looks dated. The instinct is to design, and it is almost always the wrong first move.",
      },
      {
        type: "paragraph",
        text: "Not because the design is fine, but because without a baseline you cannot tell afterwards whether the new design helped, hurt or did nothing while a seasonal shift carried the numbers.",
      },
      { type: "heading", text: "Two weeks of instrumentation" },
      {
        type: "paragraph",
        text: "Before design work starts we make sure every step of the funnel emits a clean event, that the events survive the consent banner, and that the numbers reconcile against the payment processor. That last check catches more broken tracking than anything else.",
      },
      {
        type: "paragraph",
        text: "On roughly half of these engagements the instrumentation alone finds the problem, and the redesign turns out to be optional.",
      },
      {
        type: "quote",
        text: "On one storefront the entire revenue gap was a variant selector that silently failed on mobile when a size was out of stock. Nine weeks of redesign would have fixed it by accident and nobody would have known which change mattered.",
      },
      { type: "heading", text: "Fix the leaks on the old design first" },
      {
        type: "paragraph",
        text: "If instrumentation finds a specific, fixable leak, fix it on the existing site immediately. The revenue starts recovering weeks earlier, and the fix is isolated enough that you can actually attribute the improvement.",
      },
      {
        type: "paragraph",
        text: "It also means the redesign is measured against a baseline where the obvious bugs are already gone, so it has to earn its result rather than inherit one.",
      },
      { type: "heading", text: "Then design, against a number" },
      {
        type: "paragraph",
        text: "With a clean baseline the redesign becomes accountable. You know what completion rate was, you know what it is now, and you know nothing else changed underneath it. That is the difference between a design you can defend and one you can only admire.",
      },
    ],
  },
  {
    slug: "a-performance-budget-that-holds",
    title: "A performance budget that actually holds after launch",
    excerpt:
      "Sites do not get slow in a redesign. They get slow one merged pull request at a time.",
    category: "Engineering",
    date: "2026-05-14",
    author: "Codilated Engineering",
    readingMinutes: 5,
    related: ["why-we-fix-analytics-before-redesign", "design-systems-that-engineers-actually-use"],
    body: [
      {
        type: "paragraph",
        text: "Every site is fast on launch day. Somebody cared, somebody measured, and the numbers were part of the sign-off. Eighteen months later the same site takes six seconds on a mid-range phone, and no single change is responsible.",
      },
      {
        type: "paragraph",
        text: "Performance is not a launch state. It is a property you either enforce continuously or lose gradually.",
      },
      { type: "heading", text: "Budget the bytes, in CI, as a failure" },
      {
        type: "paragraph",
        text: "Set a hard limit on the JavaScript and CSS shipped on your two or three most important routes, and fail the build when a pull request exceeds it. Not a warning. A warning is a comment nobody reads on a Friday afternoon.",
      },
      {
        type: "paragraph",
        text: "The number is less important than the enforcement. A budget that is generous but enforced beats an ambitious one that is advisory, every time.",
      },
      { type: "heading", text: "Watch third parties hardest" },
      {
        type: "paragraph",
        text: "First-party code grows predictably and is visible in review. Third-party scripts arrive through a tag manager without a pull request, and a single marketing tag can outweigh a quarter of engineering effort.",
      },
      {
        type: "list",
          items: [
          "Inventory every third-party script with a named owner and a stated purpose",
          "Review the inventory quarterly and remove anything whose owner has left or whose purpose has lapsed",
          "Load what survives after interaction rather than in the critical path",
        ],
      },
      { type: "heading", text: "Measure on the device your users hold" },
      {
        type: "paragraph",
        text: "A development laptop on office wifi will report a healthy score for a site that is genuinely painful on a three-year-old Android on a train.",
      },
      {
        type: "paragraph",
        text: "Test with throttling on by default, and check field data rather than only lab numbers. The lab tells you what is possible. The field tells you what is happening.",
      },
    ],
  },
  {
    slug: "design-systems-that-engineers-actually-use",
    title: "Design systems that engineers actually use",
    excerpt:
      "The failure mode is not a bad system. It is a beautiful one that is slower than writing the markup by hand.",
    category: "Design",
    date: "2026-04-22",
    author: "Codilated",
    readingMinutes: 6,
    related: ["a-performance-budget-that-holds", "why-we-fix-analytics-before-redesign"],
    body: [
      {
        type: "paragraph",
        text: "Most abandoned design systems were not bad. They were slower to use than not using them, and engineers under deadline made the rational choice.",
      },
      { type: "heading", text: "Ship it as code, not as a picture of code" },
      {
        type: "paragraph",
        text: "A Figma library is a design tool. If the engineering deliverable is a set of images an engineer has to reimplement, you have not built a system, you have built a specification, and it will drift within a quarter.",
      },
      {
        type: "paragraph",
        text: "Deliver both halves against one token set: the Figma library for designers and installable components for engineers, with colour, type and spacing defined once and consumed by each.",
      },
      { type: "heading", text: "Cover the boring components first" },
      {
        type: "paragraph",
        text: "Systems tend to launch with a beautiful card and no form inputs. Forms, tables, empty states and error messages are most of what a real application is made of, and they are where inconsistency is most visible to users.",
      },
      {
        type: "list",
        items: [
          "Inputs, selects and validation states, including the error copy pattern",
          "Tables with sorting, empty and loading states",
          "Empty states, which are pure product writing and almost always neglected",
          "Error and permission-denied screens",
        ],
      },
      { type: "heading", text: "Make the escape hatch explicit" },
      {
        type: "paragraph",
        text: "Every system meets a case it did not anticipate. If there is no sanctioned way to deviate, engineers will fork a component quietly and you will discover four variants a year later.",
      },
      {
        type: "paragraph",
        text: "Document how to extend, when to fork, and how a fork gets promoted back into the system. A system with a known escape hatch stays coherent far longer than one that pretends it has covered everything.",
      },
      { type: "heading", text: "Write guidelines to be used" },
      {
        type: "paragraph",
        text: "Eleven pages describing how to make decisions beats sixty describing logo clearspace. The test is whether a new engineer can answer a real question from it in under a minute.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Newest first. The index and the home page both read this. */
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const featuredPosts = sortedPosts.slice(0, 3);

export const postCategories = Array.from(new Set(posts.map((p) => p.category)));

export function relatedPosts(post: Post, limit = 3) {
  const explicit = post.related
    .map((slug) => getPost(slug))
    .filter((p): p is Post => Boolean(p));
  if (explicit.length >= limit) return explicit.slice(0, limit);

  const fallback = sortedPosts.filter(
    (p) => p.slug !== post.slug && !explicit.some((e) => e.slug === p.slug),
  );
  return [...explicit, ...fallback].slice(0, limit);
}

/** "18 August 2026" — stable across locales because the export is static. */
export function formatPostDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${day} ${months[month - 1]} ${year}`;
}
