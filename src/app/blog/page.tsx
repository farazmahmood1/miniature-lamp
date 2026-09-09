import type { Metadata } from "next";

import { sortedPosts, formatPostDate } from "../../config/blog";
import { pageMetadata } from "../../lib/metadata";
import PageHero from "../../components/ui/PageHero";
import ContentCard from "../../components/ui/ContentCard";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Notes from the Codilated studio on shipping AI features, automation audits, performance budgets and the parts of a build that decide whether it survives launch.",
  path: "/blog",
});

export default function Page() {
  const [lead, ...rest] = sortedPosts;

  return (
    <div className="block relative" id="content">
      <PageHero
        eyebrow="Blog"
        title="What we learned building it"
        gradient={{ from: 1, to: 2 }}
        intro="Working notes rather than thought leadership. Most of these started as an argument inside a project."
      />

      <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
        <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
          {/* The newest post gets the wide card; the rest run three up. */}
          <div className="mb-5 max-lg:mb-[0.9375rem]">
            <ContentCard
              href={`/blog/${lead.slug}`}
              eyebrow={`${lead.category} · Latest`}
              title={lead.title}
              description={lead.excerpt}
              meta={`${formatPostDate(lead.date)} · ${lead.readingMinutes} min read`}
            />
          </div>

          <ul className="grid gap-5 grid-cols-3 max-lg:gap-[0.9375rem] max-lg:grid-cols-1 md:max-lg:grid-cols-2 [list-style-type:none] list-outside">
            {rest.map((post) => (
              <li className="list-item" key={post.slug}>
                <ContentCard
                  href={`/blog/${post.slug}`}
                  eyebrow={post.category}
                  title={post.title}
                  description={post.excerpt}
                  meta={`${formatPostDate(post.date)} · ${post.readingMinutes} min`}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
