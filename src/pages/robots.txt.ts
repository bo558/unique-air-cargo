import type { APIRoute } from 'astro';

// Preview builds (GitHub Pages) block crawlers entirely; production points them to the sitemap.
export const GET: APIRoute = ({ site }) => {
  const isPreview = import.meta.env.PUBLIC_PREVIEW === 'true';
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site).href;
  const body = isPreview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
