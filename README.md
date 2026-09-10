# 🌌 Samyak''s Portfolio

> An immersive, interactive 3D portfolio built with React, Three.js, and GSAP — featuring physics-based animations, a 3D character model, and smooth scroll-driven experiences.






---

## ✨ Features

- **3D Character Model** — An animated character rendered with `@react-three/fiber` and a custom HDR environment
- **Physics-Based Tech Stack** — Interactive floating spheres with Rapier physics, each textured with a tech logo; interact with your cursor
- **Scroll-Driven Animations** — Horizontal project carousel and section reveals powered by GSAP ScrollTrigger
- **Custom Cursor** — Smooth animated cursor that enhances the desktop experience
- **Marquee Ticker** — Scrolling tech/skill ticker using `react-fast-marquee`
- **Loading Screen** — Polished loader before the main content appears
- **Vercel Analytics** — Built-in `@vercel/analytics` integration
- **Fully Responsive** — Adapts gracefully across screen sizes

---

## 🧱 Tech Stack

| Category        | Technology                              |
| --------------- | --------------------------------------- |
| Framework       | React 18 + TypeScript                   |
| Build Tool      | Vite 5                                  |
| 3D Engine       | Three.js + React Three Fiber            |
| Physics         | Rapier (`@react-three/rapier`)        |
| Post-processing | `@react-three/postprocessing` (N8AO)  |
| Animations      | GSAP + ScrollTrigger                    |
| UI Components   | `react-icons`, `react-fast-marquee` |
| Analytics       | `@vercel/analytics`                   |
| Linting         | ESLint + TypeScript-ESLint              |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          # Tech logo textures (WebP/PNG)
│   └── models/          # 3D model files & HDR environment
├── src/
│   ├── assets/          # Static assets
│   ├── components/
│   │   ├── Character/   # 3D character model component
│   │   ├── styles/      # Per-component CSS files
│   │   ├── utils/       # Shared utility components
│   │   ├── About.tsx    # About Me section
│   │   ├── Career.tsx   # Career / Experience section
│   │   ├── Contact.tsx  # Contact form / links
│   │   ├── Cursor.tsx   # Custom animated cursor
│   │   ├── Landing.tsx  # Hero / landing section
│   │   ├── Loading.tsx  # Animated loading screen
│   │   ├── MainContainer.tsx  # Layout wrapper & section orchestration
│   │   ├── Navbar.tsx   # Navigation bar
│   │   ├── SocialIcons.tsx    # Social media icon links
│   │   ├── TechStack.tsx      # Physics-based 3D tech ball pit
│   │   ├── WhatIDo.tsx        # Skills / services section
│   │   ├── Work.tsx           # Horizontal scrolling project cards
│   │   └── WorkImage.tsx      # Project image display helper
│   ├── context/
│   │   └── LoadingProvider.tsx  # Global loading state context
│   ├── data/
│   │   └── boneData.ts   # Character bone/animation data
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sleepyhead46/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🗂️ Featured Projects

| #  | Project                                                                                                         | Description                                            | Stack                                             |
| -- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| 01 | [**CropAI**](https://github.com/Sleepyhead46/CropAI-Crop-Recommendation-Plant-Disease-Classification-.git) | Crop recommendation & plant disease classification app | Python • Streamlit • scikit-learn • TensorFlow |
| 02 | [**Fake News Detection**](https://github.com/Sleepyhead46/Fake-News-Detection.git)                         | NLP classifier with TF-IDF and visual analytics        | Python • Streamlit • scikit-learn • NLP        |
| 03 | [**Mobile Sales Dashboard**](https://github.com/Sleepyhead46/Mobile-phone-sales-powerbi-dashboard)         | Interactive Power BI report with DAX measures          | Power BI • DAX • Power Query                    |
| 04 | [**Credit Card Analysis**](https://github.com/Sleepyhead46/Credit-Card-Power-Bi-analysis)                  | Credit card financial analysis dashboard               | Power BI • DAX • Data Modeling                  |

---

## 🛠️ Available Scripts

| Script              | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`     | Start dev server with hot reload (exposed on network) |
| `npm run build`   | Type-check and build for production                   |
| `npm run preview` | Preview the production build locally                  |
| `npm run lint`    | Lint the codebase with ESLint                         |

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**:

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — click **Deploy**

Analytics are already wired up via `@vercel/analytics`.

---

## 📬 Contact

- **GitHub**: [@Sleepyhead46](https://github.com/Sleepyhead46)
- **Repository**: [github.com/Sleepyhead46/portfolio](https://github.com/Sleepyhead46/portfolio.git)

---
