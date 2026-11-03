# DentaCare Türkiye · Premium Studio v3.0

**Türkçe arayüzlü diş sağlığı mobil uygulaması demosu**  
Expo SDK 57 · React Native · Expo Router · TypeScript

DentaCare Premium Studio'nun Türkçe sürümüdür. Premium açık renk arayüz, animasyonlu Splash, diş illüstrasyonları, cam efektli kartlar ve tüm ekran akışları korunmuştur. Ekran başlıkları, butonlar, formlar, uyarılar, örnek hasta/hekim içerikleri ve bildirimler Türkçeleştirilmiştir.

## Kurulum — Windows / VS Code

**Gereksinimler:** Node.js **22.13 veya üstü**, npm, VS Code ve ilk `npm install` işlemi için internet. Android için Expo Go veya açık Android Studio emülatörü.

1. ZIP dosyasını çıkartın.
2. VS Code'da **`DentaCare_Premium_TR`** klasörünü açın (`package.json` bu klasörde bulunmalı).
3. **Terminal → New Terminal** bölümünden aşağıdakileri çalıştırın:

```powershell
node -v
npm install
npx expo start --clear
```

4. Terminalde `a`: Android emülatörü, `w`: web, QR kodu: Expo Go.
5. İlk açılışta native logo → animasyonlu Splash → **Hoş Geldin** ekranı açılır. **Hemen Başla** ile 3 adımlı başlangıç akışına veya **Zaten hesabım var** ile örnek giriş ekranına geçebilirsiniz.

**Bağlantı sorunu:** Telefon ve bilgisayar aynı Wi-Fi üzerinde olmalıdır. Gerekirse:

```powershell
npx expo start --tunnel
```

**Bağımlılık uyuşmazlığı:** `npx expo install --fix` ve ardından `npx expo start --clear` deneyin.

**Windows otomatik başlatma:** `START_WINDOWS.bat` kullanılabilir.

## Uygulama ekranları

| Bölüm | Ekranlar |
| --- | --- |
| Açılış | Splash, Hoş Geldin |
| Hesap | Giriş Yap / Hesap Oluştur, 3 adımlı başlangıç |
| Keşif | Ana Sayfa, Diş Hekimi Bul, Hekim Profili, Tedaviler, Tedavi Detayı |
| Randevular | Randevu Al, Randevu Onayı, Randevularım |
| İletişim | Görüntülü Görüşme, Mesajlar / Sohbet |
| Sağlık | Diş Sağlığı Kayıtları, Ağız Sağlığı Takibi, Acil Diş Sağlığı |
| Diğer | Klinik, Ödeme, Bildirimler, Favoriler, Profil, Tasarım Sistemi |

## Türkçe yerelleştirme

- Türkiye dili: **`tr-TR`**.
- Tarih: **`5 Kasım 2026`** tarzı, saat: **`14:30`** biçimi.
- Fiyat: **Türk lirası (₺)**. Fiyatlar gerçek klinik tarifesi veya döviz kuru dönüşümü değil, temsili demo değerleridir.
- Hekim, klinik ve kullanıcı isimleri: kurgusal Türkçe örnekler.
- Dahili rotalar ve durum anahtarları (`Upcoming`, `In-Clinic`, vb.) yazılım uyumluluğu için korunur; kullanıcıya görünen adlar Türkçedir.
- Yerel demo depolaması `dentacare.demo.tr.v3` anahtarını kullanır; İngilizce demo verileriyle karışmaz.

## Kaynak kod yapısı

```text
DentaCare_Premium_TR/
├── app/                  # Expo Router ekranları (Türkçe içerik)
│   ├── (auth)/           # Karşılama, giriş, başlangıç
│   ├── (tabs)/           # Ana sayfa, randevular, kayıtlar, mesajlar, profil
│   ├── dentists/         # Hekimler
│   └── treatments/       # Tedaviler
├── src/
│   ├── components/       # Tekrar kullanılan premium bileşenler
│   ├── context/          # Yerel örnek veriler ve durum yönetimi
│   ├── data/             # Türkçe hekim/tedavi/randevu örnek verileri
│   └── theme/            # Renkler, tipografi ve boşluklar
├── assets/               # Uygulama ikonları ve açılış görselleri
├── docs/                 # Türkçe mimari/tasarım notları
└── design-reference/     # Tasarım görselleri ve Türkçe ekran kataloğu
```

## Geliştirme kontrolleri

```powershell
npm run verify:structure
npm run verify:syntax
npm run verify:locale
npm run typecheck
```

İlk üç komut kaynak yapısını ve sözdizimini kontrol eder. `npm run typecheck` için önceden `npm install` yapılmalıdır.

## Önemli: Canlı sağlık hizmeti değildir

Bu proje **ön yüz ve etkileşimli demo** niteliğindedir. Gerçek hesap oluşturma, hasta kayıtları, klinik randevu hizmeti, acil yardım yönlendirmesi, canlı görüntülü görüşme, ödeme tahsilatı ve sunucu/veritabanı bağlantıları mevcut değildir. Uygulama örnek işlemleri cihazda simüle eder. **Gerçek hasta verisi veya ödeme bilgisi girmeyin.** Üretim kullanımı için kimlik doğrulama, yetkilendirme, KVKK değerlendirmesi, güvenli API, veri saklama, denetim, test ve erişilebilirlik çalışmaları gereklidir.

Ek belgeler: `docs/MIMARI.md`, `docs/TASARIM_SISTEMI.md`, `docs/EKRAN_AKISLARI.md`, `docs/UYGULAMAYA_ALMA.md`.

> Not: Önceki İngilizce kolaj görselleri, yalnızca Türkçe içerik barındıran bu proje sürümüne dahil edilmemiştir. Gerçek uygulama arayüzü ve görsel bileşenleri eksiksiz korunmuştur.
