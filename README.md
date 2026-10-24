# FORMA — Graphic Design & Thoughtful Brand Systems

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Export](https://img.shields.io/badge/Build-Static%20HTML%20Export-success?style=flat)](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> An international graphic design and branding studio flagship website crafting distinctive visual identities, tactile print systems, and editorial digital experiences for ambitious brands.

---

## Table of Contents

- [About the Project](#about-the-project)
  - [Design Philosophy & Aesthetic Direction](#design-philosophy--aesthetic-direction)
  - [Key Pages & Features](#key-pages--features)
- [Which Plan It Uses](#which-plan-it-uses)
  - [1. Hosting & Infrastructure Plan](#1-hosting--infrastructure-plan)
  - [2. Studio Engagement Plans & Client Tiers](#2-studio-engagement-plans--client-tiers)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Setup Steps](#setup-steps)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Environment Variables](#environment-variables)
- [How to Run](#how-to-run)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
  - [Previewing the Static Export](#previewing-the-static-export)
  - [Code Quality & Linting](#code-quality--linting)
- [How to Deploy](#how-to-deploy)
  - [Deploy to Vercel (Recommended)](#deploy-to-vercel-recommended)
  - [Deploy to GitHub Pages](#deploy-to-github-pages)
  - [Deploy to Cloudflare Pages](#deploy-to-cloudflare-pages)
  - [Deploy to Netlify](#deploy-to-netlify)
  - [Self-Hosted (Nginx / Docker)](#self-hosted-nginx--docker)
- [SEO & Performance Highlights](#seo--performance-highlights)
- [License & Credits](#license--credits)

---

## About the Project

**FORMA** (`Studio Forma`) is an editorial, high-craft web destination built for an independent graphic design and branding atelier operating out of Mumbai & Bengaluru, India. 

The website serves as both an interactive portfolio and a brand flagship, engineered to showcase the studio's portfolio across brand identity, editorial publication design, structural packaging, and digital design systems.

### Design Philosophy & Aesthetic Direction

The design system is heavily influenced by Swiss modernist graphic design, international typographical discipline, and tactile material intelligence:

- **Curated Color Palette**:
  - `Warm Ivory` (`#F5F1E8`) — Soft, tactile museum-grade background.
  - `Midnight Ink` (`#17191C`) — Deep architectural contrast.
  - `Electric Cobalt` (`#3457E5`) — High-energy digital accent.
  - `Warm Vermilion` (`#F15A38`) — Editorial tension and alert accent.
  - `Butter Yellow` (`#F2D675`) — Subtle highlight and label marker.
- **Modern Typography Hierarchy**:
  - **Space Grotesk**: Monospaced-inspired geometric headings and typographic specimen labels.
  - **DM Sans**: Clean, high-legibility interface and editorial body text.
  - **Newsreader**: Editorial serif accents providing timeless humanistic warmth.
- **Architectural Grid**: Uncompromising margins, razor-sharp borders (`border-black/10`), and asymmetric editorial layouts that evoke luxury monograph publishing.

### Key Pages & Features

| Route | Page | Key Highlights |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial hero statement, selected case studies, studio credo, 4-phase methodology (`Discover`, `Define`, `Design`, `Deliver`), and commission call-to-action. |
| `/work` | **Portfolio Directory** | Filterable case study catalog showcasing cross-disciplinary client work. |
| `/work/[slug]` | **Case Study Showcase** | In-depth project documentation with typographic specimen grids, color tokens, production dossiers, tactile details, and client outcomes. |
| `/services` | **Studio Disciplines** | Dedicated showcase of the 5 core practices: Brand Identity, Graphic Design, Packaging Design, Digital Design, and Creative Direction with standard deliverable checklists. |
| `/about` | **Studio Atelier & Credo** | Studio philosophy, 4 creative principles (*Tension Over Uniformity*, *Conviction Precedes Form*, *Material Intelligence*, *Disciplined Reduction*), and operational values. |
| `/contact` | **Commission Desk** | Multi-channel direct contact (Telephone, WhatsApp API integration, Studio Atelier map locator) + interactive project brief builder with client-side field validation, character counter, and instant clipboard export. |
| `/faq` | **FAQ & Advisory** | Accessible, keyboard-navigable interactive accordion covering engagement scopes, deliverables, timelines, and commercial parameters. |

---

## Which Plan It Uses

Depending on the context, "plan" refers to both the **hosting infrastructure plan** and the **commercial engagement plans** modeled in the application:

### 1. Hosting & Infrastructure Plan

The project is architected as a **Static HTML Export** (`output: "export"` in `next.config.ts`), generating pre-rendered static assets into the `out/` directory.

- **Vercel Hobby Plan (100% Free)**:
  - Requires **no paid compute or serverless function allocation**.
  - Deploys as pure static assets onto Vercel’s global Edge Network.
  - 100 GB bandwidth, unlimited deployments, custom domains, and automatic SSL certificates on Vercel's zero-cost tier.
- **GitHub Pages (100% Free)**:
  - Can be hosted for free directly on GitHub Pages using GitHub Actions.
- **Cloudflare Pages / Netlify (Free Starter)**:
  - Zero-cost static hosting with unlimited requests and edge caching.

Because the app performs all brief compiling and validation locally in the browser with zero database or server runtime dependencies, operating expenses remain **₹0 / $0 per month**.

### 2. Studio Engagement Plans & Client Tiers

The application models transparent commercial engagement tiers for studio clients:

| Engagement Plan | Typical Scope | Investment Range | Horizon / Duration |
| :--- | :--- | :--- | :--- |
| **Brand Identity Sprint** | Visual identity systems, typography direction, brand manual, vector asset suite, digital tokens | ₹75,000 – ₹1,50,000 / ₹1,50,000 – ₹3,00,000 | 6 – 8 Weeks |
| **Tactile Packaging & Editorial** | Bespoke structural die-lines, foil/emboss specs, label architecture, monographs, print press proofing | ₹1,50,000 – ₹3,00,000 | 6 – 10 Weeks |
| **Comprehensive Rebrand & Multi-Discipline** | Full brand identity, physical packaging suites, editorial collateral, and complete digital design system | ₹3,00,000 – ₹5,00,000+ | 10 – 14 Weeks |
| **Studio Booking Horizon** | Capped at **four concurrent client commissions** per quarterly cycle (e.g. Q3/Q4 bookings) to guarantee direct partner involvement. | Custom Scope | Quarterly Sprints |

---

## Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.4.2](https://nextjs.org/) (App Router) | React framework with Static HTML Export (`output: "export"`), Turbopack support, and optimized asset handling. |
| **Core Library** | [React 19.3.0](https://react.dev/) / React DOM 19.3.0 | Modern concurrent React primitives and client-side state. |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict static typing across configurations, component props, and project data models. |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation utility-first styling with `@tailwindcss/turbopack` and CSS custom property themes. |
| **Typography** | [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | Zero-CLS font optimization for *Space Grotesk*, *DM Sans*, and *Newsreader*. |
| **Iconography** | [Lucide React](https://lucide.dev/) (`^0.475.0`) | Clean, consistent geometric icons. |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) (`^12.4.7`) | Smooth micro-interactions, layout transitions, and entrance animations. |
| **Code Standards** | [ESLint 9](https://eslint.org/) (`eslint-config-next`) | Code quality, accessibility, and Next.js best practice linting. |
| **SEO & Schema** | Metadata API & JSON-LD | OpenGraph, Twitter Cards, `ProfessionalService` Schema.org microdata, static `sitemap.xml`, and `robots.txt`. |

---

## Project Architecture

```text
graphic_design/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Optional GitHub Pages automated CI/CD workflow
├── public/
│   ├── images/                 # Studio photography, editorial monographs, project assets
│   ├── favicon.ico             # Studio favicon
│   └── icon.svg                # Vector brand monogram
├── src/
│   ├── app/
│   │   ├── about/              # Studio atelier, philosophy, and credo (/about)
│   │   ├── contact/            # Inquiry desk, direct contact cards, and brief builder (/contact)
│   │   ├── faq/                # Interactive question & answer accordion (/faq)
│   │   ├── services/           # The 5 core disciplines deep-dive (/services)
│   │   ├── work/
│   │   │   ├── [slug]/         # Dynamic case study route (/work/[slug])
│   │   │   └── page.tsx        # Portfolio project gallery (/work)
│   │   ├── globals.css         # Tailwind v4 theme tokens, color architecture, utility classes
│   │   ├── layout.tsx          # Root HTML layout, Google fonts, JSON-LD Schema markup
│   │   ├── page.tsx            # Homepage flow (Hero, Intro, Work, Services, Manifesto, Process)
│   │   ├── robots.ts           # Dynamic static robots.txt generator
│   │   └── sitemap.ts          # Dynamic static sitemap.xml generator
│   ├── components/
│   │   ├── brand/              # Monograms, logo marks, and studio watermarks
│   │   ├── hero/               # Homepage hero section and kinetic typographic display
│   │   ├── home/               # Modular homepage components (Process, Manifesto, SelectedWork, etc.)
│   │   ├── layout/             # Universal Header, Navigation Drawer, and Studio Colophon Footer
│   │   └── portfolio/          # Project cards, tag filters, specimen components
│   ├── config/
│   │   └── site.ts             # Central studio config (brand name, links, address, phone, WhatsApp)
│   ├── data/
│   │   ├── projects.ts         # Portfolio case study data, image paths, palettes, deliverables
│   │   └── services.ts         # Service disciplines, capabilities, and delivery dossiers
│   └── types/
│       └── index.ts            # Core TypeScript interfaces (ProjectItem, ServiceItem, etc.)
├── .env.example                # Environment variables reference template
├── .gitignore                  # Git ignore rules
├── next.config.ts              # Next.js configuration (output: 'export', turbopack rules)
├── package.json                # Project scripts and dependency declarations
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## Setup Steps

### Prerequisites

Ensure you have the following installed locally on your system:

- **Node.js**: `v18.18.0` or `v20.x` or higher (Node 20+ recommended)
- **Package Manager**: `npm` (bundled with Node), `pnpm`, `yarn`, or `bun`
- **Git**: Installed and configured on your machine

Verify versions:
```bash
node -v
npm -v
git --version
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vansh-7454/graphic_design.git
   cd graphic_design
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Configure Environment Variables** *(Optional)*:
   ```bash
   cp .env.example .env.local
   ```
   *(The project is zero-config by default. Core configurations are safely pre-configured in `src/config/site.ts`.)*

---

## Environment Variables

All core branding, links, contact numbers, and studio information have production-ready defaults in [`src/config/site.ts`](src/config/site.ts). 

If you want to customize values for staging or custom deployments without touching the source code, duplicate `.env.example` to `.env.local`:

| Variable Name | Required | Default Value | Description |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | No | `https://studioforma.design` | Base URL used for OpenGraph, Twitter Cards, Sitemap, and canonical tags. |
| `NEXT_PUBLIC_STUDIO_EMAIL` | No | `hello@studioforma.design` | Primary contact email address. |
| `NEXT_PUBLIC_STUDIO_PHONE` | No | `+919820038476` | Studio telephone contact. |
| `NEXT_PUBLIC_WHATSAPP_URL` | No | `https://wa.me/919820038476` | Pre-filled WhatsApp link for direct mobile messaging. |
| `NEXT_PUBLIC_GA_ID` | No | *None* | Optional Google Analytics Measurement ID (e.g. `G-XXXXXXXXXX`). |
| `CONTACT_FORM_ENDPOINT` | No | *None* | Optional external webhook endpoint (e.g. Formspree / Web3Forms) if replacing client-side validation with external submissions. |

---

## How to Run

### Development Server

Start the local development server with Turbopack fast refresh:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. Hot-module reloading will update pages instantly as you edit files in `src/`.

### Building for Production

To create a static production build:

```bash
npm run build
```

Next.js will compile the TypeScript code, bundle Tailwind CSS styles, pre-render all static routes and dynamic case studies (`/work/[slug]`), and export the entire website as pure HTML/CSS/JS into the **`out/`** directory.

### Previewing the Static Export

You can serve and test the exported static build locally using any lightweight HTTP server:

```bash
# Using 'serve'
npx serve out

# Or using 'http-server'
npx http-server out -p 3000
```

### Code Quality & Linting

Run ESLint to ensure clean syntax and rule conformity:

```bash
npm run lint
```

---

## How to Deploy

Because this project uses Next.js Static Export (`output: "export"`), it can be hosted on **any static hosting provider, CDN, or object store** at zero cost.

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub: `https://github.com/Vansh-7454/graphic_design`.
2. Visit [Vercel](https://vercel.com) and log in.
3. Click **Add New Project** and select `graphic_design` from your repositories.
4. Vercel automatically detects Next.js.
5. In the Build & Output settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
6. Click **Deploy**. Your site will be live on an edge CDN within seconds with free SSL.

### Deploy to GitHub Pages

To deploy automatically to GitHub Pages on every push to `main`:

1. Create a GitHub Actions workflow file at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: true

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: "npm"

         - name: Install dependencies
           run: npm ci

         - name: Build static site
           run: npm run build

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```
2. Go to **Settings > Pages** in your GitHub repository and set **Source** to **GitHub Actions**.
3. Push to `main` — GitHub will build and publish your site automatically.

### Deploy to Cloudflare Pages

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select `Vansh-7454/graphic_design`.
4. Configure build settings:
   - **Framework preset**: `None` or `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Click **Save and Deploy**.

### Deploy to Netlify

1. Log into [Netlify](https://app.netlify.com/) and select **Add new site** > **Import an existing project**.
2. Authorize GitHub and pick `graphic_design`.
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
4. Click **Deploy site**.

### Self-Hosted (Nginx / Docker)

If hosting on a Linux VPS or container, point your Nginx server block directly to the `out/` directory:

```nginx
server {
    listen 80;
    server_name studioforma.design www.studioforma.design;

    root /var/www/graphic_design/out;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    # Cache static assets aggressively
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    error_page 404 /404.html;
}
```

---

## SEO & Performance Highlights

- **Static Pre-Rendering**: 100% of HTML is rendered during `npm run build`, ensuring near-zero Time to First Byte (TTFB).
- **JSON-LD Schema**: Embedded `ProfessionalService` structured schema in [`layout.tsx`](src/app/layout.tsx) providing search engines with rich metadata regarding studio services, address, telephone, and social channels.
- **Dynamic Sitemap & Robots**: Fully compliant [`sitemap.ts`](src/app/sitemap.ts) and [`robots.ts`](src/app/robots.ts) generated automatically at build time.
- **Accessible Interactions**: Keyboard-navigable accordion components (`aria-expanded`, `aria-controls`), compliant contrast ratios, and intuitive focus rings.
- **Unoptimized Static Media**: Next.js image configuration is set to `unoptimized: true` to enable direct static hosting without external image optimization server costs.

---

## License & Credits

- **Codebase License**: [MIT License](LICENSE).
- **Visual Design & Concepts**: [Studio Forma](https://studioforma.design) — All rights reserved for branding marks, case study imagery, and studio photography.
- **Built by**: [Vansh](https://github.com/Vansh-7454)

---

<p align="center">
  Crafted with care &bull; Swiss Modernist Discipline &bull; Studio Forma
</p>
