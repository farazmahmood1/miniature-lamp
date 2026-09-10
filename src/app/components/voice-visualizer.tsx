/**
 * The waveform rail on the conversational AI page.
 *
 * The capture left this as fifty-two `<div>`s, each carrying the `scaleY` matrix it
 * happened to hold at the moment the page was recorded. Nothing ever moved them, so
 * a component whose whole job is to look like live audio sat perfectly still.
 *
 * Each bar now animates on its own irregular loop. Four random stops per bar and a
 * random duration mean no two bars share a rhythm and the pattern never visibly
 * repeats, which is what reads as sound rather than as a chart.
 *
 * The randomness is seeded rather than `Math.random`, because this renders on the
 * server: an unseeded generator would produce different numbers during hydration and
 * React would discard the markup. Seeded, the two passes agree exactly.
 *
 * No JavaScript ships for this. The values land as custom properties and CSS drives
 * the motion, so it animates on the compositor and costs nothing at runtime.
 */

/** How many bars exist. CSS hides the tail at narrower widths. */
const BAR_COUNT = 52;

/** Scale bounds. The capture sat around 0.5, so this keeps the same visual weight. */
const MIN_SCALE = 0.28;
const MAX_SCALE = 0.98;

/** One full irregular cycle, in seconds. */
const MIN_DURATION = 1.1;
const MAX_DURATION = 2.9;

/**
 * Mulberry32. Small, fast, and deterministic from a fixed seed, which is the only
 * property that matters here.
 */
function seededRandom(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Bar = {
  stops: [number, number, number, number];
  duration: number;
  delay: number;
};

/** Built once at module load, so every render of the page reuses the same rail. */
const BARS: Bar[] = (() => {
  const rand = seededRandom(0x5eed1e);
  const scale = () => MIN_SCALE + rand() * (MAX_SCALE - MIN_SCALE);
  const round = (n: number) => Math.round(n * 1000) / 1000;

  return Array.from({ length: BAR_COUNT }, () => ({
    stops: [round(scale()), round(scale()), round(scale()), round(scale())] as [
      number,
      number,
      number,
      number,
    ],
    duration: round(MIN_DURATION + rand() * (MAX_DURATION - MIN_DURATION)),
    // Negative, so every bar is already mid-cycle on the first frame rather than
    // the whole rail starting from one flat line.
    delay: round(-rand() * MAX_DURATION),
  }));
})();

export default function VoiceVisualizer({ className }: { className?: string }) {
  return (
    <c-voice-visualizer
      class={`vv ${className ?? ""}`}
      id="voicevisualizer-49"
      role="img"
      aria-label="Audio waveform"
    >
      {BARS.map((bar, i) => (
        <span
          className={`vv__bar${i % 2 === 1 ? " vv__bar--accent" : ""}`}
          key={i}
          style={
            {
              "--a": bar.stops[0],
              "--b": bar.stops[1],
              "--c": bar.stops[2],
              "--d": bar.stops[3],
              "--dur": `${bar.duration}s`,
              "--delay": `${bar.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </c-voice-visualizer>
  );
}
