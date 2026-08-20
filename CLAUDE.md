# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (alextran.dev) built with Next.js 16 (Pages Router), plain JavaScript/JSX, Tailwind CSS, and Framer Motion. No tests.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`, next/core-web-vitals)

## Architecture

**Content lives in `lib/`, not in components.** Portfolio content updates (new projects, about-page text, social links) are made by editing the data arrays in `lib/projectsData.js`, `lib/aboutData.js`, and `lib/socialsData.js` — components just render these. Project thumbnails go in `public/thumbnails/`. Shared Framer Motion variants (e.g. the `fadeIn(direction, delay)` factory) live in `lib/motionVariants.js`.

**Page structure:** Each route is a directory under `pages/` containing `index.jsx` plus that page's private components co-located in the same folder (e.g. `pages/about/InfoBlock.jsx`, `pages/contact/Form.jsx`). Components shared across pages live in the top-level `components/` directory. Note the co-located component files technically become routes too (Pages Router behavior) — this is the accepted convention here.

**Global shell:** `pages/_app.jsx` wraps every page in `components/Layout.jsx`, which renders `Nav`, `Header`, `TopLeftImg`, and the page-transition overlay (`components/Transition.jsx`) inside an `AnimatePresence` keyed on the pathname — this drives the sliding-panels transition between routes. The Sora font is loaded there via `next/font` and exposed as the `--font-sora` CSS variable used by Tailwind's `font-sora`.

**Contact flow:** `pages/contact/Form.jsx` POSTs to the API route `pages/api/send.js`, which sends email via Resend. Requires `RESEND_API_KEY` and `EMAIL` in `.env.local`.

**Styling:** Tailwind CSS 4. The entry point is `styles/globals.css` (`@import 'tailwindcss'`), which still loads the legacy theme from `tailwind.config.js` via `@config` — brand colors `primary`/`secondary`/`accent`, custom background-image utilities (`bg-site`, `bg-explosion`, etc.), custom breakpoints (`xl` is 1200px). The 15px `container` padding is restored via an `@utility` block in globals.css. Swiper CSS overrides in globals.css must stay outside `@layer` (Swiper's own CSS is unlayered and would win otherwise).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
