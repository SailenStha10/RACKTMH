import Link from "next/link";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { getCurrentRotaryYear } from "@/lib/rotary-year";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";
import { CursorBlob, HeroPhoto } from "@/components/home/HeroStage";

const HERO_IMAGE = "/placeholders/hero.svg";

function Hero() {
  const rotaryYear = getCurrentRotaryYear();
  const hasTheme = !isTodo(siteConfig.theme);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <CursorBlob src={HERO_IMAGE} />

      <Container className="flex flex-col items-center">
        <Reveal y={8} className="mb-6">
          <span className="text-label text-foreground">
            [ROTARY YEAR {rotaryYear}]
          </span>
        </Reveal>

        <div className="relative z-10 text-center">
          <SplitTextReveal
            as="h1"
            text={
              hasTheme ? siteConfig.theme : "Rotaract Club of\nKathmandu Height"
            }
            className="text-display text-foreground"
          />
        </div>

        <Parallax distance={30} className="-mt-6 w-full sm:-mt-10">
          <HeroPhoto
            src={HERO_IMAGE}
            alt="Placeholder image for the Rotaract Club of Kathmandu Height"
          />
        </Parallax>

        <Reveal delay={0.5} className="mt-10 flex flex-col items-center gap-6">
          <p className="text-foreground max-w-sm text-center text-xs sm:text-sm">
            {siteConfig.intro}
          </p>
          <Link
            href="#projects"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:outline-ring rounded-full border px-5 py-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Explore our work
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export { Hero };
