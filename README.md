# Manoj Padmanabha - Portfolio

My personal portfolio website, built with **Next.js (App Router) + TypeScript**, configured as a **static export** for **GitHub Pages**.

> Design. Build. Ship.

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

This outputs a fully static site into `out/` because of `output: 'export'` in `next.config.mjs`.

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
│  ├─ about/, contact/    # About me and contact pages
│  └─ work/[slug]/page.tsx# Project pages
├─ components/
│  ├─ Nav.tsx, Footer.tsx
│  ├─ NetworkBg.tsx       # Live animated network/current background
│  ├─ Chatbot.tsx         # Scripted portfolio assistant
│  ├─ Interactions.tsx    # Scroll reveals, counters, spotlight, nav state
│  ├─ ContactForm.tsx     # Contact form (Formspree)
│  ├─ Media.tsx           # Image with styled placeholder fallback
│  └─ sections/*.tsx      # Hero, About, Profile, Skills, Projects, Contact, etc.
└─ lib/projects.ts        # Project data
```

## Adding a project

Add an entry to `lib/projects.ts`; the homepage card and `/work/<slug>/` page are generated from it.

## Real images

Drop image files into `public/images/` and set the `src` on the relevant `<Media>` component.

## TODO before launch

- [ ] Replace `public/CNAME` with your domain
- [ ] Add `liveUrl` in `lib/projects.ts` as more projects go live
- [ ] Wire the contact form to a form endpoint by setting `NEXT_PUBLIC_FORMSPREE_ID`
