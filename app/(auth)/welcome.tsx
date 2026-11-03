import React from 'react';
import {Pressable,StyleSheet,View,useWindowDimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useRouter} from 'expo-router';
import {Screen,Button,Txt,I} from '@/components/ui';
import {DentalMark,LuxeToothScene} from '@/components/premium-art';
import {C,shadow} from '@/theme';
export default function Welcome(){const r=useRouter();const {height,width}=useWindowDimensions();const scene=Math.min(width*.81,height*.405,340);
 return <Screen scroll={false} style={{paddingTop:8,paddingBottom:12}}><View style={{flex:1,justifyContent:'space-between'}}>
  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
   <View style={{flexDirection:'row',gap:5,alignItems:'center'}}><DentalMark size={36}/><Txt weight="800" size="heading">DentaCare</Txt></View>
   <View style={{paddingHorizontal:12,paddingVertical:8,borderRadius:99,backgroundColor:'rgba(255,255,255,.8)',borderWidth:1,borderColor:C.white}}><Txt size="mini" color={C.teal}>2026’DAN BERİ  ✧</Txt></View>
  </View>
  <View style={{alignItems:'center',justifyContent:'center',flex:1,marginTop:6}}>
   <LinearGradient colors={['rgba(255,255,255,.78)','rgba(203,242,252,.3)','rgba(205,242,252,.12)']} style={[{height:scene*1.05,width:scene*1.05,borderRadius:scene*.4,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'rgba(255,255,255,.94)',overflow:'hidden'},shadow.luxe]}>
    <View style={{position:'absolute',top:15,right:22,backgroundColor:'rgba(255,255,255,.8)',padding:11,borderRadius:18,borderWidth:1,borderColor:'#FFFFFF'}}><I name="sparkles" size={19} color={C.teal}/></View>
    <LuxeToothScene size={scene*.94} shield/>
   </LinearGradient>
  </View>
  <View style={{alignItems:'center',gap:11,marginBottom:22}}>
   <View style={{flexDirection:'row',gap:6,alignItems:'center'}}><View style={{width:18,height:1,backgroundColor:C.teal}}/><Txt size="mini" weight="800" color={C.teal} style={{letterSpacing:2}}>AYRICALIKLI DİŞ SAĞLIĞI</Txt><View style={{width:18,height:1,backgroundColor:C.teal}}/></View>
   <Txt size="display" style={{textAlign:'center',fontSize:34,lineHeight:41}}>Sağlıklı Gülüş,{ '\n'}<Txt size="display" color={C.teal} style={{fontSize:34}}>Özgüvenli Sen.</Txt></Txt>
   <Txt size="body" color={C.secondary} style={{textAlign:'center',paddingHorizontal:21,maxWidth:365,lineHeight:23}}>Güvenilir hekimleri keşfet, kolayca randevu al ve sana özel diş sağlığı hizmetlerinden yararlan.</Txt>
   <View style={{flexDirection:'row',gap:5,marginTop:10}}>{[0,1,2].map(i=><View key={i} style={{height:5,width:i===0?24:6,borderRadius:9,backgroundColor:i===0?C.teal:'#C7E5EF'}}/>)}</View>
  </View>
  <View style={{gap:12}}>
   <Button title="Hemen Başla" icon="arrow-forward" onPress={()=>r.push('/(auth)/onboarding')}/>
   <Button title="Zaten hesabım var" kind="secondary" onPress={()=>r.push('/(auth)/sign-in')}/>
   <Pressable onPress={()=>r.push('/(auth)/sign-in')} style={{flexDirection:'row',gap:6,justifyContent:'center',alignItems:'center',paddingVertical:8}}><I name="shield-checkmark-outline" size={15} color={C.teal}/><Txt size="mini" color={C.muted}>İçin rahat etsin diye özenle tasarlandı</Txt></Pressable>
  </View>
 </View></Screen>;
}
