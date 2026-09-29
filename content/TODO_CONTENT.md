# Content still needed

Source of truth: CONTENT_BRIEF.md. Fill Section 4 of the brief and add files under `content/`, then tell Claude Code to re-run the content pass.

## Needs confirmation
- Sponsor club relationship: Rotary Club of Kathmandu Height (charter date 3 August 2020, RI District 3292). Not shown as "our sponsor" anywhere until confirmed (`sponsorClubVerified: false` in `src/config/site.ts`).

## Club profile (brief 4.1)
- Instagram bio text, club or rotary-year theme (hero currently falls back to "Service Above Self")
- Rotaract club charter date
- Club email, phone, meeting place, meeting schedule
- Facebook, LinkedIn, link-in-bio items
- Club vision (About preview shows a placeholder; the mission text is a generic Rotaract draft, replace with the club's own if it has one)
- Logo file: `content/brand/logo.png` (navbar/footer/hero still use an icon)

## Brand (brief 4.2)
- Primary and secondary colors (defaults kept: cranberry #D41367, royal blue #17458F)

## Board of Directors 2026-27 (brief 4.3)
- Names, photos (`content/people/`) and bios for all 13 positions. Only President, Secretary and Treasurer placeholders are shown on the homepage now.

## Past presidents (brief 4.4)
- Rotary year, name, photo, achievements

## Rotaractor of the Month (brief 4.5)
- Name, month, achievement, photo (homepage section is hidden until supplied)

## Project Jyoti
- Exact date, number of schools, beneficiaries, volunteers, volunteer hours, photos

## Presidents' Night 2026 (Pokhara, co-host)
- Exact date, photos, final wording

## Instagram posts (brief 5)
- Add `content/instagram/<date>-<slug>/post.md` plus images for each post. Until then: no upcoming events, no gallery albums, no announcements, and the impact statistics section is hidden.
