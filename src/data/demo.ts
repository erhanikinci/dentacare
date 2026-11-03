export type Dentist = {id:string;name:string;specialty:string;years:number;rating:number;reviews:number;distance:string;price:number;next:string;initials:string;color:string;about:string};
export type Treatment = {id:string;title:string;desc:string;price:number;duration:string;icon:string;category:string;benefits:string[]};
// Internal statuses/modes remain stable keys; their visible labels are localized below.
export type Appointment = {id:string;dentistId:string;treatmentId:string;date:string;time:string;mode:'In-Clinic'|'Video';status:'Upcoming'|'Completed'|'Cancelled'};
export const dentists:Dentist[] = [
 {id:'sarah',name:'Dr. Selin Yılmaz',specialty:'Ortodonti Uzmanı',years:12,rating:4.9,reviews:320,distance:'1,2 km',price:1250,next:'Bugün · 10:30',initials:'SY',color:'#AEE5E2',about:'Koruyucu diş hekimliği, sağlıklı gülüşler ve kişiye özel ortodonti tedavilerine odaklanan deneyimli bir uzman.'},
 {id:'emre',name:'Dr. Emre Demir',specialty:'İmplant Uzmanı',years:9,rating:4.8,reviews:214,distance:'2,5 km',price:1500,next:'Yarın · 09:00',initials:'ED',color:'#E9D5FF',about:'Restoratif diş hekimliği, implant uygulamaları ve hasta odaklı danışmanlık alanlarında uzman.'},
 {id:'emily',name:'Dr. Ece Kaya',specialty:'Genel Diş Hekimi',years:8,rating:4.9,reviews:186,distance:'3,1 km',price:1000,next:'Bugün · 14:00',initials:'EK',color:'#FFE2D5',about:'Uzun süreli ağız sağlığını önemseyen, nazik ve bütüncül bir diş hekimliği yaklaşımını benimser.'},
 {id:'michael',name:'Dr. Mert Arslan',specialty:'Estetik Diş Hekimi',years:11,rating:4.8,reviews:278,distance:'4,0 km',price:1600,next:'Cuma · 11:00',initials:'MA',color:'#CEE8FF',about:'Doğal görünümlü gülüşler için kanıta dayalı estetik diş hekimliği uygulamalarına odaklanır.'}
];
// Tüm fiyatlar yalnızca demo amaçlı örnek Türk lirası tutarlarıdır.
export const treatments:Treatment[] = [
 {id:'checkup',title:'Diş Kontrolü',desc:'Kapsamlı muayene ile ağız ve diş sağlığını koru.',price:1250,duration:'30–45 dk',icon:'medkit-outline',category:'Genel',benefits:['Kapsamlı ağız muayenesi','Kişiye özel öneriler','Koruyucu bakım']},
 {id:'whitening',title:'Diş Beyazlatma',desc:'Klinikte uygulanan profesyonel beyazlatma seçenekleri.',price:5200,duration:'60–90 dk',icon:'sparkles-outline',category:'Estetik',benefits:['Daha parlak bir gülüş','Profesyonel uygulama','Kişiye özel değerlendirme']},
 {id:'braces',title:'Ortodonti',desc:'Modern ortodonti seçenekleriyle dişlerinin dizilimini iyileştir.',price:42000,duration:'İlk görüşme 45 dk',icon:'grid-outline',category:'Ortodonti',benefits:['Daha düzenli diş dizilimi','Ağız bakımında kolaylık','Uzun vadeli planlama']},
 {id:'implants',title:'Diş İmplantı',desc:'Eksik dişler için implant temelli tedavi seçenekleri.',price:32000,duration:'60–120 dk',icon:'hardware-chip-outline',category:'Genel',benefits:['Doğal görünümlü restorasyon','Uzun dönem kullanım hedefi','Çiğneme konforunun desteklenmesi']},
 {id:'cleaning',title:'Diş Taşı Temizliği',desc:'Profesyonel plak ve diş taşı temizliği.',price:1900,duration:'45–60 dk',icon:'water-outline',category:'Genel',benefits:['Temizlik ve ferahlık','Plak birikiminin azaltılması','Diş eti bakımının desteklenmesi']},
 {id:'cosmetic',title:'Gülüş Tasarımı',desc:'Sana özel estetik gülüş planlaması.',price:8500,duration:'İlk görüşme 60 dk',icon:'heart-outline',category:'Estetik',benefits:['Kişiselleştirilmiş plan','Doğal görünüm','Estetik danışmanlığı']},
 {id:'emergency',title:'Acil Diş Bakımı',desc:'Acil diş sorunları için değerlendirme seçenekleri.',price:2400,duration:'Öncelikli değerlendirme',icon:'medical-outline',category:'Acil',benefits:['Ön değerlendirme','Ağrının değerlendirilmesi','Uygun bakım seçenekleri']},
 {id:'veneers',title:'Diş Kaplama',desc:'Kişiye özel kaplamalarla estetik gülüş seçenekleri.',price:14000,duration:'60 dk',icon:'diamond-outline',category:'Estetik',benefits:['Doğal bitiş','Kişiye özel renk','Estetik iyileştirme']}
];
export const trLocale='tr-TR';
const pad=(n:number)=>String(n).padStart(2,'0');
const shiftDays=(days:number)=>{const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+days);return d};
export const formatDate=(date:Date|string)=>{const d=typeof date==='string'?new Date(`${date}T12:00:00`):date;return d.toLocaleDateString(trLocale,{day:'numeric',month:'long',year:'numeric'})};
export const appointmentDates=Array.from({length:7},(_,i)=>{const d=shiftDays(i+1);return {iso:`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`,day:String(d.getDate()),weekday:d.toLocaleDateString(trLocale,{weekday:'short'}),month:d.toLocaleDateString(trLocale,{month:'short'}),label:formatDate(d)};});
export const appointmentTimes=['09:00','10:30','11:00','12:00','14:00','15:30'];
export const money=(amount:number)=>new Intl.NumberFormat(trLocale,{style:'currency',currency:'TRY',maximumFractionDigits:0}).format(amount);
export const initialAppointments:Appointment[]=[
 {id:'a1',dentistId:'sarah',treatmentId:'whitening',date:formatDate(shiftDays(2)),time:'10:30',mode:'In-Clinic',status:'Upcoming'},
 {id:'a2',dentistId:'emily',treatmentId:'cleaning',date:formatDate(shiftDays(8)),time:'14:00',mode:'In-Clinic',status:'Upcoming'},
 {id:'a3',dentistId:'emre',treatmentId:'checkup',date:formatDate(shiftDays(-21)),time:'11:00',mode:'Video',status:'Completed'},
];
export const conversationSeeds=[
 {id:'sarah',name:'Dr. Selin Yılmaz',message:'Randevunuz onaylandı!',time:'10:24',unread:true},
 {id:'support',name:'DentaCare Destek',message:'Bugün size nasıl yardımcı olabiliriz?',time:'Dün',unread:false},
 {id:'emre',name:'Dr. Emre Demir',message:'Ziyaretiniz için teşekkür ederiz!',time:'Pazartesi',unread:false},
];
export const visitModeLabel=(mode:Appointment['mode'])=>mode==='Video'?'Görüntülü':'Klinikte';
export const statusLabel=(status:Appointment['status'])=>({Upcoming:'Yaklaşan',Completed:'Tamamlanan',Cancelled:'İptal Edilen'} as const)[status];
export const getDentist=(id?:string)=>dentists.find(d=>d.id===id)??dentists[0];
export const getTreatment=(id?:string)=>treatments.find(t=>t.id===id)??treatments[1];
