import type { MetadataRoute } from "next";

import { SITE_ORIGIN } from "../config/site";

export const dynamic = "force-static";

/**
 * Everything here is public marketing content, so everything is crawlable, including
 * by AI crawlers — /llms.txt exists specifically to be read by them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
