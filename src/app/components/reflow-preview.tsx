/**
 * The visual on the "Design that survives engineering" block.
 *
 * Replaces the captured world map, which measured global infrastructure and said
 * nothing about design. This shows the claim instead of asserting it: a frame whose
 * width is the only animated property, with a real layout inside that rewraps on its
 * own as the frame narrows. Nothing about the reflow is faked — the tiles are flex
 * children finding new rows.
 *
 * Pure CSS, so it costs no JavaScript and stops entirely under reduced motion.
 * Keyframes live in `motion.css` next to the site's other motion.
 */

const TILES = [
  { span: "wide", accent: false },
  { span: "narrow", accent: true },
  { span: "narrow", accent: false },
  { span: "wide", accent: false },
  { span: "narrow", accent: false },
  { span: "narrow", accent: false },
] as const;

export default function ReflowPreview() {
  return (
    <div className="ct-reflow" aria-hidden="true">
      {/* Breakpoint readout, in the card's one free corner. */}
      <div className="ct-reflow__labels">
        <span className="ct-reflow__label" data-stop="0">1440</span>
        <span className="ct-reflow__label" data-stop="1">768</span>
        <span className="ct-reflow__label" data-stop="2">375</span>
      </div>

      <div className="ct-reflow__frame">
        <div className="ct-reflow__chrome">
          <span />
          <span />
          <span />
          <i className="ct-reflow__bar" />
        </div>

        <div className="ct-reflow__body">
          <div className="ct-reflow__hero">
            <i className="ct-reflow__line ct-reflow__line--lg" />
            <i className="ct-reflow__line ct-reflow__line--md" />
            <i className="ct-reflow__cta" />
          </div>

          <div className="ct-reflow__grid">
            {TILES.map((tile, i) => (
              <div
                key={i}
                className="ct-reflow__tile"
                data-span={tile.span}
                data-accent={tile.accent ? "" : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      {/* The handle that reads as the thing dragging the frame narrower. */}
      <span className="ct-reflow__handle" />
    </div>
  );
}
