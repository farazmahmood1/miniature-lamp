/**
 * Captured interaction and motion specs for this page.
 *
 * Data, not logic: each entry records the inline styles a state applies and the node
 * it applies them to. `InteractionRuntime` and `ScrollReveal` replay them.
 */

import type { Spec } from "../../../components/motion/InteractionRuntime";
import type { MotionSpec } from "../../../components/motion/ScrollReveal";

export const interactionSpecs: Spec[] = [
  {"kind":"carousel","track":"interaction-div","next":"interaction-next-slide","prev":"interaction-previous-slide","bullets":[],"base":0,"transforms":["matrix(1, 0, 0, 1, 0, 0)","matrix(1, 0, 0, 1, -405, 0)"],"bulletOn":{},"bulletOff":{}},
];

export const motionSpec: MotionSpec = {"waapi":[],"rotators":[],"reveals":[{"anchor":"motion-span","opacity":"0","transform":"matrix(1, 0, 0, 1, 10, 0)","transition":"transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s, opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s"},{"anchor":"motion-2","opacity":"0","transform":"matrix(0.9, 0, 0, 0.7, 0, 0)","transition":"transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"},{"anchor":"motion-3","opacity":"0","transform":"matrix(0.9, 0, 0, 0.7, 0, 0)","transition":"transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"},{"anchor":"motion-examples","opacity":"0","transform":"none","transition":"","visibility":"hidden"}],"marquees":[]};
