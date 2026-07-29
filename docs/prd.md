# Product Requirements Document (PRD) - Tool Hub Platform

## 1. Executive Summary
Tool Hub is a high-end, Awwwards-tier web utility studio consolidating **Generative Naming** (`names.317713.xyz`) and **Precision Calculators** (`calculators.317713.xyz`) into a unified, high-performance web experience. Refactored under **High-End Visual Design** & **Motion Choreography** skill frameworks.

## 2. Aesthetic & Visual Architecture
- **Aesthetic Vibe**: Ethereal Glass (OLED dark / crisp light theme with ambient OKLCH mesh glows and subtle grain overlay).
- **Container Architecture**: Doppelrand (Double-Bezel) nested shell architecture (`card-shell` outer ring + `card-inner` concentric core with inset highlights).
- **Button Architecture**: Nested Button-in-Button trailing icon circles (`card-arrow` & `site-tab`).
- **Typography & Rhythm**: Bricolage Grotesque display headings + Geist body fonts with eyebrow pill tags (`text-[10px] tracking-[0.2em]`).
- **Motion Choreography**: Hardware-accelerated GPU transitions with `--ease-out-expo` curves, keyboard search reveals, and `prefers-reduced-motion` compliance.

## 3. Core Capabilities & Elements
- **Dual-Hub Switcher**: Instant tab switching between Name Generators (23 tools) and Calculators (34 tools).
- **Global Quick Search (Ctrl+K)**: Keyboard-navigable quick search modal overlay.
- **Starred Favorites**: LocalStorage-backed bookmarking system.
- **Comprehensive Route Network**:
  - `/` (Hub Homepage)
  - `/tools/$slug` (Tool Landing Page)
  - `/about` (Platform Mission)
  - `/contact` (Tool Request & Feedback)
  - `/privacy` (Zero-Tracking Privacy Policy)
  - `/terms` (Terms of Service)
