import Image from "next/image";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

// Only verified event: the district Presidents' Night the club co-hosts
// (date not yet confirmed, so it isn't modeled as a DB Event row).
const FEATURED_EVENT = {
  title: "Rotaract District 3292 Presidents' Night 2026",
  tag: "District event, co-host",
  dateLabel: "Date to be confirmed",
  venue: "Pokhara, Nepal",
  image: "/events/presidents-night.svg",
};

/** Upcoming events: the latest event as a highlight. */
function EventsShowcase() {
  const event = FEATURED_EVENT;

  return (
    <section id="events" className="bg-[#fbeef3] py-16 sm:py-20 lg:py-24">
      <Container className="mb-12 sm:mb-16">
        <SectionHeading title="What is coming up." />
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
    </section>
  );
}

export { EventsShowcase };
