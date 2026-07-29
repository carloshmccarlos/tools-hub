# System Architecture - Tool Hub

## Directory Layout & Component Structure
```
src/
├── components/
│   ├── BackToTop.tsx          # Floating smooth scroll-to-top button (1 Component)
│   ├── ClientOnly.tsx         # SSR boundary fallback renderer (1 Component)
│   ├── FaqSection.tsx         # Interactive FAQ accordion component (1 Component)
│   ├── FavoritesSection.tsx   # Saved tools shelf & filter pill (1 Component)
│   ├── FeatureGrid.tsx        # Platform core feature highlights (1 Component)
│   ├── Footer.tsx             # Multi-column footer & status indicator (1 Component)
│   ├── Header.tsx             # Navbar with brand logo, nav links, quick search trigger & theme toggle (1 Component)
│   ├── HeroStats.tsx          # Key metrics & stat counter badges (1 Component)
│   ├── QuickSearchModal.tsx   # Ctrl+K modal overlay with real-time tool search (1 Component)
│   ├── SeoSchema.tsx          # JSON-LD structured data generator (1 Component)
│   ├── ThemeToggle.tsx        # Light/Dark mode switcher (1 Component)
│   └── ToolCard.tsx           # Doppelrand double-bezel tool card with star toggle (1 Component)
├── data/
│   └── tools.ts               # Central tool registry metadata (57+ tools)
├── routes/
│   ├── __root.tsx             # Global layout wrapper with theme providers & scripts
│   ├── index.tsx              # Main Hub homepage
│   ├── about.tsx              # About ToolHub page
│   ├── contact.tsx            # Contact & Tool Request page
│   ├── privacy.tsx            # Privacy Policy page
│   ├── terms.tsx              # Terms of Service page
│   └── tools.$slug.tsx        # Tool Detail landing page route
├── styles/
│   └── app.css                # OKLCH tokens, glassmorphism, keyframe animations & utilities
└── types/
    └── tool.ts                # TypeScript interfaces for tools and categories
```

## Skill Integration Directives
1. **High-End Agency Polish**: Doppelrand nested cards, concentric border radii, eyebrow tags, and island button patterns.
2. **Motion Choreography**: Smooth entrance reveals, staggered delays, custom `--ease-out-expo` curves, and reduced-motion fallback.
3. **Max 1 React Component per File**: Strict compliance across all files under `components/` and `routes/`.
4. **Docs First Policy**: All codebase changes are pre-documented in `/docs`.
5. **pnpm Enforcement**: All command invocations strictly use `pnpm`.
