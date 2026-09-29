export type EventRegistrationState = "open" | "closed" | "not_required"

export type AvenueOfService =
  | "CLUB_SERVICE"
  | "COMMUNITY_SERVICE"
  | "PROFESSIONAL_DEVELOPMENT"
  | "INTERNATIONAL_SERVICE"

export interface EventCard {
  id: string
  slug: string
  title: string
  posterUrl: string
  category?: string
  startAt: Date
  endAt?: Date
  venue: string
  registrationState: EventRegistrationState
}

export interface ProjectCard {
  id: string
  slug: string
  title: string
  coverUrl: string
  avenue: AvenueOfService
  startDate: Date
  summary: string
}

export interface BoardMemberCard {
  id: string
  slug: string
  fullName: string
  position: string
  photoUrl: string
}

export interface GalleryAlbumCard {
  id: string
  slug: string
  title: string
  coverUrl: string
  imageCount: number
}

export interface ImpactStat {
  label: string
  value: number
  suffix?: string
}

export interface RecognitionCard {
  id: string
  memberSlug: string
  fullName: string
  photoUrl: string
  month: number
  year: number
  achievement: string
}

export interface AnnouncementCard {
  id: string
  slug: string
  title: string
  excerpt: string
  imageUrl?: string
  publishedAt: Date
}
