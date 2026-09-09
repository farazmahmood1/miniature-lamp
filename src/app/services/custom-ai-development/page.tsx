import type { Metadata } from "next";

import ScrollReveal from "../../../components/motion/ScrollReveal";
import HeroSection from "./sections/hero-section";
import CapabilitiesSection from "./sections/capabilities-section";
import { getService } from "../../../config/services";
import { serviceMetadata } from "../../../lib/metadata";
import { motionSpec } from "./motion-spec";

const service = getService("custom-ai-development")!;

export const metadata: Metadata = serviceMetadata(service);

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="block relative" id="content">
        <div className="block" />
        <CapabilitiesSection />
      </div>
      <ScrollReveal spec={motionSpec} />
    </>
  );
}
