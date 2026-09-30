// Content source: CONTENT_BRIEF.md (Section 3). No invented dates or facts.
// Reserved for the About page timeline (T-501); not yet consumed by any
// built page. Everything else the landing page needed now comes from the
// database via src/lib/queries/ (see T-206).
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
