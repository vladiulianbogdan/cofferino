// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  redirects: {
    '/after-school': '/afterschool',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
