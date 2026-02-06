# Mugisha Micheal Portfolio

Modern, premium, and fully responsive Software Engineer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- React + Next.js (Pages Router)
- Tailwind CSS design system with glassmorphism
- Framer Motion and Intersection Observer animations
- Responsive layout with sticky navigation
- Dynamic project case study pages
- SEO-ready metadata and OpenGraph tags

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
```

The static export output will be in the `out/` directory for deployment to static hosts.

To preview the static export locally, serve the `out/` directory with any static file server.

```bash
npm run start
```

## Project Structure

```
src/
 ├─ components/
 ├─ pages/
 ├─ styles/
 ├─ data/
 └─ utils/
```

## Deployment

Optimized for Vercel deployment. Push to GitHub and import the repository in Vercel.

### Netlify

If deploying to Netlify, set the build command to `npm run build` and the publish directory to `out`.
This repository includes a `netlify.toml` file with these settings preconfigured.
