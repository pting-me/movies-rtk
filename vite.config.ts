/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getAliasEntries } from './tools/build/vite.utils';
import ImportMetaEnvPlugin from '@import-meta-env/unplugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ImportMetaEnvPlugin.vite({
      example: '.env.example',
    }),
  ],
  resolve: {
    alias: [...getAliasEntries()],
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tools/test/vitest.setup.ts',
    css: true,
  },
});
