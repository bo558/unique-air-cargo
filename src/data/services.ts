import type { Locale } from '@/i18n/config';
import { servicePath } from '@/i18n/config';
import { serviceSlugs } from './service-slugs';
import { servicesEn, categoriesEn, defaultProcessEn } from './services.en';
import type { ImageMetadata } from 'astro';

import imgRacehorses from '@/assets/images/racehorses.jpg';
import imgGulfstreamDusk from '@/assets/images/gulfstream-dusk.jpg';
import imgJetInterior from '@/assets/images/jet-interior.jpg';
import imgApronDusk from '@/assets/images/apron-dusk.jpg';
import imgMedicalCabin from '@/assets/images/medical-cabin.jpg';
import imgNightApproach from '@/assets/images/night-approach.jpg';
import imgA400m from '@/assets/images/a400m-sky.jpg';
import imgStage from '@/assets/images/stage.jpg';
import { projectImage } from './projects';

// Real Unique Air Cargo operation photos (from the brand archive) wherever one fits the service
const uac = {
  freighterSunset: projectImage('oruc-reis-spare-parts', 1),
  nightLoading: projectImage('hong-kong-riyadh', 4),
  bridgeLift: projectImage('hong-kong-riyadh', 1),
  moduleLift: projectImage('afghanistan-prefabricated-hospital', 1),
  moduleCrane: projectImage('afghanistan-prefabricated-hospital', 2),
  moduleHold: projectImage('afghanistan-prefabricated-hospital', 5),
  dgBanner: projectImage('istanbul-ndjamena-dangerous-goods', 1),
  dgContainer: projectImage('ankara-niamey-dangerous-goods', 1),
  engine: projectImage('london-istanbul-aircraft-engine', 2),
  forkliftLoading: projectImage('ataturk-airport-last-flight', 4),
  il76Sunset: projectImage('ataturk-airport-last-flight', 1),
  il76Dusk: projectImage('ataturk-airport-last-flight', 2),
  a321: projectImage('istanbul-sudan-military-supplies', 1),
  noseDoor: projectImage('istanbul-niamey-gold-exploration', 2),
};

export type CategoryId = 'kargo' | 'yolcu' | 'kurum';

export interface Step {
  title: string;
  text: string;
}

export interface Item {
  title: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  /** Short label for menus and compact lists */
  navTitle: string;
  category: CategoryId;
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
  detailImage: ImageMetadata;
  detailImageAlt: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; accent: string; lead: string };
  intro: { heading: string; paragraphs: string[]; quote?: string };
  useCases: { heading: string; lead: string; items: Item[] };
  advantages: Item[];
  process?: Step[];
  capabilities: string[];
  related: string[];
}

const categoriesTr: Record<CategoryId, { label: string; description: string }> = {
  kargo: {
    label: 'Kargo & Özel Yük',
    description: 'Tarifeli kapasitenin yetmediği, özel elleçleme ve izin gerektiren yükler.',
  },
  yolcu: {
    label: 'Yolcu & Özel Uçuş',
    description: 'Takvimi ve rotası size göre planlanan yolcu, VIP ve ambulans uçuşları.',
  },
  kurum: {
    label: 'Kurum & Sektör',
    description: 'Kamu, insani yardım ve etkinlik sektörü için görev odaklı operasyonlar.',
  },
};

const defaultProcessTr: Step[] = [
  { title: 'Talep', text: 'Rota, tarih ve yük ya da yolcu bilgilerini bizimle paylaşırsınız.' },
  { title: 'Planlama', text: 'Uygun uçak tipi, rota ve zamanlama seçenekleri değerlendirilir.' },
  { title: 'Teklif', text: 'Seçenekler, piyasa koşullarına uygun ve şeffaf bir teklifle sunulur.' },
  { title: 'Koordinasyon', text: 'Uçuş izinleri, yer hizmetleri ve belge süreçleri organize edilir.' },
  { title: 'Operasyon', text: 'Uçuş ve teslimat, tek bir muhatap üzerinden uçtan uca takip edilir.' },
];

const servicesTr: Service[] = [
  /* ------------------------------------------------------------------ KARGO */
  {
    slug: 'kargo-charter',
    title: 'Kargo Charter',
    navTitle: 'Kargo Charter',
    category: 'kargo',
    summary: 'Tarifeli kapasitenin yetmediği hacim, tarih ya da rota için tam uçak kiralama.',
    image: uac.freighterSunset,
    imageAlt: 'Gün batımında apronda bekleyen kargo uçağı',
    detailImage: uac.nightLoading,
    detailImageAlt: 'Gece yüklenen geniş gövdeli kargo uçağı',
    seo: {
      title: 'Kargo Charter Uçuşları',
      description:
        'Tarifeli kapasitenin yetmediği durumlarda tam uçak kargo charter. Yükünüze uygun uçak tipi, rota planlaması, izin ve yer hizmetleri koordinasyonu.',
    },
    hero: {
      eyebrow: 'Kargo Charter',
      title: 'Kapasite beklemeyin.',
      accent: 'Uçağı kiralayın.',
      lead: 'Tarifeli uçuşlarda yer bulunamadığında, rota mevcut olmadığında ya da yükün tamamının tek seferde gitmesi gerektiğinde; yükünüze uygun kargo uçağını tümüyle sizin operasyonunuz için planlıyoruz.',
    },
    intro: {
      heading: 'Tek sevkiyat, tek uçak, tek muhatap.',
      paragraphs: [
        'Kargo charter, uçağın tüm kapasitesinin tek bir müşteri için kiralanmasıdır. Kalkış saatini, rotayı ve yükleme planını tarifeli seferlerin takvimi değil, sizin operasyonunuz belirler.',
        'Unique Air Cargo, talebinizi yükün ölçüsü, ağırlığı, niteliği ve teslim tarihine göre değerlendirir; pazardaki uygun uçak seçeneklerini karşılaştırarak rekabetçi bir teklif sunar ve süreci teslimata kadar yönetir.',
      ],
      quote: 'Kalkış saatini tarifeli sefer değil, sizin operasyonunuz belirler.',
    },
    useCases: {
      heading: 'Hangi durumlarda kargo charter?',
      lead: 'Charter, bir lüks değil; tarifeli ağın karşılayamadığı ihtiyaçlar için en doğrudan çözümdür.',
      items: [
        { title: 'Tarifeli kapasite yetersiz', text: 'Yoğun sezonlarda veya kısıtlı rotalarda yükünüz için yer bulunamadığında.' },
        { title: 'Doğrudan bağlantı yok', text: 'Tarifeli seferin olmadığı ya da aktarmanın risk yarattığı noktalara doğrudan uçuş.' },
        { title: 'Tek seferde büyük hacim', text: 'Proje sevkiyatları, sezon başı stoklar ve toplu transferler için tam kapasite.' },
        { title: 'Kontrol ve güvenlik', text: 'Yükün aktarma noktalarında el değiştirmeden, uçtan uca tek uçakla taşınması.' },
      ],
    },
    advantages: [
      { title: 'Takvim sizin', text: 'Kalkış zamanı ve rota, üretim ve teslim planınıza göre belirlenir.' },
      { title: 'Doğru kapasite', text: 'Yükünüzün hacmine ve ağırlığına uygun uçak tipi; ne eksik ne fazla.' },
      { title: 'Daha az elleçleme', text: 'Aktarma olmadan, yükleme noktasından varış noktasına tek uçak.' },
      { title: 'Rekabetçi fiyat', text: 'Pazardaki seçenekler karşılaştırılarak piyasa koşullarına uygun teklif.' },
    ],
    capabilities: [
      'Yükün hacim, ağırlık ve niteliğine göre uçak tipi seçimi',
      'Ana güverte ve alt güverte yükleme planlaması',
      'Uçuş, iniş ve üzerinden geçiş (overflight) izinlerinin koordinasyonu',
      'Yer hizmetleri (handling) ve yükleme ekipmanı organizasyonu',
      'Gümrük ve belge süreçlerinde koordinasyon',
      'Operasyon boyunca tek muhatap üzerinden durum takibi',
    ],
    related: ['agir-yuk-charter', 'acil-kritik-zamanli-charter', 'tehlikeli-madde-charter'],
  },
  {
    slug: 'agir-yuk-charter',
    title: 'Ağır ve Büyük Hacimli Yük Charter',
    navTitle: 'Ağır & Büyük Hacimli Yük',
    category: 'kargo',
    summary: 'Ölçüsü ve ağırlığıyla tarifeli uçuşlara sığmayan, yüke özel çözüm gerektiren sevkiyatlar.',
    image: uac.bridgeLift,
    imageAlt: 'Hong Kong Uluslararası Havalimanı’nda köprü bileşenlerini kaldıran vinç',
    detailImage: uac.moduleLift,
    detailImageAlt: 'Ağır nakliye uçağına prefabrik modül yükleyen vinç',
    seo: {
      title: 'Ağır ve Büyük Hacimli Yük Charter',
      description:
        'Jeneratör, türbin, sondaj ekipmanı, uçak motoru ve araç gibi ağır ve büyük hacimli yükler için charter uçuş planlaması: uçak seçimi, yükleme planı ve izinler.',
    },
    hero: {
      eyebrow: 'Ağır & Büyük Hacimli Yük',
      title: 'Ölçüsü büyük,',
      accent: 'zamanı kısıtlı.',
      lead: 'Jeneratörler, santral parçaları, sondaj ekipmanı, uçak motorları ve araçlar gibi tarifeli uçuşlarla taşınamayan yükler için uçak seçimini, yükleme planını ve izin süreçlerini birlikte kurguluyoruz.',
    },
    intro: {
      heading: 'Her ağır yük kendi mühendisliğini ister.',
      paragraphs: [
        'Büyük ve ağır yüklerin her biri farklı ölçü, ağırlık ve özel kısıtlara sahiptir. Bu nedenle standart bir ürün değil, yüke özel bir çözüm gerekir.',
        'Ekibimiz yükün boyutlarını, ağırlık dağılımını, istif ve bağlama gerekliliklerini değerlendirerek uygun uçak tipini belirler; kalkış ve varış havalimanlarındaki yükleme ekipmanı ile pist ve apron kısıtlarını da hesaba katarak operasyonu planlar.',
      ],
      quote: 'Doğru uçak, yük kapıya gelmeden önce seçilir.',
    },
    useCases: {
      heading: 'Sektörlere göre kullanım alanları',
      lead: 'Kritik ekipmanın sahaya geç ulaştığı her gün, projede maliyete dönüşür.',
      items: [
        { title: 'Enerji', text: 'Santral yedek parçaları, jeneratörler, transformatör ve türbin bileşenleri.' },
        { title: 'Petrol & gaz', text: 'Sondaj ekipmanı, borular, saha makineleri ve yedek parçalar.' },
        { title: 'İnşaat & altyapı', text: 'Büyük ölçekli şantiyeler için iş makinesi parçaları ve proje ekipmanları.' },
        { title: 'Havacılık & denizcilik', text: 'Uçak ve gemi motorları, büyük yedek parçalar ve bakım ekipmanı.' },
        { title: 'Otomotiv & üretim', text: 'Üretim hattı makineleri, kalıplar ve kritik makine parçaları.' },
        { title: 'Araçlar', text: 'Otomobil, arazi aracı, karavan ve helikopter taşımacılığı.' },
      ],
    },
    advantages: [
      { title: 'Yüke özel uçak', text: 'Kargo kapısı ölçüsü, taban dayanımı ve menzile göre doğru tip.' },
      { title: 'Yükleme planı', text: 'Ağırlık dağılımı, bağlama ve istif planı uçuştan önce netleşir.' },
      { title: 'Havalimanı uygunluğu', text: 'Pist, apron ve yer ekipmanı kısıtları iki uçta da kontrol edilir.' },
      { title: 'Tek elden koordinasyon', text: 'Nakliyeci, yer hizmetleri ve izin süreçleri tek ekip üzerinden.' },
    ],
    process: [
      { title: 'Yük verisi', text: 'Ölçüler, ağırlık, ağırlık merkezi ve özel elleçleme gereksinimleri alınır.' },
      { title: 'Fizibilite', text: 'Yüke ve rotaya uygun uçak tipleri ile havalimanı uygunluğu değerlendirilir.' },
      { title: 'Yükleme planı', text: 'Bağlama, istif ve yükleme ekipmanı ihtiyacı netleştirilir.' },
      { title: 'İzin & koordinasyon', text: 'Uçuş izinleri, yer hizmetleri ve karayolu transferi eşlenir.' },
      { title: 'Uçuş & teslim', text: 'Yükleme, uçuş ve boşaltma tek muhatap üzerinden takip edilir.' },
    ],
    capabilities: [
      'Büyük hacimli ve tek parça ağır yükler için uygun uçak tiplerinin temini',
      'Ölçü ve ağırlık verilerine göre fizibilite değerlendirmesi',
      'Yükleme ve boşaltma ekipmanı ile özel elleçleme organizasyonu',
      'Kalkış ve varış havalimanlarında yer hizmetleri koordinasyonu',
      'Uçuş ve iniş izinleri ile gerekli durumlarda özel izin süreçleri',
      'Havalimanı ile saha arasındaki karayolu transferinin planla eşlenmesi',
    ],
    related: ['kargo-charter', 'acil-kritik-zamanli-charter', 'devlet-askeri-charter'],
  },
  {
    slug: 'tehlikeli-madde-charter',
    title: 'Tehlikeli Madde Charter',
    navTitle: 'Tehlikeli Madde',
    category: 'kargo',
    summary: 'IATA Tehlikeli Madde Regülasyonları konusunda eğitimli ekiple, planlamadan teslimata.',
    image: uac.dgBanner,
    imageAlt: 'Apronda Unique Air Cargo pankartının önünde tehlikeli madde sevkiyatı',
    detailImage: uac.dgContainer,
    detailImageAlt: 'Konteynerde etiketli tehlikeli madde paketleri',
    seo: {
      title: 'Tehlikeli Madde (DG) Charter Uçuşları',
      description:
        'IATA Tehlikeli Madde Regülasyonları konusunda eğitimli ekip ile tehlikeli madde charter: uygunluk değerlendirmesi, diplomatik ve özel izinler, yetkili operatörler.',
    },
    hero: {
      eyebrow: 'Tehlikeli Madde',
      title: 'Kuralına uygun.',
      accent: 'Eksiksiz planlanmış.',
      lead: 'Tehlikeli maddeler en sıkı güvenlik prosedürlerini, özel ekipmanı ve titiz planlamayı gerektirir. IATA Tehlikeli Madde Regülasyonları konusunda eğitimli ekibimiz, charter sürecini planlamadan uygulamaya kadar yönetir.',
    },
    intro: {
      heading: 'Risk, planlama aşamasında yönetilir.',
      paragraphs: [
        'Tehlikeli madde (Dangerous Goods) sevkiyatlarında hata payı yoktur. Maddenin sınıfı, miktarı, ambalajı ve beyanı; hangi uçakla, hangi rotadan ve hangi izinlerle taşınabileceğini belirler. Bazı sevkiyatlar ise yalnızca diplomatik izinlerle taşınabilir.',
        'Ekibimiz gönderinin uygunluğunu baştan değerlendirir, gerekli izin ve belge süreçlerini koordine eder ve operasyonu taşıyıcı ile yer hizmetleriyle birlikte yürütür.',
      ],
      quote: 'Tehlikeli madde taşımacılığında güvenlik, uçuştan çok önce başlar.',
    },
    useCases: {
      heading: 'Hangi gönderiler için?',
      lead: 'Sınıfı ve miktarı ne olursa olsun, her gönderi önce uygunluk açısından değerlendirilir.',
      items: [
        { title: 'Endüstriyel kimyasallar', text: 'Üretim ve enerji sektörü için sınıflandırılmış kimyasal maddeler.' },
        { title: 'Pil ve enerji depolama', text: 'Batarya modülleri ve lityum pil içeren ekipmanlar.' },
        { title: 'Kamu ve savunma', text: 'Özel izin veya diplomatik süreç gerektiren sevkiyatlar.' },
        { title: 'Petrol & gaz ekipmanı', text: 'Basınçlı kaplar ve tehlikeli madde içeren saha ekipmanları.' },
      ],
    },
    advantages: [
      { title: 'Regülasyon bilgisi', text: 'IATA Tehlikeli Madde Regülasyonları konusunda eğitimli ekip.' },
      { title: 'İzin süreçleri', text: 'Diplomatik ve özel izin gerektiren sevkiyatlarda deneyim.' },
      { title: 'Yetkili taşıyıcı', text: 'Tehlikeli madde taşıma yetkisine sahip operatörlerle çalışma.' },
      { title: 'Açık iletişim', text: 'Kısıtlar ve gereklilikler en baştan net biçimde paylaşılır.' },
    ],
    process: [
      { title: 'Gönderi bilgisi', text: 'UN numarası, sınıf, miktar ve güvenlik bilgi formu (MSDS) alınır.' },
      { title: 'Uygunluk', text: 'Gönderinin hava yoluyla ve hangi koşullarda taşınabileceği değerlendirilir.' },
      { title: 'Taşıyıcı & rota', text: 'Yetkili operatör ve izin gerekliliklerine uygun rota belirlenir.' },
      { title: 'İzin & belge', text: 'Beyan, etiketleme ve diplomatik ya da özel izinler koordine edilir.' },
      { title: 'Uçuş & teslim', text: 'Yer hizmetleri bilgilendirilir, operasyon uçtan uca takip edilir.' },
    ],
    capabilities: [
      'IATA DGR kapsamında sınıflandırma ve uygunluk ön değerlendirmesi',
      'Beyan, ambalaj ve etiketleme gerekliliklerinin kontrolünde koordinasyon',
      'Tehlikeli madde taşımaya yetkili operatörlerle uçak temini',
      'Diplomatik ve özel izin süreçlerinin takibi',
      'Kalkış ve varış noktalarında yer hizmetleri koordinasyonu',
    ],
    related: ['kargo-charter', 'devlet-askeri-charter', 'agir-yuk-charter'],
  },
  {
    slug: 'acil-kritik-zamanli-charter',
    title: 'Acil ve Kritik Zamanlı Charter',
    navTitle: 'Acil & Kritik Zamanlı',
    category: 'kargo',
    summary: 'Üretim hattı durduğunda ya da hizmet kesildiğinde: zamanın en değerli kalem olduğu sevkiyatlar.',
    image: uac.engine,
    imageAlt: 'Kargo uçağının yanında taşıma kızağındaki uçak motoru',
    detailImage: uac.forkliftLoading,
    detailImageAlt: 'Kargo ambarına yük yükleyen forklift',
    seo: {
      title: 'Acil ve Kritik Zamanlı Charter Uçuşları',
      description:
        'Üretim duruşu, AOG ve hizmet kesintisi gibi acil durumlarda kritik parça ve ekipman için charter uçuş: hızlı yanıt, en kısa rota, uçtan uca takip.',
    },
    hero: {
      eyebrow: 'Acil & Kritik Zamanlı',
      title: 'Hat durduğunda',
      accent: 'saat işlemeye başlar.',
      lead: 'Tam zamanında (Just in Time) tedarikin aksadığı, üretim hattının durduğu ya da hizmetin kesildiği anlarda; kritik parçayı yerine en hızlı şekilde ulaştırmak için çalışıyoruz.',
    },
    intro: {
      heading: 'Zaman, en değerli yükünüz olduğunda.',
      paragraphs: [
        'Bir şeyler ters gittiğinde ve bir ürüne acilen ihtiyaç duyduğunuzda, zaman en önemli metanız hâline gelir. Bu operasyonlarda hızlı yanıt, net bir plan ve süreci baştan sona takip eden bir muhatap gerekir.',
        'Talebinizi aldığımız andan itibaren uygun uçak seçeneklerini ve en kısa teslim senaryosunu birlikte değerlendirir; yükün teslim alınmasından varışta teslimine kadar her adımı koordine ederiz.',
      ],
      quote: 'Duran bir hattın maliyeti, çoğu zaman uçuşun maliyetinden yüksektir.',
    },
    useCases: {
      heading: 'Tipik acil sevkiyatlar',
      lead: 'Her biri, gecikmenin doğrudan üretim, gelir ya da güvenlik kaybı anlamına geldiği durumlar.',
      items: [
        { title: 'Otomotiv parçaları', text: 'Üretim hattını durduran eksik parça ve bileşenler.' },
        { title: 'Uçak & gemi parçaları', text: 'Yerde kalan uçak (AOG) veya limanda bekleyen gemi için motor ve yedek parça.' },
        { title: 'Fabrika makineleri', text: 'Arızalanan üretim ekipmanının yerine geçecek makine ve parçalar.' },
        { title: 'Tıbbi ekipman', text: 'Acil ihtiyaç duyulan tıbbi cihaz ve sarf malzemeleri.' },
        { title: 'Petrol & gaz', text: 'Saha operasyonunu sürdürmek için kritik ekipman.' },
        { title: 'Deniz ekipmanı', text: 'Gemi ve açık deniz operasyonları için acil parça ve donanım.' },
      ],
    },
    advantages: [
      { title: 'Hızlı yanıt', text: 'Talebiniz, uygun seçeneklerle birlikte en kısa sürede değerlendirilir.' },
      { title: 'En kısa rota', text: 'Aktarmasız, doğrudan ve zamana göre optimize edilmiş uçuş planı.' },
      { title: 'Doğru boyutta uçak', text: 'Yükün hacmine göre küçük kargo uçağından geniş gövdeye seçenek.' },
      { title: 'Sürekli bilgi', text: 'Operasyonun her aşamasında net durum bildirimi.' },
    ],
    capabilities: [
      'Uygun uçak seçeneklerinin hızlı karşılaştırılması',
      'Kısa sürede uçuş ve iniş izni koordinasyonu',
      'Yükün teslim alınması ve havalimanına ulaştırılmasında koordinasyon',
      'Varışta gümrük ve teslim sürecinin önceden hazırlanması',
      'Operasyon boyunca tek muhatap ve durum bildirimi',
    ],
    related: ['kargo-charter', 'agir-yuk-charter', 'ambulans-ucak'],
  },
  {
    slug: 'canli-hayvan-charter',
    title: 'Canlı Hayvan Charter',
    navTitle: 'Canlı Hayvan',
    category: 'kargo',
    summary: 'Yarış atlarından hayvanat bahçesi türlerine; her canlının ihtiyacına göre planlanan uçuşlar.',
    image: imgRacehorses,
    imageAlt: 'Yarış pistinde koşan safkan atlar',
    detailImage: uac.il76Dusk,
    detailImageAlt: 'Alacakaranlıkta apronda ağır nakliye uçağı',
    seo: {
      title: 'Canlı Hayvan Charter Uçuşları',
      description:
        'Yarış atları, büyükbaş ve küçükbaş hayvanlar, yunuslar ve yabani hayvanlar için türe özel planlanan canlı hayvan charter uçuşları.',
    },
    hero: {
      eyebrow: 'Canlı Hayvan',
      title: 'Her canlının',
      accent: 'kendi yolculuk planı vardır.',
      lead: 'Canlı hayvan taşımacılığı özel ekipman, ileriye dönük kapsamlı planlama ve yüksek özen gerektirir. Her hayvanın ihtiyaçlarına göre şekillenen charter çözümleri sunuyoruz.',
    },
    intro: {
      heading: 'Özen, planın kendisidir.',
      paragraphs: [
        'Her hayvanın taşıma gereksinimleri farklıdır: kabin sıcaklığı ve havalandırma, kafes ve bölme yapısı, yolculuk süresi, refakatçi ihtiyacı ve varış ülkesinin veteriner gereklilikleri planın ilk gününden belirlenir.',
        'Ekibimiz bu gereksinimleri sizinle birlikte netleştirir; uygun uçak tipini, yükleme düzenini ve varış süreçlerini hayvanların refahını merkeze alarak planlar.',
      ],
      quote: 'Her türün ihtiyacı farklıdır; planı da öyle olmalıdır.',
    },
    useCases: {
      heading: 'Taşıma talebi aldığımız türler',
      lead: 'Her tür için ekipman, refakat ve belge gereksinimleri ayrı ayrı planlanır.',
      items: [
        { title: 'Yarış atları', text: 'Yarış ve yetiştirme amaçlı safkan at transferleri.' },
        { title: 'Büyükbaş & küçükbaş', text: 'Damızlık ve üretim amaçlı hayvan sevkiyatları.' },
        { title: 'Yunuslar', text: 'Özel tank ve sürekli refakat gerektiren deniz canlıları.' },
        { title: 'Yabani hayvanlar', text: 'Hayvanat bahçeleri ve koruma alanları için türler.' },
        { title: 'Kanatlı hayvanlar', text: 'Tavuk ve diğer kanatlı türlerinin toplu sevkiyatı.' },
        { title: 'Av kuşları', text: 'Doğan ve şahin gibi değerli av kuşlarının taşınması.' },
      ],
    },
    advantages: [
      { title: 'Türe özel plan', text: 'Ekipman, yerleşim ve süre her tür için ayrı değerlendirilir.' },
      { title: 'İklim kontrolü', text: 'Kabin sıcaklığı ve havalandırma gereksinimleri operatörle teyit edilir.' },
      { title: 'Belge süreçleri', text: 'Veteriner ve sağlık belgeleri için koordinasyon.' },
      { title: 'Kısa yer süresi', text: 'Yükleme ve boşaltmada beklemenin en aza indirilmesi.' },
    ],
    capabilities: [
      'Türe uygun kafes, bölme ve ekipman gerekliliklerinin planlanması',
      'Kabin sıcaklığı ve havalandırma gereksinimlerinin operatörle teyidi',
      'Refakatçi ve bakıcıların uçuşa dahil edilmesi',
      'Veteriner ve sağlık belgesi süreçlerinde koordinasyon',
      'Varış havalimanında hızlı teslim için yer hizmetleri planlaması',
    ],
    related: ['kargo-charter', 'acil-kritik-zamanli-charter', 'eglence-spor-charter'],
  },

  /* ------------------------------------------------------------------ YOLCU */
  {
    slug: 'vip-ozel-jet-charter',
    title: 'VIP ve Özel Jet Charter',
    navTitle: 'VIP & Özel Jet',
    category: 'yolcu',
    summary: 'İş ya da özel seyahatleriniz için takvimi ve rotası size göre planlanan özel jet uçuşları.',
    image: imgGulfstreamDusk,
    imageAlt: 'Alacakaranlıkta apronda bekleyen uzun menzilli business jet',
    detailImage: imgJetInterior,
    detailImageAlt: 'Deri koltuklu özel jet kabini',
    seo: {
      title: 'VIP ve Özel Jet Charter',
      description:
        'İş ve özel seyahatler için VIP ve özel jet charter: uygun uçak seçenekleri, VIP terminal, transfer ve ikram organizasyonu, gizlilik ve esneklik.',
    },
    hero: {
      eyebrow: 'VIP & Özel Jet',
      title: 'Takvim sizin,',
      accent: 'rota sizin.',
      lead: 'İş ya da özel seyahat için; özel jet taleplerinizi en ince ayrıntısına kadar planlıyor, sizi en uygun havalimanına, en uygun zamanda ulaştırıyoruz.',
    },
    intro: {
      heading: 'Zamanınızın değerini bilen bir uçuş planı.',
      paragraphs: [
        'Özel jet charter, tarifeli seferlerin saatlerine, aktarmalarına ve kalabalığına bağlı kalmadan seyahat etmenizi sağlar. Uçuşunuz, toplantınızın ya da programınızın saatine göre planlanır.',
        'Yolcu sayınıza, menzilinize ve konfor beklentinize uygun uçak seçeneklerini karşılaştırıyor; VIP terminal, transfer ve ikram gibi detayları tek bir muhatap üzerinden organize ediyoruz.',
      ],
      quote: 'Uçuşunuz, programınızın saatine göre planlanır; tersi değil.',
    },
    useCases: {
      heading: 'Kimler için?',
      lead: 'Gizlilik, zaman ve esnekliğin öncelik olduğu her seyahat için.',
      items: [
        { title: 'Yöneticiler', text: 'Aynı gün içinde birden fazla şehirde toplantı programları.' },
        { title: 'Aileler', text: 'Konforlu, mahremiyeti korunan özel seyahatler.' },
        { title: 'Resmi heyetler', text: 'Protokol gerektiren ziyaretler ve delegasyon uçuşları.' },
        { title: 'Sanatçılar & ekipler', text: 'Yoğun takvimli turne ve etkinlik programları.' },
      ],
    },
    advantages: [
      { title: 'Gizlilik', text: 'Size özel uçuş planı ve korunan mahremiyet.' },
      { title: 'Zaman tasarrufu', text: 'VIP terminal ve hızlı geçişle beklemeden uçuşa.' },
      { title: 'Konfor', text: 'İhtiyaca göre hafif, orta ve ağır sınıf kabin seçenekleri.' },
      { title: 'Esneklik', text: 'Dilediğiniz havalimanı, dilediğiniz saat, değişebilen program.' },
    ],
    capabilities: [
      'Hafif, orta ve ağır sınıf business jet seçenekleri',
      'VIP terminal ve hızlı geçiş organizasyonu',
      'Özel ikram (catering) ve kabin talepleri',
      'Havalimanı transferi koordinasyonu',
      'Çok ayaklı ve kısa sürede değişen programlara uyum',
    ],
    related: ['yolcu-grup-charter', 'ambulans-ucak', 'eglence-spor-charter'],
  },
  {
    slug: 'yolcu-grup-charter',
    title: 'Yolcu ve Grup Charter',
    navTitle: 'Yolcu & Grup',
    category: 'yolcu',
    summary: 'Turizm grupları, kurumsal etkinlikler, spor takımları ve saha personeli için grup uçuşları.',
    image: uac.a321,
    imageAlt: 'Apronda bekleyen yolcu uçağı',
    detailImage: imgApronDusk,
    detailImageAlt: 'Gün batımında körüğe yanaşmış yolcu uçağı ve apron araçları',
    seo: {
      title: 'Yolcu ve Grup Charter Uçuşları',
      description:
        'Turizm grupları, kurumsal etkinlikler, spor takımları, resmi heyetler ve saha personeli için yolcu ve grup charter uçuşları; özel ikram, VIP salon ve özel check-in.',
    },
    hero: {
      eyebrow: 'Yolcu & Grup Charter',
      title: 'Bütün ekip,',
      accent: 'aynı uçakta.',
      lead: 'Turist grupları, seyahat acenteleri, kurumsal etkinlikler, toplantılar ve devlet kurumları için; bireysel ve grup charter uçuşlarını özel ikram, VIP salon ve özel check-in hizmetleriyle planlıyoruz.',
    },
    intro: {
      heading: 'Kalabalık gruplar, tek bir plan.',
      paragraphs: [
        'Grup seyahatlerinde tarifeli uçuşların koltuk durumu, farklı kalkış saatleri ve aktarmalar programın önüne geçer. Charter uçuşla tüm grup aynı saatte, aynı uçakla ve doğrudan seyahat eder.',
        'Ekibimiz grubun büyüklüğüne, rotaya ve hizmet beklentisine uygun uçağı belirler; özel ikramdan VIP salon kullanımına kadar detayları organize eder.',
      ],
    },
    useCases: {
      heading: 'Kimler için?',
      lead: 'Bireysel yolculardan yüzlerce kişilik organizasyonlara kadar.',
      items: [
        { title: 'VIP gruplar', text: 'Seçkin misafirler ve özel davetliler için grup uçuşları.' },
        { title: 'Spor takımları', text: 'Takımlar, teknik ekipler ve taraftar grupları.' },
        { title: 'Resmi & diplomatik', text: 'Kamu kurumları ve diplomatik heyet uçuşları.' },
        { title: 'Saha personeli', text: 'İnşaat, petrol ve gaz projeleri için personel rotasyonları.' },
        { title: 'Kurumsal etkinlikler', text: 'Toplantı, kongre, lansman ve teşvik organizasyonları.' },
        { title: 'Turneler', text: 'Müzik ve moda turneleri için ekip uçuşları.' },
      ],
    },
    advantages: [
      { title: 'Tek kalkış saati', text: 'Tüm grup aynı uçakta, aynı programla seyahat eder.' },
      { title: 'Doğrudan uçuş', text: 'Aktarmasız rotalarla zaman ve koordinasyon tasarrufu.' },
      { title: 'Kişiselleştirilmiş hizmet', text: 'Özel ikram, VIP salon ve özel check-in seçenekleri.' },
      { title: 'Rotasyon planlaması', text: 'Proje sahalarına düzenli personel uçuşları.' },
    ],
    capabilities: [
      'Grup büyüklüğüne ve menzile göre uçak tipi seçimi',
      'Özel ikram ve kabin hizmeti talepleri',
      'VIP salon ve özel check-in organizasyonu',
      'Ekipman ve fazla bagaj için kapasite planlaması',
      'Tekrarlayan rotasyon uçuşlarının planlanması',
    ],
    related: ['vip-ozel-jet-charter', 'eglence-spor-charter', 'devlet-askeri-charter'],
  },
  {
    slug: 'ambulans-ucak',
    title: 'Ambulans Uçak',
    navTitle: 'Ambulans Uçak',
    category: 'yolcu',
    summary: 'Yoğun bakım donanımlı uçak ve sağlık ekibiyle tıbbi transfer, repatriasyon ve kurtarma.',
    image: imgMedicalCabin,
    imageAlt: 'Tıbbi tahliye ekipmanıyla donatılmış hava aracı kabini',
    detailImage: imgNightApproach,
    detailImageAlt: 'Gece inişe yaklaşan uçak ve pist ışıkları',
    seo: {
      title: 'Ambulans Uçak Hizmeti',
      description:
        'Tıbbi müdahale, repatriasyon ve kurtarma operasyonları için 7/24 ambulans uçak: yoğun bakım donanımı, her uçuşta en az bir doktor ve yetkili hemşire.',
    },
    hero: {
      eyebrow: 'Ambulans Uçak',
      title: 'Her dakikanın',
      accent: 'önemli olduğu uçuşlar.',
      lead: 'Tıbbi müdahaleler, repatriasyonlar ve kurtarma operasyonları için; hızla organize edebildiğimiz yoğun bakım kapasiteli uçaklar ve deneyimli ekibimizle 7/24 yanınızdayız.',
    },
    intro: {
      heading: 'Hasta güvenliği, planın merkezinde.',
      paragraphs: [
        'Ambulans uçaklarda görev alan sağlık personeli, uçuş sırasında hasta bakımı konusunda yetkinliğe sahiptir. Her uçuşta en az bir doktor ve yetkili bir hemşire bulunur.',
        'Uçaklarda, hastanın özenle taşınmasını sağlayacak gelişmiş tıbbi ekipman yer alır. Global hizmet sağlayıcı ağımız sayesinde, zamanın kritik olduğu acil durumlarda hızla devreye gireriz.',
      ],
      quote: 'Sağlık ve hasta güvenliği her zaman önceliğimizdir.',
    },
    useCases: {
      heading: 'Hangi durumlarda?',
      lead: 'Tarifeli uçuşla seyahatin mümkün olmadığı ya da güvenli olmadığı her tıbbi durum için.',
      items: [
        { title: 'Uluslararası hasta transferi', text: 'Tedavi için başka bir ülkedeki sağlık kuruluşuna nakil.' },
        { title: 'Repatriasyon', text: 'Yurt dışında rahatsızlanan hastanın ülkesine dönüşü.' },
        { title: 'Kurtarma operasyonları', text: 'Afet ve kriz bölgelerinden tıbbi tahliye.' },
        { title: 'Sigorta & asistans', text: 'Asistans şirketleri adına organize edilen tıbbi uçuşlar.' },
      ],
    },
    advantages: [
      { title: '7/24 ulaşılabilir', text: 'Tıbbi acil durumlar için gece ve gündüz hızlı organizasyon.' },
      { title: 'Yoğun bakım donanımı', text: 'Tam yoğun bakım hizmeti sunabilen ekipmanlı uçaklar.' },
      { title: 'Uzman sağlık ekibi', text: 'Her uçuşta en az bir doktor ve yetkili bir hemşire.' },
      { title: 'Güncel standartlar', text: 'Güncel kılavuz ve düzenlemelere göre eğitimli personel.' },
    ],
    process: [
      { title: 'Medikal bilgi', text: 'Hastanın durumu ve tıbbi raporları paylaşılır.' },
      { title: 'Uçuşa uygunluk', text: 'Medikal ekip, transfer koşullarını ve ekipman ihtiyacını değerlendirir.' },
      { title: 'Uçak & ekip', text: 'Uygun ambulans uçak ve sağlık ekibi belirlenir.' },
      { title: 'İzin & transfer', text: 'Uçuş izinleri ile kara ambulansı bağlantıları koordine edilir.' },
      { title: 'Uçuş & teslim', text: 'Hasta, sağlık ekibi eşliğinde varış noktasına ulaştırılır.' },
    ],
    capabilities: [
      'Tam yoğun bakım donanımına sahip ambulans uçaklar',
      'Her uçuşta en az bir doktor ve yetkili hemşire',
      'Güncel kılavuz ve düzenlemelere göre eğitimli personel',
      'Medikal ekipman gereksinimlerinin uçuş öncesi değerlendirmesi',
      'Global hizmet sağlayıcı ağı üzerinden hızlı organizasyon',
    ],
    related: ['acil-kritik-zamanli-charter', 'vip-ozel-jet-charter', 'yardim-malzemesi-charter'],
  },

  /* ------------------------------------------------------------------ KURUM */
  {
    slug: 'devlet-askeri-charter',
    title: 'Devlet ve Askeri Charter',
    navTitle: 'Devlet & Askeri',
    category: 'kurum',
    summary: 'Kamu kurumları ve askeri kuruluşlar için kargo ve personel charter organizasyonu.',
    image: uac.il76Sunset,
    imageAlt: 'Gün batımında apronda ağır nakliye uçağı',
    detailImage: imgA400m,
    detailImageAlt: 'Alttan görünen dört motorlu askeri nakliye uçağı',
    seo: {
      title: 'Devlet ve Askeri Charter Uçuşları',
      description:
        'Devlet kurumları ve askeri kuruluşlar için askeri kargo ve personel charter uçuşları: zırhlı araçlar, helikopterler, deniz ekipmanı; diplomatik izin koordinasyonu.',
    },
    hero: {
      eyebrow: 'Devlet & Askeri',
      title: 'Hassas görevler,',
      accent: 'titiz organizasyon.',
      lead: 'Devlet kurumları ve askeri kuruluşlar için askeri kargo charter uçuşları organize ediyoruz. Bu operasyonların gerektirdiği gizlilik, izin süreçleri ve zamanlama disiplinini planın her adımına yansıtıyoruz.',
    },
    intro: {
      heading: 'İzin, güvenlik ve zamanlama aynı planın parçasıdır.',
      paragraphs: [
        'Askeri ve kamu sevkiyatları; ekipmanın niteliği, rota üzerindeki ülkelerin izin gereklilikleri ve teslim zamanının hassasiyeti nedeniyle standart kargo operasyonlarından ayrışır.',
        'Ekibimiz bu süreçleri acil ve düzenli bir şekilde organize eder; taleplerinize hızlı ve profesyonel yanıt verir.',
      ],
    },
    useCases: {
      heading: 'Taşınan ekipman ve görevler',
      lead: 'Ağır ve büyük hacimli askeri ekipmandan personel ve heyet uçuşlarına kadar.',
      items: [
        { title: 'Zırhlı muharebe araçları', text: 'Ağır nakliye uçağı gerektiren kara araçları.' },
        { title: 'Askeri helikopterler', text: 'Sökülmüş veya tam hâlde helikopter taşımacılığı.' },
        { title: 'Askeri deniz ekipmanı', text: 'Deniz kuvvetleri için ekipman ve sistemler.' },
        { title: 'Amfibi araçlar', text: 'Özel ölçü ve ağırlık planlaması gerektiren araçlar.' },
        { title: 'Personel sevkiyatı', text: 'Askeri personel için yolcu charter uçuşları.' },
        { title: 'Resmi heyetler', text: 'Diplomatik ve resmi delegasyon uçuşları.' },
      ],
    },
    advantages: [
      { title: 'Gizlilik', text: 'Bilgi paylaşımı yalnızca operasyonun gerektirdiği ölçüde.' },
      { title: 'İzin süreçleri', text: 'Diplomatik ve üzerinden geçiş izinlerinde koordinasyon.' },
      { title: 'Ağır ekipman', text: 'Büyük hacimli askeri yükler için uygun uçak tipleri.' },
      { title: 'Hızlı yanıt', text: 'Zaman hassasiyeti olan görevlerde acil organizasyon.' },
    ],
    capabilities: [
      'Askeri ve kamu kargoları için uygun uçak tiplerinin temini',
      'Diplomatik izin ve üzerinden geçiş izinlerinin koordinasyonu',
      'Tehlikeli madde içeren sevkiyatlarda regülasyona uygun planlama',
      'Personel ve heyet uçuşlarının organizasyonu',
      'Gizlilik gerektiren operasyonlarda kontrollü bilgi akışı',
    ],
    related: ['agir-yuk-charter', 'tehlikeli-madde-charter', 'yardim-malzemesi-charter'],
  },
  {
    slug: 'yardim-malzemesi-charter',
    title: 'Yardım Malzemesi Charter',
    navTitle: 'Yardım Malzemesi',
    category: 'kurum',
    summary: 'Afet bölgelerine ilaç, gıda, barınma ve enerji ekipmanının hızlı ve düzenli ulaştırılması.',
    image: uac.moduleCrane,
    imageAlt: 'Prefabrik hastane modülünü kaldıran vinç',
    detailImage: uac.moduleHold,
    detailImageAlt: 'Kargo ambarında prefabrik modül',
    seo: {
      title: 'Yardım Malzemesi Charter Uçuşları',
      description:
        'Afet bölgelerine ilaç, koruyucu ekipman, gıda, prefabrik barınak, çadır ve jeneratör gibi yardım malzemelerinin charter uçuşlarla acil ve düzenli ulaştırılması.',
    },
    hero: {
      eyebrow: 'Yardım Malzemesi',
      title: 'İyi niyet yetmez;',
      accent: 'doğru lojistik gerekir.',
      lead: 'Afetten etkilenen bölgelere yardım malzemelerinin acil ve düzenli bir şekilde ulaştırılması için uçuşları uzman ekibimizle organize ediyoruz.',
    },
    intro: {
      heading: 'Afet bölgesinde her saat önemlidir.',
      paragraphs: [
        'Yardım uçuşları; ulaşılması güç havalimanları, değişen saha koşulları ve birden fazla kurumun koordinasyonu nedeniyle hızlı ama aynı zamanda düzenli bir organizasyon gerektirir.',
        'Ekibimiz yardım kuruluşları, kamu kurumları ve şirketlerle birlikte çalışarak yükün niteliğine ve varış noktasının kapasitesine uygun uçuş planını kurar.',
      ],
      quote: 'Yardım, ihtiyaç sahibine ulaştığı anda yardımdır.',
    },
    useCases: {
      heading: 'Taşınan malzemeler',
      lead: 'Afetin ilk günlerinden yeniden yapılanma sürecine kadar ihtiyaç duyulan yükler.',
      items: [
        { title: 'İlaç', text: 'Sağlık kuruluşları ve sahra hastaneleri için ilaç sevkiyatı.' },
        { title: 'Koruyucu ekipman', text: 'Maske, eldiven, önlük ve diğer koruyucu malzemeler.' },
        { title: 'Gıda & temel ihtiyaç', text: 'Gıda kolileri ve temel yaşam malzemeleri.' },
        { title: 'Barınma', text: 'Prefabrik barınaklar ve çadırlar.' },
        { title: 'Enerji', text: 'Jeneratörler ve saha enerji ekipmanı.' },
        { title: 'Saha ekipmanı', text: 'Sondaj ekipmanı ve borular.' },
      ],
    },
    advantages: [
      { title: 'Hızlı organizasyon', text: 'Acil durumlarda kısa sürede uçuş planı.' },
      { title: 'Kurumsal koordinasyon', text: 'Yardım kuruluşları ve kamu kurumlarıyla uyumlu çalışma.' },
      { title: 'Uygun uçak', text: 'Varış havalimanının kapasite ve kısıtlarına uygun seçim.' },
      { title: 'Düzenli akış', text: 'Tekrarlayan uçuşlarla sürdürülebilir yardım köprüsü.' },
    ],
    capabilities: [
      'Yardım kuruluşları ve kamu kurumlarıyla operasyonel koordinasyon',
      'Varış havalimanı kapasitesine uygun uçak tipi seçimi',
      'Karışık yükler için yükleme planlaması',
      'Acil uçuş ve iniş izinlerinin takibi',
      'Tekrarlayan yardım köprüsü uçuşlarının planlanması',
    ],
    related: ['acil-kritik-zamanli-charter', 'kargo-charter', 'ambulans-ucak'],
  },
  {
    slug: 'eglence-spor-charter',
    title: 'Eğlence ve Spor Charter',
    navTitle: 'Eğlence & Spor',
    category: 'kurum',
    summary: 'Turne ekipmanı, film seti malzemesi ve spor organizasyonları için takvime kilitli uçuşlar.',
    image: imgStage,
    imageAlt: 'Sis ve mavi ışıklar altında sahnede hazır bekleyen enstrümanlar',
    detailImage: uac.noseDoor,
    detailImageAlt: 'Yükleme için burun kapağı açık kargo uçağı',
    seo: {
      title: 'Eğlence ve Spor Sektörü Charter Uçuşları',
      description:
        'Konser turneleri, film prodüksiyonları ve spor organizasyonları için sahne, ses, set ve spor ekipmanı taşımacılığı; ekip ve ekipman için takvime bağlı charter.',
    },
    hero: {
      eyebrow: 'Eğlence & Spor',
      title: 'Perde açılmadan',
      accent: 'ekipman sahnede.',
      lead: 'Eğlence ve spor sektörlerinde biletler önceden satılır; teslim tarihini kaçırmak bir seçenek değildir. Turne, film ve spor organizasyonlarınızın lojistiğini takvime bağlı kalarak planlıyoruz.',
    },
    intro: {
      heading: 'Takvim kesin, tolerans sıfır.',
      paragraphs: [
        'Bir konser turnesinin sahne ve ses sistemi, bir film setinin ekipmanı ya da bir spor organizasyonunun malzemesi; belirlenen tarihte belirlenen noktada olmak zorundadır.',
        'Ekibimiz yükleme ve uçuş planını etkinlik takvimine göre kurar; ekip ve ekipmanın birlikte ya da ayrı uçuşlarla taşınmasını organize eder.',
      ],
      quote: 'Teslim tarihini kaçırmak bir seçenek değildir.',
    },
    useCases: {
      heading: 'Kimler için?',
      lead: 'Takvimi önceden ilan edilmiş, ertelenemeyen her organizasyon için.',
      items: [
        { title: 'Film prodüksiyonları', text: 'Büyük bütçeli yapımlar için set ekipmanı.' },
        { title: 'Konser & turneler', text: 'Dünya çapındaki sanatçılar için sahne ve ses ekipmanı.' },
        { title: 'Spor organizasyonları', text: 'Üst düzey etkinlikler için spor ekipmanı.' },
        { title: 'Takımlar & ekipler', text: 'Sporcular, teknik ekipler ve prodüksiyon kadroları.' },
      ],
    },
    advantages: [
      { title: 'Takvime kilitli', text: 'Uçuş planı, etkinlik tarihinden geriye doğru kurulur.' },
      { title: 'Hassas ekipman', text: 'Yüksek değerli ekipman için dikkatli yükleme koordinasyonu.' },
      { title: 'Ekip + ekipman', text: 'Yolcu ve kargo charter tek operasyonda planlanır.' },
      { title: 'Çok duraklı rotalar', text: 'Turne programına uygun ardışık uçuşlar.' },
    ],
    capabilities: [
      'Turne takvimine göre çok ayaklı uçuş planlaması',
      'Hassas ve yüksek değerli ekipman için yükleme koordinasyonu',
      'Ekip ve ekipmanın aynı operasyonda planlanması',
      'Geçici ithalat belgeleri (ör. ATA Karnesi) süreçlerinde koordinasyon',
      'Yolcu ve kargo charter’ın birlikte organizasyonu',
    ],
    related: ['yolcu-grup-charter', 'vip-ozel-jet-charter', 'kargo-charter'],
  },
];

/* ------------------------------------------------------------------ Localized access */

/** Service id → English copy (images, category and relations are shared with the Turkish data). */
const textEn = servicesEn;

export interface LocalizedService extends Service {
  /** Stable id (original Turkish slug) used for relations, form values and routing */
  id: string;
  href: string;
}

const categoriesByLocale: Record<Locale, Record<CategoryId, { label: string; description: string }>> = {
  tr: categoriesTr,
  en: categoriesEn,
};

const processByLocale: Record<Locale, Step[]> = { tr: defaultProcessTr, en: defaultProcessEn };

export const getCategories = (locale: Locale) => categoriesByLocale[locale];

export const getDefaultProcess = (locale: Locale) => processByLocale[locale];

export const getServices = (locale: Locale): LocalizedService[] =>
  servicesTr.map((s) => {
    const id = s.slug;
    const localized = locale === 'tr' ? s : { ...s, ...textEn[id] };
    return { ...localized, id, slug: serviceSlugs[id][locale], href: servicePath(locale, id) };
  });

export const getService = (locale: Locale, id: string) => getServices(locale).find((s) => s.id === id);

export const getServicesByCategory = (locale: Locale) => {
  const all = getServices(locale);
  const cats = getCategories(locale);
  return (Object.keys(cats) as CategoryId[]).map((id) => ({
    id,
    ...cats[id],
    services: all.filter((s) => s.category === id),
  }));
};
