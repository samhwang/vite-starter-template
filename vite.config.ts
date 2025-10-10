/// <reference types="vitest" />
/// <reference types="vite/client" />

import { tanstackRouter } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tanstackRouter()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**/*'],
      exclude: ['src/routeTree.gen.ts'],
    },
    typecheck: {
      enabled: true,
    },
  },
});
