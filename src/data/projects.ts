import type { ImageMetadata } from 'astro';
import type { Locale } from '@/i18n/config';
import { projectPath } from '@/i18n/config';

/**
 * Projects = folders in the brand's photo archive ("Markadan gelen görseller").
 * Everything written here comes from the folder name or from the brand's own notes
 * (.docx files inside the folders). Nothing is inferred: no dates, tonnages, aircraft
 * types or clients are stated unless the source says so.
 */

type L = Record<Locale, string>;
type Place = { name: L; lon: number; lat: number };

export interface Project {
  id: string;
  /** Original archive folder name — the single source of truth for the project */
  folder: string;
  title: L;
  /** Origin / destination exactly as the folder name states them */
  from?: Place;
  to?: Place;
  cargo: L;
  tag: L;
  /** Brand-supplied note (from the .docx in the folder), if any */
  note?: L;
  service: string;
  video?: { src: string };
}

const places = {
  istanbul: { name: { en: 'Istanbul', tr: 'İstanbul' }, lon: 28.97, lat: 41.01 },
  adana: { name: { en: 'Adana', tr: 'Adana' }, lon: 35.32, lat: 37.0 },
  baghdad: { name: { en: 'Baghdad', tr: 'Bağdat' }, lon: 44.36, lat: 33.31 },
  ankara: { name: { en: 'Ankara Esenboğa', tr: 'Ankara Esenboğa' }, lon: 32.99, lat: 40.13 },
  niamey: { name: { en: 'Niamey', tr: 'Niamey' }, lon: 2.11, lat: 13.51 },
  frankfurt: { name: { en: 'Frankfurt', tr: 'Frankfurt' }, lon: 8.68, lat: 50.11 },
  london: { name: { en: 'London', tr: 'Londra' }, lon: -0.45, lat: 51.47 },
  hongKong: { name: { en: 'Hong Kong', tr: 'Hong Kong' }, lon: 113.92, lat: 22.31 },
  riyadh: { name: { en: 'Riyadh', tr: 'Riyad' }, lon: 46.72, lat: 24.71 },
  ndjamena: { name: { en: 'N’Djamena', tr: 'N’Djamena' }, lon: 15.04, lat: 12.13 },
  liege: { name: { en: 'Liège', tr: 'Liège' }, lon: 5.57, lat: 50.63 },
  kigali: { name: { en: 'Kigali', tr: 'Kigali' }, lon: 30.06, lat: -1.95 },
  sudan: { name: { en: 'Sudan', tr: 'Sudan' }, lon: 30.2, lat: 15.5 },
  afghanistan: { name: { en: 'Afghanistan', tr: 'Afganistan' }, lon: 67.7, lat: 34.5 },
  urumqi: { name: { en: 'Ürümqi', tr: 'Urumçi' }, lon: 87.47, lat: 43.91 },
  ashgabat: { name: { en: 'Ashgabat', tr: 'Aşkabat' }, lon: 58.36, lat: 37.98 },
} satisfies Record<string, Place>;

const list: Project[] = [
  {
    id: 'hong-kong-riyadh',
    folder: 'Hongkong - Riyad',
    title: { en: 'Hong Kong – Riyadh Bridge Components', tr: 'Hong Kong – Riyad Köprü Bileşenleri' },
    from: places.hongKong,
    to: places.riyadh,
    cargo: { en: 'Bridge pylon components', tr: 'Köprü direği bileşenleri' },
    tag: { en: 'Project cargo', tr: 'Proje kargosu' },
    note: {
      en: 'We flew the pylon components of the largest bridge in the Middle East, a €1.5 billion project, from Hong Kong International Airport to Riyadh.',
      tr: 'Orta Doğu’nun en büyük köprüsünün, 1,5 milyar euroluk projenin direk bileşenlerini Hong Kong Uluslararası Havalimanı’ndan Riyad’a taşıdık.',
    },
    service: 'agir-yuk-charter',
  },
  {
    id: 'oruc-reis-spare-parts',
    folder: 'Oruç reis yedek parça',
    title: { en: 'Oruç Reis Spare Parts', tr: 'Oruç Reis Yedek Parçaları' },
    cargo: { en: 'Vessel spare parts', tr: 'Gemi yedek parçaları' },
    tag: { en: 'Recurring operation', tr: 'Düzenli operasyon' },
    note: {
      en: 'Spare parts for the Oruç Reis vessel, which is drilling for oil off Somalia. We carry these parts every week.',
      tr: 'Somali’de petrol arayan Oruç Reis gemisinin yedek parçalarını taşıyoruz. Her hafta.',
    },
    service: 'kargo-charter',
  },
  {
    id: 'istanbul-ndjamena-dangerous-goods',
    folder: 'Istanbul - N’Djamena Tehlikeli Madde Taşıması',
    title: { en: 'Istanbul – N’Djamena Dangerous Goods', tr: 'İstanbul – N’Djamena Tehlikeli Madde Taşıması' },
    from: places.istanbul,
    to: places.ndjamena,
    cargo: { en: 'Dangerous goods', tr: 'Tehlikeli madde' },
    tag: { en: 'Dangerous goods', tr: 'Tehlikeli madde' },
    service: 'tehlikeli-madde-charter',
  },
  {
    id: 'afghanistan-prefabricated-hospital',
    folder: 'Afganistan prefabrik hastane',
    title: { en: 'Prefabricated Hospital for Afghanistan', tr: 'Afganistan Prefabrik Hastane' },
    to: places.afghanistan,
    cargo: { en: 'Prefabricated hospital modules', tr: 'Prefabrik hastane modülleri' },
    tag: { en: 'Outsized cargo', tr: 'Büyük hacimli yük' },
    service: 'agir-yuk-charter',
  },
  {
    id: 'istanbul-niamey-gold-exploration',
    folder: 'İstanbul’dan - nijer başkenti iyame',
    title: { en: 'Istanbul – Niamey Gold Exploration Equipment', tr: 'İstanbul – Niamey Altın Arama Ekipmanları' },
    from: places.istanbul,
    to: places.niamey,
    cargo: { en: 'Gold exploration equipment', tr: 'Altın arama ekipmanları' },
    tag: { en: 'Mining equipment', tr: 'Maden ekipmanı' },
    note: {
      en: 'Gold exploration equipment flown from Istanbul to Niamey, the capital of Niger.',
      tr: 'Altın arama ekipmanları İstanbul’dan Nijer’in başkenti Niamey’e taşındı.',
    },
    service: 'agir-yuk-charter',
  },
  {
    id: 'ataturk-airport-last-flight',
    folder: 'Atatürk Havalimanı Son Uçuşu',
    title: { en: 'Atatürk Airport — The Last Flight', tr: 'Atatürk Havalimanı Son Uçuşu' },
    from: places.istanbul,
    cargo: { en: 'Cargo charter', tr: 'Kargo charter' },
    tag: { en: 'Milestone', tr: 'Kilometre taşı' },
    service: 'kargo-charter',
    video: { src: 'media/projects/ataturk-airport-last-flight.mp4' },
  },
  {
    id: 'london-istanbul-aircraft-engine',
    folder: 'Londra - İstanbul Uçak Motoru Taşıması',
    title: { en: 'London – Istanbul Aircraft Engine', tr: 'Londra – İstanbul Uçak Motoru Taşıması' },
    from: places.london,
    to: places.istanbul,
    cargo: { en: 'Aircraft engine', tr: 'Uçak motoru' },
    tag: { en: 'Aircraft engine', tr: 'Uçak motoru' },
    service: 'agir-yuk-charter',
  },
  {
    id: 'adana-baghdad-fire-engine',
    folder: 'Adana - Bağdat İtfaiye Taşıması',
    title: { en: 'Adana – Baghdad Fire Engine', tr: 'Adana – Bağdat İtfaiye Taşıması' },
    from: places.adana,
    to: places.baghdad,
    cargo: { en: 'Fire engine', tr: 'İtfaiye aracı' },
    tag: { en: 'Vehicle', tr: 'Araç' },
    service: 'agir-yuk-charter',
  },
  {
    id: 'liege-kigali-mri-equipment',
    folder: 'Liege - Kigali Rwanda kralının MR makinesi ve ekipmanları',
    title: { en: 'Liège – Kigali MRI Equipment', tr: 'Liège – Kigali MR Cihazı ve Ekipmanları' },
    from: places.liege,
    to: places.kigali,
    cargo: { en: 'MRI machine and equipment', tr: 'MR makinesi ve ekipmanları' },
    tag: { en: 'Medical equipment', tr: 'Tıbbi ekipman' },
    service: 'kargo-charter',
  },
  {
    id: 'ankara-niamey-dangerous-goods',
    folder: 'Esenboğa - Niamey tehlikeli madde',
    title: { en: 'Ankara Esenboğa – Niamey Dangerous Goods', tr: 'Esenboğa – Niamey Tehlikeli Madde' },
    from: places.ankara,
    to: places.niamey,
    cargo: { en: 'Dangerous goods', tr: 'Tehlikeli madde' },
    tag: { en: 'Dangerous goods', tr: 'Tehlikeli madde' },
    service: 'tehlikeli-madde-charter',
  },
  {
    id: 'frankfurt-istanbul-aircraft-engine',
    folder: 'Frankfurt - İstanbul uçak motoru taşıması',
    title: { en: 'Frankfurt – Istanbul Aircraft Engine', tr: 'Frankfurt – İstanbul Uçak Motoru Taşıması' },
    from: places.frankfurt,
    to: places.istanbul,
    cargo: { en: 'Aircraft engine', tr: 'Uçak motoru' },
    tag: { en: 'Aircraft engine', tr: 'Uçak motoru' },
    service: 'agir-yuk-charter',
  },
  {
    id: 'urumqi-ashgabat-hospital-equipment',
    folder: 'Urumqi - Aşkabat Hastahane Projesi Ekipmanları',
    title: { en: 'Ürümqi – Ashgabat Hospital Project Equipment', tr: 'Urumçi – Aşkabat Hastane Projesi Ekipmanları' },
    from: places.urumqi,
    to: places.ashgabat,
    cargo: { en: 'Hospital project equipment', tr: 'Hastane projesi ekipmanları' },
    tag: { en: 'Project cargo', tr: 'Proje kargosu' },
    service: 'kargo-charter',
  },
  {
    id: 'istanbul-sudan-military-supplies',
    folder: 'İstanbulda -   sudan askeriyesi botları git üniforma',
    title: { en: 'Istanbul – Sudan Military Supplies', tr: 'İstanbul – Sudan Askeri Malzeme' },
    from: places.istanbul,
    to: places.sudan,
    cargo: { en: 'Boots and uniforms for the Sudanese army', tr: 'Sudan ordusu için bot ve üniforma' },
    tag: { en: 'Government & military', tr: 'Devlet & askeri' },
    service: 'devlet-askeri-charter',
  },
  {
    id: 'civil-helicopter-transport',
    folder: 'Sivil Helikopter Taşıması',
    title: { en: 'Civil Helicopter Transport', tr: 'Sivil Helikopter Taşıması' },
    cargo: { en: 'Civil helicopter', tr: 'Sivil helikopter' },
    tag: { en: 'Aircraft', tr: 'Hava aracı' },
    service: 'agir-yuk-charter',
  },
];

/* ------------------------------------------------------------------ Images */

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/*/[0-9][0-9].jpg', { eager: true });
const posters = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/*/poster.jpg', { eager: true });

const imagesOf = (id: string) =>
  Object.keys(files)
    .filter((k) => k.includes(`/projects/${id}/`))
    .sort()
    .map((k) => files[k].default);

/** Real UAC photo by project id and 1-based position (used across the site). */
export const projectImage = (id: string, n = 1): ImageMetadata => {
  const img = imagesOf(id)[n - 1];
  if (!img) throw new Error(`Missing project image ${id} #${n}`);
  return img;
};

/* ------------------------------------------------------------------ Localized access */

export interface LocalizedProject {
  id: string;
  folder: string;
  href: string;
  title: string;
  from?: { name: string; lon: number; lat: number };
  to?: { name: string; lon: number; lat: number };
  route?: string;
  cargo: string;
  tag: string;
  note?: string;
  service: string;
  cover: ImageMetadata;
  images: ImageMetadata[];
  video?: { src: string; poster?: ImageMetadata };
}

const place = (p: Place | undefined, locale: Locale) => (p ? { name: p.name[locale], lon: p.lon, lat: p.lat } : undefined);

export const getProjects = (locale: Locale): LocalizedProject[] =>
  list.map((p) => {
    const images = imagesOf(p.id);
    const from = place(p.from, locale);
    const to = place(p.to, locale);
    return {
      id: p.id,
      folder: p.folder,
      href: projectPath(locale, p.id),
      title: p.title[locale],
      from,
      to,
      route: from && to ? `${from.name} → ${to.name}` : (to?.name ?? from?.name),
      cargo: p.cargo[locale],
      tag: p.tag[locale],
      note: p.note?.[locale],
      service: p.service,
      cover: images[0],
      images,
      video: p.video ? { src: p.video.src, poster: posters[`/src/assets/projects/${p.id}/poster.jpg`]?.default } : undefined,
    };
  });

export const getProject = (locale: Locale, id: string) => getProjects(locale).find((p) => p.id === id);
