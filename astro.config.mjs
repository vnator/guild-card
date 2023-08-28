import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://serodio.github.io',
  base: '/',
  integrations: [react()],
  experimental: {
    assets: true,
  }
});
