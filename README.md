# bristinborah.com

Personal site, laid out like a Unix manual page. Next.js 16 (App Router), fully static.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, every page prerendered
```

## Pages

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` - landing page, links to everything else |
| `/work` | `app/work/page.tsx` |
| `/projects` | `app/projects/page.tsx` |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` - one page per project |
| `/open-source` | `app/open-source/page.tsx` |
| `/awards` | `app/awards/page.tsx` |
| `/stack` | `app/stack/page.tsx` |

## Editing content

All text lives in `lib/data.ts`. Pages only read from it.

- **New project:** add an entry to `projects` with a unique `slug`. Its page at `/projects/<slug>` is generated at build time.
- **New pull request:** add an entry to `openSource`. Entries are grouped by `repo` in the order they appear. Set `status` to `merged`, `open` or `in review`, or leave it out.
- **New page:** add it to `routes` at the bottom of `lib/data.ts` so it shows in the nav, then create `app/<name>/page.tsx` using `ManPage` and `Section` from `components/man.tsx`.

Styles are plain CSS in `app/globals.css`. The accent colour is `--accent`; dark mode follows the visitor's system setting. The font is IBM Plex Mono, self-hosted from `@fontsource/ibm-plex-mono`.
