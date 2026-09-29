# CONTENT BRIEF — Rotaract Club of Kathmandu Height

> Companion to `PROJECT_MASTER.md`. Claude Code must read this file before T-101 and use it as the only source for all site content: copy, mock data (Sprint 1), seed data (T-204) and page text.
> Official Instagram: https://www.instagram.com/rackathmanduheight/ (handle `@rackathmanduheight`)

---

## 1. RULES FOR CLAUDE CODE

1. **Never invent real-world facts.** Do not make up names of people, dates, numbers, partners, or project results. Use only:
   - Section 3 (verified facts),
   - Section 4 (filled in by the user from Instagram),
   - files inside `content/instagram/` (Section 5).
2. Anything not provided must use an obvious placeholder in the form `[[TODO: description]]` and must be listed in `content/TODO_CONTENT.md` so the user can fill it. Placeholder people use names like `[[TODO: President name]]`, never realistic fake names.
3. Generic Rotaract/Rotary explanatory text (what Rotaract is, avenues of service, age range, etc.) may be written freely, since it is general knowledge, not a club-specific claim.
4. Items marked **(verify)** are likely but unconfirmed. Use them but add them to `content/TODO_CONTENT.md` under "Needs confirmation".
5. Instagram captions are source material, not final copy. Rewrite them into clean website English: remove hashtags, emojis, @mentions and "link in bio" text. Keep facts (dates, venues, partners, numbers) unchanged.
6. If Nepali text appears in captions, translate to English for the site and keep the original Nepali project names where they are proper names (e.g. "Project Jyoti").
7. Before T-101, output a short **Content Inventory** (what was found, what is missing) and stop for the user to review, as an extra step within T-101.

---

## 2. CLUB IDENTITY

| Field | Value |
|---|---|
| Full name | Rotaract Club of Kathmandu Height |
| Short name | RAC Kathmandu Height |
| Instagram | `@rackathmanduheight` |
| Rotary International District | 3292 (Nepal and Bhutan) |
| Sponsor Rotary club | Rotary Club of Kathmandu Height **(verify)** |
| City | Kathmandu, Nepal |
| Current Rotary year | 2026-27 |

Put these values in `src/config/site.ts` (and later `SiteSetting`).

---

## 3. VERIFIED PUBLIC FACTS

Use these directly as content.

1. **Project Jyoti (school vision screening), 2026**
   - School-level eye/vision screening programme in Kavrepalanchok district, reported in July 2026.
   - Aim: protect children's eye health, identify vision problems early, improve access to treatment and support learning.
   - Jointly supported by: Rotary Club of Kathmandu Height, Rotary Club of Nanaimo Daybreak (Canada), ADSon, Rotary Club of Patan, Rotaract Club of Kathmandu Height, Rotaract Club of Kathmandu Midtown, and Rose International Fund for Children.
   - Use as a featured project. Avenue: Community Service. Mark international collaboration (Canada).
   - Beneficiary numbers, number of schools, exact date: `[[TODO]]` unless present in Instagram content.

2. **Presidents' Night 2026 (Pokhara) — Co-host**
   - The club was announced as a co-host of Rotaract District 3292 Presidents' Night 2026 in Pokhara, an event for club presidents, district council members and the training team.
   - Use as an event/achievement and in the timeline. Exact date: `[[TODO]]`.

3. **Sponsor club context (verify relationship before publishing)**
   - Rotary Club of Kathmandu Height was chartered on 3 August 2020 in RI District 3292.
   - Use only on the About page under "Our Sponsor Club" once confirmed.
   - Do not attribute the sponsor club's own projects to the Rotaract club.

---

## 4. TO BE FILLED BY THE USER FROM INSTAGRAM

Fill in everything you can from the profile before running T-101. Leave blank what you don't know.

### 4.1 Profile
```yaml
bio_text: ""                # exact Instagram bio
tagline_or_theme: ""        # club or rotary-year theme if in bio/posts
charter_date: ""            # Rotaract club charter date
email: ""
phone: ""
address_or_meeting_place: ""
meeting_schedule: ""        # e.g. "Every alternate Saturday, 4 PM"
facebook: ""
linkedin: ""
other_links: ""             # link-in-bio items
logo_file: "content/brand/logo.png"
```

### 4.2 Brand
```yaml
primary_color: ""           # from logo/posts; default Rotaract cranberry #D41367
secondary_color: ""
visual_style_notes: ""      # e.g. "dark backgrounds, gold accents, bold sans headings"
```
Claude Code: if colors are given, override the defaults in PROJECT_MASTER Section 3.

### 4.3 Board of Directors 2026-27
| Position | Name | Photo file | Short bio / profession |
|---|---|---|---|
| President | | | |
| Immediate Past President | | | |
| Vice President | | | |
| Secretary | | | |
| Joint Secretary | | | |
| Treasurer | | | |
| Club Service Director | | | |
| Community Service Director | | | |
| Professional Development Director | | | |
| International Service Director | | | |
| Public Image Director | | | |
| Membership Director | | | |
| Sergeant-at-Arms | | | |

### 4.4 Past Presidents
| Rotary year | Name | Photo file | Key achievements |
|---|---|---|---|
| | | | |

### 4.5 Rotaractor of the Month (latest)
```yaml
name: ""
month: ""
achievement: ""
photo: ""
```

---

## 5. INSTAGRAM POST EXPORT FORMAT

Save important posts as individual files so Claude Code can turn them into events, projects, galleries and announcements.

```text
content/
├── brand/
│   └── logo.png
├── people/
│   └── <firstname-lastname>.jpg
├── instagram/
│   ├── 2026-07-20-project-jyoti/
│   │   ├── post.md
│   │   ├── 01.jpg
│   │   └── 02.jpg
│   └── 2026-08-xx-presidents-night/
│       ├── post.md
│       └── 01.jpg
└── TODO_CONTENT.md          # generated by Claude Code
```

`post.md` template (copy for each post):
```md
---
date: 2026-07-20
type: project          # project | event | announcement | recognition | installation | fellowship | other
title: Project Jyoti
avenue: COMMUNITY_SERVICE   # CLUB_SERVICE | COMMUNITY_SERVICE | PROFESSIONAL_DEVELOPMENT | INTERNATIONAL_SERVICE
venue: ""
partners: []
beneficiaries: 0
volunteers: 0
volunteer_hours: 0
instagram_url: ""
---

<paste the original caption here>
```

Claude Code mapping rules:
- `type: project` → `Project` (+ `Gallery` with the images, linked to the project)
- `type: event | installation | fellowship` → `Event` (status COMPLETED if date is past, UPCOMING if future) + `Gallery`
- `type: announcement` → `Announcement` (PUBLISHED)
- `type: recognition` → `Recognition`
- Images: copy into `public/content/...` for Sprint 1 mock data; upload to Cloudinary during seed once T-402 exists (until then, use local paths).
- Impact stats on the homepage come only from numbers in `post.md` files. If none are given, hide the stats section rather than show made-up numbers.

---

## 6. PAGE-BY-PAGE CONTENT PLAN

| Page | Content source | Notes |
|---|---|---|
| Home — Hero | Club name, rotary year 2026-27, theme (4.1), bio rewritten as a 1–2 sentence intro | CTA: "Explore Our Impact", "Join Us" |
| Home — About preview | Bio + general Rotaract mission | Vision/Mission from 4.1 if available, else generic `[[TODO]]`-marked draft |
| Home — Impact stats | Sum of `post.md` numbers | Hide if all zero |
| Home — Upcoming events | Future-dated `event` posts | Empty state if none: "New events coming soon. Follow us on Instagram." with link |
| Home — Featured projects | Project Jyoti + other `project` posts | Project Jyoti first |
| Home — Board preview | 4.3 | Placeholders if empty |
| Home — Rotaractor of the Month | 4.5 | Hide section if empty |
| Home — Gallery preview | Latest 6 post folders with images | |
| Home — Instagram strip | Link to `@rackathmanduheight` with the latest post images | Static images, no Instagram API |
| About | Bio, history, District 3292, sponsor club (verify), charter date, timeline | Timeline includes Project Jyoti and Presidents' Night 2026 co-host |
| Team | 4.3 + committees by avenue | |
| Past Presidents | 4.4 | |
| Events | All `event` posts | |
| Projects | All `project` posts | Detail page lists partners and international collaboration |
| Gallery | One album per post folder | |
| Join Us | General Rotaract eligibility (18+ young adults, youth-led service and leadership), benefits, meeting schedule (4.1) | |
| Contact | 4.1 contact fields, Instagram link, contact form | |

---

## 7. VOICE AND TONE

- Youthful, energetic, professional; "we" voice.
- Short sentences, active verbs, focus on community impact and fellowship.
- Motto references allowed: "Service Above Self", "Fellowship Through Service".
- No emojis, no hashtags, no exaggerated claims.
- Use Nepal context naturally (Kathmandu, Kavrepalanchok, NPR currency).

---

## 8. OUTPUT CHECKLIST FOR CLAUDE CODE

- [ ] Content Inventory shown to the user before building T-101.
- [ ] `src/config/site.ts` populated from Sections 2 and 4.1.
- [ ] `src/data/mock.ts` built only from this brief and `content/`.
- [ ] Every missing item appears as `[[TODO: ...]]` and in `content/TODO_CONTENT.md`.
- [ ] No fabricated people, numbers or dates anywhere.
- [ ] The same content is reused for the T-204 seed.
