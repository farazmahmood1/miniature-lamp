// Semantic page content extracted from recognized recipe sections.

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "#co-located-compute", label: "Co-Located Compute" },
    { href: "#instant-startups", label: "Instant Startups" },
    { href: "#global-regions", label: "Global Regions" },
    { href: "#strategic-partnerships", label: "Strategic Partnerships" }
];

export type CardsItem = {
  style: string;
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
    { style: { maskImage: "url(\"/assets/voice/svg/8fb27f8bf195.svg\")" }, height: "719", imgSrc: "/assets/voice/svg/8fb27f8bf195.svg", width: "719", title: "500ms Low Latency Voice Agent", description: "Create a voice agent that can respond in 500ms", id: "scrambletext-34", href: "https://docs.cerebrium.ai/docs/v4/examples/realtime-voice-agents", label: "500ms Low Latency Voice Agent" },
    { style: { maskImage: "url(\"/assets/voice/svg/2de6c88b4fd2.svg\")" }, height: "54", imgSrc: "/assets/voice/svg/2de6c88b4fd2.svg", width: "82", title: "Twilio voice agent with Pipecat", description: "Learn how to build a voice agent with Pipecat on Cerebrium", id: "scrambletext-35", href: "https://docs.cerebrium.ai/docs/v4/examples/twilio-voice-agent", label: "Twilio voice agent with Pipecat" },
    { style: { maskImage: "url(\"/assets/voice/svg/7ba46c6d7a62.svg\")" }, height: "32", imgSrc: "/assets/voice/svg/7ba46c6d7a62.svg", width: "32", title: "Transcribe a 1 hour podcast", description: "Learn how to transcribe a 1 hour podcast in < 2 minutes", id: "scrambletext-36", href: "https://docs.cerebrium.ai/docs/v4/examples/transcribe-whisper", label: "Transcribe a 1 hour podcast" },
    { style: { maskImage: "url(\"/assets/voice/svg/9f4b00338b4d.svg\")" }, height: "32", imgSrc: "/assets/voice/svg/9f4b00338b4d.svg", width: "32", title: "Outbound agent with LiveKit", description: "Build a outbound calling agent with Livekit", id: "scrambletext-37", href: "https://docs.cerebrium.ai/docs/v4/examples/livekit-outbound-agent", label: "Outbound agent with LiveKit" }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "/use-cases/large-language-models", label: "Large Language Models" },
    { href: "/use-cases/voice", label: "Voice" },
    { href: "/use-cases/image-and-video", label: "Image & Video" }
];

export type ListRow4DataItem = {
  href: string;
  target: string;
  label: string;
  rel?: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/pricing", target: "_self", label: "Pricing" },
    { href: "/about", target: "_self", label: "Company" },
    { href: "https://docs.cerebrium.ai/docs/getting-started/introduction", target: "_blank", rel: "noopener noreferrer", label: "Docs" },
    { href: "/blog", target: "_self", label: "Blog" },
    { href: "/contact", target: "_self", label: "Contact" },
    { href: "https://status.cerebrium.ai/", target: "_blank", rel: "noopener noreferrer", label: "Status" },
    { href: "/resources", target: "_self", label: "Resources" }
];

export type ListRow5DataItem = {
  href: string;
  label: string;
};
export const listRow5Data: ListRow5DataItem[] = [
    { href: "/brand-assets", label: "Brand Assets" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of service" }
];

