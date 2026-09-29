import Image from "next/image";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { getCurrentRotaryYear } from "@/lib/rotary-year";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";
import { PillLink } from "@/components/ui/PillLink";
import DitherReveal from "@/components/home/DitherReveal";

/**
 * Hero based on Originkit "Hero 40": a dithered image that reveals its true
 * colours under the pointer, with the headline anchored bottom-right.
 */
function Hero() {
  const rotaryYear = getCurrentRotaryYear();
  const hasTheme = !isTodo(siteConfig.theme);

  return (
    <section
      id="home"
      className="relative isolate min-h-svh overflow-hidden bg-white pt-16 text-[#0f0f0f]"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <DitherReveal image={{ src: "/hero/hands.png", alt: "" }} />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[28vh] bg-linear-to-b from-transparent via-white/75 to-white"
        aria-hidden="true"
      />

      <div className="absolute top-24 left-4 z-[5] flex items-center gap-4 sm:top-28 sm:left-10 sm:gap-10">
        <Image
          src="/brand/club-logo.png"
          alt="Rotaract Club of Kathmandu Height logo"
          width={583}
          height={170}
          priority
          className="h-14 w-auto sm:h-24 lg:h-32"
        />
        <Image
          src="/brand/theme-logo.png"
          alt="Presidential theme logo: Developing Competent Leaders"
          width={434}
          height={228}
          priority
          className="h-16 w-auto mix-blend-multiply sm:h-28 lg:h-36"
        />
      </div>

      <div className="absolute inset-x-4 bottom-20 z-[5] sm:inset-x-8 lg:right-16 lg:left-auto lg:w-[min(56rem,90vw)]">
        <Reveal y={8}>
          <p className="mb-4 text-xs font-medium tracking-[0.19em] text-[#0f0f0f] uppercase">
            Rotary year {rotaryYear} &middot; RID 3292 &middot; Chartered{" "}
            {siteConfig.charterDate}
          </p>
        </Reveal>

        <SplitTextReveal
          as="h1"
          text={
            hasTheme ? siteConfig.theme : "Rotaract Club of\nKathmandu Height"
          }
          className="text-[clamp(2.5rem,5.4vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.05em]"
        />

        <Reveal delay={0.4}>
          <p className="mt-5 max-w-lg text-base text-[#0f0f0f]/80 sm:text-lg">
            {siteConfig.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href="/join" tone="pink">
              Join us
            </PillLink>
            <PillLink href="#projects" tone="black">
              Explore our work
            </PillLink>
          </div>
        </Reveal>
      </div>

      <div className="text-brand-primary absolute inset-x-4 bottom-5 z-10 flex items-end justify-between text-xs sm:inset-x-8">
        <p className="max-w-[14rem]">Service Above Self</p>
        <a
          href="#facts"
          className="focus-visible:outline-ring inline-flex items-center gap-2 transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          scroll <span aria-hidden="true">&darr;</span>
        </a>
        <p className="max-w-[14rem] text-right">Fellowship Through Service</p>
      </div>
    </section>
  );
}

export { Hero };
