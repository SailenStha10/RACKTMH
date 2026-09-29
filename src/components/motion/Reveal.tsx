"use client";

import * as React from "react";
import { motion } from "motion/react";

import { duration, ease } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  as?: "div" | "li" | "section" | "p" | "span";
}

/** Fade and slide in when scrolled into view. Visible without JS via the noscript rule in the root layout. */
function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      data-reveal
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: duration.standard, ease: ease.out, delay }}
    >
      {children}
    </Component>
  );
}

export { Reveal };
