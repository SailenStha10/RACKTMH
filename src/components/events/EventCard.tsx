import Image from "next/image";
import Link from "next/link";

import type { EventCard as EventCardData } from "@/types/public";
import { formatDate, formatTime } from "@/lib/format";

const REGISTRATION_LABEL: Record<EventCardData["registrationState"], string> = {
  open: "Registration open",
  closed: "Registration closed",
  not_required: "No registration required",
};

/** Folded-corner card: text on white, image as a strip on the right edge. */
function EventCard({ event }: { event: EventCardData }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group border-foreground bg-background focus-visible:outline-ring relative block h-full min-h-56 border-t border-l p-5 pr-16 focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <div
        className="absolute top-0 right-0 bottom-0 w-10 overflow-hidden transition-[width] duration-500 ease-out group-hover:w-14"
        style={{ clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Image
          src={event.posterUrl}
          alt=""
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>
      {event.category && (
        <p className="text-label text-muted-foreground mb-3">
          {event.category}
        </p>
      )}
      <h3 className="text-title text-foreground">{event.title}</h3>
      <dl className="text-muted-foreground mt-6 flex flex-col gap-1 text-xs">
        <div>{formatDate(event.startAt)}</div>
        <div>{formatTime(event.startAt)}</div>
        <div>{event.venue}</div>
        <div className="text-foreground mt-2">
          {REGISTRATION_LABEL[event.registrationState]}
        </div>
      </dl>
    </Link>
  );
}

export { EventCard };
