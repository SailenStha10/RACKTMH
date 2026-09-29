"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Leader {
  position: string;
  handle: string;
  href: string;
}

const TILT = [-5, 0, 5];

/**
 * Three leader cards. They fan in from below with a slight tilt, then float
 * gently out of phase; hovering straightens and lifts a card. The float is on
 * an inner wrapper so it never fights the entrance and hover transforms.
 */
function LeaderCards({ leaders }: { leaders: readonly Leader[] }) {
  return (
    <ul className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3 sm:gap-6">
      {leaders.slice(0, 3).map((leader, i) => (
        <motion.li
          key={leader.position}
          data-reveal
          initial={{ opacity: 0, y: 80, rotate: TILT[i] * 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: TILT[i] }}
          whileHover={{ y: -14, rotate: 0, scale: 1.04 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 14,
            delay: i * 0.15,
          }}
          className="group mx-auto w-full max-w-64 sm:max-w-none"
        >
          <div
            className="motion-safe:animate-[float_6s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * -2}s` }}
          >
            <figure className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-24px_rgba(166,18,79,0.6)]">
              <div className="relative aspect-4/5 overflow-hidden bg-[#fbeef3]">
                <Image
                  src="/placeholders/portrait.svg"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 260px, 256px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <figcaption className="relative p-5 text-center">
                {/* Cranberry bar that grows from the centre on hover. */}
                <span
                  aria-hidden="true"
                  className="bg-brand-primary absolute inset-x-0 top-0 h-0.5 origin-center scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <p className="text-base font-semibold">
                  {leader.handle ? (
                    <a
                      href={leader.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-visible:outline-ring underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {leader.handle}
                    </a>
                  ) : (
                    "To be announced"
                  )}
                </p>
                <p className="mt-0.5 text-sm text-black/55">
                  {leader.position}
                </p>
              </figcaption>
            </figure>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

export { LeaderCards };
