# Seagrace — Next.js

The Seagrace company website, built with **Next.js (App Router) + TypeScript**, configured as a **static export** for **GitHub Pages**.

> You imagine it. We build it.

---

## Run it locally

```bash
cd seagrace-nextjs
npm install
npm run dev
```

Open http://localhost:3000

## Build the static site

```bash
npm run build
```

This outputs a fully static site into `seagrace-nextjs/out/` (because of `output: 'export'` in `next.config.mjs`). You can open `out/index.html` or serve the folder with any static host.

---

## Deploy to GitHub Pages (automatic)

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

**One-time setup:**

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main` — the site builds and deploys automatically.

### Custom domain

1. Edit `public/CNAME` and replace `yourdomain.com` with your real domain (this file is what tells Pages your domain — keep it).
2. At your domain registrar, point DNS at GitHub Pages:
   - **Apex domain** (`yourdomain.com`): four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **`www` subdomain**: a `CNAME` record → `<your-username>.github.io`
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**.

Because you use a custom domain, the site is served from the **root** — no `basePath` needed. (If you ever switch to `https://<user>.github.io/<repo>/`, set `basePath`/`assetPrefix` in `next.config.mjs` — see the comments there.)

---

## Project structure

```
seagrace-nextjs/
├─ app/
│  ├─ layout.tsx          # Root layout: nav, footer, chatbot, network bg, metadata
│  ├─ page.tsx            # Homepage (composes all sections)
│  ├─ globals.css         # Full design system (ported from the original site)
│  └─ work/[slug]/page.tsx# Project case-study pages (Explorix, Pickelton)
├─ components/
│  ├─ Nav.tsx, Footer.tsx
│  ├─ NetworkBg.tsx       # Live animated network/current background (client)
│  ├─ Chatbot.tsx         # Scripted "Grace" assistant (client)
│  ├─ Interactions.tsx    # Scroll reveals, counters, spotlight, nav state (client)
│  ├─ ContactForm.tsx     # Dual client/join form (client)
│  ├─ Media.tsx           # Image with styled placeholder fallback
│  └─ sections/*.tsx      # Hero, About, Services, Work, Team, Join, etc.
└─ lib/projects.ts        # Project case-study data (add new projects here)
```

## Adding a project

Add an entry to `lib/projects.ts` — the homepage card **and** the `/work/<slug>/` page are generated from it.

## Real images

Drop image files into `public/images/` and set the `src` on the relevant `<Media>` (e.g. team photos, project screenshots). Without a `src`, a styled placeholder is shown.

## TODO before launch

- [ ] Replace `public/CNAME` with your domain
- [ ] Add real project **live URLs** in `lib/projects.ts`
- [ ] Add team / project **photos** to `public/images/`
- [ ] Wire the **contact form** to a service — set `NEXT_PUBLIC_FORMSPREE_ID` (see `components/ContactForm.tsx`). Static hosting can't send email on its own.
