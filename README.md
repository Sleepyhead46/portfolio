# Samyak Deshar — Portfolio

A personal portfolio built to feel interactive and alive rather than like a static résumé. It combines smooth scroll animations, a real-time 3D character scene, and a project carousel to present my background, skills, and selected work.

Live at: **[samyakdeshar.com](https://samyakdeshar.com)** *(update with your actual URL)*

---

## Features

- **3D Character Scene** — Real-time character rendered with Three.js / React Three Fiber and physics via Rapier, complete with post-processing effects.
- **Animated Sections** — Every section enters with GSAP scroll-triggered animations for a polished, cinematic feel.
- **Interactive Project Carousel** — Browse selected work with a smooth, keyboard- and pointer-driven carousel.
- **Tech-Stack Marquee** — Continuously scrolling banner that lists technologies I work with daily.
- **Custom Cursor** — A context-aware cursor that reacts to hover targets across the page.
- **Contact Form** — Reach-out section with social links and direct contact details.
- **Vercel Analytics** — Lightweight, privacy-friendly page analytics baked in.

---

## Tech Stack

| Layer | Library / Tool |
|---|---|
| UI Framework | React 18 + TypeScript |
| Build Tooling | Vite 5 |
| 3D Rendering | Three.js, React Three Fiber, Drei |
| Physics | React Three Rapier |
| Post-processing | React Three Postprocessing |
| Animation | GSAP 3 + `@gsap/react` |
| Scrolling Marquee | React Fast Marquee |
| Icons | React Icons |
| Analytics | Vercel Analytics |
| Linting | ESLint 9 + TypeScript ESLint |

---

## Project Layout

```
portfolio/
├── public/
│   └── images/          # Static image assets
├── src/
│   ├── assets/          # Fonts, models, and other imported assets
│   ├── components/
│   │   ├── Character/   # Three.js character scene & helpers
│   │   ├── styles/      # Per-section CSS modules
│   │   ├── utils/       # Shared utility components
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Cursor.tsx
│   │   ├── Landing.tsx
│   │   ├── Loading.tsx
│   │   ├── MainContainer.tsx
│   │   ├── Navbar.tsx
│   │   ├── SocialIcons.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── Work.tsx
│   │   └── WorkImage.tsx
│   ├── context/         # React context providers
│   ├── data/            # Static data (e.g. bone/animation data)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

> **Note:** The dev server is started with `--host`, so it is also accessible on your local network.

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server (network-accessible) |
| `npm run build` | Type-check with `tsc` and output a production bundle |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Deployment

The project is optimised for deployment on **Vercel**. Push to your linked repository and Vercel will automatically run `npm run build` and publish the output.

For other hosts, run `npm run build` and serve the generated `dist/` directory as a static site.

---

## License

This project is for personal use. Feel free to draw inspiration, but please do not copy the design or content directly.
