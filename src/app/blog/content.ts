// Semantic page content extracted from recognized recipe sections.

export type FeaturesItem = {
  text: string;
  style: string;
  height: string;
  imgSrc: string;
  width: string;
  title: string;
  href: string;
  label: string;
  description: string;
};
export const features: FeaturesItem[] = [
    { text: "Video", style: { maskImage: "url(\"/assets/blog/svg/b5a2c37372fd.svg\")" }, height: "489", imgSrc: "/assets/blog/svg/b5a2c37372fd.svg", width: "2471", title: "How Tavus Scaled Human-like AI Experiences with Cerebrium", href: "/blog/how-tavus-scaled-human-like-ai-experiences-with-cerebrium", label: "How Tavus Scaled Human-like AI Experiences with Cerebrium", description: "Digital Avatars" },
    { text: "Digital Avatars", style: { maskImage: "url(\"/assets/blog/svg/2d60944a7d85.svg\")" }, height: "119", imgSrc: "/assets/blog/svg/2d60944a7d85.svg", width: "415", title: "How bitHuman Scaled Digital Humans 10x Faster with Cerebrium", href: "/blog/how-bithuman-scaled-digital-humans-10x-faster-with-cerebrium", label: "How bitHuman Scaled Digital Humans 10x Faster with Cerebrium", description: "Virtual Assistants" },
    { text: "LLMs", style: { maskImage: "url(\"/assets/blog/svg/b415e5819d2f.svg\")" }, height: "364", imgSrc: "/assets/blog/svg/b415e5819d2f.svg", width: "900", title: "Lelapa AI uses Cerebrium to Break Language Barriers", href: "/blog/lelapa-ai-uses-cerebrium-to-break-language-barriers", label: "Lelapa AI uses Cerebrium to Break Language Barriers", description: "Generative AI" }
];

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/blog", label: "1" },
    { href: "/blog/page/2", label: "2" },
    { href: "/blog/page/3", label: "3" },
    { href: "/blog/page/4", label: "4" }
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

