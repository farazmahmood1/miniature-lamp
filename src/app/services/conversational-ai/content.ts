/**
 * Copy for the Conversational AI page.
 *
 * Only the rail and the card grid live here — the shared header and footer supply the
 * navigation the capture used to inline.
 */

/** Sticky rail beside the capability blocks. Anchors into the sections below. */
export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
  { href: "#latency", label: "Latency Budget" },
  { href: "#grounded-answers", label: "Grounded Answers" },
  { href: "#real-actions", label: "Real Actions" },
  { href: "#handoff", label: "Human Handoff" },
];

/** Example builds, each linking to the case study or service behind it. */
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
    style: { maskImage: 'url("/assets/conversational-ai/svg/8fb27f8bf195.svg")' },
    height: "719",
    imgSrc: "/assets/conversational-ai/svg/8fb27f8bf195.svg",
    width: "719",
    title: "After-hours booking line",
    description:
      "Answers, checks live availability and books, with clinical questions transferred every time",
    id: "scrambletext-34",
    href: "/work/meridian-health-intake-agent",
    label: "After-hours booking line",
  },
  {
    style: { maskImage: 'url("/assets/conversational-ai/svg/2de6c88b4fd2.svg")' },
    height: "54",
    imgSrc: "/assets/conversational-ai/svg/2de6c88b4fd2.svg",
    width: "82",
    title: "WhatsApp sales assistant",
    description:
      "Qualifies enquiries in the channel your customers already message you on",
    id: "scrambletext-35",
    href: "/services/ai-automation",
    label: "WhatsApp sales assistant",
  },
  {
    style: { maskImage: 'url("/assets/conversational-ai/svg/7ba46c6d7a62.svg")' },
    height: "32",
    imgSrc: "/assets/conversational-ai/svg/7ba46c6d7a62.svg",
    width: "32",
    title: "Support agent over your docs",
    description:
      "Answers from your own material and cites it, rather than inventing a confident guess",
    id: "scrambletext-36",
    href: "/services/custom-ai-development",
    label: "Support agent over your docs",
  },
  {
    style: { maskImage: 'url("/assets/conversational-ai/svg/9f4b00338b4d.svg")' },
    height: "32",
    imgSrc: "/assets/conversational-ai/svg/9f4b00338b4d.svg",
    width: "32",
    title: "Outbound calling agent",
    description:
      "Follow-ups and reminders at a volume no team would staff, with every call transcribed",
    id: "scrambletext-37",
    href: "/services/ai-automation",
    label: "Outbound calling agent",
  },
];
