# Unique Air Cargo — Kurumsal Web Sitesi

Astro 5 ile geliştirilmiş, statik çıktı üreten kurumsal site. Varsayılan olarak sıfır framework JS; etkileşimler (menü, sekmeler, form) küçük vanilla script'lerdir.

## Komutlar

```bash
npm install        # bağımlılıklar
npm run dev        # geliştirme sunucusu (http://localhost:4321)
npm run build      # production çıktısı → dist/
npm run preview    # dist/ önizleme
npm run assets     # logo varyantlarını ve dünya haritası verisini yeniden üretir
```

`dist/` klasörü herhangi bir statik sunucuya (Netlify, Vercel, Cloudflare Pages, Nginx) doğrudan yüklenebilir.

## GitHub Pages (geçici önizleme)

`.github/workflows/deploy.yml`, `main` dalına her push'ta siteyi GitHub Pages'e yayınlar.

1. GitHub'da repo oluşturun (ücretsiz planda Pages için repo **public** olmalı) ve kodu `main` dalına pushlayın.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions** seçin.
3. Actions sekmesindeki iş bitince site `https://<kullanıcı>.github.io/<repo>/` adresinde yayında olur.

Notlar:
- `site` ve `base` repo adından otomatik alınır (`SITE_URL`, `BASE_PATH`); repo adını değiştirmek bir şeyi bozmaz.
- Önizleme derlemesi (`PUBLIC_PREVIEW=true`) tüm sayfalara `noindex` ekler ve `robots.txt` ile tarayıcıları engeller; gerçek alan adına geçerken workflow'dan bu satırı kaldırın.
- Koddaki tüm iç bağlantılar `src/utils/paths.ts` içindeki `withBase()` üzerinden geçer; yeni bağlantı eklerken bunu kullanın.

## Yapı

```
src/
  data/          site.ts (iletişim, menü) · services.ts (11 hizmet, tüm içerik) · sectors.ts · scenarios.ts
  components/    Header (mega menü + mobil menü) · Footer · PageHero · ServiceIndex · WorldMap · ScenarioTabs
                 ProcessSteps · ServiceCard · QuoteForm · CtaBand · SEO · Breadcrumbs · Icon · Logo
  layouts/       BaseLayout (SEO, fontlar, reveal animasyonları)
  pages/         index · kurumsal · hizmetler/ · hizmetler/[slug] · sektorler · iletisim · kvkk · 404
  styles/        global.css (tasarım token'ları, tipografi, butonlar)
  assets/images  Fotoğraflar (build sırasında AVIF/WebP ve responsive boyutlara dönüştürülür)
```

- **Yeni hizmet eklemek:** `src/data/services.ts` içine bir kayıt eklemek yeterli; detay sayfası, menü, footer, form seçenekleri ve sitemap otomatik güncellenir.
- **İletişim bilgileri:** yalnızca `src/data/site.ts` içinden değiştirilir.

## Teklif formu

`.env` dosyasına bir uç nokta tanımlayın (ör. Formspree veya kendi API'niz):

```
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Form JSON olarak POST eder. Uç nokta tanımlı değilse, kullanıcının e-posta uygulamasını `charter@uniqueaircargo.com` adresine doldurulmuş bir taslakla açar.

## SEO

Her sayfada title/description, canonical, Open Graph + Twitter kartı (1200×630 görsel build sırasında üretilir), JSON-LD (Organization, Service, BreadcrumbList, ItemList, FAQPage), `sitemap-index.xml` ve `robots.txt` bulunur.

## İçerik notları

- Hizmet içerikleri, şirketin mevcut sitesindeki (uniqueaircargo.com) hizmet tanımlarına dayanır. Doğrulanmamış rakam, referans veya proje kullanılmamıştır.
- Ana sayfa ve Sektörler sayfasındaki operasyon senaryoları açıkça **"Temsili senaryo"** olarak etiketlenmiştir.
- Fotoğraflar Unsplash lisansıyla kullanılmaktadır. Yayın öncesi, mümkünse şirketin kendi operasyon fotoğraflarıyla değiştirilmesi önerilir.
- KVKK Aydınlatma Metni genel bir şablondur; yayın öncesi hukuk danışmanı tarafından gözden geçirilmelidir.
