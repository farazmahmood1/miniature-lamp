// Semantic page content extracted from recognized recipe sections.

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "#id-24s-cold-starts", label: "2–4s Cold Starts" },
    { href: "#elastic-gpu-scaling", label: "Elastic GPU Scaling" },
    { href: "#your-code-your-way", label: "Your Code, Your Way" },
    { href: "#observability", label: "Observability" }
];

export type FeatureCardDataItem = {
  title: string;
  description: string;
};
export const featureCardData: FeatureCardDataItem[] = [
    { title: "Cerebrium (with snapshots)", description: "3.8s" },
    { title: "Cerebrium", description: "42s" },
    { title: "Provider A", description: "71s" },
    { title: "EKS/GKE", description: "156s" }
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
    { style: { maskImage: "url(\"/assets/cloned/svg/8fb27f8bf195.svg\")" }, height: "719", imgSrc: "/assets/cloned/svg/8fb27f8bf195.svg", width: "719", title: "500ms Low Latency Voice Agent", description: "Create a voice agent that can respond in 500ms", id: "scrambletext-38", href: "https://docs.cerebrium.ai/docs/v4/examples/realtime-voice-agents", label: "500ms Low Latency Voice Agent" },
    { style: { maskImage: "url(\"/assets/cloned/svg/2de6c88b4fd2.svg\")" }, height: "54", imgSrc: "/assets/cloned/svg/2de6c88b4fd2.svg", width: "82", title: "Twilio voice agent with Pipecat", description: "Learn how to build a voice agent with Pipecat on Cerebrium", id: "scrambletext-39", href: "https://docs.cerebrium.ai/docs/v4/examples/twilio-voice-agent", label: "Twilio voice agent with Pipecat" },
    { style: { maskImage: "url(\"/assets/cloned/svg/9f4b00338b4d.svg\")" }, height: "32", imgSrc: "/assets/cloned/svg/9f4b00338b4d.svg", width: "32", title: "Outbound agent with LiveKit", description: "Build a outbound calling agent with Livekit", id: "scrambletext-40", href: "https://docs.cerebrium.ai/docs/v4/examples/livekit-outbound-agent", label: "Outbound agent with LiveKit" },
    { style: { maskImage: "url(\"/assets/cloned/svg/7ba46c6d7a62.svg\")" }, height: "32", imgSrc: "/assets/cloned/svg/7ba46c6d7a62.svg", width: "32", title: "Transcribe a 1 hour podcast", description: "Learn how to transcribe a 1 hour podcast in < 2 minutes", id: "scrambletext-41", href: "https://docs.cerebrium.ai/docs/v4/examples/transcribe-whisper", label: "Transcribe a 1 hour podcast" }
];

export type MediaTile2DataItem = {
  href: string;
  label: string;
};
export const mediaTile2Data: MediaTile2DataItem[] = [
    { href: "https://docs.cerebrium.ai/docs/endpoints/websockets", label: "WebSocket endpoints" },
    { href: "https://docs.cerebrium.ai/docs/integrations/metrics-export", label: "OpenTelemetry Integration" },
    { href: "https://docs.cerebrium.ai/docs/container-images/private-docker-registry", label: "Using Private Docker Images" },
    { href: "https://docs.cerebrium.ai/docs/scaling/batching-concurrency", label: "Concurrency & Batching" },
    { href: "https://docs.cerebrium.ai/docs/endpoints/async", label: "Asynchronous jobs" },
    { href: "https://docs.cerebrium.ai/docs/storage/managing-files", label: "Distributed storage" },
    { href: "https://docs.cerebrium.ai/docs/deployments/multi-region-deployment", label: "Multi-region deployments" },
    { href: "https://docs.cerebrium.ai/docs/hardware/using-gpus", label: "12+ GPU types" },
    { href: "https://docs.cerebrium.ai/docs/endpoints/streaming", label: "Streaming endpoints" },
    { href: "https://docs.cerebrium.ai/docs/endpoints/inference-api", label: "REST API endpoints" },
    { href: "https://docs.cerebrium.ai/docs/scaling/scaling-apps", label: "Auto-scaling" },
    { href: "https://docs.cerebrium.ai/docs/container-images/custom-dockerfiles", label: "Custom Dockerfiles" },
    { href: "https://docs.cerebrium.ai/docs/deployments/gradual-roll-out", label: "CI/CD & gradual rollouts" },
    { href: "https://docs.cerebrium.ai/docs/other-topics/using-secrets", label: "Secrets management" }
];

export type FeaturesItem = {
  variant: string;
  title: string;
  date: string;
  category: string;
  eyebrow?: string;
};
export const features: FeaturesItem[] = [
    { variant: "a-low-latency-architecture-for-voice-agent", title: "A Low-Latency Architecture for Voice Agents with Real-time Web Search", date: "July 15, 2026", category: "Tutorial" },
    { variant: "2026-gpu-buyer-s-guide", title: "2026 GPU Buyer’s Guide", date: "July 13, 2026", category: "Annoucement" },
    { variant: "cerebrium-achieves-soc-2-type-ii-complianc", eyebrow: "Annoucement", title: "Cerebrium Achieves SOC 2 Type II Compliance for Secure Production AI Infrastructure", date: "July 8, 2026", category: "Product Update" }
];

export type ListRow5DataItem = {
  href: string;
  label: string;
};
export const listRow5Data: ListRow5DataItem[] = [
    { href: "/use-cases/large-language-models", label: "Large Language Models" },
    { href: "/use-cases/voice", label: "Voice" },
    { href: "/use-cases/image-and-video", label: "Image & Video" }
];

export type ListRow6DataItem = {
  href: string;
  target: string;
  label: string;
  rel?: string;
};
export const listRow6Data: ListRow6DataItem[] = [
    { href: "/pricing", target: "_self", label: "Pricing" },
    { href: "/about", target: "_self", label: "Company" },
    { href: "https://docs.cerebrium.ai/docs/getting-started/introduction", target: "_blank", rel: "noopener noreferrer", label: "Docs" },
    { href: "/blog", target: "_self", label: "Blog" },
    { href: "/contact", target: "_self", label: "Contact" },
    { href: "https://status.cerebrium.ai/", target: "_blank", rel: "noopener noreferrer", label: "Status" },
    { href: "/resources", target: "_self", label: "Resources" }
];

export type ListRow7DataItem = {
  href: string;
  label: string;
};
export const listRow7Data: ListRow7DataItem[] = [
    { href: "/brand-assets", label: "Brand Assets" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of service" }
];

