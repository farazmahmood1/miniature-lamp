"use client";

/**
 * Hero background — WebGL ribbon field.
 *
 * The live site renders this with three.js r183 into a fixed, full-viewport canvas
 * (`<c-background-canvas>`). The capture pass froze that canvas to a PNG, but the WebGL
 * readback came back blank, so the clone shipped an empty white image. The original
 * scene's shader/geometry source is not in the capture and is not recoverable from it —
 * this is a rebuild that matches the captured frame's composition and palette, not the
 * original source.
 *
 * Geometry: one tessellated plane, split in the vertex shader into LANES parallel
 * ribbons. Each ribbon has its own phase, sweeps on a sine centreline, and twists about
 * that centreline so it alternately shows its lit face and its shadowed back — which is
 * what produces the bright magenta crest lines in the reference frame. The gap between
 * lanes is discarded, so the ribbons read as separate strips over black rather than one
 * continuous surface.
 *
 * Palette sampled from the captured 1280 screenshot:
 *   crest #97287c → #77165d → #591545 → #400f31 → trough #2a0021, over pure black.
 */

import { useEffect, useRef } from "react";

const LANES = 5;
/** Fraction of each lane the ribbon occupies; the remainder is the gap. */
const RIBBON_FILL = 0.58;

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;

  varying float vAcross;   // -0.5..0.5 across the ribbon's width
  varying float vAlong;    // 0..1 along its length
  varying float vShade;    // lambert term from the twisted surface normal
  varying float vLane;
  varying float vGap;      // >1.0 means this vertex is in the inter-lane gap
  varying vec2  vNdc;      // clip-space position, for the screen-space falloff

  const float LANES = ${LANES}.0;
  const float FILL  = ${RIBBON_FILL};

  void main() {
    float laneF = uv.y * LANES;
    float lane  = floor(laneF);
    float local = fract(laneF);

    vLane  = lane;
    vAlong = uv.x;
    vGap   = local / FILL;

    // Position along the ribbon, in world units.
    float x = (uv.x - 0.5) * 16.0;

    // Each lane runs on its own phase so the stack never moves as one rigid sheet.
    float phase = uTime * 0.20 + lane * 2.1 + uScroll * 1.1;

    // Sweeping centreline — two octaves so the curve isn't a plain sine.
    float cy = sin(x * 0.40 + phase) * 1.25
             + sin(x * 0.19 - phase * 0.55) * 0.70;

    // Stack the lanes, with a slight diagonal drift so they fan toward the corner.
    float stackY = (lane - (LANES - 1.0) * 0.5) * 1.30 - x * 0.16;

    // Twist about the centreline: this is what rolls the lit face in and out of view.
    float theta = sin(x * 0.30 + phase * 0.85) * 1.35;

    // Cross-section coordinate, and the ribbon's world width (tapered at both ends).
    float acr = clamp(vGap, 0.0, 1.0) - 0.5;
    float taper = smoothstep(0.0, 0.16, uv.x) * smoothstep(1.0, 0.84, uv.x);
    float w = 1.05 * mix(0.45, 1.0, taper);

    vAcross = acr;

    vec3 p;
    p.x = x;
    p.y = cy + stackY + acr * w * cos(theta);
    p.z = acr * w * sin(theta) - lane * 0.35;

    // Surface normal of the twisted strip lies in the YZ plane.
    vec3 n = vec3(0.0, cos(theta), sin(theta));
    vec3 L = normalize(vec3(-0.25, 0.55, 0.80));
    // Two-sided: the back face is lit too, just far dimmer.
    float d = dot(n, L);
    vShade = max(abs(d) * (d > 0.0 ? 1.0 : 0.45), 0.0);

    vec4 clip = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    vNdc = clip.xy / max(clip.w, 0.0001);
    gl_Position = clip;
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  varying float vAcross;
  varying float vAlong;
  varying float vShade;
  varying float vLane;
  varying float vGap;
  varying vec2  vNdc;

  // Sampled from the captured hero frame.
  const vec3 CREST  = vec3(0.592, 0.157, 0.486); // #97287c
  const vec3 BRIGHT = vec3(0.467, 0.086, 0.365); // #77165d
  const vec3 MID    = vec3(0.349, 0.082, 0.271); // #591545
  const vec3 DEEP   = vec3(0.251, 0.059, 0.192); // #400f31
  const vec3 TROUGH = vec3(0.165, 0.000, 0.129); // #2a0021

  void main() {
    // Everything past the ribbon's share of its lane is empty space.
    if (vGap > 1.0) discard;

    float s = clamp(vShade, 0.0, 1.0);

    // Weighted toward the dark end — in the reference most of the ribbon area sits in
    // the #400f31–#591545 range and only the narrow crest reaches #97287c.
    vec3 c = mix(TROUGH, DEEP,   smoothstep(0.00, 0.42, s));
    c = mix(c, MID,    smoothstep(0.40, 0.70, s));
    c = mix(c, BRIGHT, smoothstep(0.68, 0.90, s));
    c = mix(c, CREST,  smoothstep(0.88, 1.00, s));

    // Bright rim along the ribbon's edges — the highlight that reads as a folded edge.
    float edge = smoothstep(0.40, 0.5, abs(vAcross));
    c += CREST * edge * s * 0.22;

    // Fade the ribbon out well before the lane boundary. Vertices past FILL collapse
    // onto the edge, so the mesh silhouette there is a jagged polyline; if alpha were
    // still high when it hit that boundary the edge would staircase. MSAA cannot help:
    // a discarded fragment opts out of coverage-based antialiasing.
    float edgeAA = smoothstep(0.0, 0.13, vGap) * smoothstep(1.0, 0.87, vGap);

    // Fade each ribbon out at both ends of its run so nothing terminates abruptly.
    float endFade = smoothstep(0.0, 0.14, vAlong) * smoothstep(1.0, 0.86, vAlong);

    // Diagonal screen-space falloff: the captured frame keeps the upper-left quadrant
    // black (it sits behind the headline) and masses the ribbons toward lower-right.
    float diag = vNdc.x * 0.75 - vNdc.y * 0.65;
    float corner = smoothstep(-0.85, 0.55, diag);

    float a = edgeAA * endFade * corner * (0.10 + 0.62 * s);
    if (a < 0.004) discard;

    gl_FragColor = vec4(c, a);
  }
`;

const PARTICLE_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aSize;
  attribute float aSeed;
  varying float vAlpha;

  void main() {
    vec3 p = position;

    // Slow upward drift with a lateral sway; wrap in the shader so no CPU work is needed.
    float t = uTime * 0.045;
    p.y = mod(p.y + t * (0.4 + aSeed * 0.8) + 6.0, 12.0) - 6.0;
    p.x += sin(uTime * 0.12 + aSeed * 30.0) * 0.35;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio * (7.0 / -mv.z);

    // Twinkle, and fade out the ones nearest the camera so nothing pops.
    vAlpha = (0.25 + 0.75 * (0.5 + 0.5 * sin(uTime * 0.7 + aSeed * 18.0)))
           * smoothstep(-1.5, -5.0, mv.z);
  }
`;

const PARTICLE_FRAG = /* glsl */ `
  precision mediump float;
  varying float vAlpha;

  void main() {
    // Round, soft-edged point.
    vec2 d = gl_PointCoord - 0.5;
    float r = dot(d, d);
    if (r > 0.25) discard;
    float falloff = 1.0 - smoothstep(0.0, 0.25, r);
    gl_FragColor = vec4(vec3(0.85, 0.35, 0.68), falloff * vAlpha * 0.85);
  }
`;

/** Radial magenta bloom behind the ribbons — the ambient glow in the captured frame. */
const GLOW_FRAG = /* glsl */ `
  precision mediump float;
  varying vec2 vUv;
  void main() {
    vec2 d = vUv - vec2(0.62, 0.42);
    d.x *= 1.35;
    float r = length(d);
    float a = smoothstep(0.62, 0.0, r);
    gl_FragColor = vec4(vec3(0.36, 0.06, 0.28), a * 0.5);
  }
`;

const GLOW_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export default function HeroCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Respect the OS reduced-motion setting: render one static frame, no RAF loop.
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    // three is ~600KB; keep it out of the initial bundle so first paint is not gated on it.
    void import("three").then((THREE) => {
      if (disposed) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
      } catch {
        // No WebGL (headless capture, blocked GPU) — leave the black background as-is.
        return;
      }

      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(host.clientWidth, host.clientHeight);
      renderer.domElement.setAttribute("data-hero-canvas", "");
      renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        40,
        host.clientWidth / Math.max(host.clientHeight, 1),
        0.1,
        100,
      );
      camera.position.set(0.2, 0.2, 6.4);
      camera.lookAt(0, -0.2, 0);

      // --- ambient glow (drawn first, behind everything) ------------------------
      const glowGeo = new THREE.PlaneGeometry(26, 16);
      const glowMat = new THREE.ShaderMaterial({
        vertexShader: GLOW_VERT,
        fragmentShader: GLOW_FRAG,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.position.set(0, 0, -8);
      glow.renderOrder = -1;
      scene.add(glow);

      // --- ribbons -------------------------------------------------------------
      // One finely-tessellated plane; the vertex shader splits it into LANES ribbons.
      // v needs enough segments to resolve each ribbon's twisted cross-section.
      const ribbonGeo = new THREE.PlaneGeometry(1, 1, 420, LANES * 40);
      const ribbonUniforms = {
        uTime: { value: 0 },
        uScroll: { value: 0 },
      };
      const ribbonMat = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: ribbonUniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
        side: THREE.DoubleSide,
      });
      const ribbons = new THREE.Mesh(ribbonGeo, ribbonMat);
      // Sweep the stack diagonally, low and to the right, as in the captured frame.
      ribbons.rotation.set(-0.20, 0.0, -0.50);
      ribbons.position.set(1.4, -1.5, 0);
      // Every vertex is placed by the shader, so the geometry's own 1×1 bounds say
      // nothing about where the mesh actually lands — culling against them drops it.
      ribbons.frustumCulled = false;
      scene.add(ribbons);

      // --- particles -----------------------------------------------------------
      const COUNT = 220;
      const pos = new Float32Array(COUNT * 3);
      const sizes = new Float32Array(COUNT);
      const seeds = new Float32Array(COUNT);
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 16;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
        pos[i * 3 + 2] = -Math.random() * 5 - 1;
        sizes[i] = 0.6 + Math.random() * 2.2;
        seeds[i] = Math.random();
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      pGeo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
      pGeo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
      const pUniforms = {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
      };
      const pMat = new THREE.ShaderMaterial({
        vertexShader: PARTICLE_VERT,
        fragmentShader: PARTICLE_FRAG,
        uniforms: pUniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(pGeo, pMat);
      // Same reason as the ribbons: the shader wraps y, so the CPU-side bounds lie.
      points.frustumCulled = false;
      scene.add(points);

      // --- resize --------------------------------------------------------------
      const resize = () => {
        const w = host.clientWidth;
        const h = host.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(resize);
      ro.observe(host);

      // --- scroll + pointer parallax ------------------------------------------
      let scrollN = 0;
      let targetX = 0;
      let targetY = 0;
      let curX = 0;
      let curY = 0;

      const onScroll = () => {
        const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
        scrollN = Math.min(window.scrollY / max, 1);
      };
      const onPointer = (e: PointerEvent) => {
        targetX = (e.clientX / innerWidth - 0.5) * 2;
        targetY = (e.clientY / innerHeight - 0.5) * 2;
      };
      addEventListener("scroll", onScroll, { passive: true });
      addEventListener("pointermove", onPointer, { passive: true });
      onScroll();

      // --- loop ----------------------------------------------------------------
      let raf = 0;
      let running = true;
      const start = performance.now();

      const frame = (now: number) => {
        if (!running) return;
        const t = (now - start) / 1000;

        ribbonUniforms.uTime.value = t;
        ribbonUniforms.uScroll.value = scrollN;
        pUniforms.uTime.value = t;

        // Ease the pointer parallax so it never snaps.
        curX += (targetX - curX) * 0.045;
        curY += (targetY - curY) * 0.045;
        camera.position.x = 0.2 + curX * 0.28;
        camera.position.y = 0.2 - curY * 0.18 - scrollN * 0.9;
        camera.lookAt(0, -0.2, 0);

        renderer.render(scene, camera);
        raf = requestAnimationFrame(frame);
      };

      if (reduced) {
        // One frame, then stop.
        ribbonUniforms.uTime.value = 3.2;
        pUniforms.uTime.value = 3.2;
        renderer.render(scene, camera);
      } else {
        raf = requestAnimationFrame(frame);
      }

      // Pause when the tab is hidden — no point burning GPU on an unseen canvas.
      const onVis = () => {
        if (reduced) return;
        if (document.hidden) {
          running = false;
          cancelAnimationFrame(raf);
        } else if (!running) {
          running = true;
          raf = requestAnimationFrame(frame);
        }
      };
      document.addEventListener("visibilitychange", onVis);

      cleanup = () => {
        running = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        removeEventListener("scroll", onScroll);
        removeEventListener("pointermove", onPointer);
        document.removeEventListener("visibilitychange", onVis);
        glowGeo.dispose();
        glowMat.dispose();
        ribbonGeo.dispose();
        ribbonMat.dispose();
        pGeo.dispose();
        pMat.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
