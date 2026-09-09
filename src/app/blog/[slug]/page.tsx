import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { posts, getPost, relatedPosts, formatPostDate } from "../../../config/blog";
import { site, SITE_ORIGIN, OG_IMAGE } from "../../../config/site";
import { postMetadata } from "../../../lib/metadata";
import { primaryCta } from "../../../config/navigation";
import PostBody from "../../../components/blog/PostBody";
import SplitTitle from "../../../components/ui/SplitTitle";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? postMetadata(post) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_ORIGIN}${OG_IMAGE}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}/blog/${post.slug}` },
    articleSection: post.category,
    inLanguage: site.locale,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_ORIGIN}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="block relative" id="content">
        <main className="block">
          <div className="block pb-1 bg-clr-1">
            <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
              <div className="block relative pt-24.5 max-lg:pt-22">
                <article className="block mt-[7.5625rem] mb-[10.2125rem] max-md:mt-20 max-md:mb-14 md:max-lg:mt-[6.0875rem] md:max-lg:mb-[4.0875rem]">
                  <header className="block">
                    <div className="grid mb-[10.2125rem] gap-5 grid-cols-12 max-md:mb-14 max-lg:gap-[0.9375rem] max-lg:grid-cols-1 md:max-lg:mb-[8.9375rem]">
                      <div className="block col-start-3 col-end-11 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                        <div className="h-full flex flex-col justify-center gap-8.5 text-center">
                          {/* Breadcrumb doubles as the way back to the index. */}
                          <nav aria-label="Breadcrumb">
                            <ol
                              className={`flex justify-center gap-2 ${MONO} text-muted-foreground [list-style-type:none] list-outside`}
                            >
                              <li className="list-item">
                                <Link className="hover:underline" href="/">
                                  Home
                                </Link>
                              </li>
                              <li className="list-item" aria-hidden="true">
                                /
                              </li>
                              <li className="list-item">
                                <Link className="hover:underline" href="/blog">
                                  Blog
                                </Link>
                              </li>
                            </ol>
                          </nav>

                          <ul
                            className={`flex justify-center gap-5 ${MONO} [list-style-type:none] list-outside`}
                          >
                            <li className="list-item">
                              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                            </li>
                            <li className="list-item text-muted-foreground">{post.category}</li>
                            <li className="list-item text-muted-foreground">
                              {post.readingMinutes} min read
                            </li>
                          </ul>

                          <SplitTitle
                            text={post.title}
                            as="h1"
                            className="block max-w-300 [font-family:'ABC_Favorit_Trial',_sans-serif] text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] text-balance mx-auto max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px]"
                          />

                          <p className="block max-w-200 mx-auto text-lg font-normal leading-[1.6875rem] tracking-[0.18px] text-muted-foreground text-balance max-lg:text-[1.0625rem] max-lg:leading-[1.625rem]">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </header>

                  <div className="block">
                    <div className="grid gap-5 grid-cols-12 max-lg:gap-[0.9375rem] max-lg:grid-cols-1">
                      <div className="block col-start-[span_4] col-end-[span_4] max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                        <p className="block sticky top-24.5 pb-20 text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-lg:hidden">
                          {post.title}
                        </p>
                      </div>

                      <div className="block min-w-0 col-start-[span_8] col-end-[span_8] max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                        <c-article-body class="inline">
                          <PostBody blocks={post.body} />
                        </c-article-body>

                        <div className="mt-16 border-t border-solid border-t-clr-2 pt-8">
                          <p className={`${MONO} mb-4 text-muted-foreground`}>
                            Written by {post.author}
                          </p>
                          <Link
                            className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-color-001 bg-primary cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5"
                            href={primaryCta.href}
                          >
                            <c-scramble-text class={`block z-2 ${MONO}`}>
                              {` ${primaryCta.label} `}
                            </c-scramble-text>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {related.length > 0 && (
                  <section
                    className="block pb-[10.2125rem] max-md:pb-14 md:max-lg:pb-[4.0875rem]"
                    aria-labelledby="related-heading"
                  >
                    <h2 id="related-heading" className={`${MONO} mb-8 text-muted-foreground`}>
                      Keep reading
                    </h2>
                    <ul className="grid gap-5 grid-cols-3 max-lg:gap-[0.9375rem] max-lg:grid-cols-1 [list-style-type:none] list-outside">
                      {related.map((r) => (
                        <li key={r.slug} className="list-item">
                          <Link
                            href={`/blog/${r.slug}`}
                            className="group flex h-full flex-col justify-between gap-6 rounded-[10px] bg-surface p-5 transition-colors duration-200 hover:bg-surface-2"
                          >
                            <span className={`${MONO} text-muted-foreground`}>{r.category}</span>
                            <span className="block text-[1.375rem] font-normal leading-[1.875rem] tracking-[-0.56px] text-balance">
                              {r.title}
                            </span>
                            <span className={`${MONO} text-muted-foreground`}>
                              {formatPostDate(r.date)}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
