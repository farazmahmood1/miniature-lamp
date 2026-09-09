/**
 * The design's large display heading.
 *
 * Words are wrapped individually because the entrance animation staggers them, and
 * the whole stack is hidden from assistive technology in favour of one readable label
 * on the container — the same arrangement the captured pages use.
 */

export default function SplitTitle({
  text,
  as: Tag = "h1",
  className = "",
  /** Words to paint with the brand gradient, given as a zero-based index range. */
  gradient,
}: {
  text: string;
  as?: "h1" | "h2" | "div";
  className?: string;
  gradient?: { from: number; to: number };
}) {
  const words = text.split(" ");
  const GRADIENT =
    "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-4) 100%)";

  return (
    <c-split-title class="block">
      <Tag className={className} aria-label={text}>
        {words.map((word, i) => {
          const inGradient =
            gradient != null && i >= gradient.from && i <= gradient.to;
          return (
            <span key={i}>
              <span
                className={
                  inGradient
                    ? "inline-block relative [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                    : "inline-block relative"
                }
                style={inGradient ? { backgroundImage: GRADIENT } : undefined}
                aria-hidden="true"
              >
                {word}
              </span>{" "}
            </span>
          );
        })}
      </Tag>
    </c-split-title>
  );
}
