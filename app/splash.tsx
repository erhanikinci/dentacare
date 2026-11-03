import React,{useEffect,useRef} from 'react';
import {Animated,Easing,StyleSheet,View,useWindowDimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useRouter} from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Txt} from '@/components/ui';
import {AmbientGlass,DentalMark,LuxeToothScene} from '@/components/premium-art';
import {C,G} from '@/theme';
import {useApp} from '@/context/AppContext';

export default function Splash(){
 const router=useRouter();const {ready,onboarded}=useApp();const {width,height}=useWindowDimensions();
 const fade=useRef(new Animated.Value(0)).current;const rise=useRef(new Animated.Value(18)).current;
 const float=useRef(new Animated.Value(0)).current;const pulse=useRef(new Animated.Value(.96)).current;const progress=useRef(new Animated.Value(.05)).current;
 useEffect(()=>{
  const loop=Animated.loop(Animated.sequence([
   Animated.parallel([Animated.timing(float,{toValue:-11,duration:2100,easing:Easing.inOut(Easing.sin),useNativeDriver:true}),Animated.timing(pulse,{toValue:1.03,duration:2100,easing:Easing.inOut(Easing.sin),useNativeDriver:true})]),
   Animated.parallel([Animated.timing(float,{toValue:0,duration:2100,easing:Easing.inOut(Easing.sin),useNativeDriver:true}),Animated.timing(pulse,{toValue:.96,duration:2100,easing:Easing.inOut(Easing.sin),useNativeDriver:true})]),
  ]));
  Animated.parallel([Animated.timing(fade,{toValue:1,duration:720,useNativeDriver:true}),Animated.timing(rise,{toValue:0,duration:780,easing:Easing.out(Easing.cubic),useNativeDriver:true}),Animated.timing(progress,{toValue:1,duration:2300,easing:Easing.inOut(Easing.quad),useNativeDriver:true})]).start();loop.start();return()=>loop.stop();
 },[fade,float,progress,pulse,rise]);
 useEffect(()=>{if(!ready)return;const timer=setTimeout(()=>router.replace(onboarded?'/(tabs)/home':'/(auth)/welcome'),2600);return()=>clearTimeout(timer)},[ready,onboarded,router]);
 const artSize=Math.min(width*.87,350,height*.46);
 return <SafeAreaView style={{flex:1,backgroundColor:'#EAF8FF'}}>
   <LinearGradient colors={['#F5FDFF','#DDF3FF','#C6ECF8','#EBFBFF']} locations={[0,.34,.73,1]} style={StyleSheet.absoluteFill}/>
   <AmbientGlass size={310} color="white" style={{position:'absolute',top:-180,right:-120,opacity:.54}}/>
   <AmbientGlass size={245} color="cyan" style={{position:'absolute',bottom:85,left:-152,opacity:.54}}/>
   <Animated.View style={{flex:1,opacity:fade,transform:[{translateY:rise}],paddingHorizontal:28,alignItems:'center',justifyContent:'space-between'}}>
    <View style={{paddingTop:28,alignItems:'center',gap:9}}>
      <View style={{flexDirection:'row',alignItems:'center',gap:8}}><View style={{width:20,height:1,backgroundColor:'#66CFDE'}}/><Txt size="mini" weight="700" color={C.blue} style={{letterSpacing:3}}>GÜLÜMSEMENİN GELECEĞİ</Txt><View style={{width:20,height:1,backgroundColor:'#66CFDE'}}/></View>
      <Txt size="caption" color={C.secondary}>Her gün daha özel bir gülümseme.</Txt>
    </View>
    <View style={{alignItems:'center',justifyContent:'center',width:'100%',marginTop:12}}>
      <View style={{position:'absolute',height:artSize*.92,width:artSize*.92,borderRadius:200,backgroundColor:'rgba(255,255,255,.31)',borderWidth:1,borderColor:'rgba(255,255,255,.82)'}}/>
      <View style={{position:'absolute',height:artSize*.74,width:artSize*.74,borderRadius:200,borderWidth:1,borderColor:'rgba(255,255,255,.54)'}}/>
      <Animated.View style={{transform:[{translateY:float},{scale:pulse}]}}><LuxeToothScene size={artSize} shield/></Animated.View>
      <View style={{alignItems:'center',marginTop:-8}}>
        <DentalMark size={47}/>
        <Txt color={C.ink} style={{fontSize:42,lineHeight:51,fontFamily:'Inter_800ExtraBold',letterSpacing:-2}}>DentaCare</Txt>
        <Txt color={C.secondary} style={{fontSize:13,letterSpacing:1.05,textAlign:'center'}}>DİŞ SAĞLIĞINDA YENİ BİR DÖNEM</Txt>
      </View>
    </View>
    <View style={{width:'100%',alignItems:'center',paddingBottom:28,gap:19}}>
      <View style={{height:1,width:50,backgroundColor:'#80DCE7'}}/>
      <Txt color={C.navy} weight="600" style={{fontSize:15,textAlign:'center',maxWidth:230,lineHeight:24}}>Özgüven, sağlıklı bir gülümsemeyle başlar.</Txt>
      <View style={{width:135,height:4,borderRadius:10,backgroundColor:'rgba(22,147,176,.13)',overflow:'hidden'}}>
        <Animated.View style={{width:'100%',height:4,backgroundColor:C.teal,transform:[{translateX:progress.interpolate({inputRange:[0,1],outputRange:[-132,0]})}],borderRadius:10}}/>
      </View>
      <Txt size="mini" color={C.muted} style={{letterSpacing:2.1}}>DENEYİMİNİZ HAZIRLANIYOR</Txt>
    </View>
   </Animated.View>
 </SafeAreaView>;
}
