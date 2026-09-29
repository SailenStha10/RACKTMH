"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalStripProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Row that translates horizontally as the page scrolls (desktop, motion allowed).
 * On mobile or reduced motion it is a normal swipeable row.
 */
function HorizontalStrip({ children, className }: HorizontalStripProps) {
  const root = React.useRef<HTMLDivElement>(null);
  const track = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const el = track.current;
          if (!el) return;
          const overflow = Math.max(el.scrollWidth - window.innerWidth, 0);
          gsap.fromTo(
            el,
            { x: 60 },
            {
              x: -(overflow + 60),
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="overflow-x-auto md:overflow-x-clip [&::-webkit-scrollbar]:hidden"
    >
      <div ref={track} className={className}>
        {children}
      </div>
    </div>
  );
}

export { HorizontalStrip };
