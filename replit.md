# Moe Barbar Portfolio Website

## Overview

This is a personal portfolio website for Moe Barbar, a Full-Stack Web Developer. The site showcases frontend expertise through a highly interactive, dark-mode-first design with smooth animations, a blog system, and a contact form. It's built as a monorepo with a React frontend and Express backend, using PostgreSQL for data persistence.

The site includes: Hero section, About, Skills, Code Showcase, Projects (with live iframe previews), Experience timeline, Blog (with full CRUD), Contact form, and a responsive Navbar with smooth scroll navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The project follows a three-directory monorepo pattern:
- `client/` — React SPA (Vite-powered)
- `server/` — Express API server
- `shared/` — Shared TypeScript types and database schema (used by both client and server)

This structure allows the frontend and backend to share type definitions and validation schemas, avoiding duplication.

### Frontend Architecture
- **Framework**: React with TypeScript
- **Bundler**: Vite (dev server on port 5000, HMR via custom `server/vite.ts` middleware in development)
- **Routing**: Wouter (lightweight client-side router) with lazy-loaded pages for Blog and BlogPost
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin) with CSS custom properties for theming, dark-mode-first design
- **UI Components**: shadcn/ui (new-york style) — extensive component library in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-based reveals, hover effects, and page transitions
- **State/Data Fetching**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation (via `@hookform/resolvers`)
- **Fonts**: Syne (artistic headers), Space Grotesk (technical headers), Inter (body) — loaded from Google Fonts
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript, executed via `tsx` in development
- **API Design**: RESTful JSON API with routes defined in `server/routes.ts`
- **Endpoints**:
  - `POST /api/contact` — Submit contact form (validated with Zod)
  - `GET /api/blog` — List blog posts (optional `?limit=N` query param)
  - `GET /api/blog/:slug` — Get single blog post by slug
- **Static Assets**: `attached_assets/` served at `/assets` route for portfolio images
- **Production Build**: esbuild bundles the server to `dist/index.cjs`; Vite builds the client to `dist/public/`; the Express server serves the static build in production via `server/static.ts`
- **Blog Seeding**: On startup, `server/blogSeed.ts` seeds the database with initial blog posts if none exist

### Database
- **Database**: PostgreSQL (required, connection via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation
- **Schema** (`shared/schema.ts`):
  - `contact_messages` table: id (UUID), name, email, message, createdAt
  - `blog_posts` table: id (UUID), slug (unique), title, excerpt, content, coverImage, publishedAt, tags (text array), createdAt
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Storage Layer**: `server/storage.ts` implements `IStorage` interface with `DatabaseStorage` class using Drizzle queries

### Build System
- **Development**: `npm run dev` starts the Express server with Vite middleware for HMR
- **Production Build**: `npm run build` runs `script/build.ts` which builds the Vite client and bundles the server with esbuild
- **Production Start**: `npm start` runs `node dist/index.cjs`
- **Database Push**: `npm run db:push` synchronizes schema to PostgreSQL

### Key Design Decisions
1. **Dark-mode-first theming**: CSS variables defined in `:root` default to dark colors; the entire palette is controlled via HSL custom properties for easy theming
2. **Shared schema validation**: Using `drizzle-zod` to generate Zod schemas from Drizzle table definitions ensures frontend form validation matches backend expectations exactly
3. **Lazy loading**: Blog pages are lazy-loaded to keep the initial bundle small since the home page is the primary landing experience
4. **iframe project previews**: Projects section uses iframes to show live previews of deployed projects, with IntersectionObserver for lazy loading
5. **No authentication**: This is a public portfolio site — no auth system is needed

## External Dependencies

### Required Services
- **PostgreSQL Database**: Required. Connection string must be provided via `DATABASE_URL` environment variable. Used for storing contact form submissions and blog posts.

### Key NPM Packages
- **Frontend**: React, Wouter, Framer Motion, TanStack React Query, React Hook Form, Zod, shadcn/ui (Radix UI primitives), Tailwind CSS, Embla Carousel, date-fns
- **Backend**: Express, Drizzle ORM, pg (node-postgres), connect-pg-simple, zod-validation-error
- **Build**: Vite, esbuild, tsx, drizzle-kit

### External Resources
- **Google Fonts**: Syne, Space Grotesk, Inter (loaded via CDN in `index.html`)
- **Grainy Gradients**: External SVG noise texture from `grainy-gradients.vercel.app` used for visual effects

### Replit-Specific Integrations
- `@replit/vite-plugin-runtime-error-modal` — Error overlay in development
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)
- Custom `vite-plugin-meta-images.ts` — Updates OpenGraph meta tags with Replit deployment URLs