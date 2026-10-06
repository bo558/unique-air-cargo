import type { ImageMetadata } from 'astro';

import imgApronSunset from '@/assets/images/apron-sunset.jpg';
import imgEngine from '@/assets/images/engine.jpg';
import imgUldApron from '@/assets/images/uld-apron.jpg';
import imgNightApproach from '@/assets/images/night-approach.jpg';
import imgPalletsApron from '@/assets/images/pallets-apron.jpg';

/**
 * Representative scenarios that illustrate when and how a charter is planned.
 * They are deliberately written as hypothetical cases — not as completed company projects.
 */
export interface Scenario {
  id: string;
  tab: string;
  sector: string;
  title: string;
  situation: string;
  need: string;
  approach: string;
  services: string[];
  image: ImageMetadata;
  imageAlt: string;
}

export const scenarios: Scenario[] = [
  {
    id: 'altyapi',
    tab: 'Altyapı projesi',
    sector: 'İnşaat & Altyapı · Körfez',
    title: 'Şantiyede duran iş makinesi',
    situation:
      'Riyad gibi hızla büyüyen bir şehirde süren büyük ölçekli bir köprü ve yol projesinde kritik bir iş makinesi bileşeni arızalanır. Deniz yoluyla tedarik haftalar sürecektir.',
    need: 'Ağır ve tek parça bileşenin, şantiyeye en yakın uygun havalimanına günler içinde ulaştırılması.',
    approach:
      'Ölçü ve ağırlığa göre uçak tipi belirlenir, varış havalimanında yükleme ekipmanı teyit edilir; uçuş ve iniş izinleri ile havalimanından sahaya karayolu transferi aynı plan içinde eşlenir.',
    services: ['agir-yuk-charter', 'acil-kritik-zamanli-charter'],
    image: imgApronSunset,
    imageAlt: 'Gün batımında yük ve yer hizmeti araçlarıyla dolu apron',
  },
  {
    id: 'aog',
    tab: 'Yerde kalan uçak',
    sector: 'Havacılık · AOG',
    title: 'Motor değişimi bekleyen uçak',
    situation:
      'Bir havayolunun uçağı, motor arızası nedeniyle yurt dışındaki bir havalimanında yerde kalır (AOG). Her gün iptal edilen seferler ve yolcu tazminatları anlamına gelir.',
    need: 'Yedek motorun, ölçüsüne uygun bir uçakla en kısa rotadan ulaştırılması.',
    approach:
      'Motorun taşıma kızağıyla birlikte ölçüsü ve ağırlığı alınır; ana güverte kapısı uygun uçak seçenekleri karşılaştırılır, varışta gümrük ve teslim süreci uçuştan önce hazırlanır.',
    services: ['acil-kritik-zamanli-charter', 'agir-yuk-charter'],
    image: imgEngine,
    imageAlt: 'Apronda turbofan jet motoru',
  },
  {
    id: 'uretim',
    tab: 'Durdurulan üretim',
    sector: 'Otomotiv & Üretim',
    title: 'Eksik parça yüzünden duran hat',
    situation:
      'Tam zamanında üretim yapan bir fabrikada tedarik zinciri aksar; tek bir bileşen eksikliği bütün montaj hattını durdurur.',
    need: 'Parçaların tedarikçiden alınıp aynı gün içinde fabrikaya en yakın havalimanına uçurulması.',
    approach:
      'Yükün hacmine göre en uygun boyutta uçak seçilir, teslim alma noktasından havalimanına transfer koordine edilir ve operasyon boyunca durum bildirimi yapılır.',
    services: ['acil-kritik-zamanli-charter', 'kargo-charter'],
    image: imgUldApron,
    imageAlt: 'Apronda uçağa yüklenmeyi bekleyen kargo konteynerleri',
  },
  {
    id: 'hasta',
    tab: 'Hasta transferi',
    sector: 'Sağlık',
    title: 'Yurt dışından yoğun bakım hastası',
    situation:
      'Yurt dışında rahatsızlanan bir hastanın, tedavisine devam edilmek üzere ülkesine dönmesi gerekir; tarifeli uçuşla seyahati mümkün değildir.',
    need: 'Yoğun bakım donanımlı bir uçak ve sağlık ekibiyle güvenli transfer.',
    approach:
      'Medikal raporlar değerlendirilir, uçuşa uygunluk ve ekipman ihtiyacı belirlenir; doktor ve hemşireden oluşan ekiple uçuş, iki uçtaki kara ambulansı bağlantılarıyla birlikte planlanır.',
    services: ['ambulans-ucak'],
    image: imgNightApproach,
    imageAlt: 'Gece inişe yaklaşan uçak ve pist ışıkları',
  },
  {
    id: 'yardim',
    tab: 'Yardım köprüsü',
    sector: 'İnsani Yardım',
    title: 'Afet bölgesine ilk günlerde destek',
    situation:
      'Bir doğal afetin ardından bölgedeki havalimanı kısıtlı kapasiteyle çalışır; çadır, jeneratör, ilaç ve gıdaya acil ihtiyaç vardır.',
    need: 'Karışık yüklerin, varış havalimanının kapasitesine uygun uçaklarla düzenli olarak ulaştırılması.',
    approach:
      'Yardım kuruluşlarıyla yük listesi netleştirilir, yükleme planı yapılır; acil uçuş izinleri takip edilerek tekrarlayan uçuşlarla bir yardım köprüsü kurulur.',
    services: ['yardim-malzemesi-charter', 'kargo-charter'],
    image: imgPalletsApron,
    imageAlt: 'Apronda uçağa yüklenmeyi bekleyen paletlenmiş malzemeler',
  },
];
