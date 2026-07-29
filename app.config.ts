import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        preset: 'cloudflare-pages',
      },
    }),
    react(),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],
});
