# DentaCare Premium — Tasarım Sistemi

## Tipografi

Font ailesi: **Inter**, ağırlıklar 400 / 500 / 600 / 700 / 800. Önerilen mobil ölçüler: büyük vitrin başlığı 34–36 pt, sayfa başlığı 26–28 pt, bölüm başlığı 20–22 pt, kart başlığı 16 pt, gövde 14–16 pt ve açıklama 12 pt. Türkçe karakterler (ç, ğ, ı, İ, ö, ş, ü) ekranlarda test edilmelidir.

## Renkler

| Kullanım | Renk |
| --- | --- |
| Ana metin | `#132B49` |
| Vurgu mavisi | `#075A92` |
| Turkuaz | `#0897AF` |
| Aqua | `#24D4DF` |
| Açık mavi yüzey | `#EAF6FF` |
| Ana zemin | `#F5FAFE` |
| Cam kartlar | Yarı saydam beyaz, çok hafif kenarlık |

Tek referans: `src/theme/index.ts`.

## Bileşenler

- Birincil buton: aqua→turkuaz degrade, 54dp yükseklik, yuvarlak kenarlar.
- İkincil buton: beyaz cam yüzey, belirgin metin.
- Kartlar: yaklaşık 25dp köşe, hafif gölge.
- Metin alanları: 19dp köşe, 55dp yükseklik.
- Seçim çipleri: tam yuvarlak, seçili durumda turkuaz.
- En az 44×44dp dokunma hedefi, açık durum etiketleri, anlamlı ikona erişilebilirlik açıklamaları.
- Çizimler: `src/components/premium-art.tsx` ve `src/components/illustrations.tsx` içindeki ölçeklenebilir vektörler.

## Tutarlılık

Bileşenleri `src/components/ui.tsx` üzerinden kullanın; ekran bazında bağımsız renkler veya tipografiler tanımlamayın. Uzun Türkçe metinlerde taşmayı azaltmak için satır kırılımı ve esnek düzen kullanın.
