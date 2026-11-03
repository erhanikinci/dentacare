import React,{useState} from 'react';
import {Pressable,ScrollView,View} from 'react-native';
import {useRouter} from 'expo-router';
import {Screen,Card,DemoPill,Field,I,IconName,Section,Txt} from '@/components/ui';
import {GlassHero,FeatureArt,DoctorAvatar} from '@/components/illustrations';
import {DentistCard,TreatmentCard} from '@/components/catalog';
import {DentalMark} from '@/components/premium-art';
import {C} from '@/theme';
import {dentists,getDentist,getTreatment,treatments,visitModeLabel} from '@/data/demo';
import {useApp} from '@/context/AppContext';
const quick:[string,IconName,string][]=[['Hekim Bul','search-outline','/dentists'],['Randevu Al','calendar-outline','/booking'],['Tedaviler','sparkles-outline','/treatments'],['Acil Yardım','medkit-outline','/emergency']];
export default function Home(){const r=useRouter();const {appointments}=useApp();const [search,setSearch]=useState('');const next=appointments.find(x=>x.status==='Upcoming');const doctor=getDentist(next?.dentistId);const treatment=getTreatment(next?.treatmentId);const hour=new Date().getHours();const greeting=hour<11?'GÜNAYDIN':hour<17?'İYİ GÜNLER':'İYİ AKŞAMLAR';
 return <Screen><View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:19}}>
  <View style={{flexDirection:'row',gap:10,alignItems:'center'}}><DentalMark size={42}/><View><Txt size="mini" color={C.muted} style={{letterSpacing:1}}>{greeting}  ✦</Txt><Txt size="title">Deniz <Txt size="title" color={C.teal}>✳</Txt></Txt></View></View>
  <View style={{flexDirection:'row',gap:8,alignItems:'center'}}><Pressable onPress={()=>r.push('/notifications')} accessibilityLabel="Bildirimler" style={{backgroundColor:'rgba(255,255,255,.86)',borderColor:C.white,borderWidth:1,borderRadius:16,padding:11}}><I name="notifications-outline" size={22}/></Pressable><Pressable onPress={()=>r.push('/(tabs)/profile')} accessibilityLabel="Profil"><DoctorAvatar initials="DY" color={C.mint} size={44}/></Pressable></View>
 </View><DemoPill/>
 <View style={{marginTop:16}}><Field icon="search-outline" placeholder="Hekim veya tedavi ara..." value={search} onChangeText={setSearch} onSubmitEditing={()=>r.push({pathname:'/dentists',params:{q:search}})} returnKeyType="search"/></View>
 <View style={{marginTop:21}}><GlassHero title={'Sağlıklı Dişler,\nMutlu Gülüşler'} subtitle={'Her gülümsemeye özel bakım.'}><Pressable onPress={()=>r.push('/tracker')} style={{marginTop:7,backgroundColor:'rgba(255,255,255,.28)',borderWidth:1,borderColor:'rgba(255,255,255,.55)',paddingVertical:10,paddingHorizontal:13,alignSelf:'flex-start',borderRadius:99}}><Txt size="mini" color={C.white} weight="800">Sağlık yolculuğum  ↗</Txt></Pressable></GlassHero></View>
 <Section title="Ne yapmak istersin?"><View style={{flexDirection:'row',gap:7}}>{quick.map(([label,icon,url])=><Pressable accessibilityRole="button" key={label} onPress={()=>r.push(url as any)} style={{flex:1,alignItems:'center',gap:8,paddingVertical:5}}><FeatureArt size={58} icon={icon}/><Txt size="mini" style={{textAlign:'center'}}>{label}</Txt></Pressable>)}</View></Section>
 <Section title="Sıradaki randevun" action="Tümünü gör" onAction={()=>r.push('/(tabs)/appointments')}>{next?<Card onPress={()=>r.push('/(tabs)/appointments')} padding={17}><View style={{flexDirection:'row',gap:13,alignItems:'center'}}><DoctorAvatar initials={doctor.initials} color={doctor.color} size={65}/><View style={{flex:1,gap:5}}><Txt size="mini" weight="800" color={C.teal} style={{letterSpacing:1}}>YAKLAŞAN RANDEVU</Txt><Txt weight="800">{doctor.name}</Txt><Txt size="caption" muted>{treatment.title}  ·  {next.date}</Txt><Txt size="caption" color={C.blue} weight="700">{next.time}  ·  {visitModeLabel(next.mode)}</Txt></View><I name="arrow-forward-circle" size={27} color={C.teal}/></View></Card>:<Card><Txt muted>Yaklaşan randevun bulunmuyor. İlk randevunu hemen oluşturabilirsin.</Txt></Card>}</Section>
 <Section title="Senin için seçtiklerimiz" action="Keşfet" onAction={()=>r.push('/treatments')}><View style={{flexDirection:'row',gap:12}}>{treatments.slice(0,2).map(t=><TreatmentCard item={t} key={t.id}/>)}</View></Section>
 <Section title="Önerilen diş hekimleri" action="Tümünü gör" onAction={()=>r.push('/dentists')}>{dentists.slice(0,2).map(d=><DentistCard key={d.id} item={d} compact/>)}</Section>
 </Screen>;
}
