"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface Leader {
  position: string;
  handle: string;
  href: string;
}

/**
 * Leader cards in a fan, centre card raised and largest. Cards rise in from
 * below with a slight tilt, then float gently out of phase; hovering
 * straightens and lifts a card. The float sits on an inner wrapper so it never
 * fights the entrance and hover transforms.
 */
function LeaderCards({ leaders }: { leaders: readonly Leader[] }) {
  const centre = Math.floor(leaders.length / 2);

  return (
    <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 px-3 sm:grid-cols-3 sm:px-0 lg:grid-cols-5 lg:gap-x-5">
      {leaders.map((leader, i) => {
        const offset = i - centre;
        const isCentre = offset === 0;
        const tilt = offset * 3.5;
        return (
          <motion.li
            key={leader.position}
            data-reveal
            initial={{ opacity: 0, y: 80, rotate: tilt * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilt }}
            whileHover={{ y: -14, rotate: 0, scale: 1.05 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: Math.abs(offset) * 0.12,
            }}
            className={cn(
              "group mx-auto w-full max-w-56 sm:max-w-none",
              // Centre card sits higher and larger on wide screens.
              isCentre && "lg:-mt-6 lg:scale-110",
              !isCentre && Math.abs(offset) === 2 && "lg:mt-8",
            )}
          >
            <div
              className="motion-safe:animate-[float_6s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * -1.4}s` }}
            >
              <figure
                className={cn(
                  "overflow-hidden rounded-2xl bg-white ring-1 transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-24px_rgba(166,18,79,0.6)]",
                  isCentre ? "ring-brand-primary/50" : "ring-black/10",
                )}
              >
                <div className="relative aspect-4/5 overflow-hidden bg-[#fbeef3]">
                  <Image
                    src="/placeholders/portrait.svg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <figcaption className="relative p-4 text-center">
                  {/* Cranberry bar that grows from the centre on hover. */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "bg-brand-primary absolute inset-x-0 top-0 h-0.5 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100",
                      isCentre ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                  <p className="text-sm font-semibold wrap-break-word">
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
                  <p className="mt-0.5 text-xs text-black/55">
                    {leader.position}
                  </p>
                </figcaption>
              </figure>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

export { LeaderCards };
