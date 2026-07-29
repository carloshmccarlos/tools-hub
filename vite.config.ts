import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    // Avoid Vite's document.head-based dynamic import preloader. A third-party
    // document rewrite must not prevent a route chunk from loading.
    modulePreload: false,
  },
  plugins: [
    tanstackStart(),
    react(),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],
});
