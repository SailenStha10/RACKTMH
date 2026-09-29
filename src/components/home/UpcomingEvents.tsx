import Link from "next/link";
import { CalendarX } from "lucide-react";

import { siteConfig } from "@/config/site";
import { mockUpcomingEvents } from "@/data/mock";
import { Section } from "@/components/layout/Section";
import { EventCard } from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";

function UpcomingEvents() {
  const events = mockUpcomingEvents;

  return (
    <Section
      eyebrow="What's Next"
      title="Upcoming Events"
      subtitle="Join us at our next gathering, workshop or service activity."
      action={
        <Button
          variant="outline"
          render={<Link href="/events">View all events</Link>}
        />
      }
    >
      {events.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="border-border flex flex-col items-center gap-3 rounded-xl border border-dashed py-16 text-center">
          <CalendarX
            className="text-muted-foreground size-10"
            aria-hidden="true"
          />
          <p className="text-muted-foreground text-sm">
            New events coming soon. Follow us on{" "}
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-medium underline underline-offset-4"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      )}
    </Section>
  );
}

export { UpcomingEvents };
