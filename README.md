# Seagrace - Next.js

The Seagrace software engineering initiative website, built with **Next.js (App Router) + TypeScript**, configured as a **static export** for **GitHub Pages**.

> Learn. Build. Grow Together.

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

This outputs a fully static site into `seagrace-nextjs/out/` because of `output: 'export'` in `next.config.mjs`.

---

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

## Project structure

```text
seagrace-nextjs/
├─ app/
│  ├─ layout.tsx          # Root layout, chatbot, network bg, metadata
│  ├─ page.tsx            # Homepage
│  ├─ globals.css         # Design system
│  └─ work/[slug]/page.tsx# Engineering project pages
├─ components/
│  ├─ Nav.tsx, Footer.tsx
│  ├─ NetworkBg.tsx       # Live animated network/current background
│  ├─ Chatbot.tsx         # Scripted "Grace" assistant
│  ├─ Interactions.tsx    # Scroll reveals, counters, spotlight, nav state
│  ├─ ContactForm.tsx     # Join initiative form
│  ├─ Media.tsx           # Image with styled placeholder fallback
│  └─ sections/*.tsx      # Hero, About, Domains, Projects, Team, Join, etc.
└─ lib/projects.ts        # Engineering project data
```

## Adding an engineering project

Add an entry to `lib/projects.ts`; the homepage card and `/work/<slug>/` page are generated from it.

## Real images

Drop image files into `public/images/` and set the `src` on the relevant `<Media>` component.

## TODO before launch

- [ ] Replace `public/CNAME` with your domain
- [ ] Add project reference URLs in `lib/projects.ts`
- [ ] Add team and project photos to `public/images/`
- [ ] Wire the contact form to a form endpoint by setting `NEXT_PUBLIC_FORMSPREE_ID`
