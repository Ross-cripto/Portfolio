# Rosniel Miguel — portfolio

A single sheet of paper on a watercolor wall. Work, projects and toolbox as photo-stack rows,
each opening a small entry page. Design after [ja.mt](https://ja.mt); built with Next.js.

**Live:** https://portfolio-ross.vercel.app

## Stack

- **Next.js 15** (App Router, fully static — every route is prerendered)
- **React 19**, **TypeScript** (strict)
- `next/font` for Inter + Fraunces (variable axes), `next/image` for the screenshots
- Plain CSS in `app/globals.css` — no UI library, no CSS framework

## Where things live

| Path | What |
| --- | --- |
| `content/site.ts` | **All content** — profile, jobs, projects, toolbox areas, links. Edit this to update the site. |
| `app/page.tsx` | Home: header + every section |
| `app/[section]/page.tsx` | A section on its own page (`/projects`, `/toolbox`, …) — the "More" destination |
| `app/[section]/[slug]/page.tsx` | Entry pages (`/projects/goza`, `/work/alamops`, …) |
| `components/` | `Stack` (photo pile), `Row`, `Board` (toolbox pinboard), `Entry`, `Wall` (background), `Signature`, `TransitionLink`… |
| `components/marks.tsx` | The tiny brand-coloured tool "photos" |
| `components/art.tsx` | Generated tiles for rows without a screenshot |
| `lib/rng.ts` | Seeded RNG — every tilt/offset derives from the slug, so SSR and client agree |
| `public/shots/` | Project screenshots (480px, JPEG) |

## Motion (mirrors the reference)

- Entrance: `fade-in-blur` .35s `cubic-bezier(.34,1.3,.64,1)`, delay `.15s + n × 65ms`; polaroids pop in at `+60ms`.
- Hover a row: everything else blurs `2.7px` at 40% opacity; the photo stack fans out; singles tilt.
- Route changes: the leaving view blurs out (`TransitionLink`), the entering one staggers in.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static build
pnpm lint && pnpm typecheck
```

## Adding a project

Append an object to `sections[projects].items` in `content/site.ts`. Give it a `shot`
(drop a 480px JPEG in `public/shots/`) or an `art` tile; the row, the entry page, the
sitemap and metadata are generated from it.

## License

MIT — see `LICENSE.TXT`.
