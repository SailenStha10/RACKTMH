// Content source: CONTENT_BRIEF.md (Sections 3 and 4). No invented people, dates or numbers.
// Missing items are [[TODO: ...]] placeholders tracked in content/TODO_CONTENT.md.
import type {
  AnnouncementCard,
  BoardMemberCard,
  EventCard,
  GalleryAlbumCard,
  ImpactStat,
  ProjectCard,
  RecognitionCard,
} from "@/types/public";

export const mockUpcomingEvents: EventCard[] = [];

// Only verified event: the district Presidents' Night the club co-hosts (date not yet confirmed).
export const mockFeaturedEvent = {
  title: "Rotaract District 3292 Presidents' Night 2026",
  tag: "District event, co-host",
  dateLabel: "Date to be confirmed",
  venue: "Pokhara, Nepal",
  image: "/events/presidents-night.svg",
};

export const mockFeaturedProjects: ProjectCard[] = [
  {
    id: "prj-jyoti",
    slug: "project-jyoti",
    title: "Project Jyoti",
    coverUrl: "/placeholders/project-cover.svg",
    avenue: "COMMUNITY_SERVICE",
    dateLabel: "July 2026",
    isInternational: true,
    partners: [
      "Rotary Club of Kathmandu Height",
      "Rotary Club of Nanaimo Daybreak (Canada)",
      "ADSon",
      "Rotary Club of Patan",
      "Rotaract Club of Kathmandu Height",
      "Rotaract Club of Kathmandu Midtown",
      "Rose International Fund for Children",
    ],
    summary:
      "A school-level vision screening programme in Kavrepalanchok district to protect children's eye health, identify vision problems early and improve access to treatment and learning support. Delivered with international partners from Canada.",
  },
];

export const mockBoardMembers: BoardMemberCard[] = [
  {
    id: "mem-president",
    slug: "president",
    fullName: "[[TODO: President name]]",
    position: "President",
    photoUrl: "/placeholders/portrait.svg",
  },
  {
    id: "mem-secretary",
    slug: "secretary",
    fullName: "[[TODO: Secretary name]]",
    position: "Secretary",
    photoUrl: "/placeholders/portrait.svg",
  },
  {
    id: "mem-treasurer",
    slug: "treasurer",
    fullName: "[[TODO: Treasurer name]]",
    position: "Treasurer",
    photoUrl: "/placeholders/portrait.svg",
  },
];

// Club leaders come from the club's Instagram bio (handles only; real names still needed).
// Empty until Instagram post folders with images are added under content/instagram/.
export const mockGalleryAlbums: GalleryAlbumCard[] = [];

// Empty until numbers are supplied in post.md files. The section hides itself when empty.
export const mockImpactStats: ImpactStat[] = [];

// Empty until the Rotaractor of the Month is supplied (brief Section 4.5). The section hides itself when null.
export const mockRecognition: RecognitionCard | null = null;

export const mockAnnouncements: AnnouncementCard[] = [];

/** Verified facts used on the About page timeline (built in a later ticket). */
export const mockTimeline = [
  {
    label: "6 January 2026",
    title: "Club chartered",
    description:
      "Rotaract Club of Kathmandu Height was chartered in Rotary International District 3292.",
  },
  {
    label: "July 2026",
    title: "Project Jyoti",
    description:
      "School vision screening programme in Kavrepalanchok district, supported by partners in Nepal and Canada.",
  },
  {
    label: "2026 (date to be confirmed)",
    title: "Co-host of Rotaract District 3292 Presidents' Night 2026",
    description:
      "The club was announced as a co-host of the district event for club presidents, district council members and the training team, held in Pokhara.",
  },
] as const;

export const projectJyotiPartners = [
  "Rotary Club of Kathmandu Height",
  "Rotary Club of Nanaimo Daybreak (Canada)",
  "ADSon",
  "Rotary Club of Patan",
  "Rotaract Club of Kathmandu Height",
  "Rotaract Club of Kathmandu Midtown",
  "Rose International Fund for Children",
] as const;
