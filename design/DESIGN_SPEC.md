# DESIGN SPEC (T-100)

Source: `design/reference/video.mp4` (40 s screen recording, 1114x696, one continuous scroll of a studio site). Frames were reviewed at 1 fps. The reference brand name, copy and photos are NOT reused. Only structure, type, spacing, colour treatment and motion are.

Estimates below come from a low-resolution recording; values marked ~ are approximate and should be tuned by eye against the frames.

---

## 1. Overall feel

Quiet, editorial, gallery-like. Almost entirely white. Small type, large empty areas, one big headline per section. Content is revealed through motion (masks, parallax, drifting shapes) instead of boxes and colour. One dark section (footer) closes the page.

---

## 2. Layout

| Aspect | Value |
|---|---|
| Max width | Full bleed for imagery; text and cards sit in a ~1200-1280 px container with ~24-32 px side padding |
| Grid | 12 columns, 24 px gutters (4-up rows for cards, 2-up for project cards) |
| Section rhythm | ~160-220 px vertical padding on desktop, ~96 px mobile; generous whitespace is the main separator (no dividers or bands) |
| Alignment | Section label + headline centred (Service, Selected Spaces, Process, Materials); Philosophy and Testimonials are left-aligned; hero is centred |
| Global chrome | Top bar: wordmark left, two small link columns right (stacked, 2-3 links each), not a horizontal menu. Fixed vertical black tab on the left edge, rotated text ("Start a space"). |

### Section order in the reference
1. Hero: two-line centred headline over an organic-masked photo, one-line subtitle, cursor-following blob, left tab.
2. Image strip: horizontal row of 4-5 rounded photos, bleeding off both edges, moves horizontally.
3. [PHILOSOPHY]: left headline, right cluster of small circular thumbnails, two small text blocks (Mission / Vision) offset lower.
4. Full-bleed photo with hotspots: ring markers over objects; clicking or hovering one opens a frosted-glass info card.
5. [SERVICE]: centred headline, 4 outlined polygons each with a black blob glyph, title, one-line caption.
6. [SELECTED SPACES]: centred headline, two large photo cards side by side with frosted-glass info panels.
7. [PROCESS]: centred headline, 5 numbered steps arranged on rays from a red origin dot, images travel along the rays.
8. [MATERIALS & OBJECTS]: centred 3-line headline, 4 cards with a folded corner showing a texture swatch.
9. [TESTIMONIALS]: large italic quote mark, quote, avatar row; quotes cycle.
10. Footer: black, wordmark + tagline, 4 link columns, newsletter field, copyright + email.

---

## 3. Typography

Family: a neo-grotesque sans, closest match **Inter** (already loaded via `next/font`). Keep Inter for display and body. Drop Plus Jakarta Sans for public pages (the reference uses one family).

| Level | Style | Fluid size | Weight | Tracking | Line-height |
|---|---|---|---|---|---|
| Hero display | Sentence case, 2 lines | `clamp(2.5rem, 6vw, 5rem)` | 500 | -0.03em | 1.05 |
| Section headline (h2) | Sentence case, 1-3 lines, max ~22 ch wide | `clamp(1.5rem, 2.6vw, 2.25rem)` | 400-500 | -0.02em | 1.15 |
| Card title (h3) | Sentence case | `clamp(1.125rem, 1.6vw, 1.5rem)` | 500 | -0.01em | 1.15 |
| Quote | Sentence case | `clamp(1.25rem, 2vw, 1.75rem)` | 400 | -0.01em | 1.3 |
| Body / caption | Sentence case | 0.75-0.875rem (12-14 px) | 400 | 0 | 1.5 |
| Label | `[UPPERCASE]` in square brackets | 0.6875rem (11 px) | 400 | 0.02em | 1 |
| Card meta rows | small, key left / value right, value at ~60% opacity | 0.6875rem | 400 | 0 | 1.6 |
| Footer group heading | `#Explore` style, muted | 0.75rem | 400 | 0 | 1 |

Rules: no bold display weights, no all-caps headlines. Headlines are quiet but large relative to the surrounding empty space. Quote mark is a heavy italic double-prime glyph (~48-64 px, weight 800, italic).

---

## 4. Colour

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background |
| `--fg` | `#0F0F0F` | Text, glyphs, blob shapes |
| `--muted` | `#6B6B6B` (and 60% opacity of fg) | Captions, meta values, card body text |
| `--line` | `#E6E6E6` | Hairlines (rare on light) |
| `--dark` | `#111111` | Footer background |
| `--dark-line` | `rgba(255,255,255,0.12)` | Footer dividers |
| `--dark-fg` / `--dark-muted` | `#FFFFFF` / `rgba(255,255,255,0.55)` | Footer text |
| `--glass` | `rgba(60,60,60,0.35)` + `backdrop-filter: blur(18px)` | Frosted info cards over photos |
| `--accent` | Rotaract cranberry `#D41367` | Process lines and origin dot (reference uses red/pink), hover states, focus ring |
| `--accent-2` | Rotary royal blue `#17458F` | Hotspot ring highlight, polygon stroke gradient start |
| `--accent-3` | Rotary gold `#F7A81B` | Polygon stroke gradient end, small highlights |

Brand mapping: the reference is monochrome plus thin coloured strokes, so the brand colours stay OUT of large surfaces. They appear only as (a) the Process lines/dot in cranberry, (b) the gradient hairline on the polygon outlines (blue -> cranberry -> gold), (c) focus/hover states and the primary button hover. The existing filled gradient hero and gradient Membership band are removed.

---

## 5. Shape and detail

- Radius: images and cards `8px`; avatars and thumbnails fully round; buttons `9999px` (white pill on dark, black pill on light).
- Borders/shadows: none on light sections. Materials cards use a `1px` black top and left border only. No drop shadows.
- Image treatment: full-colour photos, no filters. Hero photo is clipped by an **organic ink-splat mask** (rough, irregular edge, ~40-60 points) rather than a rectangle. Grain is not used.
- Glass card: radius 8, `backdrop-filter: blur(18px)`, dark translucent fill, white text, title 24 px, small arrow icon top-right, meta rows key/value.
- Polygon outlines: 1px stroke with multi-colour gradient along the path; glyph is a solid black organic blob centred inside.
- Materials card: white card, folded/clipped top-right corner (diagonal cut) exposing a vertical texture strip on the right edge.
- Icons: minimal line icons only (arrow, small dot markers). No icon tiles.

---

## 6. Motion inventory

Global easing: `ease.out = cubic-bezier(0.22, 1, 0.36, 1)`; `ease.inOut = cubic-bezier(0.65, 0, 0.35, 1)`. Durations: micro 200 ms, standard 600-800 ms, hero 1200 ms.

| # | Element | Trigger | What changes | Duration / easing | Stagger | Scrub/pin |
|---|---|---|---|---|---|---|
| 1 | Hero photo mask | Load | `clip-path`/SVG mask grows from a small blob to full splat; photo scales 1.15 -> 1 | 1200 ms, out | - | No |
| 2 | Hero headline | Load | Line-by-line reveal (mask up, y 100% -> 0) | 800 ms, out | 120 ms per line | No |
| 3 | Hero subtitle, nav, side tab | Load | Fade + y 12 px | 600 ms, out | 80 ms | No |
| 4 | Cursor blob | Pointer move (desktop) | Small ink-blob with the same photo texture follows the cursor with lag; morphs shape; trails and shrinks | spring, lag ~0.15 | - | No |
| 5 | Hero -> strip | Scroll | Headline and blob photo move up slower than the page (parallax ~0.85x) | linear scrub | - | Scrub |
| 6 | Image strip | Scroll | Row translates horizontally in response to vertical scroll; images ~4 visible | linear scrub | - | Scrub (not pinned) |
| 7 | Philosophy text | In view | Line reveal for headline; fade for mission/vision | 700 ms, out | 100 ms | No |
| 8 | Floating circles | Continuous + scroll | Small circular thumbnails drift/orbit slowly and shift position as the section scrolls | 6-10 s loop, inOut | random offsets | Partly scrubbed |
| 9 | Hotspot image | Scroll | Full-bleed photo expands from inset rounded box to full width (scale + radius), stays pinned briefly | scrub | - | Pinned ~1 viewport |
| 10 | Hotspots | Load into view | Ring markers pop in (scale 0 -> 1); pulse ring loop | 500 ms, out; pulse 2 s | 60 ms | No |
| 11 | Hotspot glass card | Hover/click | Card fades + scales 0.96 -> 1 with blur-in; other cards close | 350 ms, out | - | No |
| 12 | Polygons | In view | Outline draws (stroke-dashoffset), glyph scales in; slow idle rotation/morph | 900 ms, out | 120 ms | No |
| 13 | Service block | Scroll | Whole row rises with slight parallax between items | scrub | - | Scrub |
| 14 | Selected-spaces cards | In view | Cards rise, image scale 1.1 -> 1; glass panel blurs in after image | 900 ms / 600 ms | 150 ms | No |
| 15 | Card hover | Hover | Image scale 1.03, glass panel brightens, arrow nudges up-right | 300 ms, out | - | No |
| 16 | Process rays | Scroll | Lines draw from origin dot outward; step labels fade in; thumbnails travel along each ray toward their node | scrub | 5 steps sequential | Pinned ~1.5 viewports |
| 17 | Materials cards | In view | Cards rise; texture strip slides out from the fold | 700 ms, out | 100 ms | No |
| 18 | Testimonial quote | Auto (~6 s) / avatar click | Crossfade + y 8 px; active avatar expands to show name and place, others stay round | 500 ms, out | - | No |
| 19 | Footer | Scroll | Footer revealed as content lifts away (curtain, sticky-bottom); columns fade in | 600 ms | 60 ms | No |
| 20 | Buttons | Hover | Pill fills/inverts; label swaps with a vertical roll | 250 ms | - | No |

Implementation notes: Motion for React for 1-3, 7, 10-11, 14-15, 17-18, 20; GSAP ScrollTrigger for 5, 6, 9, 13, 16, 19; a small custom canvas/SVG script for 4 and 8. Lenis smooth scroll is used (the reference scroll is visibly eased). Reduced motion, mobile (< 768 px) and no-JS behaviours follow DESIGN_BRIEF Section 4: on mobile the strip becomes a native swipe row, hotspot section and Process become static stacked layouts, cursor blob is disabled.

---

## 7. Section mapping to our homepage

| Reference section | Our section | Notes |
|---|---|---|
| Nav + left vertical tab | Navbar | Wordmark "RAC Kathmandu Height" left, two stacked link columns right; vertical "Join us" tab on the left edge linking to `/join` |
| 1. Hero | Hero | Headline: theme once supplied, until then "Service Above Self"; sub-line from content brief intro. Photo in blob mask uses a club photo; placeholder photo until `content/` has one |
| 2. Image strip | GalleryPreview | Strip of album covers / Instagram-post photos; hidden if no images (per content brief) |
| 3. Philosophy | AboutPreview | Label `[ABOUT]`; headline about service, leadership, fellowship; Mission and Vision as the two small text blocks; floating circles show avenue-of-service thumbnails |
| 4. Hotspot photo | Dropped for now | Needs one strong club photo with real annotations. Proposed later use: a "Where we serve" photo with hotspots for projects (Project Jyoti in Kavrepalanchok) |
| 5. Service (polygons) | ImpactStats (when data exists) and a new "Four Avenues of Service" block | Polygons hold avenue names (Club, Community, Professional Development, International) using generic Rotaract descriptions; stats reuse the same 4-column layout and are hidden when there are no numbers |
| 6. Selected Spaces | FeaturedProjects | Two-up large cards; glass panel shows Avenue, Location, Partners, Date (Project Jyoti first) |
| 7. Process | UpcomingEvents | Best fit is a timeline on rays: upcoming events as nodes with date labels. With no events, show the empty state. Alternative: "How to join" steps (needs club-supplied process, so not used) |
| 8. Materials cards | LatestAnnouncements | Folded-corner cards with the announcement image as the edge strip; hidden if none |
| 9. Testimonials | RotaractorOfTheMonth | Quote-style: large mark, achievement text, member avatar and name; hidden if empty |
| (no match) | BoardPreview | Use the image-strip pattern: horizontally scrolling rounded portraits with name + position beneath |
| Hero pattern reused | MembershipCTA | Large centred headline, small sub-line, black pill button; no gradient band |
| 10. Footer | Footer | Black footer with wordmark, tagline, columns #Explore, #Projects, #Connect, #Follow (Instagram) and contact; newsletter is dropped (no email backend until Sprint 10+) |

---

## 8. Open questions

1. **Photos:** the hero blob mask and strips need real club photos. Should I proceed with neutral placeholder photos until you add them to `content/`, or wait?
2. **Existing build:** T-101 to T-107 are already built in the current gradient/brand style. This redesign replaces the visual layer of those sections (content and data stay). OK to rework them in place instead of starting over?
3. **Cranberry usage:** confirm brand colours stay limited to thin accents (Process lines, polygon strokes, hover/focus) so the reference's white mood is kept.
4. **Hotspot section (4):** keep dropped for now, or do you want it later with a real photo?
5. **Newsletter:** dropped from the footer; want a placeholder field anyway?
6. **Lenis smooth scroll:** the reference scroll feels eased. OK to add it (disabled under reduced motion)?
