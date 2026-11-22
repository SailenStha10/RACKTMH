# Rotaract Club Management & Community Impact Platform

Next.js (App Router) frontend. The database, auth and admin were removed for the frontend-only phase and are recoverable from git history. See `PROJECT_MASTER.md` for the full plan and progress.

## Folder layout

```text
.
├── PROJECT_MASTER.md     # plan, tickets, working protocol
├── CLAUDE.md / AGENTS.md # agent instructions
├── docs/                 # briefs, content TODOs, design spec and references
├── content/              # drop-in folder for club-supplied content (photos, posts)
├── public/               # static assets (brand, fonts, hero, placeholders, ...)
└── src/
    ├── app/              # routes: (public)
    ├── components/       # ui, layout, home, motion, events, projects, team
    ├── config/           # site config
    ├── lib/              # queries, utils
    └── types/
```

## Scripts

`npm run dev`, `npm run build`, `npm run lint`, and `npm run format`.
