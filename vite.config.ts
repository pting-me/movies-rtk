/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getAliasEntries } from './tools/build/vite.utils';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [...getAliasEntries()],
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tools/test/vitest.setup.ts',
    css: true,
  },
});
