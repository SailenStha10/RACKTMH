"use client";

import { motion } from "motion/react";

import { duration, ease } from "@/lib/motion";
import { Section } from "@/components/layout/Section";

const AVENUES = [
  {
    title: "Club Service",
    caption: "Strengthening our club and our fellowship",
    outline: "M100 8 L192 182 L10 170 Z",
    glyph:
      "M100 62 C114 62 118 76 112 86 C127 89 131 101 121 109 C134 116 131 131 117 133 L117 141 L83 141 L83 133 C69 131 66 116 79 109 C69 101 73 89 88 86 C82 76 86 62 100 62 Z",
  },
  {
    title: "Community Service",
    caption: "Meeting real needs in our communities",
    outline: "M40 30 L150 40 L152 100 L188 122 L170 185 L20 172 Z",
    glyph:
      "M94 66 C108 60 121 72 117 88 C115 101 128 108 122 122 C115 138 96 136 88 124 C82 110 87 97 83 87 C81 79 86 70 94 66 Z",
  },
  {
    title: "Professional Development",
    caption: "Building skills that open doors",
    outline:
      "M100 20 L130 60 L185 50 L175 170 L110 150 L30 175 L20 60 L70 55 Z",
    glyph:
      "M62 84 L94 74 L98 128 L66 122 Z M106 74 L138 82 L134 124 L106 130 Z",
  },
  {
    title: "International Service",
    caption: "Connecting with Rotaractors worldwide",
    outline: "M30 60 L100 10 L130 50 L190 25 L165 120 L110 185 L50 130 Z",
    glyph: "M60 96 L96 80 L142 92 L126 118 L84 124 Z",
  },
];

function AvenueShape({
  outline,
  glyph,
  index,
}: {
  outline: string;
  glyph: string;
  index: number;
}) {
  return (
    <svg viewBox="0 0 200 200" className="w-full" aria-hidden="true">
      <motion.path
        d={outline}
        fill="none"
        stroke="var(--brand-primary)"
        strokeWidth={2}
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{
          duration: duration.hero,
          ease: ease.out,
          delay: index * 0.12,
        }}
      />
      <motion.path
        d={glyph}
        fill="var(--brand-primary)"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        style={{ transformOrigin: "100px 100px" }}
        transition={{
          duration: duration.slow,
          ease: ease.out,
          delay: 0.3 + index * 0.12,
        }}
      />
    </svg>
  );
}

function FourAvenues() {
  return (
    <Section
      tone="black"
      eyebrow="Avenues of service"
      title="Four ways we serve, one club."
    >
      <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {AVENUES.map((a, i) => (
          <li key={a.title} className="flex flex-col items-center text-center">
            <div className="w-full max-w-44">
              <AvenueShape outline={a.outline} glyph={a.glyph} index={i} />
            </div>
            <h3 className="mt-4 text-base font-medium">{a.title}</h3>
            <p className="mt-1 max-w-[22ch] text-sm text-white/70">
              {a.caption}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export { FourAvenues };
