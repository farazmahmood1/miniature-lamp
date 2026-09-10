import type { Metadata } from "next";

import { site } from "../../config/site";
import { pageMetadata } from "../../lib/metadata";
import LegalPage, { type LegalSection } from "../../components/ui/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms covering use of the ${site.name} website, and the ground rules that sit behind an engagement contract.`,
  path: "/terms",
});

const UPDATED = "9 September 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "About these terms",
    body: [
      `These terms cover your use of the ${site.name} website. They are not the contract for a project. Every engagement is governed by a separate signed agreement covering scope, price, timeline, ownership and liability, and that agreement takes precedence over anything here.`,
    ],
  },
  {
    heading: "Using this site",
    body: [
      "You may read, link to and share anything published here. You may not scrape it at a volume that degrades the service for other people, attempt to gain unauthorised access, or reproduce substantial parts of it as your own material.",
    ],
  },
  {
    heading: "Our content",
    body: [
      `Text, design, code and images on this site belong to ${site.name} unless credited otherwise. Trademarks and product names belonging to other companies are used descriptively and remain the property of their owners.`,
      "Case studies describe work we have carried out. Client names and figures are published only where we have permission, or are presented as illustrative examples.",
    ],
  },
  {
    heading: "Enquiries and proposals",
    body: [
      "Sending an enquiry does not create a contract, and neither does receiving a proposal from us. Work begins only when both parties have signed an engagement agreement.",
      "Prices shown anywhere on this site are indicative. A binding figure appears only in a written proposal.",
    ],
  },
  {
    heading: "Client work and ownership",
    body: [
      "Under our standard engagement terms, you own the deliverables once invoices are settled, and the work is delivered into infrastructure and repositories you control.",
      [
        "We retain ownership of our pre-existing tools, libraries and internal know-how, and license them to you for use within the deliverable.",
        "Either party may end an ongoing retainer with notice, as set out in the engagement agreement.",
        "We may describe the work publicly only with your agreement.",
      ],
    ],
  },
  {
    heading: "No warranty for this site",
    body: [
      "This website is provided as it is. We work to keep it accurate and available, and we do not guarantee that it will be uninterrupted or error free, or that any article on it applies to your circumstances.",
      "Nothing published here is professional advice for a specific situation.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the extent the law allows, we are not liable for any loss arising from your use of this website, including lost profits or lost data. Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.",
      "Liability arising from a project is dealt with in the engagement agreement for that project.",
    ],
  },
  {
    heading: "Links to other sites",
    body: [
      "Where we link to a third-party site we do so because we found it useful. We do not control it and are not responsible for its content or its privacy practices.",
    ],
  },
  {
    heading: "Changes and contact",
    body: [
      "We may update these terms; the date at the top of this page shows when they last changed.",
      `Questions about anything here can go to ${site.contact.email}.`,
    ],
  },
];

export default function Page() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      updated={UPDATED}
      intro="The ground rules for using this site, and where the real engagement contract takes over."
      sections={SECTIONS}
    />
  );
}
