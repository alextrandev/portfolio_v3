# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (alextran.dev) built with Next.js 14 (Pages Router), plain JavaScript/JSX, Tailwind CSS, and Framer Motion. No tests.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint (next/core-web-vitals)

## Architecture

**Content lives in `lib/`, not in components.** Portfolio content updates (new projects, about-page text, social links) are made by editing the data arrays in `lib/projectsData.js`, `lib/aboutData.js`, and `lib/socialsData.js` — components just render these. Project thumbnails go in `public/thumbnails/`. Shared Framer Motion variants (e.g. the `fadeIn(direction, delay)` factory) live in `lib/motionVariants.js`.

**Page structure:** Each route is a directory under `pages/` containing `index.jsx` plus that page's private components co-located in the same folder (e.g. `pages/about/InfoBlock.jsx`, `pages/contact/Form.jsx`). Components shared across pages live in the top-level `components/` directory. Note the co-located component files technically become routes too (Pages Router behavior) — this is the accepted convention here.

**Global shell:** `pages/_app.jsx` wraps every page in `components/Layout.jsx`, which renders `Nav`, `Header`, `TopLeftImg`, and the page-transition overlay (`components/Transition.jsx`) inside an `AnimatePresence` keyed on the pathname — this drives the sliding-panels transition between routes. The Sora font is loaded there via `next/font` and exposed as the `--font-sora` CSS variable used by Tailwind's `font-sora`.

**Contact flow:** `pages/contact/Form.jsx` POSTs to the API route `pages/api/send.js`, which sends email via Resend. Requires `RESEND_API_KEY` and `EMAIL` in `.env.local`.

**Styling:** Custom Tailwind theme in `tailwind.config.js` — brand colors `primary`/`secondary`/`accent`, custom background-image utilities (`bg-site`, `bg-explosion`, etc.), custom breakpoints (`xl` is 1200px), and the `tailwind-scrollbar` plugin.
