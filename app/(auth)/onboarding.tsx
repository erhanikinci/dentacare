import React,{useState} from 'react';
import {Pressable,View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useRouter} from 'expo-router';
import {Screen,Button,Header,Card,I,IconName,Txt} from '@/components/ui';
import {FeatureArt} from '@/components/illustrations';
import {C,shadow} from '@/theme';
import {useApp} from '@/context/AppContext';
const choices:{name:string,icon:IconName,info:string}[]=[
 {name:'Kontrol',icon:'search-outline',info:'Düzenli kontrol'}, {name:'Beyazlatma',icon:'sparkles-outline',info:'Daha parlak gülüş'},
 {name:'Diş Teli',icon:'git-compare-outline',info:'Düzgün dişler'}, {name:'İmplant',icon:'hardware-chip-outline',info:'Eksik diş tedavisi'},
 {name:'Diş Ağrısı',icon:'flash-outline',info:'Ağrınızı hafifletin'}, {name:'Diş Temizliği',icon:'water-outline',info:'Ferahlık ve bakım'},
 {name:'Estetik',icon:'heart-outline',info:'Estetik gülüş'}, {name:'Acil Durum',icon:'medkit-outline',info:'Acil destek'}];
export default function Onboarding(){const r=useRouter();const {setOnboarded}=useApp();const [step,setStep]=useState(0);const [selected,setSelected]=useState<string[]>(['Kontrol']);const [visit,setVisit]=useState('Klinikte');const [reminders,setReminders]=useState('Evet, lütfen');const toggle=(x:string)=>setSelected(p=>p.includes(x)?p.filter(y=>y!==x):[...p,x]);const finish=()=>{setOnboarded(true);r.replace('/(tabs)/home')};
 const questions=['DentaCare’ye neden geldin?','Bakımın, senin tercihin.','İyi hisset, takipte kal.'];
 const subs=['Senin için önemli olanları seç. Birden fazla seçim yapabilirsin.','Sana en uygun görüşme şeklini belirle.','Hatırlatmalarla randevularını takip etmeni kolaylaştıralım.'];
 return <Screen footer={<Button title={step===2?'DentaCare’ye Geç':'Devam Et'} onPress={()=>step===2?finish():setStep(s=>s+1)} icon="arrow-forward"/>}>
  <Header title="Deneyimini kişiselleştir" right="close-outline" onRight={finish}/>
  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:16}}><Txt size="mini" weight="800" color={C.teal} style={{letterSpacing:1.5}}>SANA ÖZEL DENEYİM</Txt><Txt size="mini" muted>3 ADIMDAN {step+1}. ADIM</Txt></View>
  <View style={{flexDirection:'row',gap:6,marginBottom:26}}>{[0,1,2].map(i=><View key={i} style={{flex:1,height:5,borderRadius:99,backgroundColor:i<=step?C.teal:'#D2E9F1'}}/>)}</View>
  <Txt size="title" style={{marginBottom:8}}>{questions[step]}</Txt>
  <Txt color={C.secondary} style={{marginBottom:24}}>{subs[step]}</Txt>
  {step===0?<View style={{flexDirection:'row',flexWrap:'wrap',gap:12}}>{choices.map(({name,icon,info})=>{const active=selected.includes(name);return <Pressable key={name} onPress={()=>toggle(name)} accessibilityRole="checkbox" accessibilityState={{checked:active}} style={{width:'48%',flexGrow:1,maxWidth:'48%'}}><LinearGradient colors={active?['#FFFFFF','#D6F9FC']:['rgba(255,255,255,.95)','rgba(239,250,255,.87)']} style={{minHeight:154,borderWidth:active?2:1,borderColor:active?C.aqua:C.white,borderRadius:23,alignItems:'center',justifyContent:'center',padding:10,gap:5,...shadow.card}}><FeatureArt icon={icon} size={62}/><Txt weight="800" style={{marginTop:3}}>{name}</Txt><Txt size="mini" muted>{info}</Txt>{active?<View style={{position:'absolute',top:10,right:10}}><I name="checkmark-circle" color={C.teal} size={23}/></View>:null}</LinearGradient></Pressable>})}</View>:null}
  {step===1?<View style={{gap:13}}>{[['Klinikte','business-outline','Hekiminle klinikte görüş'],['Görüntülü görüşme','videocam-outline','Bulunduğun yerden uzmanına danış'],['Her ikisi','options-outline','Her randevuda kendin karar ver']].map(([v,icon,desc])=>{const active=visit===v;return <Card key={v} onPress={()=>setVisit(v)} style={{borderColor:active?C.aqua:C.white,borderWidth:active?2:1}}><View style={{flexDirection:'row',alignItems:'center',gap:14}}><FeatureArt icon={icon as IconName}/><View style={{flex:1,gap:4}}><Txt weight="800">{v}</Txt><Txt size="caption" muted>{desc}</Txt></View><I name={active?'checkmark-circle':'ellipse-outline'} color={active?C.teal:C.muted}/></View></Card>})}</View>:null}
  {step===2?<View style={{gap:13}}>{[['Evet, lütfen','notifications-outline','Kişisel hatırlatmalar ve öneriler'],['Yalnızca randevular','calendar-outline','Sadece randevu hatırlatmaları'],['Şimdi değil','notifications-off-outline','Daha sonra değiştirebilirsin']].map(([v,icon,desc])=>{const active=reminders===v;return <Card key={v} onPress={()=>setReminders(v)} style={{borderColor:active?C.aqua:C.white,borderWidth:active?2:1}}><View style={{flexDirection:'row',alignItems:'center',gap:14}}><FeatureArt icon={icon as IconName}/><View style={{flex:1,gap:4}}><Txt weight="800">{v}</Txt><Txt size="caption" muted>{desc}</Txt></View><I name={active?'checkmark-circle':'ellipse-outline'} color={active?C.teal:C.muted}/></View></Card>})}</View>:null}
  <View style={{marginTop:24,flexDirection:'row',alignItems:'center',gap:9}}><I name="lock-closed-outline" color={C.teal} size={14}/><Txt size="mini" color={C.muted}>Demo tercihlerin yalnızca bu cihazda saklanır.</Txt></View>
 </Screen>;
}
