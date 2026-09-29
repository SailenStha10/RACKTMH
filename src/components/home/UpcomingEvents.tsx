import { siteConfig } from "@/config/site";
import { mockUpcomingEvents } from "@/data/mock";
import { Section } from "@/components/layout/Section";
import { EventCard } from "@/components/events/EventCard";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

function UpcomingEvents() {
  const events = mockUpcomingEvents;

  return (
    <Section eyebrow="Events" title="Join us at our next gathering.">
      {events.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.1} y={40}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <PillLink href="/events" tone="black">
              View all events
            </PillLink>
          </Reveal>
        </>
      ) : (
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-lg bg-[#0f0f0f] p-10 text-center text-white">
          <p className="text-lg">
            New events coming soon. Follow us on Instagram to be the first to
            know.
          </p>
          <PillLink href={siteConfig.social.instagram} tone="pink" external>
            {siteConfig.social.instagramHandle}
          </PillLink>
        </Reveal>
      )}
    </Section>
  );
}

export { UpcomingEvents };
