/**
 * Base-path aware URL helpers.
 *
 * The site can be served from the domain root (production) or from a sub-path such as
 * `https://<user>.github.io/<repo>/` (GitHub Pages preview). Every internal link and
 * public asset must go through `withBase` so both setups work from the same source.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '' at the root, '/repo' on a sub-path

/** Prefixes a root-relative path ("/kurumsal", "/favicon.svg") with the configured base. Idempotent. */
export const withBase = (path: string): string => {
  if (!path.startsWith('/') || path.startsWith('//')) return path; // anchors, mailto:, tel:, absolute URLs
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  return path === '/' ? `${base}/` : `${base}${path}`;
};

/** Removes the base from a pathname so routes can be compared regardless of where the site is hosted. */
export const stripBase = (pathname: string): string => {
  const p = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return p.replace(/\/$/, '') || '/';
};
