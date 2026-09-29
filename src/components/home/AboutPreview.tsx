import Image from "next/image";
import { Eye, Target, type LucideIcon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/** About section with the club photo as a darkened background. */
function AboutPreview() {
  const cards: { label: string; text: string; Icon: LucideIcon }[] = [
    { label: "Mission", text: siteConfig.mission, Icon: Target },
    { label: "Vision", text: siteConfig.vision, Icon: Eye },
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
          {cards.map(({ label, text, Icon }, i) => (
            <Reveal key={label} y={30} delay={i * 0.1}>
              <article
                tabIndex={0}
                className="group relative h-full cursor-default overflow-hidden rounded-2xl bg-white/10 p-7 text-center ring-1 ring-white/20 backdrop-blur-md transition-[translate,scale,background-color,box-shadow] duration-500 ease-out outline-none hover:-translate-y-2 hover:scale-[1.03] hover:bg-white/20 hover:shadow-[0_24px_60px_-20px_rgba(166,18,79,0.8)] hover:ring-white/40 focus-visible:-translate-y-2 focus-visible:scale-[1.03] focus-visible:bg-white/20 focus-visible:ring-white/60 sm:p-8"
              >
                {/* Cranberry wash that rises from the bottom on hover. */}
                <span
                  aria-hidden="true"
                  className="bg-brand-primary/70 absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />
                <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-white/15 transition-[rotate,scale,background-color] duration-500 ease-out group-hover:scale-110 group-hover:rotate-12 group-hover:bg-white/25">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-label mb-3 font-medium tracking-wider text-white/70 transition-colors group-hover:text-white">
                  {label.toUpperCase()}
                </h3>
                <p className="text-lg leading-snug">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { AboutPreview };
