import Image from "next/image";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/** About section with the club photo as a darkened background. */
function AboutPreview() {
  const cards = [
    { label: "Mission", text: siteConfig.mission },
    { label: "Vision", text: siteConfig.vision },
  ].filter((c) => !isTodo(c.text));

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#0f0f0f] py-20 text-white sm:py-28 lg:py-32"
    >
      <Image
        src="/about/team.png"
        alt="Members of the Rotaract Club of Kathmandu Height at a club event"
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-[#0f0f0f]/70"
        aria-hidden="true"
      />
      <div
        className="to-brand-primary/30 absolute inset-0 -z-10 bg-linear-to-t from-[#0f0f0f]/80 via-transparent"
        aria-hidden="true"
      />

      <Container className="flex flex-col items-center gap-12 sm:gap-16">
        <SectionHeading title="A youth-led club serving Kathmandu." />

        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.label} y={30} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white/10 p-7 text-center ring-1 ring-white/20 backdrop-blur-md sm:p-8">
                <h3 className="text-label mb-3 font-medium tracking-wider text-white/70">
                  {card.label.toUpperCase()}
                </h3>
                <p className="text-lg leading-snug">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { AboutPreview };
