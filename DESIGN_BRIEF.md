# DESIGN BRIEF — Visual Design & Motion Reference

> Companion to `PROJECT_MASTER.md` and `CONTENT_BRIEF.md`.
> Reference shot: https://dribbble.com/shots/27768798-N-RRA-Website-animation
> This file controls how the site **looks and moves**. `CONTENT_BRIEF.md` controls what it **says**. `PROJECT_MASTER.md` controls **process**.
> Where this file conflicts with PROJECT_MASTER Section 3 (Design Direction), this file wins.

---

## 1. GOAL

Recreate the layout system, typography, spacing, color treatment and animation style of the reference shot for the Rotaract Club of Kathmandu Height website. The reference defines the visual language. Our club content, logo and photos replace everything in it.

Do not copy the reference's logo, brand name, text or photographs. Replicate structure, composition, typographic scale, motion and interaction patterns.

---

## 2. REFERENCE MATERIAL (PROVIDED BY THE USER)

Dribbble pages render with JavaScript and cannot be fetched, so the user saves reference frames locally:

```text
design/
└── reference/
    ├── video.mp4                  # optional: download of the shot video
    ├── 01-hero.png                # first frame / hero at rest
    ├── 02-hero-animation-mid.png  # mid-transition frames of the intro animation
    ├── 03-nav-open.png            # menu state if shown
    ├── 04-section-*.png           # every distinct section, in scroll order
    ├── 05-hover-*.png             # hover/interaction states if visible
    ├── 06-mobile-*.png            # mobile frames if shown
    └── notes.md                   # user's own notes on motion (see template below)
```

Guidance for the user when capturing:
- Pause the video every time the layout changes and screenshot at full resolution.
- Capture at least 2–3 frames per animation: start, middle, end.
- Screenshot the shot description text on Dribbble into `notes.md` too.

`notes.md` template:
```md
## Overall feel
(e.g. dark, editorial, large serif headings, smooth scroll, slow easing)

## Intro / loader animation
(what appears first, what moves, how long it feels)

## Hero
(layout, what animates on load, what happens on scroll)

## Scroll behaviour
(pinned sections, parallax, horizontal scroll, text reveal line by line, image scale on scroll...)

## Hover interactions
(buttons, cards, cursor effects, image reveals)

## Page transitions
(if shown)

## Things I want to change or skip
```

If `design/reference/` is empty, Claude Code must stop and ask the user to add frames. It must not guess the design from the shot title.

---

## 3. NEW TICKET: T-100 — Design analysis (runs before T-101)

**Depends on:** T-002
**Tasks**
1. View every image in `design/reference/` and read `notes.md`.
2. If `ffmpeg` is available and `video.mp4` exists, extract frames (`ffmpeg -i video.mp4 -vf fps=2 design/reference/frames/%03d.png`) and view them.
3. Write `design/DESIGN_SPEC.md` containing:
   - **Layout**: grid (columns, gutters, max width), section order, section heights, alignment patterns, use of whitespace.
   - **Typography**: font style per level (display, h1–h4, body, label), closest Google Fonts match for each, sizes as a fluid `clamp()` scale, weights, letter-spacing, line-height, text transforms.
   - **Color**: background, surface, text, muted, border, accent tokens estimated from the frames; how the Rotaract brand colors (cranberry `#D41367`, royal blue `#17458F`, gold `#F7A81B`) map into that palette without breaking the reference mood.
   - **Shape & detail**: radius, borders, shadows, image treatments (grayscale, overlays, masks, aspect ratios), grain/noise, dividers, iconography.
   - **Motion inventory**: a table with one row per animation — element, trigger (load / scroll / hover / click), what changes (opacity, y, scale, clip-path, blur, letter split), duration, easing, stagger, whether pinned/scrubbed.
   - **Section mapping**: each reference section mapped to our homepage section (Hero, AboutPreview, ImpactStats, UpcomingEvents, FeaturedProjects, BoardPreview, RotaractorOfTheMonth, LatestAnnouncements, GalleryPreview, MembershipCTA, Footer). Reference sections with no match get a proposed use or are dropped. Our sections with no reference match get a design derived from the closest reference pattern.
   - **Open questions** for the user.
4. Stop and report with the standard ticket template. Treat as a **REVIEW GATE**: the user approves `DESIGN_SPEC.md` before T-101 starts.

**Acceptance Criteria**
- Every motion seen in the reference appears in the motion inventory.
- Every homepage section has a design mapping.

Add T-100 to the Progress Tracker in `PROJECT_MASTER.md` above T-101.

---

## 4. MOTION IMPLEMENTATION STANDARDS

Install during T-101 (check versions first):

| Need | Library |
|---|---|
| Component animations, hover, layout, mount/unmount | `motion` (Motion for React, formerly Framer Motion) |
| Complex scroll-driven timelines, pinning, scrubbing | `gsap` + `ScrollTrigger` (`@gsap/react` for `useGSAP`) |
| Smooth scrolling (only if the reference clearly uses it) | `lenis` |
| Text splitting (line/word/char reveals) | GSAP `SplitText` or a small custom splitter |

Rules:
1. Use Motion for simple enter/hover animations; use GSAP only for scroll timelines, pinning and scrubbing. Don't mix both on the same element.
2. Create shared building blocks in `src/components/motion/`:
   - `Reveal` (fade/slide in on view, configurable direction, delay, stagger)
   - `SplitTextReveal` (line or word reveal with mask)
   - `ParallaxImage` (scroll-linked translate/scale)
   - `MagneticButton` / hover effects if the reference has them
   - `Marquee` if the reference has scrolling text or logos
   - `PageLoader` / intro sequence if the reference has one (shown once per session, skippable, max ~2.5 s)
   - `SmoothScroll` provider (Lenis) if used
3. Centralize durations and easings in `src/lib/motion.ts` (e.g. `ease.out = [0.22, 1, 0.36, 1]`) so the whole site shares one rhythm.
4. Animate only `transform`, `opacity`, `clip-path` and `filter`. Never animate layout properties like `width`, `height`, `top`.
5. All animation components are client components; keep page sections as server components that wrap them.
6. **Reduced motion**: respect `prefers-reduced-motion` everywhere: disable Lenis, pinning, parallax and split text; keep simple opacity fades at most.
7. Content must be visible and readable without JavaScript (no content that starts at `opacity: 0` in server HTML without a fallback).
8. Mobile: simplify heavy scroll effects below 768px (no pinning or horizontal scroll unless the reference shows it on mobile).
9. Performance budget: no layout shift from animations (CLS < 0.1), no jank. Test on a throttled CPU in DevTools. Lighthouse Performance >= 85 with animations on.
10. Use `next/image` for every animated image; set `sizes` correctly.

---

## 5. CHANGES TO EXISTING TICKETS

- **T-101**: use the typography, color tokens, spacing scale and motion utilities from `design/DESIGN_SPEC.md` instead of PROJECT_MASTER Section 3 defaults. Build the `src/components/motion/` primitives here.
- **T-102–T-106**: each section follows its mapping in `DESIGN_SPEC.md`, including its motion. After each section, compare it side by side with the matching reference frame and list differences in the ticket report.
- **T-107**: add a motion QA pass: reduced motion, mobile, throttled CPU, no-JS rendering. Take screenshots of every section (Playwright if available) and save them to `design/implementation/` for comparison with `design/reference/`.
- **Admin dashboard (Sprint 4+)**: use the same tokens and fonts, but keep animation minimal (subtle fades only). The admin UI prioritizes speed and clarity.
- **Other public pages (Sprint 5+)**: reuse the same section patterns and motion primitives so every page matches the homepage.

---

## 6. FIDELITY CHECKLIST (EVERY SPRINT 1 TICKET)

- [ ] Layout proportions match the reference frame at 1440px width.
- [ ] Type scale, weights and spacing match.
- [ ] Colors match the approved palette tokens.
- [ ] Motion timing and easing feel matches the motion inventory.
- [ ] Mobile version adapted cleanly.
- [ ] Reduced-motion version works.
- [ ] Only our club content, logo and photos appear (nothing from the reference brand).
