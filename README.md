# Maru Maritime: Website

Marketing website for **Maru Maritime**, a maritime asset management and turnkey maritime services platform
focused on the commercial management and chartering of ships.

Built with [Astro](https://astro.build) as a fully static site, with no server required.

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into ./dist
npm run preview   # serve the production build locally
npx astro check   # type-check
```

## Structure

```
public/
  brand/            logo files (SVG + PNG), generated from the approved "plain" navy logo
  favicon.svg
src/
  data/site.ts      company details, contact emails and navigation, edited in one place
  styles/global.css design tokens (navy/gold palette, type scale) and shared components
  layouts/Base.astro  page shell: <head>, header, footer, scroll-reveal script
  components/       Header, Footer, PageHero, CtaBand, ChartBackdrop, Vessel, Icon
  pages/            index (Home), about, services, investors, contact
```

## Before launch: placeholders to confirm

- **Domain**: `site` in `astro.config.mjs` (currently `https://www.marumaritime.com`)
- **Email addresses**: `email` and `charteringEmail` in `src/data/site.ts`
- **Office address and phone**: `office` and `phone` in `src/data/site.ts`
- **Founder biography and portrait**: About page, Leadership section
- **Contact form**: currently opens the visitor's email app with the enquiry pre-filled. Connect a form
  service or backend if submissions should be collected directly.
- **Legal pages**: privacy policy and website terms are not yet written.

## Photography

All photos are CC0 / public domain from Wikimedia Commons (no attribution required). Ship names were cropped
or painted out so no third-party vessel appears to belong to Maru Maritime.

- `public/images/hero.jpg`: "Bulk carrier Nyon" (Wikimedia Commons, CC0), bow name removed
- `public/images/detail.jpg`: "Equinox Dream. Bulk Carrier", Bernard Spragg (Wikimedia Commons, CC0), cropped
- `public/images/band.jpg`: "PAIWAN WISDOM. Bulk Carrier" (Wikimedia Commons, CC0), cropped

Replace these with Maru Maritime's own photography when available.
