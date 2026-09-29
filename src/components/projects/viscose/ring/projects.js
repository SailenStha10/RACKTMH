// Ring order for the projects carousel. Project Jyoti and the Presidents' Night
// co-host are verified; the rest are placeholders until more projects are
// documented (see content/TODO_CONTENT.md). Nothing here is invented.
export const PROJECTS = [
  {
    file: "projects/jyoti.svg",
    name: "Project Jyoti",
    type: "Community Service",
    year: "2026",
  },
  {
    file: "events/presidents-night.svg",
    name: "Presidents' Night",
    type: "District Event",
    year: "2026",
  },
  {
    file: "events/next-1.svg",
    name: "Next Project",
    type: "Coming soon",
    year: "2026",
  },
  {
    file: "events/next-2.svg",
    name: "Next Project",
    type: "Coming soon",
    year: "2026",
  },
  {
    file: "events/next-3.svg",
    name: "Next Project",
    type: "Coming soon",
    year: "2026",
  },
  {
    file: "events/next-4.svg",
    name: "Next Project",
    type: "Coming soon",
    year: "2026",
  },
];

export const IMAGE_FILES = PROJECTS.map((p) => p.file);
