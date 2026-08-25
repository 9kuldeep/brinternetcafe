# B.R Internet Cafe & Jan Seva Kendra

A responsive React, Vite, and Tailwind CSS website for local digital service assistance.

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Business Information

Copy `.env.example` to `.env.local` for deployment-specific values, then update the values there. The fallback placeholders and configuration mapping are in [src/config/business.js](src/config/business.js).

Required business details:

- Phone number
- WhatsApp number
- Exact shop address
- Opening hours
- Google Maps URL
- Optional Google Maps embed URL

No customer information is sent to a backend or stored by this frontend. Service requests are formatted locally and opened in WhatsApp.

## Brand Assets

Replace the logo at `public/images/br-logo.svg`. The favicon is at `public/images/favicon.svg`. Add approved shop photos to `public/images/` if a gallery is added later; no business photos are included until real images are supplied.

## Deployment

This is a static Vite site and is suitable for Vercel, Netlify, or GitHub Pages. Use the repository root as the project directory, `npm run build` as the build command, and `dist` as the publish directory. Set the `VITE_*` values from `.env.example` in the hosting provider's environment settings. Never commit `.env.local` or real credentials.
