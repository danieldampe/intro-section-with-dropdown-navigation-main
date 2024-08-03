import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://danieldampe.github.io',
  base: 'intro-section-with-dropdown-navigation-main',
  integrations: [tailwind()]
})
