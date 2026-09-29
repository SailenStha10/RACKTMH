// Values come from CONTENT_BRIEF.md Sections 2 and 4.1.
// Anything not yet supplied is a [[TODO: ...]] placeholder tracked in content/TODO_CONTENT.md.
export const siteConfig = {
  clubName: "Rotaract Club of Kathmandu Height",
  shortName: "RAC Kathmandu Height",
  tagline: "Service Above Self",
  theme: "[[TODO: club or rotary-year theme]]",
  intro:
    "We are a youth-led Rotaract club in Kathmandu, Nepal, bringing young people together for community service, leadership and fellowship.",
  vision:
    "Developing competent leaders through fellowship, networking and opportunities.",
  mission:
    "To bring young people together to grow as leaders, serve their communities and build lasting friendships.",
  rotaryYear: "2026-27",
  district: "District 3292",
  districtRegion: "Nepal and Bhutan",
  sponsorClub: "Rotary Club of Kathmandu Height",
  sponsorClubVerified: false,
  charterDate: "6 January 2026",
  clubId: "8827984",
  // Display order, left to right.
  leaders: [
    {
      position: "Secretary",
      handle: "@sailennn_",
      href: "https://www.instagram.com/sailennn_/",
    },
    { position: "President Elect", handle: "", href: "" },
    {
      position: "President",
      handle: "@josh.sth",
      href: "https://www.instagram.com/josh.sth/",
    },
    { position: "Vice President", handle: "", href: "" },
    {
      position: "Treasurer",
      handle: "@swarneem_dhl",
      href: "https://www.instagram.com/swarneem_dhl/",
    },
  ],

  email: "[[TODO: club email]]",
  phone: "[[TODO: club phone]]",
  address: "Kathmandu, Nepal",
  meetingPlace: "[[TODO: meeting place]]",
  meetingSchedule: "[[TODO: meeting schedule]]",
  social: {
    instagram: "https://www.instagram.com/rackathmanduheight/",
    instagramHandle: "@rackathmanduheight",
    facebook: "https://www.facebook.com/profile.php?id=61579900771713",
    linkedin: "https://www.linkedin.com/company/137054140/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
