export const site = {
  name: 'Unique Air Cargo',
  legalName: 'Unique Air Cargo',
  tagline: 'Above All, We Care',
  url: 'https://www.uniqueaircargo.com',
  locale: 'tr_TR',
  defaultDescription:
    'Unique Air Cargo; İstanbul merkezli, kargo, yolcu ve özel operasyonlar için charter uçak kiralama hizmeti sunan havacılık şirketidir. Ağır yük, tehlikeli madde, acil sevkiyat, VIP jet ve ambulans uçak çözümleri.',
  contact: {
    phone: '+90 535 216 65 05',
    phoneHref: 'tel:+905352166505',
    email: 'charter@uniqueaircargo.com',
    address: {
      street: 'Caferağa Mahallesi Şifa Sokak No:19',
      district: 'Moda, Kadıköy',
      postalCode: '34710',
      city: 'İstanbul',
      country: 'Türkiye',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cafera%C4%9Fa+Mahallesi+%C5%9Eifa+Sokak+No%3A19+Kad%C4%B1k%C3%B6y+%C4%B0stanbul',
    mapsEmbed:
      'https://www.google.com/maps?q=Cafera%C4%9Fa+Mahallesi+%C5%9Eifa+Sokak+No:19+Kad%C4%B1k%C3%B6y+%C4%B0stanbul&output=embed',
  },
  /** Regions where the company states it has local representation (source: uniqueaircargo.com/hakkimizda). */
  regions: ['Avrupa', 'BDT Ülkeleri', 'Rusya', 'Afrika', 'Orta Doğu', 'Uzak Doğu', 'ABD'],
} as const;

export const mainNav = [
  { label: 'Kurumsal', href: '/kurumsal' },
  { label: 'Hizmetlerimiz', href: '/hizmetler', mega: true },
  { label: 'Sektörler', href: '/sektorler' },
  { label: 'İletişim', href: '/iletisim' },
] as const;
