# SaaS Starter — Next.js

A SaaS landing page starter built with React, Next.js, and Tailwind CSS.

## Getting started

Install dependencies:

```
npm install
```

Run the dev server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Tech stack

- [Next.js](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animations

## Project structure

```
src/
  pages/       # Next.js pages (index.tsx is the home route)
  components/  # All UI components organized by section
  styles/      # Global CSS
  fonts.ts     # Font configuration
```

## Customization

- Colors: The project uses the Tailwind `indigo` palette for primary colors and `zinc` for neutrals. To change, find-and-replace `indigo` with your preferred color.
- Fonts: See `src/fonts.ts` and the [Next.js font docs](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts).
