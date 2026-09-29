import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";

/** Presidential theme: the headline beside the theme logo. */
function ThemeSection() {
  return (
    <section id="theme" className="bg-white py-20 sm:py-28 lg:py-32">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <SplitTextReveal
            text="Developing Competent Leaders"
            className="max-w-[12ch] text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-[#0f0f0f]"
          />
        </div>

        <Reveal y={40} className="order-1 md:order-2">
          <div className="ring-brand-primary/15 flex aspect-4/3 w-full items-center justify-center rounded-3xl bg-white p-6 ring-1 md:ml-auto md:max-w-md">
            <Image
              src="/brand/theme-logo.png"
              alt="Presidential theme: Developing Competent Leaders"
              width={434}
              height={228}
              sizes="(min-width: 768px) 28rem, 100vw"
              className="h-full w-full object-contain"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { ThemeSection };
