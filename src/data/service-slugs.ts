/**
 * Stable service ids (the original Turkish slugs) → localized URL slugs.
 * Ids are what data files reference (related services, sectors, scenarios, form values).
 */
export const serviceSlugs: Record<string, { en: string; tr: string }> = {
  'kargo-charter': { en: 'cargo-charter', tr: 'kargo-charter' },
  'agir-yuk-charter': { en: 'heavy-outsized-cargo', tr: 'agir-yuk-charter' },
  'tehlikeli-madde-charter': { en: 'dangerous-goods', tr: 'tehlikeli-madde-charter' },
  'acil-kritik-zamanli-charter': { en: 'time-critical-charter', tr: 'acil-kritik-zamanli-charter' },
  'canli-hayvan-charter': { en: 'live-animal-charter', tr: 'canli-hayvan-charter' },
  'vip-ozel-jet-charter': { en: 'vip-private-jet-charter', tr: 'vip-ozel-jet-charter' },
  'yolcu-grup-charter': { en: 'passenger-group-charter', tr: 'yolcu-grup-charter' },
  'ambulans-ucak': { en: 'air-ambulance', tr: 'ambulans-ucak' },
  'devlet-askeri-charter': { en: 'government-military-charter', tr: 'devlet-askeri-charter' },
  'yardim-malzemesi-charter': { en: 'humanitarian-aid-charter', tr: 'yardim-malzemesi-charter' },
  'eglence-spor-charter': { en: 'entertainment-sports-charter', tr: 'eglence-spor-charter' },
};
