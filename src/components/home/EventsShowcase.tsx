import Image from "next/image";

import { siteConfig } from "@/config/site";
import { mockFeaturedEvent } from "@/data/mock";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProjectsCarousel } from "@/components/projects/ProjectsCarousel";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

/** Highlighted event followed by the centred ring carousel (adapted from Viscose, MIT). */
function EventsShowcase() {
  const event = mockFeaturedEvent;

  return (
    <section id="events" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container className="mb-12 sm:mb-16">
        <SectionHeading eyebrow="Upcoming events" title="What is coming up." />
      </Container>

      <Container>
        <Reveal y={40}>
          <article className="grid overflow-hidden rounded-2xl bg-[#0f0f0f] text-white md:grid-cols-2">
            <div className="relative aspect-3/2 md:aspect-auto md:min-h-80">
              <Image
                src={event.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
              <span className="bg-brand-primary w-fit rounded-full px-3 py-1 text-xs font-medium">
                {event.tag}
              </span>
              <h3 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                {event.title}
              </h3>
              <p className="text-base text-white/80">
                {event.dateLabel} &middot; {event.venue}
              </p>
              <div>
                <PillLink
                  href={siteConfig.social.instagram}
                  tone="white"
                  external
                >
                  Follow for details
                </PillLink>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>

      <div className="mt-12">
        <ProjectsCarousel />
      </div>
    </section>
  );
}

export { EventsShowcase };
