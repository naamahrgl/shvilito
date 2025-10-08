// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  vite: {
    /** @type {any} */
    plugins: tailwindcss(),
  },
  integrations: [react()],
  adapter: netlify(),
});
