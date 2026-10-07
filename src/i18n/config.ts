import { withBase, stripBase } from '@/utils/paths';
import { serviceSlugs } from '@/data/service-slugs';
import { projectSlugs } from '@/data/project-slugs';

export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; name: string; htmlLang: string; og: string }> = {
  en: { label: 'EN', name: 'English', htmlLang: 'en', og: 'en_US' },
  tr: { label: 'TR', name: 'Türkçe', htmlLang: 'tr', og: 'tr_TR' },
};

/** Route keys → per-locale paths (without base). English lives at the root, Turkish under /tr. */
export const routes = {
  home: { en: '/', tr: '/tr' },
  about: { en: '/about', tr: '/tr/kurumsal' },
  services: { en: '/services', tr: '/tr/hizmetler' },
  industries: { en: '/industries', tr: '/tr/sektorler' },
  projects: { en: '/projects', tr: '/tr/projeler' },
  contact: { en: '/contact', tr: '/tr/iletisim' },
  privacy: { en: '/privacy', tr: '/tr/kvkk' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

/** Base-aware URL for a static page. `hash`/`query` are appended verbatim. */
export const pathTo = (locale: Locale, key: RouteKey, suffix = '') => withBase(`${routes[key][locale]}${suffix}`);

/** Base-aware URL for a service detail page, addressed by its stable id. */
export const servicePath = (locale: Locale, id: string) =>
  withBase(`${routes.services[locale]}/${serviceSlugs[id]?.[locale] ?? id}`);

/** Base-aware URL for a project detail page, addressed by its stable id. */
export const projectPath = (locale: Locale, id: string) =>
  withBase(`${routes.projects[locale]}/${projectSlugs[id]?.[locale] ?? id}`);

/** Locale of a URL: everything under /tr is Turkish, the rest is English. */
export const getLocale = (url: URL): Locale => {
  // During the build pages are addressed as files ("/tr.html"), at runtime without the extension.
  const p = stripBase(url.pathname.replace(/\.html$/, ''));
  return p === '/tr' || p.startsWith('/tr/') ? 'tr' : 'en';
};

/**
 * Translates the current page URL into the same page in another locale, so switching languages
 * keeps the visitor where they are. Falls back to the target locale's home page.
 */
export const translatePath = (url: URL, target: Locale): string => {
  const current = getLocale(url);
  const p = stripBase(url.pathname).replace(/\.html$/, '');

  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key][current] === p) return pathTo(target, key);
  }

  const servicesRoot = routes.services[current];
  if (p.startsWith(`${servicesRoot}/`)) {
    const slug = p.slice(servicesRoot.length + 1);
    const id = Object.keys(serviceSlugs).find((k) => serviceSlugs[k][current] === slug);
    if (id) return servicePath(target, id);
  }

  const projectsRoot = routes.projects[current];
  if (p.startsWith(`${projectsRoot}/`)) {
    const slug = p.slice(projectsRoot.length + 1);
    const id = Object.keys(projectSlugs).find((k) => projectSlugs[k][current] === slug);
    if (id) return projectPath(target, id);
  }

  return pathTo(target, 'home');
};

/** Anchor of the quote form on the contact page */
export const quoteHash: Record<Locale, string> = { en: '#quote', tr: '#teklif' };
