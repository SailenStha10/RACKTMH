import type {
  AnnouncementCard,
  BoardMemberCard,
  EventCard,
  GalleryAlbumCard,
  ImpactStat,
  ProjectCard,
  RecognitionCard,
} from "@/types/public"

export const mockUpcomingEvents: EventCard[] = [
  {
    id: "evt-1",
    slug: "blood-donation-drive-2026",
    title: "Annual Blood Donation Drive",
    posterUrl: "/placeholders/event-poster.svg",
    category: "Community Service",
    startAt: new Date("2026-11-14T09:00:00"),
    endAt: new Date("2026-11-14T16:00:00"),
    venue: "Club House, Kathmandu",
    registrationState: "open",
  },
  {
    id: "evt-2",
    slug: "career-mentorship-workshop",
    title: "Career Mentorship Workshop",
    posterUrl: "/placeholders/event-poster.svg",
    category: "Professional Development",
    startAt: new Date("2026-11-28T14:00:00"),
    endAt: new Date("2026-11-28T17:00:00"),
    venue: "Hotel Annapurna, Durbar Marg",
    registrationState: "open",
  },
  {
    id: "evt-3",
    slug: "world-interact-rotaract-week",
    title: "World Interact & Rotaract Week Celebration",
    posterUrl: "/placeholders/event-poster.svg",
    category: "Club Service",
    startAt: new Date("2026-12-05T10:00:00"),
    venue: "Club House, Kathmandu",
    registrationState: "closed",
  },
]

export const mockFeaturedProjects: ProjectCard[] = [
  {
    id: "prj-1",
    slug: "clean-water-for-schools",
    title: "Clean Water for Schools",
    coverUrl: "/placeholders/project-cover.svg",
    avenue: "COMMUNITY_SERVICE",
    startDate: new Date("2026-03-10"),
    summary:
      "Installed water filtration units in five public schools, giving over 1,200 students access to safe drinking water.",
  },
  {
    id: "prj-2",
    slug: "youth-digital-literacy",
    title: "Youth Digital Literacy Bootcamp",
    coverUrl: "/placeholders/project-cover.svg",
    avenue: "PROFESSIONAL_DEVELOPMENT",
    startDate: new Date("2026-05-02"),
    summary:
      "A four-week bootcamp teaching basic computer and internet skills to underprivileged youth.",
  },
  {
    id: "prj-3",
    slug: "reforest-our-hills",
    title: "Reforest Our Hills",
    coverUrl: "/placeholders/project-cover.svg",
    avenue: "COMMUNITY_SERVICE",
    startDate: new Date("2026-06-21"),
    summary:
      "Planted 3,000 native saplings across degraded hillside land in partnership with the local municipality.",
  },
  {
    id: "prj-4",
    slug: "cross-border-friendship-exchange",
    title: "Cross-Border Friendship Exchange",
    coverUrl: "/placeholders/project-cover.svg",
    avenue: "INTERNATIONAL_SERVICE",
    startDate: new Date("2026-08-15"),
    summary:
      "Hosted a delegation from a sister Rotaract club to exchange service ideas and cultural experiences.",
  },
]

export const mockBoardMembers: BoardMemberCard[] = [
  {
    id: "mem-1",
    slug: "aashish-shrestha",
    fullName: "Aashish Shrestha",
    position: "President",
    photoUrl: "/placeholders/portrait.svg",
  },
  {
    id: "mem-2",
    slug: "prakriti-basnet",
    fullName: "Prakriti Basnet",
    position: "Secretary",
    photoUrl: "/placeholders/portrait.svg",
  },
  {
    id: "mem-3",
    slug: "bibek-thapa",
    fullName: "Bibek Thapa",
    position: "Treasurer",
    photoUrl: "/placeholders/portrait.svg",
  },
  {
    id: "mem-4",
    slug: "sunita-gurung",
    fullName: "Sunita Gurung",
    position: "Vice President",
    photoUrl: "/placeholders/portrait.svg",
  },
  {
    id: "mem-5",
    slug: "rohan-maharjan",
    fullName: "Rohan Maharjan",
    position: "Director, Community Service",
    photoUrl: "/placeholders/portrait.svg",
  },
  {
    id: "mem-6",
    slug: "anjali-koirala",
    fullName: "Anjali Koirala",
    position: "Director, Public Image",
    photoUrl: "/placeholders/portrait.svg",
  },
]

export const mockGalleryAlbums: GalleryAlbumCard[] = [
  {
    id: "gal-1",
    slug: "blood-donation-drive-2025",
    title: "Blood Donation Drive 2025",
    coverUrl: "/placeholders/gallery-tile-1.svg",
    imageCount: 18,
  },
  {
    id: "gal-2",
    slug: "clean-water-for-schools",
    title: "Clean Water for Schools",
    coverUrl: "/placeholders/gallery-tile-2.svg",
    imageCount: 24,
  },
  {
    id: "gal-3",
    slug: "installation-ceremony-2026-27",
    title: "Installation Ceremony 2026-27",
    coverUrl: "/placeholders/gallery-tile-3.svg",
    imageCount: 32,
  },
  {
    id: "gal-4",
    slug: "reforest-our-hills",
    title: "Reforest Our Hills",
    coverUrl: "/placeholders/gallery-tile-4.svg",
    imageCount: 15,
  },
  {
    id: "gal-5",
    slug: "youth-digital-literacy",
    title: "Youth Digital Literacy Bootcamp",
    coverUrl: "/placeholders/gallery-tile-5.svg",
    imageCount: 20,
  },
  {
    id: "gal-6",
    slug: "district-conference-2026",
    title: "District Conference 2026",
    coverUrl: "/placeholders/gallery-tile-6.svg",
    imageCount: 40,
  },
]

export const mockImpactStats: ImpactStat[] = [
  { label: "Projects", value: 42 },
  { label: "Beneficiaries", value: 8600, suffix: "+" },
  { label: "Volunteers", value: 165 },
  { label: "Volunteer Hours", value: 5200, suffix: "+" },
]

export const mockRecognition: RecognitionCard = {
  id: "rec-1",
  memberSlug: "sunita-gurung",
  fullName: "Sunita Gurung",
  photoUrl: "/placeholders/portrait.svg",
  month: 10,
  year: 2026,
  achievement:
    "Led the Clean Water for Schools project from planning through completion, coordinating over 30 volunteers.",
}

export const mockAnnouncements: AnnouncementCard[] = [
  {
    id: "ann-1",
    slug: "membership-drive-open",
    title: "New Membership Drive Now Open",
    excerpt:
      "Applications for the 2026-27 membership intake are now open. Apply before December 15.",
    imageUrl: "/placeholders/event-poster.svg",
    publishedAt: new Date("2026-09-20"),
  },
  {
    id: "ann-2",
    slug: "club-wins-district-award",
    title: "Club Wins District Excellence Award",
    excerpt:
      "Our club was recognized for outstanding community service at the district conference.",
    publishedAt: new Date("2026-09-10"),
  },
]
