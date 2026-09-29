import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

import type { EventCard as EventCardData } from "@/types/public"
import { formatDate, formatTime } from "@/lib/format"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const REGISTRATION_LABEL: Record<
  EventCardData["registrationState"],
  { label: string; variant: "default" | "outline" | "secondary" }
> = {
  open: { label: "Registration Open", variant: "default" },
  closed: { label: "Registration Closed", variant: "secondary" },
  not_required: { label: "No Registration Required", variant: "outline" },
}

function EventCard({ event }: { event: EventCardData }) {
  const registration = REGISTRATION_LABEL[event.registrationState]

  return (
    <Link href={`/events/${event.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden py-0 transition-shadow group-hover:shadow-md">
        <div className="relative aspect-4/5 w-full overflow-hidden">
          <Image
            src={event.posterUrl}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge
            variant={registration.variant}
            className={cn(
              "absolute top-3 right-3 h-auto px-2.5 py-1",
              registration.variant === "default" &&
                "bg-brand-primary text-brand-primary-foreground"
            )}
          >
            {registration.label}
          </Badge>
        </div>
        <CardContent className="flex flex-col gap-2 py-4">
          {event.category && (
            <span className="text-xs font-semibold tracking-wide text-brand-primary uppercase">
              {event.category}
            </span>
          )}
          <h3 className="font-heading text-lg font-bold text-foreground">
            {event.title}
          </h3>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4 shrink-0" aria-hidden="true" />
              {formatDate(event.startAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              {formatTime(event.startAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {event.venue}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { EventCard }
