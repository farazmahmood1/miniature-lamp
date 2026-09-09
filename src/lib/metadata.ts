/**
 * Metadata builders.
 *
 * Every route builds its `Metadata` through one of these, so the canonical URL, the
 * OpenGraph block and the Twitter card can never drift apart or be forgotten on a new
 * page. The root layout supplies the title template that appends the brand.
 */

import type { Metadata } from "next";
import { site, OG_IMAGE } from "../config/site";
import type { Service } from "../config/services";
import type { Post } from "../config/blog";
import type { CaseStudy } from "../config/work";

type PageMetaInput = {
  title: string;
  description: string;
  /** Site-relative path, used as the canonical URL. */
  path: string;
  /** "website" for evergreen pages, "article" for posts and case studies. */
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  authors?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image = OG_IMAGE,
  publishedTime,
  authors,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type,
      url: path,
      siteName: site.name,
      locale: site.locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const serviceMetadata = (service: Service): Metadata =>
  pageMetadata({
    title: service.name,
    description: service.metaDescription,
    path: service.href,
  });

export const postMetadata = (post: Post): Metadata =>
  pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  });

export const caseStudyMetadata = (study: CaseStudy): Metadata =>
  pageMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${study.slug}`,
    type: "article",
  });
