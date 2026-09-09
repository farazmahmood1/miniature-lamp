// Semantic page content extracted from recognized recipe sections.

export type ProductsItem = {
  variant: string;
  title: string;
  description: string;
  label: string;
  price?: string;
  badge?: string;
};
export const products: ProductsItem[] = [
    { variant: "hobby", title: "Hobby", description: "500 containers + 5 Concurrent GPUs", label: "Start for free" },
    { variant: "standard", title: "Standard", description: "For developers with ML apps in producation", price: "$100", label: "Start for free" },
    { variant: "enterprise", badge: "Most Popular", title: "Enterprise", description: "For teams looking to scale ML apps", label: "Contact us" }
];

export type LogosItem = {
  [key: string]: unknown;
};
export const logos: LogosItem[] = [
    {  },
    {  },
    {  }
];

export type Logos2Item = {
  [key: string]: unknown;
};
export const logos2: Logos2Item[] = [
    {  },
    {  },
    {  }
];

export type Logos3Item = {
  [key: string]: unknown;
};
export const logos3: Logos3Item[] = [
    {  },
    {  },
    {  }
];

export type Logos4Item = {
  [key: string]: unknown;
};
export const logos4: Logos4Item[] = [
    {  },
    {  },
    {  }
];

export type ListRow4DataItem = {
  href: string;
  label: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/use-cases/large-language-models", label: "Large Language Models" },
    { href: "/use-cases/voice", label: "Voice" },
    { href: "/use-cases/image-and-video", label: "Image & Video" }
];

export type ListRow5DataItem = {
  href: string;
  target: string;
  label: string;
  rel?: string;
};
export const listRow5Data: ListRow5DataItem[] = [
    { href: "/pricing", target: "_self", label: "Pricing" },
    { href: "/about", target: "_self", label: "Company" },
    { href: "https://docs.cerebrium.ai/docs/getting-started/introduction", target: "_blank", rel: "noopener noreferrer", label: "Docs" },
    { href: "/blog", target: "_self", label: "Blog" },
    { href: "/contact", target: "_self", label: "Contact" },
    { href: "https://status.cerebrium.ai/", target: "_blank", rel: "noopener noreferrer", label: "Status" },
    { href: "/resources", target: "_self", label: "Resources" }
];

export type ListRow6DataItem = {
  href: string;
  label: string;
};
export const listRow6Data: ListRow6DataItem[] = [
    { href: "/brand-assets", label: "Brand Assets" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of service" }
];

