# Maru Maritime: Website

Website for **Maru Maritime**, maritime asset management.

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
  components/       Header, Footer, PageHero, CtaBand, Bridge, ChartBackdrop, Icon
  pages/            index (Home), about, contact, legal, 404
```

## Content rules

All company information lives in `src/data/site.ts` and comes from Maru Maritime directly: the company
description, relationships (Japan, Korea, China), presence (United States, CT), services in priority order,
contact email and the investment disclaimer. Do not add figures, track record, vessel types, processes or other
claims that the company has not provided. The website handles no transactions; the contact form only opens an
email to ships@marumaritime.com.

## Photography

All photos are CC0 / public domain from Wikimedia Commons (no attribution required). Ship names were cropped
or painted out so no third-party vessel appears to belong to Maru Maritime.

- `public/images/hero.jpg`: "Bulk carrier Nyon" (Wikimedia Commons, CC0), bow name removed
- `public/images/detail.jpg`: "Equinox Dream. Bulk Carrier", Bernard Spragg (Wikimedia Commons, CC0), cropped
- `public/images/band.jpg`: "PAIWAN WISDOM. Bulk Carrier" (Wikimedia Commons, CC0), cropped

Replace these with Maru Maritime's own photography when available.

## Hosting (GitHub Pages + Porkbun)

The site deploys automatically via `.github/workflows/deploy.yml` on every push. `public/CNAME` sets the
custom domain to `marumaritime.com`.

One-time setup:

1. **GitHub → Settings → Pages**: set *Source* to **GitHub Actions**. (Pages on a private repository needs a
   paid GitHub plan; on a free plan the repository must be public.)
2. **Porkbun → marumaritime.com → DNS**: delete Porkbun's default parking records (`ALIAS`/`CNAME` pointing to
   `pixie.porkbun.com` or similar). **Do not touch the Google `MX`, `TXT` (SPF/verification) or DKIM records.**
   Then add:

   | Type  | Host  | Answer                        |
   |-------|-------|-------------------------------|
   | A     | (blank) | 185.199.108.153             |
   | A     | (blank) | 185.199.109.153             |
   | A     | (blank) | 185.199.110.153             |
   | A     | (blank) | 185.199.111.153             |
   | AAAA  | (blank) | 2606:50c0:8000::153         |
   | AAAA  | (blank) | 2606:50c0:8001::153         |
   | AAAA  | (blank) | 2606:50c0:8002::153         |
   | AAAA  | (blank) | 2606:50c0:8003::153         |
   | CNAME | www   | kaevelsan2073-a11y.github.io  |

3. Back in **Settings → Pages**, confirm the custom domain shows `marumaritime.com`, wait for the DNS check to
   pass, then tick **Enforce HTTPS**.
