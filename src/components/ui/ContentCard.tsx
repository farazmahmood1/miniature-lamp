/**
 * The list-page card: a service, a case study or a post.
 *
 * One component so the services index, the work index and the blog index share a
 * rhythm rather than each inventing one. The whole card is a single link, and the
 * arrow is the hover affordance the design uses everywhere else.
 */

import Link from "next/link";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export default function ContentCard({
  href,
  eyebrow,
  title,
  description,
  meta,
  tag,
  /** Dark cards sit on the light band; light cards sit on the dark ground. */
  tone = "light",
}: {
  href: string;
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: string;
  tag?: string | null;
  tone?: "light" | "dark";
}) {
  const surface =
    tone === "light"
      ? "bg-surface hover:bg-surface-2 text-foreground"
      : "bg-clr-0 hover:bg-color-003 text-background [backdrop-filter:blur(17.5px)]";

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col justify-between gap-8 rounded-[10px] p-6 transition-colors duration-200 max-lg:p-5 ${surface}`}
    >
      <div className="flex items-start justify-between gap-4">
        {eyebrow && <span className={`${MONO} opacity-65`}>{eyebrow}</span>}
        {tag && (
          <span
            className={`${MONO} shrink-0 rounded-full bg-primary px-2 py-1 text-color-001`}
            style={{ fontSize: "10px", letterSpacing: "0.04em" }}
          >
            {tag}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] text-balance max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px]">
          {title}
        </h3>
        {description && (
          <p className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] opacity-70 text-balance">
            {description}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className={`${MONO} opacity-65`}>{meta ?? "Read more"}</span>
        <svg
          viewBox="0 0 26 26"
          width="22"
          height="22"
          fill="none"
          aria-hidden="true"
          className="shrink-0 opacity-40 transition-opacity duration-200 group-hover:opacity-100"
        >
          <path
            d="M8 18 18 8M10 8h8v8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
