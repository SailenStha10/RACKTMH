import "server-only"
import { unstable_cache } from "next/cache"

import { prisma } from "@/lib/prisma"
import type { EventCard, EventRegistrationState } from "@/types/public"

const DEFAULT_POSTER = "/placeholders/event-poster.svg"

function resolveRegistrationState(event: {
  requiresRegistration: boolean
  registrationDeadline: Date | null
  maxParticipants: number | null
  _count: { registrations: number }
}): EventRegistrationState {
  if (!event.requiresRegistration) return "not_required"
  if (event.registrationDeadline && event.registrationDeadline < new Date()) {
    return "closed"
  }
  if (
    event.maxParticipants !== null &&
    event._count.registrations >= event.maxParticipants
  ) {
    return "closed"
  }
  return "open"
}

async function fetchUpcomingEvents(limit: number): Promise<EventCard[]> {
  const events = await prisma.event.findMany({
    where: {
      status: { in: ["UPCOMING", "ONGOING"] },
      startAt: { gte: new Date() },
    },
    orderBy: { startAt: "asc" },
    take: limit,
    include: {
      _count: { select: { registrations: true } },
    },
  })

  return events.map((event) => ({
    id: event.id,
    slug: event.slug,
    title: event.title,
    posterUrl: event.posterUrl ?? DEFAULT_POSTER,
    category: event.category ?? undefined,
    startAt: event.startAt,
    endAt: event.endAt ?? undefined,
    venue: event.venue,
    registrationState: resolveRegistrationState(event),
  }))
}

const getUpcomingEvents = unstable_cache(
  fetchUpcomingEvents,
  ["upcoming-events"],
  { tags: ["events"], revalidate: 60 }
)

export { getUpcomingEvents }
