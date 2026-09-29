"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/**
 * Transition between sections: as a section scrolls up over the previous one
 * it grows from a slightly inset, rounded shape to full width. Only
 * clip-path and transform are animated.
 */
function SectionShell({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.35"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 7% 0% 7% round 56px)", "inset(0% 0% 0% 0% round 0px)"],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  if (reduce) return <div>{children}</div>;

  return (
    <div ref={ref}>
      <motion.div style={{ clipPath, scale, transformOrigin: "50% 0%" }}>
        {children}
      </motion.div>
    </div>
  );
}

export { SectionShell };
