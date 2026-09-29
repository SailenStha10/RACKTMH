"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Pixels of travel in each direction. */
  distance?: number;
}

/** Scroll-linked vertical drift (transform only). */
function Parallax({ children, className, distance = 40 }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export { Parallax };
