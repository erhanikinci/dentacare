# DentaCare Türkiye — Teknik Mimari

## Teknoloji

- Expo SDK 57 ve React Native 0.86
- TypeScript ve dosya tabanlı Expo Router yönlendirmesi
- Inter font ailesi, `expo-font` ile yüklenir
- `expo-linear-gradient`, `react-native-svg`, `@expo/vector-icons`
- Demo kullanıcı durumu ve etkileşimler: React Context + AsyncStorage

## Katmanlar

`app/`: yönlendirme ve ekranlar. `src/components/`: yeniden kullanılabilir arayüz bileşenleri ve SVG çizimler. `src/theme/`: renk, tipografi ve görsel değerler. `src/data/demo.ts`: Türkçe örnek hekim, tedavi ve randevu bilgileri; tarih ve tutar biçimlendirme. `src/context/AppContext.tsx`: favoriler, alışkanlıklar, randevular ve mesajların demo durum yönetimi.

## İlk açılış

Native Splash → animasyonlu Splash → karşılama → başlangıç → ana sayfa. Daha önce demo başlangıcını tamamlamış cihazlar doğrudan ana sayfaya yönlendirilir.

## Önemli ayrım

Dahili durum türleri ve API anahtarları İngilizce bırakılmıştır (`Upcoming`, `Completed`, `Cancelled`, `In-Clinic`, `Video`). Ekranlarda bunlar `statusLabel` ve `visitModeLabel` fonksiyonlarıyla Türkçe görüntülenir. Böylece yönlendirme ve kalıcı verilerin anlamı değişmez.

## Üretime geçişte

Güvenli kimlik doğrulama, klinik veritabanı, sunucu tarafı randevu bütünlüğü, görüntülü görüşme altyapısı, ödeme sağlayıcısı, güvenli belge depolama ve KVKK uyumluluğu ayrıca geliştirilmelidir.
