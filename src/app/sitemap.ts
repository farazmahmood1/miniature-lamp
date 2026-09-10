import type { MetadataRoute } from "next";

import { SITE_ORIGIN } from "../config/site";
import { services } from "../config/services";
import { caseStudies } from "../config/work";
import { sortedPosts } from "../config/blog";
import { routes } from "../config/navigation";

export const dynamic = "force-static";

/**
 * The sitemap is built from the same config the pages read, so a new service, case
 * study or post is listed the moment it exists. Priorities reflect commercial
 * intent rather than depth: the pages that win work rank above the ones that inform.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_ORIGIN}${path}`;
  const lastModified = new Date();

  return [
    { url: url(routes.home), changeFrequency: "weekly", priority: 1, lastModified },
    { url: url(routes.services), changeFrequency: "monthly", priority: 0.9, lastModified },
    { url: url(routes.work), changeFrequency: "monthly", priority: 0.9, lastModified },
    { url: url(routes.contact), changeFrequency: "yearly", priority: 0.9, lastModified },
    { url: url(routes.pricing), changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: url(routes.about), changeFrequency: "monthly", priority: 0.7, lastModified },
    { url: url(routes.blog), changeFrequency: "weekly", priority: 0.7, lastModified },

    ...services.map((s) => ({
      url: url(s.href),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      lastModified,
    })),

    ...caseStudies.map((c) => ({
      url: url(`/work/${c.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      lastModified,
    })),

    ...sortedPosts.map((p) => ({
      url: url(`/blog/${p.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
      // Posts declare their own date, so a rebuild does not falsely refresh them.
      lastModified: new Date(p.date),
    })),

    { url: url(routes.privacy), changeFrequency: "yearly", priority: 0.2, lastModified },
    { url: url(routes.terms), changeFrequency: "yearly", priority: 0.2, lastModified },
  ];
}
