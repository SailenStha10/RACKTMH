import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { getCurrentRotaryYear } from "@/lib/rotary-year";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";
import { PillLink } from "@/components/ui/PillLink";
import { CursorBlob, HeroBadge } from "@/components/home/HeroStage";

function Hero() {
  const rotaryYear = getCurrentRotaryYear();
  const hasTheme = !isTodo(siteConfig.theme);

  return (
    <section className="bg-brand-primary relative overflow-hidden pt-32 pb-16 text-white sm:pt-36 sm:pb-24">
      <CursorBlob />

      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal y={8}>
          <span className="rounded-full bg-[#0f0f0f] px-4 py-2 text-xs font-medium tracking-wider">
            ROTARY YEAR {rotaryYear} &middot; RID 3292
          </span>
        </Reveal>

        <SplitTextReveal
          as="h1"
          text={
            hasTheme ? siteConfig.theme : "Rotaract Club of\nKathmandu Height"
          }
          className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] font-semibold tracking-tight"
        />

        <p className="max-w-xl text-base text-white/90 sm:text-lg">
          {siteConfig.intro}
        </p>

        <Reveal delay={0.4} className="flex flex-wrap justify-center gap-3">
          <PillLink href="/join" tone="black">
            Join us
          </PillLink>
          <PillLink href="#projects" tone="white">
            Explore our work
          </PillLink>
        </Reveal>

        <div className="mt-6">
          <HeroBadge
            label="CHARTERED"
            value={siteConfig.charterDate}
            detail={`Club ID ${siteConfig.clubId}`}
          />
        </div>
      </Container>
    </section>
  );
}

export { Hero };
