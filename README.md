# Zen Cleaning

A responsive, art-directed landing page concept for a modern home and office cleaning service. The project pairs editorial typography with layered botanical imagery, service cards, trust-focused storytelling, and an accessible estimate-request flow.

![Zen Cleaning website preview](assets/zen-booking-living-room.webp)

## Highlights

- Responsive compositions for portrait phones, landscape phones, tablets, laptops, desktop, and ultrawide screens
- Semantic page structure and accessible navigation, dialog, form labels, focus states, and reduced-motion behavior
- Optimized WebP imagery with lazy loading below the fold
- Interactive service selection and estimate-request preview with no back end or data collection
- Social sharing metadata and a relative-asset setup suitable for GitHub Pages

## Run locally

No build step or package installation is required.

```bash
python3 dev_server.py
```

Then open [http://localhost:8000](http://localhost:8000).

## Deploy

The site is deployment-ready as static files. Enable GitHub Pages for the repository's `main` branch/root directory, or deploy the folder to any static host.

## Project structure

```text
.
├── index.html          # Semantic page content and metadata
├── assets/
│   ├── styles.css      # Responsive art direction and component styles
│   ├── site.js         # Navigation, dialog, form, and reveal behavior
│   └── *.webp          # Optimized visual assets
└── dev_server.py       # Lightweight local preview server
```

## Scope

This is a front-end portfolio concept, not a live cleaning business. The estimate form intentionally demonstrates validation and success states without transmitting or storing personal data. Connect the form handler to a real booking service before using it in production.
