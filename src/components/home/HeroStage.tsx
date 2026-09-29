"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";

import { blobPolygon } from "@/lib/blob";
import { duration, ease } from "@/lib/motion";

const MAIN_MASK = blobPolygon(7, 110, 0.045);
const CURSOR_MASK = blobPolygon(21, 40, 0.09);

/** Masked hero photo with an entrance animation. */
function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      data-reveal
      className="relative mx-auto aspect-4/3 w-[88%] max-w-3xl sm:w-[60%]"
      initial={{ scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: duration.hero, ease: ease.out, delay: 0.2 }}
    >
      <div className="absolute inset-0" style={{ clipPath: MAIN_MASK }}>
        <motion.div
          data-reveal
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: duration.hero + 0.4, ease: ease.out }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 640px) 60vw, 88vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/** Small ink blob that trails the pointer inside the hero (fine pointers only). */
function CursorBlob({ src }: { src: string }) {
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
      x.set(e.clientX - 40);
      y.set(e.clientY - 40);
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
      className="pointer-events-none fixed top-0 left-0 z-30 size-20"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      transition={{ duration: 0.4, ease: ease.out }}
    >
      <div className="absolute inset-0" style={{ clipPath: CURSOR_MASK }}>
        <Image src={src} alt="" fill sizes="80px" className="object-cover" />
      </div>
    </motion.div>
  );
}

export { HeroPhoto, CursorBlob };
