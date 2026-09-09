// Semantic page content extracted from recognized recipe sections.

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "#instant-startups", label: "Instant Startups" },
    { href: "#moderns-gpus", label: "Moderns GPUs" },
    { href: "#full-inference-control", label: "Full Inference Control" },
    { href: "#global-regions", label: "Global Regions" }
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
    { style: { maskImage: "url(\"/assets/llm/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/llm/svg/bbf73e985df9.svg", width: "1919", title: "Deploy Triton Inference server with TensorRT-LLM", description: "Achieve high throughput with Triton Inference Server and the TensorRT-LLM framework", id: "scrambletext-35", href: "https://docs.cerebrium.ai/docs/v4/examples/deploy-an-llm-with-tensorrtllm-tritonserver", label: "Deploy Triton Inference server with TensorRT-LLM" },
    { style: { maskImage: "url(\"/assets/llm/svg/07b69c95a47d.svg\")" }, height: "683", imgSrc: "/assets/llm/svg/07b69c95a47d.svg", width: "2352", title: "Deploy a VLM with SGLang", description: "Build an intelligent ad analysis system that evaluates advertisements across multiple dimensions", id: "scrambletext-36", href: "https://docs.cerebrium.ai/docs/v4/examples/deploy-a-vision-language-model-with-sglang", label: "Deploy a VLM with SGLang" },
    { style: { maskImage: "url(\"/assets/llm/svg/b4b14c3ee76b.svg\")" }, height: "41", imgSrc: "/assets/llm/svg/b4b14c3ee76b.svg", width: "41", title: "Serving GPT-OSS with vLLM", description: "Deploy OpenAI’s Latest Open Source Model with vLLM", id: "scrambletext-37", href: "https://docs.cerebrium.ai/docs/v4/examples/gpt-oss", label: "Serving GPT-OSS with vLLM" },
    { style: { maskImage: "url(\"/assets/llm/svg/2de6c88b4fd2.svg\")" }, height: "54", imgSrc: "/assets/llm/svg/2de6c88b4fd2.svg", width: "82", title: "Hyperparameter Sweep training Llama 3.2 with WandB", description: "Run a hyperparameter sweep on Llama 3.2 with WandB", id: "scrambletext-38", href: "https://docs.cerebrium.ai/docs/v4/examples/wandb-sweep", label: "Hyperparameter Sweep training Llama 3.2 with WandB" }
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

