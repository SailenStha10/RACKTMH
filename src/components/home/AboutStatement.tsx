"use client";

import * as React from "react";
import { motion } from "motion/react";

/**
 * Cranberry panel that rises out of the section's bottom border. Hovering lifts
 * it further and sweeps a light streak across it.
 */
function AboutStatement({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      data-reveal
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      whileHover={{ y: -14 }}
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
      className="group bg-brand-primary relative mx-auto max-w-4xl cursor-default overflow-hidden rounded-t-[2rem] px-6 pt-8 pb-10 text-center shadow-[0_-20px_60px_-20px_rgba(166,18,79,0.7)] transition-shadow duration-500 hover:shadow-[0_-30px_80px_-10px_rgba(236,72,153,0.85)] sm:px-12 sm:pt-10 sm:pb-12"
    >
      {/* Light streak that crosses the panel on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 transition-transform duration-1000 ease-out group-hover:translate-x-[420%]"
      />
      <p className="relative text-lg leading-relaxed text-white italic transition-transform duration-500 group-hover:scale-[1.02] sm:text-xl">
        {children}
      </p>
    </motion.div>
  );
}

export { AboutStatement };
