"use client";

import { motion } from "motion/react";

import { Container } from "@/components/layout/Container";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";
import { PillLink } from "@/components/ui/PillLink";

/**
 * Compact call to action. The panel springs up from a smaller size when it
 * enters the screen, while soft shapes drift behind and a ring pulses around
 * the button. Everything animates transform or opacity only.
 */
function MembershipCTA() {
  return (
    <section className="bg-white pb-14 sm:pb-20">
      <Container>
        <motion.div
          data-reveal
          initial={{ opacity: 0, scale: 0.86, y: 70 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ type: "spring", stiffness: 70, damping: 16 }}
          className="bg-brand-primary relative isolate mx-auto flex max-w-5xl flex-col items-center gap-6 overflow-hidden rounded-[2rem] px-6 py-12 text-center text-white sm:py-14"
        >
          {/* Drifting shapes */}
          <span
            aria-hidden="true"
            data-drift
            style={
              {
                "--dx": "24px",
                "--dy": "-18px",
                animation: "drift 9s ease-in-out infinite",
              } as React.CSSProperties
            }
            className="bg-brand-accent/90 absolute -top-16 -left-10 -z-10 size-52 rounded-full"
          />
          <span
            aria-hidden="true"
            data-drift
            style={
              {
                "--dx": "-20px",
                "--dy": "22px",
                animation: "drift 11s ease-in-out -3s infinite",
              } as React.CSSProperties
            }
            className="absolute -right-12 -bottom-20 -z-10 size-64 rounded-full bg-[#0f0f0f]"
          />

          <SplitTextReveal
            text={"Ready to make a\ndifference?"}
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-semibold tracking-tight"
          />

          <div className="relative mt-2">
            <span
              aria-hidden="true"
              data-drift
              style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
              className="absolute inset-0 rounded-full bg-white/60"
            />
            <PillLink href="/join" tone="white" className="relative">
              Join us
            </PillLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export { MembershipCTA };
