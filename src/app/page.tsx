import type { Metadata } from "next";

import HeroCanvas from "../components/motion/HeroCanvas";
import InteractiveDots from "../components/motion/InteractiveDots";
import CaseStudyCarousel from "../components/motion/CaseStudyCarousel";
import ScrollReveal from "../components/motion/ScrollReveal";
import HeroBackdrop from "./sections/hero-backdrop";
import HomeSections from "./sections/home-sections";
import { site } from "../config/site";
import { homeMotionSpec } from "./motion-spec";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.shortDescription,
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <InteractiveDots />
      <CaseStudyCarousel />
      <HeroBackdrop />
      <div className="block relative" data-cid="n3" id="content">
        <div className="block" data-cid="n4" />
        <HomeSections />
      </div>
      <ScrollReveal spec={homeMotionSpec} />
    </>
  );
}
