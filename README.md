# SR Garden Solution — Next.js (Multi-Page, Static Export)

A proper multi-page Next.js 14 project (App Router + TypeScript), restructured
from the single-page site into real routes — matching a standard production
folder layout: `app/` for routes, `components/` for shared UI, `lib/` for data.
Configured for a **fully static export** — no Node.js server required to host it.

## File structure

```
sr-garden-v2/
├── app/
│   ├── layout.tsx            Root layout — Nav, IconLibrary and Footer render here
│   │                          once, so every page gets them without repeating markup
│   ├── page.tsx               Homepage — Hero, About, Services, WhyChooseUs, CTA
│   ├── about/page.tsx          /about
│   ├── services/page.tsx       /services
│   ├── scope/page.tsx          /scope       ("Scope of Work")
│   ├── gallery/page.tsx        /gallery
│   ├── team/page.tsx           /team
│   ├── career/page.tsx         /career
│   ├── contact/page.tsx        /contact
│   ├── blog/
│   │   ├── page.tsx            /blog                (post list)
│   │   └── [slug]/page.tsx     /blog/<slug>          (individual post, statically
│   │                            generated for every post via generateStaticParams)
│   ├── robots.ts               generates /robots.txt at build time
│   ├── sitemap.ts              generates /sitemap.xml at build time
│   └── globals.css             all site styling (unchanged from the original file,
│                                 plus a few new rules for page headers & blog posts)
├── components/
│   ├── Nav.tsx                 header + mobile menu (client component)
│   ├── Footer.tsx
│   ├── PageHero.tsx            small reusable banner used at the top of every inner page
│   ├── Hero.tsx                the big homepage hero (counter + pointer-tilt; client)
│   ├── ScrollReveal.tsx         reusable "fade/slide in on scroll" wrapper — replaces
│   │                            the old single global observer with a self-contained
│   │                            one per element
│   ├── IconLibrary.tsx          the SVG icon sprite, rendered once in the layout
│   ├── About.tsx / Services.tsx / ScopeOfWork.tsx / Gallery.tsx / Team.tsx /
│   │   WhyChooseUs.tsx / Contact.tsx / Career.tsx / Blog.tsx
│   └── (one component per page section — same content as the original site,
│        just split apart so each route only renders what it needs)
├── lib/
│   └── blog-posts.ts           blog post data — title, excerpt, and body paragraphs;
│                                 both /blog and /blog/[slug] read from this one file
├── public/
│   └── logo.png
├── next.config.mjs             output: 'export'
├── package.json / tsconfig.json / next-env.d.ts
├── eslint.config.mjs
└── .env.example                 NEXT_PUBLIC_SITE_URL (used by robots.ts / sitemap.ts)
```

## Why it's structured this way

- **One component per section** — the original was a single long page; each
  section (About, Services, Scope of Work, etc.) is now its own component in
  `components/`, reused by whichever page needs it. The homepage uses a few of
  them directly; every other nav item is a real route with its own URL.
- **`ScrollReveal.tsx`** replaces the old pattern of one global
  `IntersectionObserver` scanning `[data-row]` elements across the whole page.
  Each instance now watches only itself, so it works correctly regardless of
  which page it's rendered on — no shared/global state to get out of sync.
- **`PageHero.tsx`** is a small, reusable banner for every inner page, so
  About/Services/Scope/Gallery/Team/Career/Contact all get a consistent header
  without duplicating markup. The homepage keeps its own full `<Hero />`.
- **`lib/blog-posts.ts`** is the single source of truth for blog content — the
  list page and each individual post page both read from it, so adding a new
  post means adding one entry to this file, not writing a new page.

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build the static site

```bash
npm run build
```

Because `next.config.mjs` sets `output: 'export'`, this produces a fully
static site in `./out/` — plain HTML/CSS/JS for every route (including every
blog post), no server needed.

**This exact build was run and verified before packaging** — `npm install` +
`npm run build` completed with no errors, and all 17 pages
(9 routes + 3 blog posts + home + robots.txt + sitemap.xml + a couple of
Next.js internals) were confirmed present in `./out/`.

## Deploy

- **Vercel**: import the repo as-is — Vercel detects `output: 'export'` and
  deploys the static output automatically. Framework preset: **Next.js**.
- **GitHub Pages / Netlify / any static host**: run `npm run build`, then
  upload the contents of `out/` (not the whole repo).

## Adding a new blog post

Add an entry to `lib/blog-posts.ts` (slug, tag, title, excerpt, body
paragraphs) — `/blog` and `/blog/<slug>` both pick it up automatically, and
`sitemap.ts` includes it the next time you build.

## Notes

- `NEXT_PUBLIC_SITE_URL` in `.env.example` controls the domain used in
  `robots.ts` and `sitemap.ts`. Copy it to `.env.local` and set your real
  domain before deploying, or the sitemap will point at the placeholder URL.
- Google Fonts (Fraunces, Manrope, Yellowtail) load the same way as before —
  a `<link>` tag in `app/layout.tsx` — so the site needs the visitor to be
  online, same as the original file.
- Images (Unsplash photos, the logo) are plain `<img>` tags, not
  `next/image`. `images.unoptimized: true` is set in `next.config.mjs`
  regardless, since that flag is required for `next/image` under static
  export if you introduce it later.
