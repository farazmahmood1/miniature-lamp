import type { Metadata } from "next";

import InteractionRuntime from "../../../components/motion/InteractionRuntime";
import ScrollReveal from "../../../components/motion/ScrollReveal";
import HeroSection from "./sections/hero-section";
import CapabilitiesSection from "./sections/capabilities-section";
import { getService } from "../../../config/services";
import { serviceMetadata } from "../../../lib/metadata";
import { interactionSpecs, motionSpec } from "./motion-spec";

const service = getService("conversational-ai")!;

export const metadata: Metadata = serviceMetadata(service);

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="block relative" id="content">
        <div className="block" />
        <CapabilitiesSection />
      </div>
      {interactionSpecs.map((spec, i) => (
        <InteractionRuntime key={i} spec={spec} />
      ))}
      <ScrollReveal spec={motionSpec} />
    </>
  );
}
