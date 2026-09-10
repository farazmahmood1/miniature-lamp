/**
 * Custom element declarations.
 *
 * The design's markup is built from a set of `<c-*>` custom elements. Most are
 * presentational hooks that CSS targets; a few (`c-scramble-text`,
 * `c-interactive-dots`, `c-carousel-tile`, `c-background-canvas`) have behaviour
 * attached at runtime by the components under `src/components/motion`.
 *
 * Without these declarations every one of them is a type error in JSX, which is why
 * the build was configured to ignore type errors. They take the standard HTML
 * attribute set plus `class` — these are real custom elements, not React components,
 * so the attribute is `class` rather than `className`.
 */

import type { DetailedHTMLProps, HTMLAttributes } from "react";

type CustomElement = DetailedHTMLProps<
  Omit<HTMLAttributes<HTMLElement>, "className"> & { class?: string },
  HTMLElement
>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "c-accordion": CustomElement;
      "c-animated-chart": CustomElement;
      "c-article-body": CustomElement;
      "c-background-canvas": CustomElement;
      "c-carousel-tile": CustomElement;
      "c-crossword-grid": CustomElement;
      "c-dato-image": CustomElement;
      "c-feature-card-containers-animation": CustomElement;
      "c-feature-card-gpu-carousel": CustomElement;
      "c-feature-card-inference-animation": CustomElement;
      "c-feature-card-logo-carousel": CustomElement;
      "c-feature-card-range-chart": CustomElement;
      "c-feature-card-terminal": CustomElement;
      "c-feature-card-workloads-animation": CustomElement;
      "c-feature-card-world-map-animation": CustomElement;
      "c-feature-cards": CustomElement;
      "c-header": CustomElement;
      "c-hero-home": CustomElement;
      "c-hero-use-case": CustomElement;
      "c-inline-video": CustomElement;
      "c-inner-parallax": CustomElement;
      "c-interactive-dots": CustomElement;
      "c-media-transform": CustomElement;
      "c-pricing-table": CustomElement;
      "c-rail": CustomElement;
      "c-scramble-text": CustomElement;
      "c-segmented-controls": CustomElement;
      "c-segmented-panel": CustomElement;
      "c-segmented-tab": CustomElement;
      "c-split-title": CustomElement;
      "c-voice-visualizer": CustomElement;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "c-accordion": CustomElement;
      "c-animated-chart": CustomElement;
      "c-article-body": CustomElement;
      "c-background-canvas": CustomElement;
      "c-carousel-tile": CustomElement;
      "c-crossword-grid": CustomElement;
      "c-dato-image": CustomElement;
      "c-feature-card-containers-animation": CustomElement;
      "c-feature-card-gpu-carousel": CustomElement;
      "c-feature-card-inference-animation": CustomElement;
      "c-feature-card-logo-carousel": CustomElement;
      "c-feature-card-range-chart": CustomElement;
      "c-feature-card-terminal": CustomElement;
      "c-feature-card-workloads-animation": CustomElement;
      "c-feature-card-world-map-animation": CustomElement;
      "c-feature-cards": CustomElement;
      "c-header": CustomElement;
      "c-hero-home": CustomElement;
      "c-hero-use-case": CustomElement;
      "c-inline-video": CustomElement;
      "c-inner-parallax": CustomElement;
      "c-interactive-dots": CustomElement;
      "c-media-transform": CustomElement;
      "c-pricing-table": CustomElement;
      "c-rail": CustomElement;
      "c-scramble-text": CustomElement;
      "c-segmented-controls": CustomElement;
      "c-segmented-panel": CustomElement;
      "c-segmented-tab": CustomElement;
      "c-split-title": CustomElement;
      "c-voice-visualizer": CustomElement;
    }
  }
}

export {};
