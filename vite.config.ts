/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import reactBabel from '@vitejs/plugin-react';
import reactSwc from '@vitejs/plugin-react-swc';

// TOGGLE THIS IF YOU SEE STRANGE BEHAVIOR IN YOUR APP.
// See README of plugin-react-swc: https://github.com/vitejs/vite-plugin-react-swc
const useSwc = true;
const react = useSwc ? reactSwc : reactBabel;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      enabled: true,
    },
  },
});
