"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import { blobPolygon } from "@/lib/blob";
import { duration, ease } from "@/lib/motion";

const MAIN_MASK = blobPolygon(7, 110, 0.03);
const CURSOR_MASK = blobPolygon(21, 40, 0.09);

/** Solid black ink-splat badge holding the charter facts. */
function HeroBadge({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <motion.div
      data-reveal
      className="relative mx-auto aspect-square w-[80vw] max-w-md sm:w-96"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: duration.hero, ease: ease.out, delay: 0.2 }}
    >
      <div
        className="absolute inset-0 bg-[#0f0f0f]"
        style={{ clipPath: MAIN_MASK }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-10 text-center text-white">
        <span className="text-label text-brand-accent font-medium tracking-wider">
          {label}
        </span>
        <span className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          {value}
        </span>
        <span className="text-sm text-white/80">{detail}</span>
      </div>
    </motion.div>
  );
}

/** Small solid gold blob that trails the pointer (mouse only, motion allowed). */
function CursorBlob() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });
  const [visible, setVisible] = React.useState(false);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) return;

    // Enable on the first real mouse movement so touch devices never render the blob.
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      setEnabled(true);
      x.set(e.clientX - 28);
      y.set(e.clientY - 28);
    };
    const onScroll = () =>
      setVisible(window.scrollY < window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 size-14"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      transition={{ duration: 0.4, ease: ease.out }}
    >
      <div
        className="bg-brand-accent absolute inset-0"
        style={{ clipPath: CURSOR_MASK }}
      />
    </motion.div>
  );
}

export { HeroBadge, CursorBlob };
