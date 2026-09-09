import type { Metadata } from "next";

import { site } from "../../config/site";
import { pageMetadata } from "../../lib/metadata";
import LegalPage, { type LegalSection } from "../../components/ui/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and stores personal information, and the rights you have over it.`,
  path: "/privacy",
});

const UPDATED = "9 September 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `${site.name} is a software studio. This policy covers this website and the enquiries sent through it. Where we process personal data on behalf of a client as part of an engagement, that processing is governed by the contract for that project rather than by this policy.`,
      `You can reach us about anything on this page at ${site.contact.email}.`,
    ],
  },
  {
    heading: "What we collect",
    body: [
      "We collect only what you choose to send us, plus a small amount of technical information that any web server records.",
      [
        "Details you submit through the enquiry form: name, company, email address, phone number, the type of work you are asking about, an indicative budget and your description of the project.",
        "The content of any email, phone call or message you start with us.",
        "Standard server and analytics data such as pages requested, approximate region, referring page, and browser and device type.",
      ],
      "We do not buy contact data, and we do not enrich what you send us with information from third-party data brokers.",
    ],
  },
  {
    heading: "Why we use it",
    body: [
      "Enquiry details are used to reply to you, to scope the work you asked about and to keep a record of the conversation if it becomes a project. Technical data is used to keep the site working and to understand which pages are useful.",
      "We do not sell personal information, and we do not share it for advertising.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This site does not set advertising or cross-site tracking cookies. Your browser may store a small amount of data locally so the site can remember interface preferences within a session; that data stays in your browser and is never sent to us.",
      "If we add privacy-respecting analytics, it will measure page views in aggregate and will not build a profile of individual visitors.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries that do not become projects are deleted within twenty-four months. Records connected to an engagement are kept for as long as the contract and applicable tax and accounting rules require, then deleted.",
    ],
  },
  {
    heading: "Who else sees it",
    body: [
      "We use a small number of service providers to run the business: email and calendar hosting, website hosting, and the tools we use to write and manage proposals. They process data on our instructions only.",
      "We disclose personal information to anyone else only where the law requires it.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us for a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it. Where we rely on your consent, you can withdraw it at any time.",
      `Write to ${site.contact.email} and we will respond within thirty days. If you are in the UK or the EU and are unhappy with our response, you can complain to your national data protection authority.`,
    ],
  },
  {
    heading: "Security",
    body: [
      "This site is served over HTTPS. Access to enquiry data is limited to the people who need it to reply to you, and is protected by multi-factor authentication.",
      "No system is perfectly secure. If a breach affects your personal information and creates a real risk to you, we will tell you and the relevant regulator without undue delay.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "If this policy changes materially we will update the date at the top of this page. Continuing to use the site after a change means the updated policy applies.",
    ],
  },
];

export default function Page() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated={UPDATED}
      intro="What we collect when you contact us, why we have it, and how to get it removed."
      sections={SECTIONS}
    />
  );
}
