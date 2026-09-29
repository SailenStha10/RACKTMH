export const siteConfig = {
  clubName: "Rotaract Club of Example",
  shortName: "Rotaract Example",
  tagline: "Service Above Self",
  theme: "Empowering Communities, Enriching Lives",
  vision:
    "A world where individuals unite and take action to create lasting change, within communities and across the globe.",
  mission:
    "To provide an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, to address the physical and social needs of their communities, and to promote better relations between all people worldwide through a framework of friendship and service.",
  rotaryYear: "2026-27",
  district: "District 3292",
  sponsorClub: "Rotary Club of Example",
  charterDate: "2015-07-01",
  email: "info@rotaractexample.org",
  phone: "+977-1-0000000",
  address: "Kathmandu, Nepal",
  social: {
    facebook: "https://facebook.com/rotaractexample",
    instagram: "https://instagram.com/rotaractexample",
    linkedin: "https://linkedin.com/company/rotaractexample",
    website: "https://rotaractexample.org",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
} as const

export type SiteConfig = typeof siteConfig
