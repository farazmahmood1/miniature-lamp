/**
 * /llms.txt — a plain-text summary of the site for language models and AI crawlers.
 *
 * Generated from the same config the pages read, so it cannot drift out of date when
 * a service, case study or post is added.
 */

import { site, SITE_ORIGIN, socials } from "../../config/site";
import { services, serviceGroups } from "../../config/services";
import { caseStudies } from "../../config/work";
import { sortedPosts } from "../../config/blog";
import { routes } from "../../config/navigation";

export const dynamic = "force-static";

const url = (path: string) => `${SITE_ORIGIN}${path}`;

export function GET() {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## What we do",
    "",
    ...serviceGroups.map(
      (group) =>
        `- **${group.title}** (${group.caption}): ${group.items
          .map((s) => s.shortName)
          .join(", ")}.`,
    ),
    "",
    "## Key facts",
    "",
    `- Positioning: ${site.tagline}. Strategy, design, development, launch and growth, delivered by one team.`,
    "- Engagement model: fixed-scope sprints, monthly retainers, or an outcome-based agreement.",
    "- Ownership: clients own the code and the infrastructure accounts from the first commit.",
    `- Contact: ${site.contact.email}, ${site.contact.phoneDisplay}.`,
    `- Area served: ${site.contact.areaServed}.`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.name}](${url(s.href)}): ${s.summary}`),
    "",
    "## Selected work",
    "",
    ...caseStudies.map(
      (c) =>
        `- [${c.title}](${url(`/work/${c.slug}`)}): ${c.summary} (${c.industry}, ${c.year})`,
    ),
    "",
    "## Writing",
    "",
    ...sortedPosts.map((p) => `- [${p.title}](${url(`/blog/${p.slug}`)}): ${p.excerpt}`),
    "",
    "## Key pages",
    "",
    `- [Home](${url(routes.home)}): ${site.shortDescription}`,
    `- [Services](${url(routes.services)}): The full catalogue, grouped into AI and everything around it.`,
    `- [Work](${url(routes.work)}): Case studies, each with the numbers the engagement was measured on.`,
    `- [About](${url(routes.about)}): How an engagement runs, and what a client can hold us to.`,
    `- [Pricing](${url(routes.pricing)}): How the work is priced and what each model suits.`,
    `- [Blog](${url(routes.blog)}): Working notes on shipping software and AI.`,
    `- [Contact](${url(routes.contact)}): Start a project, or reach us directly.`,
    "",
    "## Elsewhere",
    "",
    ...socials.map((s) => `- [${s.label}](${s.href})`),
    `- [Privacy policy](${url(routes.privacy)})`,
    `- [Terms of service](${url(routes.terms)})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
