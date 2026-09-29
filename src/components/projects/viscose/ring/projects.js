// Ring order for the events carousel. Only Presidents' Night 2026 is a
// verified event; the rest are placeholders until real events are announced
// (see content/TODO_CONTENT.md). Nothing here is invented.
export const PROJECTS = [
  {
    file: "events/presidents-night.svg",
    name: "Presidents' Night",
    type: "District Event",
    year: "2026",
  },
  {
    file: "events/next-1.svg",
    name: "Next Event",
    type: "To be announced",
    year: "2026",
  },
  {
    file: "events/next-2.svg",
    name: "Next Event",
    type: "To be announced",
    year: "2026",
  },
  {
    file: "events/next-3.svg",
    name: "Next Event",
    type: "To be announced",
    year: "2026",
  },
  {
    file: "events/next-4.svg",
    name: "Next Event",
    type: "To be announced",
    year: "2026",
  },
  {
    file: "events/next-5.svg",
    name: "Next Event",
    type: "To be announced",
    year: "2026",
  },
];

export const IMAGE_FILES = PROJECTS.map((p) => p.file);
