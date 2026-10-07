// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * SITE_URL / BASE_PATH let the same source deploy to the real domain (defaults) or to a
 * sub-path such as https://<user>.github.io/<repo>/ — the GitHub Pages workflow sets both.
 */
const site = process.env.SITE_URL || 'https://www.uniqueaircargo.com';
const base = process.env.BASE_PATH || '/';
// Optional: build outside the project folder (e.g. to keep OneDrive from syncing/deleting build output)
const outDir = process.env.OUT_DIR || './dist';

export default defineConfig({
  site,
  base,
  outDir,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  image: {
    responsiveStyles: false,
  },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
