# PROJECT MASTER — Rotaract Club Management & Community Impact Platform

> This file is the single source of truth for building this project.
> Claude Code must read this entire file before doing any work and must follow the **Working Protocol** exactly.

---

## 0. WORKING PROTOCOL (MANDATORY FOR CLAUDE CODE)

These rules override any default behavior.

### 0.1 One ticket at a time
1. Work on **exactly one ticket** at a time, in the order listed in Section 6.
2. Before starting a ticket, state: `Starting T-XXX: <title>` and list the planned steps in 3–6 lines.
3. Complete every item in the ticket's **Tasks** and satisfy every **Acceptance Criteria** item.
4. Do not implement anything belonging to a later ticket, even if it seems convenient.

### 0.2 Stop after every ticket
When a ticket is finished:
1. Run `npm run lint` and `npm run build` (from T-001 onward). Fix all errors before reporting.
2. Update the **Progress Tracker** (Section 9) in this file: mark the ticket `[x]` and fill in the date.
3. Commit with the message format: `T-XXX: <short title>`.
4. Output the completion report using the exact template below.
5. **STOP. Do not start the next ticket.** Wait for the user.

```text
========================================
TICKET COMPLETE: T-XXX — <Title>
========================================
Summary:        <1–3 lines of what was built>
Files changed:  <list of key files created/modified>
How to verify:  <exact commands / URLs to check>
Notes/Blockers: <anything the user must know or do, or "None">
Next ticket:    T-YYY — <Title>

Reply "continue" to start T-YYY.
========================================
```

### 0.3 Continuing
- Only begin the next ticket when the user replies **"continue"** (or clearly equivalent: "next", "go ahead", "proceed").
- If the user asks for changes instead, apply the changes to the current/previous ticket, report again with the same template, and wait again.
- If the user names a specific ticket (e.g. "do T-305"), confirm dependencies are done first; if not, say which are missing and wait.

### 0.4 Review gates
Some tickets are marked **REVIEW GATE**. After those, in addition to the report, explicitly ask the user to review the result in the browser and do not proceed until they approve.

### 0.5 Blockers and user actions
- If a ticket needs something only the user can do (create a Neon account, paste secrets, Cloudinary keys), list the exact steps under **Notes/Blockers**, then stop and wait.
- Never invent secrets. Never commit `.env` files.
- If a requirement is ambiguous, ask one concise question instead of guessing on anything structural.

### 0.6 Code standards
- TypeScript strict mode. No `any` unless justified in a comment.
- Server Components by default; add `"use client"` only where interactivity is required.
- All mutations via **Server Actions** (or Route Handlers where a public endpoint is needed).
- Every Server Action / Route Handler that mutates data must: validate input with **Zod**, check authorization server-side, write an audit log entry (from T-403 onward), and call `revalidatePath` / `revalidateTag` as needed.
- Never rely only on hidden UI or middleware for admin protection.
- Use `@/` import alias. Keep components small and co-located by feature.
- No emojis in UI copy or code comments.
- Use `next/image` for all images. Provide `alt` text everywhere.

### 0.7 Version awareness
Library APIs change between major versions. At the start of any ticket that installs or configures a library, check the installed version (`npm ls <pkg>` / `npx <tool> --version`) and follow the official docs for **that major version**. Specific notes:
- **Next.js 16+**: `middleware.ts` is renamed to `proxy.ts`. Use whichever the installed version expects. Route `params`/`searchParams` are async (`await params`).
- **Prisma 7+**: datasource URLs live in `prisma.config.ts`, the generator is `prisma-client` with a required `output` path, and a driver adapter (`@prisma/adapter-neon` or `@prisma/adapter-pg`) is used when constructing `PrismaClient`. On Prisma 6, use `prisma-client-js` and `url`/`directUrl` in `schema.prisma`.
- **Tailwind CSS v4**: configuration is CSS-first (`@theme` in `globals.css`), no `tailwind.config.js` by default.
- **Auth.js**: use v5 (`next-auth@beta` or later stable) with the `auth()` helper.

---

## 1. PROJECT SUMMARY

A full-stack web platform for a Rotaract Club combining:
1. Official public website
2. Member management
3. Event management and registration
4. Project and impact tracking
5. Membership applications
6. Gallery and announcements
7. Admin dashboard (admin-only access)

### Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS, shadcn/ui, lucide-react |
| Backend | Next.js Server Actions + Route Handlers |
| Database | Neon PostgreSQL |
| ORM | Prisma |
| Auth | Auth.js (Credentials provider, JWT sessions) |
| Validation | Zod, react-hook-form |
| File storage | Cloudinary |
| Email (Phase 3) | Resend |
| Deployment | Vercel |
| VCS | Git + GitHub |

---

## 2. ACTORS & ACCESS

The system has exactly **two actors**. There are no member, board member or other logged-in roles.

| Actor | Authentication | Access |
|---|---|---|
| **Visitor** | None | Entire public website, event registration, membership application, contact form |
| **Admin** | Email + password (Auth.js) | Everything under `/admin`: all content, members, committees, events, registrations, projects, gallery, announcements, applications, recognition, messages, settings, admin accounts, audit logs |

Rules:
- Members, board members, committee leads and past presidents are **data records** managed by the Admin. They do not log in.
- Any authenticated, active `User` is an Admin. There is no role field.
- Every admin page, server action and route handler calls `requireAdmin()` server-side. Middleware/proxy protection is only a first line of defense.
- Visitor-facing mutations (event registration, membership application, contact form) are public but must be validated, rate-limited and protected with a honeypot.

---

## 3. DESIGN DIRECTION

- **Brand colors** (define as CSS tokens so they can be changed in one place):
  - Primary (Rotaract cranberry): `#D41367`
  - Secondary (Rotary royal blue): `#17458F`
  - Accent (Rotary gold): `#F7A81B`
  - Neutrals: slate scale; background white / near-black in dark mode
- **Typography**: a clean sans (e.g. Inter or Plus Jakarta Sans via `next/font`), bold display weight for headings.
- **Feel**: modern, community-focused, photo-forward, generous whitespace, rounded cards, subtle hover motion.
- **Responsive** breakpoints: mobile first; test at 375px, 768px, 1280px.
- **Accessibility**: WCAG AA contrast, visible focus states, semantic landmarks, keyboard-navigable menus.
- Use placeholder images from `/public/placeholders/` (generated solid/gradient SVGs) until real images exist. Do not hotlink external images.
- Club-specific values (name, district, sponsor club, theme, social links) live in `src/config/site.ts` until moved to the `SiteSetting` table.

---

## 4. TARGET FOLDER STRUCTURE

```text
.
├── PROJECT_MASTER.md
├── CLAUDE.md                     # points to PROJECT_MASTER.md
├── .env.example
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── prisma.config.ts              # Prisma 7+ only
├── public/
│   └── placeholders/
└── src/
    ├── app/
    │   ├── (public)/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx                 # Home
    │   │   ├── about/page.tsx
    │   │   ├── team/page.tsx
    │   │   ├── events/page.tsx
    │   │   ├── events/[slug]/page.tsx
    │   │   ├── projects/page.tsx
    │   │   ├── projects/[slug]/page.tsx
    │   │   ├── gallery/page.tsx
    │   │   ├── gallery/[slug]/page.tsx
    │   │   ├── announcements/page.tsx
    │   │   ├── announcements/[slug]/page.tsx
    │   │   ├── past-presidents/page.tsx
    │   │   ├── join/page.tsx
    │   │   └── contact/page.tsx
    │   ├── (auth)/login/page.tsx
    │   ├── admin/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx                 # redirects to dashboard
    │   │   ├── dashboard/
    │   │   ├── members/
    │   │   ├── committees/
    │   │   ├── past-presidents/
    │   │   ├── events/
    │   │   ├── registrations/
    │   │   ├── projects/
    │   │   ├── partners/
    │   │   ├── gallery/
    │   │   ├── announcements/
    │   │   ├── applications/
    │   │   ├── recognition/
    │   │   ├── messages/
    │   │   ├── content/                 # about, timeline
    │   │   ├── settings/
    │   │   ├── users/
    │   │   └── audit-logs/
    │   ├── api/
    │   │   ├── auth/[...nextauth]/route.ts
    │   │   └── export/...               # CSV exports
    │   ├── sitemap.ts
    │   ├── robots.ts
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   └── globals.css
    ├── components/
    │   ├── ui/                          # shadcn
    │   ├── layout/                      # navbar, footer, admin sidebar
    │   ├── home/
    │   ├── events/
    │   ├── projects/
    │   ├── team/
    │   ├── gallery/
    │   ├── forms/
    │   └── admin/
    ├── config/
    │   └── site.ts
    ├── data/
    │   └── mock.ts                      # Sprint 1 only; removed in T-206
    ├── lib/
    │   ├── prisma.ts
    │   ├── auth.ts
    │   ├── cloudinary.ts
    │   ├── audit.ts
    │   ├── utils.ts
    │   ├── slug.ts
    │   ├── rotary-year.ts
    │   ├── auth-guard.ts
    │   ├── validations/
    │   └── queries/                     # read-only data access functions
    ├── actions/                         # server actions by feature
    └── types/
```

---

## 5. DATABASE SCHEMA (TARGET)

Implemented in T-203. Adjust generator/datasource blocks to the installed Prisma major version (see 0.7).

```prisma
// ---------- generator / datasource (Prisma 6 form) ----------
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// ---------- enums ----------
enum MemberStatus {
  PENDING
  ACTIVE
  INACTIVE
  ALUMNI
}

enum EventStatus {
  DRAFT
  UPCOMING
  ONGOING
  COMPLETED
  CANCELLED
}

enum RegistrationStatus {
  REGISTERED
  CANCELLED
}

enum AttendanceStatus {
  PENDING
  PRESENT
  ABSENT
}

enum ProjectStatus {
  PLANNED
  ONGOING
  COMPLETED
  CANCELLED
}

enum AvenueOfService {
  CLUB_SERVICE
  COMMUNITY_SERVICE
  PROFESSIONAL_DEVELOPMENT
  INTERNATIONAL_SERVICE
}

enum AnnouncementStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

enum ApplicationStatus {
  SUBMITTED
  UNDER_REVIEW
  SHORTLISTED
  ACCEPTED
  REJECTED
}

enum MessageStatus {
  UNREAD
  READ
  ARCHIVED
}

// ---------- auth (admin accounts only) ----------
model User {
  id            String         @id @default(cuid())
  email         String         @unique
  name          String?
  passwordHash  String
  isActive      Boolean        @default(true)
  lastLoginAt   DateTime?
  announcements Announcement[]
  auditLogs     AuditLog[]
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
}

// ---------- members ----------
model Member {
  id               String             @id @default(cuid())
  slug             String             @unique
  fullName         String
  email            String             @unique
  phone            String?
  photoUrl         String?
  photoPublicId    String?
  institution      String?
  courseOrProfession String?
  joinDate         DateTime?
  rotaryYear       String?            // e.g. "2026-27"
  position         String?            // e.g. "President"
  isBoard          Boolean            @default(false)
  bio              String?
  skills           String[]
  interests        String[]
  socialLinks      Json?              // { linkedin, instagram, facebook, website }
  displayOrder     Int                @default(0)
  status           MemberStatus       @default(PENDING)
  committees       CommitteeMember[]
  registrations    EventRegistration[]
  volunteering     ProjectVolunteer[]
  ledProjects      Project[]          @relation("ProjectLead")
  ledCommittees    Committee[]        @relation("CommitteeLead")
  recognitions     Recognition[]
  pastPresidencies PastPresident[]
  createdAt        DateTime           @default(now())
  updatedAt        DateTime           @updatedAt

  @@index([status])
  @@index([rotaryYear])
  @@index([isBoard, displayOrder])
}

model Committee {
  id          String            @id @default(cuid())
  slug        String            @unique
  name        String
  description String?
  rotaryYear  String
  leadId      String?
  lead        Member?           @relation("CommitteeLead", fields: [leadId], references: [id], onDelete: SetNull)
  members     CommitteeMember[]
  displayOrder Int              @default(0)
  createdAt   DateTime          @default(now())
  updatedAt   DateTime          @updatedAt

  @@unique([name, rotaryYear])
}

model CommitteeMember {
  id          String    @id @default(cuid())
  committeeId String
  memberId    String
  roleTitle   String?   // e.g. "Director", "Member"
  committee   Committee @relation(fields: [committeeId], references: [id], onDelete: Cascade)
  member      Member    @relation(fields: [memberId], references: [id], onDelete: Cascade)
  createdAt   DateTime  @default(now())

  @@unique([committeeId, memberId])
}

// ---------- events ----------
model Event {
  id                   String              @id @default(cuid())
  slug                 String              @unique
  title                String
  description          String
  posterUrl            String?
  posterPublicId       String?
  category             String?
  startAt              DateTime
  endAt                DateTime?
  venue                String
  organizer            String?
  requiresRegistration Boolean             @default(false)
  registrationDeadline DateTime?
  maxParticipants      Int?
  status               EventStatus         @default(DRAFT)
  isFeatured           Boolean             @default(false)
  registrations        EventRegistration[]
  galleries            Gallery[]
  createdAt            DateTime            @default(now())
  updatedAt            DateTime            @updatedAt

  @@index([status, startAt])
}

model EventRegistration {
  id         String             @id @default(cuid())
  eventId    String
  memberId   String?
  name       String
  email      String
  phone      String?
  isMember   Boolean            @default(false)
  status     RegistrationStatus @default(REGISTERED)
  attendance AttendanceStatus   @default(PENDING)
  event      Event              @relation(fields: [eventId], references: [id], onDelete: Cascade)
  member     Member?            @relation(fields: [memberId], references: [id], onDelete: SetNull)
  createdAt  DateTime           @default(now())
  updatedAt  DateTime           @updatedAt

  @@unique([eventId, email])
  @@index([eventId, status])
}

// ---------- projects ----------
model Project {
  id                 String             @id @default(cuid())
  slug               String             @unique
  title              String
  summary            String
  description        String
  objectives         String[]
  category           String?
  avenue             AvenueOfService
  startDate          DateTime
  endDate            DateTime?
  location           String?
  leadId             String?
  lead               Member?            @relation("ProjectLead", fields: [leadId], references: [id], onDelete: SetNull)
  beneficiaries      Int                @default(0)
  externalVolunteers Int                @default(0)   // non-member volunteers
  volunteerHours     Int                @default(0)
  budget             Decimal?           @db.Decimal(12, 2)
  currency           String             @default("NPR")
  outcomes           String?
  coverUrl           String?
  coverPublicId      String?
  reportUrl          String?
  reportPublicId     String?
  status             ProjectStatus      @default(PLANNED)
  isFeatured         Boolean            @default(false)
  volunteers         ProjectVolunteer[]
  partners           ProjectPartner[]
  images             ProjectImage[]
  galleries          Gallery[]
  createdAt          DateTime           @default(now())
  updatedAt          DateTime           @updatedAt

  @@index([avenue, startDate])
  @@index([status])
}

model ProjectVolunteer {
  id        String  @id @default(cuid())
  projectId String
  memberId  String
  hours     Int     @default(0)
  role      String?
  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  member    Member  @relation(fields: [memberId], references: [id], onDelete: Cascade)

  @@unique([projectId, memberId])
}

model Partner {
  id          String           @id @default(cuid())
  name        String           @unique
  logoUrl     String?
  logoPublicId String?
  website     String?
  description String?
  projects    ProjectPartner[]
  createdAt   DateTime         @default(now())
}

model ProjectPartner {
  projectId String
  partnerId String
  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  partner   Partner @relation(fields: [partnerId], references: [id], onDelete: Cascade)

  @@id([projectId, partnerId])
}

model ProjectImage {
  id           String   @id @default(cuid())
  projectId    String
  imageUrl     String
  publicId     String
  caption      String?
  displayOrder Int      @default(0)
  project      Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  createdAt    DateTime @default(now())
}

// ---------- gallery ----------
model Gallery {
  id            String         @id @default(cuid())
  slug          String         @unique
  title         String
  description   String?
  coverUrl      String?
  coverPublicId String?
  eventId       String?
  projectId     String?
  event         Event?         @relation(fields: [eventId], references: [id], onDelete: SetNull)
  project       Project?       @relation(fields: [projectId], references: [id], onDelete: SetNull)
  isPublished   Boolean        @default(true)
  images        GalleryImage[]
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
}

model GalleryImage {
  id           String   @id @default(cuid())
  galleryId    String
  imageUrl     String
  publicId     String
  caption      String?
  displayOrder Int      @default(0)
  gallery      Gallery  @relation(fields: [galleryId], references: [id], onDelete: Cascade)
  createdAt    DateTime @default(now())

  @@index([galleryId, displayOrder])
}

// ---------- content ----------
model Announcement {
  id              String             @id @default(cuid())
  slug            String             @unique
  title           String
  content         String
  imageUrl        String?
  imagePublicId   String?
  authorId        String?
  author          User?              @relation(fields: [authorId], references: [id], onDelete: SetNull)
  status          AnnouncementStatus @default(DRAFT)
  publishedAt     DateTime?
  expiresAt       DateTime?
  createdAt       DateTime           @default(now())
  updatedAt       DateTime           @updatedAt

  @@index([status, publishedAt])
}

model MembershipApplication {
  id                  String            @id @default(cuid())
  fullName            String
  email               String
  phone               String
  institution         String
  course              String
  yearOrSemester      String?
  skills              String[]
  interests           String[]
  volunteerExperience String?
  reason              String
  cvUrl               String?
  cvPublicId          String?
  status              ApplicationStatus @default(SUBMITTED)
  reviewNotes         String?
  reviewedById        String?
  reviewedAt          DateTime?
  createdAt           DateTime          @default(now())
  updatedAt           DateTime          @updatedAt

  @@index([status, createdAt])
}

model ContactMessage {
  id        String        @id @default(cuid())
  name      String
  email     String
  subject   String
  message   String
  status    MessageStatus @default(UNREAD)
  createdAt DateTime      @default(now())

  @@index([status, createdAt])
}

model Recognition {
  id          String   @id @default(cuid())
  memberId    String
  month       Int      // 1-12
  year        Int
  rotaryYear  String
  title       String   @default("Rotaractor of the Month")
  achievement String
  description String?
  photoUrl    String?
  photoPublicId String?
  member      Member   @relation(fields: [memberId], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())

  @@unique([memberId, month, year])
  @@index([year, month])
}

model PastPresident {
  id            String   @id @default(cuid())
  memberId      String?
  member        Member?  @relation(fields: [memberId], references: [id], onDelete: SetNull)
  name          String
  photoUrl      String?
  photoPublicId String?
  rotaryYear    String   @unique
  message       String?
  achievements  String[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model TimelineEntry {
  id           String   @id @default(cuid())
  date         DateTime
  title        String
  description  String?
  displayOrder Int      @default(0)
  createdAt    DateTime @default(now())
}

model SiteSetting {
  key       String   @id    // e.g. "club", "hero", "about", "contact", "social"
  value     Json
  updatedAt DateTime @updatedAt
}

model AuditLog {
  id         String   @id @default(cuid())
  userId     String?
  user       User?    @relation(fields: [userId], references: [id], onDelete: SetNull)
  action     String   // CREATE | UPDATE | DELETE | STATUS_CHANGE | LOGIN
  entityType String
  entityId   String?
  before     Json?
  after      Json?
  createdAt  DateTime @default(now())

  @@index([entityType, entityId])
  @@index([createdAt])
}
```

### Derived statistics (computed, not stored)
- **Projects**: count of `Project` where status != CANCELLED
- **Beneficiaries**: `SUM(Project.beneficiaries)`
- **Volunteers**: distinct `ProjectVolunteer.memberId` count + `SUM(Project.externalVolunteers)`
- **Volunteer hours**: `SUM(Project.volunteerHours)` + `SUM(ProjectVolunteer.hours)`
- Cache these with `unstable_cache` / `"use cache"` (per installed Next.js version) and revalidate on project mutations.

---

## 6. SPRINTS & TICKETS

Legend: **Depends on** = tickets that must be complete first.

---

### SPRINT 0 — Project Foundation

#### T-001 — Initialize Next.js project
**Tasks**
1. Confirm Node.js >= 20 (`node -v`). If lower, stop and tell the user.
2. In the current working directory (keep `PROJECT_MASTER.md`), scaffold:
   ```bash
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
   ```
   If the directory is not empty and the CLI refuses, scaffold into a temp folder and move files in, preserving `PROJECT_MASTER.md`.
3. Enable TypeScript `strict` in `tsconfig.json` (verify).
4. Create `CLAUDE.md` with:
   ```md
   Read and follow PROJECT_MASTER.md before doing anything. Follow its Working Protocol exactly.
   ```
5. `git init` (if not already), create `.gitignore` entries for `.env*` except `.env.example`.
6. Initial commit.

**Acceptance Criteria**
- `npm run dev` serves the default page on `http://localhost:3000`.
- `npm run build` and `npm run lint` pass.
- `CLAUDE.md` exists.

---

#### T-002 — Tooling, UI library and base structure
**Depends on:** T-001
**Tasks**
1. Install and configure Prettier + `prettier-plugin-tailwindcss`; add `format` script.
2. Initialize shadcn/ui (`npx shadcn@latest init`). Add components: `button, card, badge, input, textarea, label, select, dialog, sheet, dropdown-menu, separator, skeleton, avatar, tabs, table, sonner, form`.
3. Install: `lucide-react zod react-hook-form @hookform/resolvers clsx tailwind-merge date-fns`.
4. Create the empty folder structure from Section 4 (with `.gitkeep` where needed).
5. Create `src/config/site.ts` with placeholders: club name, short name, tagline/theme, rotary year, district, sponsor Rotary club, charter date, email, phone, address, social links, nav items.
6. Create `src/lib/rotary-year.ts`: `getCurrentRotaryYear(date = new Date())` returning e.g. `"2026-27"` (Rotary year starts July 1).
7. Create `.env.example` (empty keys for now, filled in later tickets).

**Acceptance Criteria**
- Build and lint pass.
- shadcn components render (quick check on a temporary test page, then remove it).
- `getCurrentRotaryYear` returns correct values around June 30 / July 1.

---

### SPRINT 1 — Landing Page Frontend (mock data)

> Goal: a complete, polished, responsive homepage the user can review **before** any backend work. All data comes from `src/data/mock.ts`, typed with interfaces that mirror the Prisma models so swapping to the database later is trivial.

#### T-101 — Design system and theme
**Depends on:** T-002
**Tasks**
1. Define brand tokens (Section 3) in `globals.css` (Tailwind v4 `@theme` or v3 config per installed version), including light/dark variables for shadcn.
2. Load fonts with `next/font` in root `layout.tsx`.
3. Create reusable primitives in `src/components/layout/`: `Container`, `Section` (with optional eyebrow, title, subtitle, action slot), `SectionHeading`.
4. Generate placeholder SVGs in `public/placeholders/` (hero, event poster, project cover, portrait, gallery tiles) as brand-colored gradients.
5. Create `src/types/public.ts` with UI types: `EventCard`, `ProjectCard`, `BoardMemberCard`, `GalleryAlbumCard`, `ImpactStat`, `RecognitionCard`, `AnnouncementCard`.
6. Create `src/data/mock.ts` with realistic mock data: 3 upcoming events, 4 featured projects, 6 board members, 6 gallery albums, 4 impact stats, 1 Rotaractor of the Month, 2 announcements.

**Acceptance Criteria**
- Tokens used via utility classes (no hard-coded hex in components).
- Mock data is fully typed.

---

#### T-102 — Public layout: Navbar and Footer
**Depends on:** T-101
**Tasks**
1. `(public)/layout.tsx` wrapping pages with Navbar + Footer.
2. Navbar: logo + club name, links (Home, About, Team, Events, Projects, Gallery, Contact), "Join Us" primary button, active link state, sticky with background on scroll, mobile menu using `Sheet`.
3. Footer: club info, quick links, contact details, social icons, Rotary/Rotaract affiliation text, district, copyright with current year.
4. Create stub pages for each nav link ("Coming soon" section) so links do not 404.

**Acceptance Criteria**
- Keyboard accessible menu; mobile menu closes on navigation.
- No layout shift on scroll.

---

#### T-103 — Hero section
**Depends on:** T-102
**Tasks**
1. `components/home/Hero.tsx`: club logo, name, current rotary year badge, theme/tagline, short intro, buttons "Explore Our Impact" (scrolls to impact section) and "Join Us" (`/join`).
2. Background: image with gradient overlay or brand gradient; subtle entrance animation (CSS only, respects `prefers-reduced-motion`).

**Acceptance Criteria**
- Looks correct at 375 / 768 / 1280 px.
- Hero image uses `next/image` with `priority`.

---

#### T-104 — About preview and Impact statistics
**Depends on:** T-103
**Tasks**
1. `AboutPreview`: short intro, Vision card, Mission card, "Learn More" to `/about`.
2. `ImpactStats` (id `impact`): 4 stats (Projects, Beneficiaries, Volunteers, Volunteer Hours) with count-up animation on scroll into view (client component, reduced-motion aware).

**Acceptance Criteria**
- Stats render server-side with final values (animation is progressive enhancement).

---

#### T-105 — Upcoming events and Featured projects
**Depends on:** T-104
**Tasks**
1. `EventCard` + `UpcomingEvents`: poster, title, date, time, venue, registration status badge (Open / Closed / Not required), link to `/events/[slug]`. "View all events" link.
2. `ProjectCard` + `FeaturedProjects`: cover image, title, avenue of service badge, date, short description, link to `/projects/[slug]`. "View all projects" link.
3. Empty states for both.

**Acceptance Criteria**
- Grids: 1 column mobile, 2 tablet, 3 desktop.
- Dates formatted consistently via a shared `formatDate` util.

---

#### T-106 — Board preview, Recognition, Gallery preview, Announcements, Membership CTA
**Depends on:** T-105
**Tasks**
1. `BoardPreview`: President, Secretary, Treasurer highlighted + other directors; photo, name, position; link to `/team`.
2. `RotaractorOfTheMonth`: photo, name, month, achievement.
3. `GalleryPreview`: masonry/grid of album covers with titles, link to `/gallery`.
4. `LatestAnnouncements`: 2 latest cards.
5. `MembershipCTA`: bold brand-colored band with copy and "Apply Now" button.
6. Assemble all sections in `(public)/page.tsx` in this order: Hero, AboutPreview, ImpactStats, UpcomingEvents, FeaturedProjects, BoardPreview, RotaractorOfTheMonth, LatestAnnouncements, GalleryPreview, MembershipCTA.

**Acceptance Criteria**
- Full homepage renders from mock data with no console errors or hydration warnings.

---

#### T-107 — Landing page polish, SEO and accessibility — REVIEW GATE
**Depends on:** T-106
**Tasks**
1. Root metadata: title template, description, Open Graph, Twitter card, `metadataBase`, favicon/icons.
2. Accessibility pass: landmarks, heading order, alt text, focus rings, color contrast, skip-to-content link.
3. Responsive pass at 375 / 768 / 1280 / 1536 px.
4. Add `loading.tsx` skeleton for the home route and a styled `not-found.tsx`.
5. Run a production build and report page size from build output.

**Acceptance Criteria**
- Build and lint pass.
- Lighthouse (user may run) targets: Performance >= 90, Accessibility >= 95, SEO >= 95.

**REVIEW GATE:** Ask the user to open `http://localhost:3000`, review design, content order, colors and copy, and request changes. Do not continue to Sprint 2 until the user approves.

---

### SPRINT 2 — Database: Neon PostgreSQL + Prisma

#### T-201 — Neon database setup (user action + verification)
**Depends on:** T-107 approved
**Tasks**
1. Output these instructions for the user, then stop and wait for confirmation:
   1. Go to https://neon.tech and sign in / sign up.
   2. Create a project (name: `rotaract-platform`, Postgres latest, region nearest to users — e.g. AWS Asia Pacific (Singapore) for Nepal).
   3. Default branch `main`, database `neondb` (or rename to `rotaract`).
   4. Optionally create a `dev` branch for development and use its connection strings locally.
   5. Open **Connect** on the dashboard and copy two strings:
      - **Pooled** connection (host contains `-pooler`) → `DATABASE_URL`
      - **Direct** connection (no `-pooler`) → `DIRECT_URL`
      Both must end with `?sslmode=require` (add `&channel_binding=require` if Neon shows it).
   6. Create `.env` in the project root:
      ```env
      DATABASE_URL="postgresql://USER:PASSWORD@ep-xxxx-pooler.REGION.aws.neon.tech/neondb?sslmode=require"
      DIRECT_URL="postgresql://USER:PASSWORD@ep-xxxx.REGION.aws.neon.tech/neondb?sslmode=require"
      ```
2. After the user confirms, verify `.env` exists and is git-ignored. Do not print secret values.
3. Update `.env.example` with `DATABASE_URL` and `DIRECT_URL` keys.

**Acceptance Criteria**
- `.env` present, not tracked by git.
- `.env.example` updated.

---

#### T-202 — Install and configure Prisma
**Depends on:** T-201
**Tasks**
1. Install: `npm i -D prisma tsx` and `npm i @prisma/client`. Check the Prisma major version.
2. `npx prisma init` (keep existing `.env`).
3. Configure per version:
   - **Prisma 6**: `schema.prisma` datasource with `url = env("DATABASE_URL")` and `directUrl = env("DIRECT_URL")`.
   - **Prisma 7+**: create `prisma.config.ts` pointing migrations to `DIRECT_URL`; generator `prisma-client` with `output = "../src/generated/prisma"`; install `@prisma/adapter-neon` (and `@neondatabase/serverless`) or `@prisma/adapter-pg`; construct the client with the adapter using `DATABASE_URL`. Add `src/generated/` to `.gitignore`.
4. Create `src/lib/prisma.ts` singleton (global cache in development to avoid exhausting connections during hot reload).
5. Add scripts: `db:generate`, `db:migrate` (`prisma migrate dev`), `db:deploy` (`prisma migrate deploy`), `db:studio`, `db:seed`, `db:reset`. Add `postinstall: prisma generate`.
6. Test connectivity with a tiny script running `SELECT 1`, then delete it.

**Acceptance Criteria**
- `npx prisma validate` passes.
- Connection test succeeds.

---

#### T-203 — Implement full Prisma schema
**Depends on:** T-202
**Tasks**
1. Implement all enums and models from Section 5 (adapt generator/datasource to installed version).
2. Run `npx prisma format` and `npx prisma validate`.
3. Run first migration: `npx prisma migrate dev --name init`.
4. Open `npx prisma studio` briefly to confirm tables exist (report only).

**Acceptance Criteria**
- Migration applied to Neon; all tables visible in the Neon console.

---

#### T-204 — Seed script
**Depends on:** T-203
**Tasks**
1. Install `bcryptjs` (+ types if needed).
2. `prisma/seed.ts` (idempotent via `upsert`):
   - Admin user from env `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` (hashed, cost 12). Add both to `.env.example`.
   - Members and board matching the Sprint 1 mock data.
   - Committees (Club Service, Community Service, Professional Development, International Service, Public Image, Membership) for the current rotary year.
   - Events, projects (with volunteers, partners, impact values), galleries with images (placeholder URLs), announcements, one recognition, 3 past presidents, timeline entries, `SiteSetting` rows (`club`, `hero`, `about`, `contact`, `social`).
3. Register the seed command per Prisma version (`package.json` `prisma.seed` or `prisma.config.ts` `migrations.seed`), using `tsx`.
4. Run `npm run db:seed` twice to prove idempotency.

**Acceptance Criteria**
- Seed runs without errors twice; no duplicate rows.
- User reminded to set `SEED_ADMIN_*` values in `.env` before running.

---

#### T-205 — Data access layer
**Depends on:** T-204
**Tasks**
1. `src/lib/queries/` read-only functions (server-only, import `server-only`):
   - `getSiteSettings()`, `getHomeImpactStats()`, `getUpcomingEvents(limit)`, `getFeaturedProjects(limit)`, `getBoardMembers(rotaryYear)`, `getCurrentRecognition()`, `getLatestAnnouncements(limit)`, `getGalleryAlbums(limit)`.
2. Map Prisma results to the UI types in `src/types/public.ts`.
3. Only return public-safe fields (no emails/phones of members unless intended).
4. Add caching with tags (`home`, `events`, `projects`, `members`, `gallery`, `announcements`, `settings`).

**Acceptance Criteria**
- Functions typed end to end; no Prisma types leak into client components.

---

#### T-206 — Connect landing page to database
**Depends on:** T-205
**Tasks**
1. Replace mock data usage on the homepage with query functions.
2. Hero, about preview, footer and navbar read from `SiteSetting` with fallback to `src/config/site.ts`.
3. Delete `src/data/mock.ts` once nothing imports it.
4. Add `next.config` `images.remotePatterns` for `res.cloudinary.com`.

**Acceptance Criteria**
- Homepage renders identical layout with seeded DB data.
- Build passes; homepage is statically rendered or ISR where possible.

---

### SPRINT 3 — Authentication & Authorization

#### T-301 — Auth.js setup (Credentials + JWT)
**Depends on:** T-206
**Tasks**
1. Install `next-auth` (v5). Generate `AUTH_SECRET` (`npx auth secret`) and add `AUTH_SECRET`, `AUTH_URL` (optional locally) to `.env.example`.
2. `src/lib/auth.ts`: Credentials provider validating with Zod, looking up `User` by email, verifying bcrypt hash, rejecting `isActive = false`, updating `lastLoginAt`.
3. JWT session strategy; include `id` in token and session (no role; every signed-in user is an admin). Extend types in `src/types/next-auth.d.ts`.
4. Route handler `app/api/auth/[...nextauth]/route.ts`.
5. Basic login rate limiting (in-memory per IP/email for dev; note for production).

**Acceptance Criteria**
- Seeded admin can sign in; session contains the admin `id`.

---

#### T-302 — Admin route protection
**Depends on:** T-301
**Tasks**
1. `src/lib/auth-guard.ts`: `requireAdmin()` — gets the session, confirms the user exists and `isActive`, otherwise redirects to `/login` (pages) or returns an unauthorized error (actions/route handlers). Use it in every admin page, server action and admin route handler.
2. `middleware.ts` or `proxy.ts` (per Next.js version) redirecting unauthenticated visitors from `/admin/*` to `/login?callbackUrl=...`.
3. Middleware/proxy is a first line only; `requireAdmin()` checks remain mandatory.

**Acceptance Criteria**
- Visiting `/admin/dashboard` logged out redirects to login.
- A deactivated admin is rejected even with an existing session.
- A server action called without an admin session returns an error.

---

#### T-303 — Login page and session UI
**Depends on:** T-302
**Tasks**
1. `(auth)/login/page.tsx`: branded form (email, password), error messages, loading state, redirect to `callbackUrl` or `/admin/dashboard`.
2. Admin user menu component (name, email, sign out) in the admin topbar.
3. The public navbar shows no login link; admins reach the panel via `/login` directly. If an admin session exists, show a small "Dashboard" link in the navbar.

**Acceptance Criteria**
- Login/logout full flow works; invalid credentials show a generic error.

---

### SPRINT 4 — Admin Shell, Uploads & Audit

#### T-401 — Admin layout and dashboard
**Depends on:** T-303
**Tasks**
1. `admin/layout.tsx`: sidebar (grouped as in Section 20 of requirements: Dashboard, Content, Members, Events, Projects, Gallery, Membership, Recognition, Messages, Settings), topbar with user menu, collapsible on mobile.
2. `admin/dashboard`: stat cards (Members, Events, Projects, Applications pending, Unread messages, Galleries) and lists (Recent Applications, Upcoming Events, Recent Projects, Recent Messages).
3. Shared admin components: `DataTable` (sorting, pagination, search), `PageHeader`, `ConfirmDialog`, `StatusBadge`, `EmptyState`, form field wrappers.

**Acceptance Criteria**
- Dashboard numbers match DB counts.

---

#### T-402 — Cloudinary integration
**Depends on:** T-401
**Tasks**
1. User action (list and wait if keys missing): create Cloudinary account, copy `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` into `.env`; add keys to `.env.example`.
2. Install `cloudinary`. `src/lib/cloudinary.ts` with upload (server-side) and delete by `publicId`.
3. Signed upload flow: server action returns a signature; client uploads directly to Cloudinary; server stores `url` + `publicId`.
4. Reusable `ImageUpload` (single/multiple, preview, remove, progress) and `FileUpload` (PDF for CVs/reports) components.
5. Validate type and size (images <= 5 MB: jpg/png/webp; documents <= 10 MB: pdf).
6. Use folders: `rotaract/events`, `rotaract/projects`, `rotaract/gallery`, `rotaract/members`, `rotaract/applications`.

**Acceptance Criteria**
- Upload and delete work end to end; replaced images delete the old asset.

---

#### T-403 — Audit logging
**Depends on:** T-402
**Tasks**
1. `src/lib/audit.ts`: `logAudit({ userId, action, entityType, entityId, before, after })`, never throws (log errors only).
2. Log successful logins.
3. From this ticket onward, every mutation calls `logAudit`.

**Acceptance Criteria**
- Audit rows created for login and a test mutation.

---

### SPRINT 5 — Public Content Pages

#### T-501 — About page and timeline (public + admin)
**Depends on:** T-403
**Tasks**
1. Public `/about`: introduction, history, vision, mission, objectives, values, Rotary/Rotaract affiliation, sponsor club, district, charter date, current rotary year, vertical timeline from `TimelineEntry`.
2. Admin `/admin/content`: edit About content (stored in `SiteSetting.about`) and CRUD timeline entries with reordering.

**Acceptance Criteria**
- Admin edits reflect on the public page after save (revalidation).

---

#### T-502 — Team page and Past Presidents (public + admin)
**Depends on:** T-501
**Tasks**
1. Public `/team`: Board of Directors grid for current rotary year (by `displayOrder`), committees with leads and members, rotary year switcher.
2. Public `/past-presidents`: timeline cards (year, photo, name, message, achievements).
3. Admin `/admin/past-presidents`: CRUD with photo upload.

**Acceptance Criteria**
- Rotary year switcher changes board/committees via `searchParams`.

---

#### T-503 — Contact page and messages
**Depends on:** T-502
**Tasks**
1. Public `/contact`: details from settings, social links, embedded map (optional iframe), contact form (name, email, subject, message) with Zod validation, honeypot field, simple rate limit, success toast.
2. Admin `/admin/messages`: list with filters (UNREAD/READ/ARCHIVED), view detail (auto-mark read), archive, delete.

**Acceptance Criteria**
- Message stored and visible in admin; spam honeypot rejects bots silently.

---

### SPRINT 6 — Events

#### T-601 — Admin event management
**Depends on:** T-503
**Tasks**
1. `/admin/events`: table with filters (status, category, date range), search.
2. Create/edit form: all event fields, poster upload, auto slug (editable, unique), status, featured toggle, registration settings with validation (deadline before start, max participants > 0).
3. Delete with confirmation (also removes poster from Cloudinary).
4. Admin only (`requireAdmin()`). Audit logs.

**Acceptance Criteria**
- CRUD works; invalid inputs show field-level errors.

---

#### T-602 — Public events pages
**Depends on:** T-601
**Tasks**
1. `/events`: tabs Upcoming / Past, category filter, pagination. Exclude DRAFT.
2. `/events/[slug]`: poster, details, registration status, seats remaining, related gallery, `generateMetadata` with OG image.
3. Status display logic: derive "ongoing"/"completed" from dates when admin has not updated status.

**Acceptance Criteria**
- Drafts return 404 publicly.

---

#### T-603 — Event registration
**Depends on:** T-602
**Tasks**
1. Registration form on event detail (name, email, phone, member toggle) when `requiresRegistration` and open.
2. Server action: validate, check deadline, capacity (transaction), duplicate email per event; link `memberId` if email matches an active member.
3. Confirmation screen with registration summary.

**Acceptance Criteria**
- Cannot register after deadline, when full, or twice with the same email.

---

#### T-604 — Admin registrations and attendance
**Depends on:** T-603
**Tasks**
1. `/admin/registrations` and per-event registrations view: list, search, participant count, cancel registration, mark attendance (bulk and single).
2. CSV export route handler `/api/export/registrations/[eventId]` (admin-only).

**Acceptance Criteria**
- CSV opens correctly in Excel (UTF-8 BOM).

---

### SPRINT 7 — Projects & Impact

#### T-701 — Admin project management
**Depends on:** T-604
**Tasks**
1. `/admin/projects`: table with filters (avenue, year, status).
2. Create/edit: all fields, objectives list editor, cover upload, multiple project images with captions/reorder, report PDF upload, lead selection, volunteers (member multi-select with hours), partners (select or create), impact numbers.
3. `/admin/partners`: CRUD with logo.
4. Revalidate `projects` and `home` tags on change.

**Acceptance Criteria**
- Impact stats on the homepage update after editing a project.

---

#### T-702 — Public projects pages
**Depends on:** T-701
**Tasks**
1. `/projects`: filters (avenue, year, status), grid, pagination.
2. `/projects/[slug]`: hero cover, overview, objectives, impact metrics panel, volunteers, partners, image carousel/grid, report download, related gallery, metadata.

**Acceptance Criteria**
- Filters persist in URL; detail metadata correct.

---

### SPRINT 8 — Members & Committees

#### T-801 — Member management
**Depends on:** T-702
**Tasks**
1. `/admin/members`: table with filters (committee, position, rotary year, status), search.
2. Create/edit member: all fields, photo upload, board toggle, display order, social links.
3. `/admin/users`: manage admin accounts — create admin (name, email, temporary password), reset password, activate/deactivate; prevent deactivating the last active admin or yourself.

**Acceptance Criteria**
- Board changes reflect on homepage and `/team`.

---

#### T-802 — Committee management
**Depends on:** T-801
**Tasks**
1. `/admin/committees`: CRUD per rotary year, assign lead, add/remove members with role titles, reorder.
2. "Copy committees to new rotary year" action.

**Acceptance Criteria**
- Committee data shows correctly on `/team`.

---

### SPRINT 9 — Gallery & Announcements

#### T-901 — Gallery
**Depends on:** T-802
**Tasks**
1. Admin `/admin/gallery`: albums CRUD (link event/project, cover), bulk image upload, captions, drag reorder, delete images.
2. Public `/gallery`: album grid with filters (event, project, year); `/gallery/[slug]`: responsive grid with lightbox (keyboard navigable).

**Acceptance Criteria**
- Images lazy-load; lightbox works with keyboard and swipe.

---

#### T-902 — Announcements
**Depends on:** T-901
**Tasks**
1. Admin CRUD with status workflow (DRAFT → PUBLISHED → ARCHIVED), publish date, expiry date, featured image, author set automatically.
2. Public `/announcements` and `/announcements/[slug]`; homepage shows only PUBLISHED and not expired.
3. Content supports simple Markdown rendered safely (sanitize output).

**Acceptance Criteria**
- Expired announcements disappear automatically from public views.

---

### SPRINT 10 — Membership, Recognition & Settings

#### T-1001 — Membership application
**Depends on:** T-902
**Tasks**
1. Public `/join`: benefits section, eligibility, multi-step form (personal, academic, skills/interests, motivation, optional CV upload), Zod validation, honeypot, duplicate check for open applications by email.
2. Admin `/admin/applications`: list with status filters, detail view, notes, status changes.
3. On ACCEPTED: option to create a `Member` (status ACTIVE) prefilled from the application.

**Acceptance Criteria**
- Full workflow SUBMITTED → UNDER_REVIEW → SHORTLISTED → ACCEPTED creates a member.

---

#### T-1002 — Rotaractor of the Month
**Depends on:** T-1001
**Tasks**
1. Admin `/admin/recognition`: CRUD, select member, month/year, achievement, description, photo (defaults to member photo).
2. Public: homepage shows the latest; optional `/recognition` archive page.

**Acceptance Criteria**
- Unique per member per month enforced with friendly error.

---

#### T-1003 — Site settings
**Depends on:** T-1002
**Tasks**
1. Admin `/admin/settings`: club info, hero content, contact details, social links, current rotary year override, homepage section toggles and featured selections.
2. All stored in `SiteSetting` with Zod schemas per key; revalidate `settings` and `home`.

**Acceptance Criteria**
- Changing hero text updates the homepage without redeploy.

---

### SPRINT 11 — Enhancements

#### T-1101 — Search, filtering and pagination audit
**Depends on:** T-1003
**Tasks**
1. Ensure all lists (public and admin) have server-side pagination and URL-driven filters.
2. Add DB indexes for any slow filter found; create migration.
3. Global admin search (members, events, projects, applications).

**Acceptance Criteria**
- No list loads unbounded rows.

---

#### T-1102 — Email notifications
**Depends on:** T-1101
**Tasks**
1. User action: create Resend account, verify domain or use test sender, add `RESEND_API_KEY`, `EMAIL_FROM` to `.env`.
2. Emails: event registration confirmation, application received, application status change, contact message acknowledgement, admin notification for new applications/messages.
3. Emails are sent after DB commit and failures never break the user action.

**Acceptance Criteria**
- Emails received in test inbox.

---

#### T-1103 — Analytics and reports
**Depends on:** T-1102
**Tasks**
1. Admin analytics page: charts (recharts) for events per month, registrations and attendance rate, projects by avenue, beneficiaries over time, membership growth.
2. Annual report page per rotary year (printable), summarizing projects, events, impact, board.
3. CSV exports: members, projects, applications.

**Acceptance Criteria**
- Numbers match DB queries; print layout clean.

---

#### T-1104 — Audit log viewer
**Depends on:** T-1103
**Tasks**
1. `/admin/audit-logs` (ADMIN): filter by user, entity type, action, date; view before/after JSON diff.

**Acceptance Criteria**
- Logs present for all mutation types.

---

#### T-1105 — SEO completion
**Depends on:** T-1104
**Tasks**
1. `app/sitemap.ts` including dynamic events, projects, galleries, announcements.
2. `app/robots.ts` disallowing `/admin`, `/login`, `/api`.
3. `generateMetadata` on every public route; dynamic OG images for events/projects (`opengraph-image.tsx`).
4. JSON-LD: `Organization` on home, `Event` on event pages.

**Acceptance Criteria**
- `/sitemap.xml` and `/robots.txt` valid.

---

### SPRINT 12 — Quality & Deployment

#### T-1201 — Security and error handling hardening
**Depends on:** T-1105
**Tasks**
1. Review every server action and route handler for: Zod validation, `requireAdmin()` on admin mutations, rate limiting/honeypot on public mutations, audit log.
2. Security headers in `next.config` (CSP allowing Cloudinary, X-Frame-Options, Referrer-Policy, Permissions-Policy).
3. `error.tsx` boundaries for public and admin segments; consistent action result type `{ ok, data?, error? }`.
4. Ensure no secrets reach the client bundle.

**Acceptance Criteria**
- Checklist of all actions with status reported to the user.

---

#### T-1202 — Testing
**Depends on:** T-1201
**Tasks**
1. Vitest for unit tests: admin auth guard, rotary year util, Zod schemas, impact stat calculation.
2. Playwright E2E: homepage renders, login, create event, register for event, submit application, contact form.
3. Add `test` and `test:e2e` scripts.

**Acceptance Criteria**
- All tests pass locally.

---

#### T-1203 — Deployment to Vercel
**Depends on:** T-1202
**Tasks**
1. User action list (then wait):
   1. Push repository to GitHub.
   2. Import project in Vercel.
   3. Add environment variables: `DATABASE_URL`, `DIRECT_URL`, `AUTH_SECRET`, `AUTH_URL` (production URL), `CLOUDINARY_*`, `RESEND_API_KEY`, `EMAIL_FROM`, `SEED_ADMIN_*` (only if seeding production).
   4. Use the Neon `main` branch for production and a separate branch for preview deployments (optionally via the Neon Vercel integration).
2. Set build command: `prisma generate && prisma migrate deploy && next build` (or via `vercel-build` script).
3. Verify production: login, uploads, emails, sitemap.
4. Write `README.md`: overview, stack, local setup, env vars, scripts, deployment, actors (Visitor, Admin).

**Acceptance Criteria**
- Production URL works end to end.
- README complete.

---

## 7. ENVIRONMENT VARIABLES (FINAL `.env.example`)

```env
# Database (Neon)
DATABASE_URL=
DIRECT_URL=

# Auth.js
AUTH_SECRET=
AUTH_URL=http://localhost:3000

# Seed
SEED_ADMIN_EMAIL=
SEED_ADMIN_PASSWORD=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

# Email (Resend)
RESEND_API_KEY=
EMAIL_FROM=

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 8. COMMON COMMANDS

```bash
npm run dev            # start dev server
npm run build          # production build
npm run lint           # lint
npm run format         # prettier
npm run db:migrate     # prisma migrate dev
npm run db:deploy      # prisma migrate deploy
npm run db:seed        # seed database
npm run db:studio      # prisma studio
npm run db:reset       # reset dev database (destructive, ask first)
npm run test           # unit tests
npm run test:e2e       # e2e tests
```

Never run `db:reset` or destructive migrations without explicit user confirmation.

---

## 9. PROGRESS TRACKER

Claude Code updates this section after each ticket.

| Ticket | Title | Status | Date |
|---|---|---|---|
| T-001 | Initialize Next.js project | [x] | 2026-09-29 |
| T-002 | Tooling, UI library and base structure | [x] | 2026-09-29 |
| T-100 | Design analysis (DESIGN_BRIEF) — REVIEW GATE | [x] | 2026-09-29 |
| T-101 | Design system and theme | [x] | 2026-09-29 |
| T-102 | Public layout: Navbar and Footer | [x] | 2026-09-29 |
| T-103 | Hero section | [x] | 2026-09-29 |
| T-104 | About preview and Impact statistics | [x] | 2026-09-29 |
| T-105 | Upcoming events and Featured projects | [x] | 2026-09-29 |
| T-106 | Board, Recognition, Gallery, Announcements, CTA | [x] | 2026-09-29 |
| T-107 | Landing polish, SEO, a11y — REVIEW GATE | [x] | 2026-09-29 |
| T-201 | Neon database setup | [x] | 2026-09-30 |
| T-202 | Install and configure Prisma | [x] | 2026-09-30 |
| T-203 | Implement full Prisma schema | [x] | 2026-09-30 |
| T-204 | Seed script | [x] | 2026-09-30 |
| T-205 | Data access layer | [x] | 2026-09-30 |
| T-206 | Connect landing page to database | [x] | 2026-09-30 |
| T-301 | Auth.js setup | [x] | 2026-09-30 |
| T-302 | Admin route protection | [x] | 2026-09-30 |
| T-303 | Login page and session UI | [x] | 2026-09-30 |
| T-401 | Admin layout and dashboard | [ ] | |
| T-402 | Cloudinary integration | [ ] | |
| T-403 | Audit logging | [ ] | |
| T-501 | About page and timeline | [ ] | |
| T-502 | Team page and Past Presidents | [ ] | |
| T-503 | Contact page and messages | [ ] | |
| T-601 | Admin event management | [ ] | |
| T-602 | Public events pages | [ ] | |
| T-603 | Event registration | [ ] | |
| T-604 | Admin registrations and attendance | [ ] | |
| T-701 | Admin project management | [ ] | |
| T-702 | Public projects pages | [ ] | |
| T-801 | Member management | [ ] | |
| T-802 | Committee management | [ ] | |
| T-901 | Gallery | [ ] | |
| T-902 | Announcements | [ ] | |
| T-1001 | Membership application | [ ] | |
| T-1002 | Rotaractor of the Month | [ ] | |
| T-1003 | Site settings | [ ] | |
| T-1101 | Search, filtering, pagination audit | [ ] | |
| T-1102 | Email notifications | [ ] | |
| T-1103 | Analytics and reports | [ ] | |
| T-1104 | Audit log viewer | [ ] | |
| T-1105 | SEO completion | [ ] | |
| T-1201 | Security and error handling hardening | [ ] | |
| T-1202 | Testing | [ ] | |
| T-1203 | Deployment to Vercel | [ ] | |

---

## 10. FIRST INSTRUCTION FOR CLAUDE CODE

When this file is first read: summarize the plan in no more than 8 lines, confirm the Working Protocol, then start **T-001** only. Stop after T-001 and wait for "continue".
