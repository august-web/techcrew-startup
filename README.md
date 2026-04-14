# TechCrew Startup Website

TechCrew's official multi-page startup/community website built with React, TypeScript, and Vite.

## About This Project

This project presents TechCrew's mission, team, technology tracks, and community initiatives in a modern, animated, and mobile-friendly experience.

The site includes dedicated pages for:
- Home
- About
- Fields (Programming, Cybersecurity, AI, Robotics)
- Projects
- Team
- Contact

## Key Features

- Responsive layout for desktop and mobile
- Animated section and route transitions with Framer Motion
- Dark and light theme toggle with persistence
- Centralized content configuration via `src/data/siteContent.ts`
- Hash-based routing for static hosting compatibility
- Single-file production build output via `vite-plugin-singlefile`

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- React Router DOM 7
- Framer Motion
- Lucide React

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/    # Shared UI and layout components
  pages/         # Route-level pages
  sections/      # Home and page section blocks
  data/          # Content and structured site data
  hooks/         # Reusable custom hooks (theme)
  styles/        # Theme variables
  utils/         # Utility helpers
public/
  images/        # Static assets (hero, team, branding)
```

## Production Check

The project has been validated with:

```bash
npm run build
```

Build output generated successfully to `dist/index.html`.

