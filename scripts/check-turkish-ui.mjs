import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const read=(pathName)=>fs.readFileSync(path.join(root,pathName),'utf8');
const checks=[
 ['app/splash.tsx',['GÜLÜMSEMENİN GELECEĞİ','DİŞ SAĞLIĞINDA YENİ BİR DÖNEM']],
 ['app/(auth)/welcome.tsx',['Hemen Başla','Zaten hesabım var','Sağlıklı Gülüş']],
 ['app/(auth)/sign-in.tsx',['Giriş Yap','Hesap Oluştur','Şifremi unuttum']],
 ['app/(auth)/onboarding.tsx',['DentaCare’ye neden geldin?','Diş Temizliği']],
 ['app/(tabs)/home.tsx',['Hekim Bul','Sıradaki randevun']],
 ['app/(tabs)/_layout.tsx',['Ana Sayfa','Randevular','Kayıtlar','Mesajlar','Profil']],
 ['app/booking.tsx',['Randevuyu Onayla','Uygun Saatler']],
 ['app/checkout.tsx',['Ödeme ve Onay','GULUS500']],
 ['src/data/demo.ts',['tr-TR','TRY','Dr. Selin Yılmaz','Diş Beyazlatma']],
 ['README.md',['DentaCare Türkiye','npm install']],
 ];
let errors=0;
for(const [f,phrases] of checks){const s=read(f);for(const v of phrases){if(!s.includes(v)){console.error('Eksik Türkçe ifade:',f,v);errors++;}}}
for(const file of ['app/(auth)/sign-in.tsx','app/dentists/[id].tsx','src/components/catalog.tsx']){
 const source=read(file);
 for(const pattern of ['Şifre reset requires','d.değerlendirme','Message dentist',' years<','Next: ']){
  if(source.includes(pattern)){console.error('Kalan İngilizce/hatalı ifade:',file,pattern);errors++;}
 }
}
const settings=JSON.parse(read('app.json')).expo;
if(settings.name!=='DentaCare Türkiye'||settings.ios.infoPlist.CFBundleDevelopmentRegion!=='tr_TR'){console.error('Yerel dil ayarları eksik');errors++}
const manifest=JSON.parse(read('design-reference/SCREEN_MANIFEST.json'));
if(manifest.design_screens.length!==23||manifest.language!=='tr-TR'){console.error('Türkçe ekran manifesti eksik');errors++}
if(errors){console.error('Türkçe kontrol BAŞARISIZ:',errors);process.exit(1)}
console.log('BAŞARILI · 23 ekranın Türkçe içerikleri, yerel dil ayarları ve temel metinler kontrol edildi.');
