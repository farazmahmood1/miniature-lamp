/**
 * Copy for the AI Automation page.
 *
 * Only the rail and the card grid live here — the header, footer and closing CTA come
 * from the shared chrome, so the footer link lists the capture produced are gone.
 */

/** Sticky rail beside the capability blocks. Anchors into the sections below. */
export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
  { href: "#process-audit", label: "Process Audit" },
  { href: "#agent-workflows", label: "Agent Workflows" },
  { href: "#human-checkpoints", label: "Human Checkpoints" },
  { href: "#monitoring", label: "Monitoring" },
];

/** Example automations, each linking to the case study or service it belongs to. */
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
    style: { maskImage: 'url("/assets/ai-automation/svg/bbf73e985df9.svg")' },
    height: "1176",
    imgSrc: "/assets/ai-automation/svg/bbf73e985df9.svg",
    width: "1919",
    title: "Quote and proposal automation",
    description:
      "Read the request, price it against live rates, draft the reply for a person to approve",
    id: "scrambletext-35",
    href: "/work/northwind-logistics-quote-automation",
    label: "Quote and proposal automation",
  },
  {
    style: { maskImage: 'url("/assets/ai-automation/svg/07b69c95a47d.svg")' },
    height: "683",
    imgSrc: "/assets/ai-automation/svg/07b69c95a47d.svg",
    width: "2352",
    title: "Inbox triage and routing",
    description:
      "Classify what arrives, extract the fields that matter, send it to the right queue",
    id: "scrambletext-36",
    href: "/services/conversational-ai",
    label: "Inbox triage and routing",
  },
  {
    style: { maskImage: 'url("/assets/ai-automation/svg/b4b14c3ee76b.svg")' },
    height: "41",
    imgSrc: "/assets/ai-automation/svg/b4b14c3ee76b.svg",
    width: "41",
    title: "Research and enrichment",
    description:
      "Build the account brief a salesperson would spend an hour on, before the call is booked",
    id: "scrambletext-37",
    href: "/services/ai-data-analytics",
    label: "Research and enrichment",
  },
  {
    style: { maskImage: 'url("/assets/ai-automation/svg/2de6c88b4fd2.svg")' },
    height: "54",
    imgSrc: "/assets/ai-automation/svg/2de6c88b4fd2.svg",
    width: "82",
    title: "Reporting that writes itself",
    description:
      "Pull the numbers, explain what moved and why, land it in the channel the team already reads",
    id: "scrambletext-38",
    href: "/work/orbit-labs-demand-forecasting",
    label: "Reporting that writes itself",
  },
];
