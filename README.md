# Moments Café & Market - Landing Page

A professional, mobile-first landing page for **Moments Café & Market**, a real business located 10 minutes from the E581 Leușeni-Albița border crossing. Built to attract international road travelers with artisanal food, premium coffee, and a full-service market.

## Live Demo

**[View Live Site](https://sergedbs.github.io/tum-web-lab2/)**

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
- **Section Animations** — `IntersectionObserver`-powered fade-up on service cards and hours boxes
- **Scroll-Spy Nav** — active link highlights as the corresponding section scrolls into view
- **Mascot** — animated coffee cup character (entrance + idle float + hover speech bubble)
- **Back-to-Top Button** — desktop-only, appears after 300 px scroll

### Mobile-Specific

- **Hamburger Navigation** — Bootstrap collapse, accessible toggle
- **Sticky Call Bar** — fixed bottom bar with tap-to-call and live open/closed status ("Deschis · Închide la 22:00")
- **Scroll Progress Bar** — thin gradient indicator at top of viewport
- **Full-Width CTA** — hero button spans the screen on small devices

### Performance & SEO

- **`preconnect` hints** — for Google Fonts, Bootstrap CDN, and Font Awesome CDN
- **Open Graph + Twitter Card** — rich previews when sharing on WhatsApp/Facebook
- **JSON-LD Structured Data** — `CafeOrCoffeeShop` schema for Google search rich results
- **Lazy-Loaded Map** — Google Maps iframe with `loading="lazy"`

### Accessibility

- **Skip-to-content link** — keyboard and screen-reader friendly
- **44 px tap targets** — all nav links and buttons meet WCAG minimum
- **`aria-label` / `aria-hidden`** — on interactive elements and decorative images
- **Semantic HTML5** — `<header>`, `<nav>`, `<section>`, `<footer>`, `<main>`

## Technologies

| Technology | Usage |
| ---------- | ----- |
| HTML5 | Semantic structure, OG meta, JSON-LD |
| CSS3 | Custom properties, keyframe animations, `backdrop-filter` |
| JavaScript (vanilla) | `IntersectionObserver`, scroll-spy, call-bar status |
| Bootstrap 5.3 | Grid, navbar collapse, `ratio`, utility classes |
| Font Awesome 6.5 | Nav, section, and UI icons |
| Google Fonts | Playfair Display + Lato |
| Google Maps Embed | Location iframe |

## Project Structure

```txt
tum-web-lab2/
├── index.html              # Main landing page
├── css/
│   ├── reset.css           # Meyer's CSS Reset
│   └── style.css           # Custom styles (~1200 lines)
├── js/
│   └── main.js             # Scroll progress, call-bar, scroll-spy, animations, back-to-top
├── images/
│   ├── background.jpg      # Hero background photo
│   ├── coffee.png          # Mascot image
│   └── moments-logo.jpg    # Business logo
└── README.md               # Project documentation
```

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
