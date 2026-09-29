"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { duration, ease } from "@/lib/motion";

interface SplitTextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}

/** Word-by-word masked reveal. Use "\n" in text for forced line breaks. */
function SplitTextReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
}: SplitTextRevealProps) {
  const lines = text.split("\n");
  let index = 0;

  return (
    <Tag className={className} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, lineIndex) => (
        <span
          key={lineIndex}
          aria-hidden="true"
          className={cn(lines.length > 1 && "block")}
        >
          {line.split(" ").map((word) => {
            const i = index++;
            return (
              <React.Fragment key={i}>
                <span className="inline-block overflow-hidden pb-[0.12em] align-top">
                  <motion.span
                    data-reveal
                    className="inline-block"
                    initial={{ y: "110%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: duration.slow,
                      ease: ease.out,
                      delay: delay + i * 0.05,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>{" "}
              </React.Fragment>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

export { SplitTextReveal };
