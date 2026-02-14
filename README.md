<p align="center">
  <img src="https://img.shields.io/badge/%E2%80%93-The%20Midnight%20Library-%23D6BB87?style=for-the-badge&labelColor=020617" alt="The Midnight Library" />
</p>

<h1 align="center">
  <br />
  Meseret Birhanu
  <br />
  <sub>A Portfolio in Volumes</sub>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-020617?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=020617" alt="React 19" />
  <img src="https://img.shields.io/badge/Framer%20Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

> *Every project tells a story. This portfolio presents them the way stories are meant to be read -- as books on a shelf, waiting to be opened.*

## The Concept

This is not a traditional portfolio. It is a **midnight library** -- a single dark room lined with glass shelves, where each project lives as a physical book. Visitors browse spines, pull a volume from the shelf, and read the full story in a two-page spread.

The entire experience is built around tactile, analog metaphors:

| Metaphor | Implementation |
|---|---|
| **Bookshelf** | Glass shelf with parchment-toned book spines |
| **Opening a book** | Shared layout animation that expands the spine into a two-page spread |
| **Page turning** | Invisible hotspots with corner curl on hover and a full page-flip animation |
| **Paper texture** | SVG noise overlays, deckle edges via `clipPath`, and a binding fold shadow |
| **Award winners** | Gold foil borders and embossed seal icons |
| **About Me** | An "Author's Preface" with a Table of Contents for social links |
| **End of collection** | A typographic *Finis* page with ornamental fleurons |

## Design System

### Palette

```
Inkwell         #020617    hsl(222 47% 3%)     -- background
Parchment       #C4A55A    hsl(39 45% 69%)     -- book covers & spines
Parchment Light #D6C9A0    hsl(39 50% 82%)     -- highlights
Charcoal        #1A1A1A    hsl(0 0% 10%)       -- ink-on-paper text
Cyan Glow       #33C3E0    hsl(185 80% 55%)    -- shelf glow, accents
Gold Foil       #D4A825    hsl(43 80% 55%)     -- award borders & seals
```

### Typography

| Role | Font | Usage |
|---|---|---|
| **Headings** | Playfair Display | Book titles, section headers, "Finis" |
| **Body & UI** | JetBrains Mono | Metadata, page numbers, navigation |

## Architecture

```
app/
  layout.tsx            -- fonts, metadata, viewport
  page.tsx              -- renders <Bookshelf />
  globals.css           -- design tokens

components/
  bookshelf.tsx         -- shelf layout, selection state, keyboard nav
  book-spine.tsx        -- individual spine with parchment gradient, gold seal
  open-book.tsx         -- two-page spread, flip zones, page curl,
                           binding shadow, deckle edges, Finis page
  noise-overlay.tsx     -- full-screen SVG grain texture

lib/
  projects.ts           -- project data & TypeScript types
```

### Key Interactions

- **Hover a spine** -- lifts with a cyan glow shadow
- **Click a spine** -- Framer Motion `layoutId` transition into the open book
- **Hover the right 15% of the spread** -- top-right corner curls, tooltip reads *"Next Volume"*
- **Click a flip zone** -- `rotateY` page-flip animation swaps to the adjacent project
- **Arrow keys** -- flip forward / backward while a book is open
- **Escape** -- return to the shelf
- **Last page forward** -- reveals the *Finis* end page

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the dev server (Turbopack)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

This project is optimized for [Vercel](https://vercel.com). Push to your connected branch and it deploys automatically.

```bash
# Or deploy manually
npx vercel
```

## License

MIT

---

<p align="center">
  <sub>Designed & built with care by <strong>Meseret Birhanu</strong></sub>
</p>
