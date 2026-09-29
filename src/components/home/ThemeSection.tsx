import { ImageIcon } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";

/**
 * Presidential theme. The image frame is a reserved space: when the theme
 * artwork arrives, render it inside the frame in place of the placeholder.
 */
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
          <div
            role="img"
            aria-label="Space reserved for the presidential theme image"
            className="text-brand-primary/60 ring-brand-primary/15 flex aspect-4/3 w-full flex-col items-center justify-center gap-3 rounded-3xl bg-[#fbeef3] ring-1 md:ml-auto md:aspect-4/5 md:max-w-md"
          >
            <ImageIcon className="size-10" aria-hidden="true" />
            <span className="text-sm">Theme image</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { ThemeSection };
