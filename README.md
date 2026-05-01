# SaaS Starter — Next.js

A modern, high-performance SaaS landing page starter built to help you launch your product faster. This template is designed with conversion in mind and comes packed with fully responsive, animated UI components.

## Features

- **Pre-built Landing Page Sections**: Includes Hero, Feature Toggles, Pricing, Stats, Benefits Grid, Blog Carousel, and Email Capture.
- **Beautiful Animations**: Smooth page transitions and element animations powered by Framer Motion.
- **Fully Responsive**: Mobile-first design that looks great on all screen sizes, built with Tailwind CSS.
- **Modern Tech Stack**: Uses Next.js (App/Pages router), React 18, and TypeScript for a robust developer experience.
- **Customizable Theme**: Easily adapt the color scheme and typography to match your brand identity.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v14)
- **Library**: [React](https://reactjs.org/) (v18)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities**: `class-variance-authority`, `tailwind-merge`, `react-use-measure`
- **Language**: TypeScript

## Project Structure

The project is organized efficiently to separate concerns and make customization easy:

```text
src/
├── components/          # Reusable UI components organized by section
│   ├── benefits-grid/   # Grid layout showcasing product benefits
│   ├── blog/            # Blog carousel component
│   ├── email-capture/   # Newsletter/waitlist signup section
│   ├── feature-toggles/ # Interactive feature showcase
│   ├── final-cta/       # Bottom page call-to-action
│   ├── footer/          # Page footer layout
│   ├── hero/            # Main landing page hero section
│   ├── logos/           # Trusted by / Customer logos
│   ├── navigation/      # Expandable navigation bar
│   ├── pricing/         # Pricing tiers component
│   ├── shared/          # Shared atomic components (buttons, etc.)
│   ├── stats/           # Statistics highlight section
│   └── supports/        # Integrations/Support features showcase
├── pages/               # Next.js routes
│   ├── _app.tsx         # Global app wrapper
│   ├── _document.tsx    # Document layout
│   └── index.tsx        # Main landing page
├── styles/              # Global CSS styles
└── fonts.ts             # Font configurations
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **View the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Customization

### Colors
The template currently uses the Tailwind `indigo` palette for primary actions and `zinc` for neutral backgrounds. To seamlessly switch to your brand's primary color, you can selectively find-and-replace `indigo` in the component files with your preferred Tailwind color (e.g., `blue`, `emerald`, `violet`).

### Typography
Font settings are globally managed. You can configure the primary fonts by modifying `src/fonts.ts` using [next/font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize your local or Google fonts.
