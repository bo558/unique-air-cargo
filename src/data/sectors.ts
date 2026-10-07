import type { Locale } from '@/i18n/config';
import { sectorsEn } from './sectors.en';
import type { ImageMetadata } from 'astro';
import { projectImage } from './projects';

import imgStage from '@/assets/images/stage.jpg';

export interface Sector {
  id: string;
  title: string;
  challenge: string;
  body: string;
  needs: string[];
  services: string[];
  image: ImageMetadata;
  imageAlt: string;
  /** Optional industry context — market background, never a company reference. */
  context?: { label: string; text: string };
}

const uac = {
  energy: projectImage('oruc-reis-spare-parts', 2),
  construction: projectImage('hong-kong-riyadh', 2),
  aviation: projectImage('london-istanbul-aircraft-engine', 1),
  manufacturing: projectImage('istanbul-niamey-gold-exploration', 3),
  health: projectImage('liege-kigali-mri-equipment', 1),
  government: projectImage('ataturk-airport-last-flight', 3),
};

const sectorsTr: Sector[] = [
  {
    id: 'enerji',
    title: 'Enerji, Petrol & Gaz',
    challenge: 'Duran bir türbin ya da sondaj kulesi, her saat üretim kaybı demektir.',
    body: 'Santraller, sondaj sahaları ve rafineriler çoğu zaman tarifeli hava ağının uzağındadır; ihtiyaç duyulan ekipman ise büyük, ağır ve çoğunlukla aciliyet taşır. Bu sevkiyatlarda uçak seçimi kadar, sahaya en yakın uygun havalimanının belirlenmesi de belirleyicidir.',
    needs: [
      'Jeneratör, transformatör ve türbin bileşenleri',
      'Sondaj ekipmanı, borular ve kuyu başı ekipmanları',
      'Saha personeli için rotasyon uçuşları',
      'Tehlikeli madde içeren saha ekipmanı',
    ],
    services: ['agir-yuk-charter', 'acil-kritik-zamanli-charter', 'yolcu-grup-charter', 'tehlikeli-madde-charter'],
    image: uac.energy,
    imageAlt: 'Gün batımında çekici ile kargo uçağı',
  },
  {
    id: 'insaat-altyapi',
    title: 'İnşaat & Altyapı',
    challenge: 'Büyük projelerde takvimi bozan, çoğu zaman sahaya ulaşamayan tek bir ekipmandır.',
    body: 'Köprü, metro, otoyol ve enerji hattı gibi altyapı projelerinde iş makinesi parçaları, özel üretim ekipmanlar ve proje kadroları sıkı bir takvime bağlıdır. Deniz yolunun haftalar sürdüğü durumlarda, kritik kalemler için hava yolu projeyi takvimde tutar.',
    needs: [
      'İş makinesi yedek parçaları ve kritik bileşenler',
      'Özel üretim proje ekipmanları',
      'Mühendis ve saha ekipleri için grup uçuşları',
      'Şantiye kurulumu için toplu malzeme sevkiyatı',
    ],
    services: ['agir-yuk-charter', 'kargo-charter', 'yolcu-grup-charter', 'acil-kritik-zamanli-charter'],
    image: uac.construction,
    imageAlt: 'Hong Kong Havalimanı’nda köprü bileşenlerini yükleyen kamyon vinç',
    context: {
      label: 'Pazar bağlamı · Körfez',
      text: 'Suudi Arabistan başta olmak üzere Körfez ülkelerinde, Riyad gibi hızla büyüyen şehirlerde köprü, metro ve yol projelerine milyar dolarlık yatırımlar yapılıyor; Türk müteahhitler de bu projelerde önemli sözleşmeler üstleniyor. Bu ölçekteki projeler, sahaya zamanında ulaşması gereken ekipman, yedek parça ve personel için hızlı ve esnek hava taşımacılığı ihtiyacını beraberinde getiriyor.',
    },
  },
  {
    id: 'havacilik-denizcilik',
    title: 'Havacılık & Denizcilik',
    challenge: 'Yerde kalan bir uçak (AOG) ya da limanda bekleyen bir gemi, en pahalı bekleyiştir.',
    body: 'Bir motorun, iniş takımının veya kritik bir gemi parçasının gecikmesi; iptal edilen seferler, sözleşme cezaları ve zincirleme operasyonel kayıplar demektir. Bu sevkiyatlarda en kısa rota ve yükün ölçüsüne uygun uçak birlikte planlanır.',
    needs: [
      'Uçak motorları ve büyük yedek parçalar',
      'AOG durumları için acil parça sevkiyatı',
      'Gemi motorları ve deniz ekipmanı',
      'Bakım ekipmanı ve teknik ekipler',
    ],
    services: ['acil-kritik-zamanli-charter', 'agir-yuk-charter', 'kargo-charter'],
    image: uac.aviation,
    imageAlt: 'Ağır nakliye uçağına yüklenen uçak motoru',
  },
  {
    id: 'otomotiv-uretim',
    title: 'Otomotiv & Üretim',
    challenge: 'Tam zamanında üretimde tek bir eksik parça, bütün hattı durdurabilir.',
    body: 'Otomotiv ve imalat sanayisinde tedarik zinciri dakik çalışır; bir aksama olduğunda ise eksik parçanın saatler içinde hatta ulaşması gerekir. Makine, kalıp ve üretim ekipmanı transferlerinde ise ölçü ve ağırlık planlaması öne çıkar.',
    needs: [
      'Hat duruşlarında acil parça ve bileşen sevkiyatı',
      'Üretim makineleri, kalıplar ve ekipman',
      'Araç ve prototip taşımacılığı',
      'Tesis kurulumları için toplu ekipman transferi',
    ],
    services: ['acil-kritik-zamanli-charter', 'agir-yuk-charter', 'kargo-charter'],
    image: uac.manufacturing,
    imageAlt: 'Hava kargo için hazırlanmış endüstriyel tanklar',
  },
  {
    id: 'saglik',
    title: 'Sağlık',
    challenge: 'Tıbbi operasyonlarda zaman, doğrudan hasta güvenliği demektir.',
    body: 'Hasta transferlerinden tıbbi cihaz ve sarf malzemesi sevkiyatlarına kadar sağlık sektöründeki hava taşımacılığı, hız kadar özen ve doğru ekipman gerektirir.',
    needs: [
      'Yoğun bakım donanımlı hasta transferi',
      'Yurt dışından hasta repatriasyonu',
      'Tıbbi cihaz ve sarf malzemesi sevkiyatı',
      'Sağlık kuruluşları için acil tedarik',
    ],
    services: ['ambulans-ucak', 'acil-kritik-zamanli-charter', 'yardim-malzemesi-charter'],
    image: uac.health,
    imageAlt: 'Kargo ambarında sabitlenmiş tıbbi ekipman sandıkları',
  },
  {
    id: 'kamu-insani-yardim',
    title: 'Kamu & İnsani Yardım',
    challenge: 'Kriz anında doğru malzemenin doğru yere ulaşması, planlamanın kalitesine bağlıdır.',
    body: 'Kamu kurumları, savunma kuruluşları ve yardım örgütleri için yapılan uçuşlar; izin süreçleri, gizlilik ve saha koşulları nedeniyle deneyimli bir koordinasyon gerektirir.',
    needs: [
      'Askeri ekipman ve araç taşımacılığı',
      'Personel ve resmi heyet uçuşları',
      'Afet bölgelerine yardım malzemesi',
      'Diplomatik izin gerektiren sevkiyatlar',
    ],
    services: ['devlet-askeri-charter', 'yardim-malzemesi-charter', 'tehlikeli-madde-charter'],
    image: uac.government,
    imageAlt: 'Apronda ağır nakliye uçağı',
  },
  {
    id: 'eglence-spor',
    title: 'Eğlence, Spor & Etkinlik',
    challenge: 'Biletleri satılmış bir etkinlik ertelenemez.',
    body: 'Turneler, film çekimleri ve spor organizasyonları; ekip ve ekipmanın belirlenen tarihte belirlenen noktada olmasına bağlıdır. Çok duraklı programlarda uçuş planı etkinlik takviminden geriye doğru kurulur.',
    needs: [
      'Sahne, ışık ve ses ekipmanı',
      'Film seti ekipmanı',
      'Takım, ekip ve taraftar uçuşları',
      'Yarış atları ve sportif amaçlı canlı hayvanlar',
    ],
    services: ['eglence-spor-charter', 'yolcu-grup-charter', 'canli-hayvan-charter', 'vip-ozel-jet-charter'],
    image: imgStage,
    imageAlt: 'Sahnede hazır bekleyen enstrümanlar',
  },
];

export const getSectors = (locale: Locale): Sector[] =>
  locale === 'tr' ? sectorsTr : sectorsTr.map((s) => ({ ...s, ...sectorsEn[s.id] }));
