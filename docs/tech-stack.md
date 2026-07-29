# Technical Stack Document - Tool Hub

## 1. Package Manager
- **pnpm**: Exclusive package manager for the project. Never use `npm` or `bun`.

## 2. Core Framework & Engine
- **TanStack Start**: SSR / SSG React framework for high-efficiency hydration and full-stack route integration.
- **TanStack Router**: File-system based type-safe routing.
- **React 18**: Frontend UI library (Enforcing strict **Max 1 React Component per File** rule across the entire codebase).
- **Vite 7**: Lightning-fast build tool and development server.

## 3. Design System & Skill Frameworks
- **High-End Visual Design Skill**: Doppelrand double-bezel cards, concentric border radii, eyebrow tags, and island button patterns.
- **Motion & Micro-Interactions Skill**: Cubic-bezier curves (`--ease-out-expo`), GPU-safe transforms/opacity animations, and `prefers-reduced-motion` media queries.
- **OKLCH Design Tokens**: OKLCH color space for vibrant light & dark mode themes.
- **Typography**: `Bricolage Grotesque` display typography and `Geist` UI body font.

## 4. State & Utility Architecture
- **LocalStorage Persistence**: Browser storage for theme preferences and starred tool bookmarks.
- **Tool Registry**: Centralized tool metadata catalog (`src/data/tools.ts`).
- **SEO & Schema Engine**: Component-driven JSON-LD injection for structured data search engine rich snippets.

## 5. Cloudflare Runtime Strategy
- **Cloudflare Workers** serves the TanStack Start SSR response and static client assets.
- **Client takeover** uses React `createRoot(document)` instead of hydration. This avoids failures when Cloudflare Web Analytics or browser extensions mutate the document before the application boots.
- **Favicon**: `/favicon.svg` is declared through both standard and legacy icon relations; Workers static-asset redirects map `/favicon.ico` to the SVG asset.
- **Custom Production Domain**: `https://317713.xyz` is declared as the main production domain, with sitemap available at `https://317713.xyz/sitemap.xml`.

