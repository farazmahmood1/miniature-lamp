// Semantic page content extracted from recognized recipe sections.

export type ListRow2DataItem = {
  href: string;
  description: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/blog/achieving-speed-improvements-in-custom-container-images", description: "Custom VM images for faster node scale-ups" },
    { href: "/blog/rethinking-container-image-distribution-to-eliminate-cold-starts", description: "A custom image runtime for sub-second container image cold starts" },
    { href: "/blog/thalamus-our-highly-available-distributed-router-for-global-realtime-ai-workloads", description: "A highly available, low-latency orchestrator for routing workloads across regions and clouds" }
];

export type ListRow4DataItem = {
  description: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { description: "Which workload is being started?" },
    { description: "Does a compatible checkpoint exist for this image, GPU type, machine type, and runtime version?" },
    { description: "Where is the checkpoint stored?" },
    { description: "Is the checkpoint already cached locally on the host?" },
    { description: "Should we restore, or fall back to a clean boot?" }
];

export type FeaturesItem = {
  variant: string;
  eyebrow?: string;
  title: string;
  date: string;
  category: string;
};
export const features: FeaturesItem[] = [
    { variant: "cerebrium-achieves-soc-2-type-ii-complianc", eyebrow: "Annoucement", title: "Cerebrium Achieves SOC 2 Type II Compliance for Secure Production AI Infrastructure", date: "July 8, 2026", category: "Product Update" },
    { variant: "a-low-latency-architecture-for-voice-agent", title: "A Low-Latency Architecture for Voice Agents with Real-time Web Search", date: "July 15, 2026", category: "Tutorial" },
    { variant: "2026-gpu-buyer-s-guide", title: "2026 GPU Buyer’s Guide", date: "July 13, 2026", category: "Annoucement" }
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

