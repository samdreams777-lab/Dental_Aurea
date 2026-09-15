import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://samdreams777-lab.github.io',
  base: '/Dental_Aurea/',
});