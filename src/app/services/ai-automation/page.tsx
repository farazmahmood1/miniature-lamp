import type { Metadata } from "next";

import InteractionRuntime from "../../../components/motion/InteractionRuntime";
import ScrollReveal from "../../../components/motion/ScrollReveal";
import CrosswordScramble from "../../../components/motion/CrosswordScramble";
import HeroSection from "./sections/hero-section";
import CapabilitiesSection from "./sections/capabilities-section";
import { getService } from "../../../config/services";
import { serviceMetadata } from "../../../lib/metadata";
import { interactionSpecs, motionSpec } from "./motion-spec";

const service = getService("ai-automation")!;

export const metadata: Metadata = serviceMetadata(service);

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="block relative" id="content">
        <div className="block" />
        <CapabilitiesSection />
      </div>
      <CrosswordScramble />
      {interactionSpecs.map((spec, i) => (
        <InteractionRuntime key={i} spec={spec} />
      ))}
      <ScrollReveal spec={motionSpec} />
    </>
  );
}
