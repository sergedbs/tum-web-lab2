# Moments Café & Market - Landing Page

A professional, mobile-first landing page for **Moments Café & Market**, a real business located 10 minutes from the E581 Leușeni-Albița border crossing. Built with Astro SSG and Decap CMS so content editors can update hours, hero text, and services without touching code.

## Live Demo

**[View Live Site](https://momentscafe.netlify.app)**

## Screenshots

### Desktop View

![Desktop View](https://i.imgur.com/1y8hf4u.jpeg)

### Mobile View

![Mobile View](https://i.imgur.com/XjfBmC5.png)

## Features

### Design & UX

- **Mobile-First** — optimized for travelers on smartphones
- **Fully Responsive** — seamless across 320 px to 1440 px+
- **Web Fonts** — *Playfair Display* (headings) + *Lato* (body) via Google Fonts
- **Warm Coffee Palette** — CSS custom properties for consistent branding
- **Hero Badge Pill** — frosted-glass location callout in the hero section
- **Section Animations** — powered fade-up on service cards and hours boxes
- **Scroll-Spy Nav** — active link highlights as the corresponding section scrolls into view
- **Mascot** — animated coffee cup character (entrance + idle float + hover speech bubble)
- **Back-to-Top Button** — desktop-only, appears after 300 px scroll

### Mobile-Specific

- **Hamburger Navigation** — Bootstrap collapse, accessible toggle
- **Sticky Call Bar** — fixed bottom bar with tap-to-call and live open/closed status ("Deschis · Închide la 22:00")
- **Scroll Progress Bar** — thin gradient indicator at top of viewport
- **Full-Width CTA** — hero button spans the screen on small devices

### Performance & SEO

- **Astro Static Build** — zero JS by default; only the scroll/mascot script ships to the browser
- **Optimised Images** — Astro `<Image>` component converts assets to WebP at build time
- **`preconnect` hints** — for Google Fonts, Bootstrap CDN, and Font Awesome CDN
- **Open Graph + Twitter Card** — rich previews when sharing on WhatsApp/Facebook
- **JSON-LD Structured Data** — `CafeOrCoffeeShop` schema for Google search rich results
- **Sitemap** — auto-generated via `@astrojs/sitemap`
- **Lazy-Loaded Map** — Google Maps iframe with `loading="lazy"`

### Accessibility

- **Skip-to-content link** — keyboard and screen-reader friendly
- **44 px tap targets** — all nav links and buttons meet WCAG minimum
- **`aria-label` / `aria-hidden`** — on interactive elements and decorative images
- **Semantic HTML5** — `<header>`, `<nav>`, `<section>`, `<footer>`, `<main>`

### Content Management

- **Decap CMS** — Git-based CMS accessible at `/admin`
- **Netlify Identity** — invite-only login; no separate auth service required
- **Per-section JSON files** — each page section has its own data file under `src/data/`; CMS saves commit directly to the repo and Netlify auto-deploys

## Technologies

| Technology | Usage |
| ---------- | ----- |
| [Astro](https://astro.build) 5 | SSG framework, component model, image optimisation |
| [Decap CMS](https://decapcms.org) 3 | Git-based CMS, `/admin` UI |
| [Netlify](https://netlify.com) | Hosting, CI/CD, Identity (OAuth), Git Gateway |
| HTML5 | Semantic structure, OG meta, JSON-LD |
| CSS3 | Custom properties, keyframe animations, `backdrop-filter` |
| JavaScript (vanilla) | `IntersectionObserver`, scroll-spy, call-bar status |
| Bootstrap 5.3 | Grid, navbar collapse, `ratio`, utility classes (CDN) |
| Font Awesome 6.5 | Nav, section, and UI icons (CDN) |
| Google Fonts | Playfair Display + Lato |
| Google Maps Embed | Location iframe |

## Project Structure

```txt
tum-web-lab2/
├── public/
│   └── admin/
│       └── config.yml          # Decap CMS configuration
├── src/
│   ├── assets/                 # Images (processed to WebP at build)
│   │   ├── background.jpg
│   │   ├── coffee.png
│   │   └── moments-logo.jpg
│   ├── components/             # Astro components (one per page section)
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Hours.astro
│   │   └── Footer.astro
│   ├── data/                   # CMS-editable content (one file per section)
│   │   ├── site.json           # Site-wide settings (name, phone, social links)
│   │   ├── hero.json
│   │   ├── about.json
│   │   ├── services.json
│   │   ├── hours.json
│   │   └── nav.json
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shared HTML shell (head, JSON-LD, mascot, call bar)
│   ├── pages/
│   │   ├── index.astro         # Main page
│   │   └── admin.html          # Decap CMS entry point
│   ├── js/
│   │   └── main.js             # Scroll progress, call-bar, scroll-spy, animations
│   └── styles/
│       ├── reset.css
│       └── style.css
├── astro.config.mjs
└── package.json
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (site only)
npm run dev

# Start CMS proxy + dev server (to test /admin locally)
npx decap-server &
npm run dev

# Production build
npm run build
```

## CMS Access

The CMS is available at `/admin`. Login uses **Netlify Identity** (invite-only).

To invite a new editor:

1. Go to the Netlify dashboard → **Identity** tab
2. Click **Invite users** and enter their email
3. They accept the invite, set a password, and can log in at `/admin`

Every save in the CMS creates a real git commit to `master`, which triggers an automatic Netlify redeploy.

## Color Scheme

| Role | Variable | Value |
| ---- | -------- | ----- |
| Primary | `--color-primary` | `#6F4E37` (coffee brown) |
| Primary Dark | `--color-primary-dark` | `#5C3D2E` |
| Accent | `--color-accent` | `#FF8C42` (warm orange) |
| Secondary | `--color-secondary` | `#F5EAD7` (warm beige) |
| Text | `--color-text-primary` | `#2C1810` (dark brown) |

## Responsive Breakpoints

| Breakpoint | Range |
| ---------- | ----- |
| Mobile Small | 320 px – 480 px |
| Mobile Large | 481 px – 768 px |
| Tablet | 769 px – 1024 px |
| Desktop | 1025 px+ |
| Large Desktop | 1440 px+ |
