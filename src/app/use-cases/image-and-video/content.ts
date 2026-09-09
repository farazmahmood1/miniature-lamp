// Semantic page content extracted from recognized recipe sections.

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "#instant-startups", label: "Instant Startups" },
    { href: "#moderns-gpus", label: "Moderns GPUs" },
    { href: "#cost-efficient-at-scale", label: "Cost-Efficient at Scale" },
    { href: "#global-orchestration", label: "Global Orchestration" }
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

