import Link from "next/link";

import { siteConfig } from "@/config/site";
import { mockUpcomingEvents } from "@/data/mock";
import { Section } from "@/components/layout/Section";
import { EventCard } from "@/components/events/EventCard";
import { Reveal } from "@/components/motion/Reveal";

function UpcomingEvents() {
  const events = mockUpcomingEvents;

  return (
    <Section
      eyebrow="Events"
      title="Join us at our next gathering."
      action={
        events.length > 0 ? (
          <Link
            href="/events"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:outline-ring rounded-full border px-5 py-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View all events
          </Link>
        ) : undefined
      }
    >
      {events.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.1} y={40}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal className="text-center">
          <p className="text-muted-foreground text-sm">
            New events coming soon. Follow us on{" "}
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              Instagram
            </a>
            .
          </p>
        </Reveal>
      )}
    </Section>
  );
}

export { UpcomingEvents };
