# Oberdoerfer & Krebs — website

The website for the design duo **Oberdoerfer & Krebs**. Built with
[Astro](https://astro.build). All edits to this site are made through Claude
Code — you never need to touch the code yourself.

## Roadmap

- [x] **Phase 1 — Placeholder.** A minimal, elegant "coming soon" landing page.
- [ ] **Phase 2 — Portfolio.** Project case studies, about, contact.
- [ ] **Phase 3 — Interactive identity.** Subtle motion now; larger 3D later.
- [ ] **Phase 4 — Configurator.** Custom-object configurator (React Three Fiber).
- [ ] **Phase 5 — Shop.** Webshop (Snipcart or Shopify), bolted onto the site.

## Tech at a glance

- **Framework:** Astro (ships almost no JavaScript → fast, great for visual work).
- **Hosting:** any static host with Git auto-deploy (Netlify / Vercel / Cloudflare Pages).
- **Editing model:** content lives in plain files; Claude Code manages them.

## Going live (one-time setup — done by you)

1. Create a free account on **Netlify**, **Vercel**, or **Cloudflare Pages**.
2. Choose **"Import / Add a Git repository"** and pick this repo.
3. The host auto-detects Astro. Confirm the defaults:
   - **Build command:** `npm run build`
   - **Output / publish directory:** `dist`
4. Deploy. You'll get a free URL (e.g. `oberdoerferkrebs.netlify.app`).
5. (Optional) Buy a domain and point it at the host — instructions provided when ready.

After this, **every change pushed to the repo deploys automatically.**

## Local development (reference — not required for editing)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```
