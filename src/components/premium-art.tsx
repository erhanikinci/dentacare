import React from 'react';
import {View, ViewStyle} from 'react-native';
import Svg,{Defs,LinearGradient as SvgLinearGradient,RadialGradient,Stop,Path,Circle,Ellipse,G,Rect} from 'react-native-svg';
import {LinearGradient} from 'expo-linear-gradient';
import {C} from '@/theme';

/** Original scalable vector art, not a screenshot: suitable for high-density screens. */
export function DentalMark({size=70,style}:{size?:number,style?:ViewStyle}){
 return <View style={[{width:size,height:size,justifyContent:'center',alignItems:'center'},style]}>
  <Svg width={size} height={size} viewBox="0 0 100 100">
   <Defs>
    <SvgLinearGradient id="mark" x1="0" x2="1" y1="0" y2="1"><Stop offset="0" stopColor="#9FFBFF"/><Stop offset=".28" stopColor="#35E8F0"/><Stop offset=".63" stopColor="#07AAC0"/><Stop offset="1" stopColor="#057C9C"/></SvgLinearGradient>
    <SvgLinearGradient id="enamel" x1="0" y1="0" x2=".75" y2="1"><Stop offset="0" stopColor="#FFFFFF"/><Stop offset=".7" stopColor="#EFFFFF"/><Stop offset="1" stopColor="#B8E8F4"/></SvgLinearGradient>
   </Defs>
   <Path d="M18 25 C11 11 25 7 37 12 C47 16 53 16 64 12 C79 5 92 17 83 33 C78 44 82 59 74 80 C71 89 62 88 60 79 L54 59 C52 52 47 52 45 59 L39 79 C36 89 27 89 24 79 C16 59 21 40 18 25 Z" fill="url(#mark)" stroke="#AAF9FF" strokeWidth="2.4"/>
   <Path d="M29 27 C24 18 34 18 42 21 C48 24 52 24 60 21 C69 17 77 19 72 30 C69 39 70 50 66 66 C64 73 62 68 60 60 C56 44 43 44 39 60 C37 69 34 73 32 66 C28 51 32 36 29 27 Z" fill="url(#enamel)" />
   <Path d="M28 23 C36 17 45 28 55 24 C62 21 67 20 73 24" fill="none" stroke="#FFFFFF" strokeWidth="3.8" strokeLinecap="round" opacity=".8"/>
  </Svg>
 </View>
}

export function LuxeToothScene({size=305,shield=true,subtle=false}:{size?:number,shield?:boolean,subtle?:boolean}){
 return <View style={{width:size,height:size,alignItems:'center',justifyContent:'center'}}>
  <Svg width={size} height={size} viewBox="0 0 360 360">
   <Defs>
    <RadialGradient id="halo" cx="50%" cy="47%" rx="52%" ry="52%"><Stop offset="0" stopColor="#B0FFFF" stopOpacity=".64"/><Stop offset=".5" stopColor="#9CECF7" stopOpacity=".25"/><Stop offset="1" stopColor="#7CDAF1" stopOpacity="0"/></RadialGradient>
    <SvgLinearGradient id="ivory" x1="0" x2="1" y1="0" y2="1"><Stop offset="0" stopColor="#FFFFFF"/><Stop offset=".28" stopColor="#FFFFFF"/><Stop offset=".58" stopColor="#E8FAFE"/><Stop offset=".8" stopColor="#BCE9F1"/><Stop offset="1" stopColor="#92C5D9"/></SvgLinearGradient>
    <SvgLinearGradient id="orbit" x1="0" x2="1" y1="0" y2="0"><Stop offset="0" stopColor="#B9FFFF"/><Stop offset=".45" stopColor="#25DCE9"/><Stop offset="1" stopColor="#A3FBFF"/></SvgLinearGradient>
    <SvgLinearGradient id="aquaShield" x1="0" x2="1" y1="0" y2="1"><Stop offset="0" stopColor="#AEFFFF"/><Stop offset=".5" stopColor="#30D5E3"/><Stop offset="1" stopColor="#007C9D"/></SvgLinearGradient>
    <RadialGradient id="shadow" cx="50%" cy="50%" rx="50%" ry="50%"><Stop offset="0" stopColor="#159FBC" stopOpacity=".28"/><Stop offset="1" stopColor="#159FBC" stopOpacity="0"/></RadialGradient>
   </Defs>
   <Circle cx="180" cy="163" r="169" fill="url(#halo)"/>
   <Ellipse cx="180" cy="299" rx="109" ry="17" fill="url(#shadow)"/>
   <Ellipse cx="182" cy="292" rx="100" ry="22" fill="#B0F2F8" opacity=".24"/>
   <Path d="M96 103 C78 61 101 47 130 55 C159 66 174 69 202 59 C248 43 274 70 253 118 C242 151 251 208 226 263 C217 284 203 283 198 262 L183 211 C177 192 164 190 158 211 L140 262 C134 283 120 285 110 259 C86 202 102 137 96 103 Z" fill="url(#ivory)" stroke="#D5F7FF" strokeWidth="2.7"/>
   <Path d="M108 90 Q118 66 146 78 Q169 90 184 81 Q213 63 239 82" fill="none" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" opacity=".93"/>
   <Path d="M116 110 Q110 179 127 235" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" opacity=".72"/>
   <Path d="M234 104 Q250 146 238 190" fill="none" stroke="#FFFFFF" strokeWidth="7" opacity=".48"/>
   <Ellipse cx="178" cy="192" rx="159" ry="47" rotation="-13" origin="178,192" fill="none" stroke="url(#orbit)" strokeWidth="8" opacity=".26"/>
   <Ellipse cx="178" cy="192" rx="159" ry="47" rotation="-13" origin="178,192" fill="none" stroke="url(#orbit)" strokeWidth="4"/>
   <Ellipse cx="178" cy="192" rx="161" ry="49" rotation="-13" origin="178,192" fill="none" stroke="#FFFFFF" strokeWidth="1.4" opacity=".85"/>
   {shield && <G>
    <Path d="M220 154 L268 136 L318 154 L314 218 Q311 258 268 290 Q225 265 222 218 Z" fill="#B9FAFF" stroke="#FFFFFF" strokeWidth="6" opacity=".72"/>
    <Path d="M229 163 L268 148 L308 164 L305 219 Q302 249 268 274 Q238 252 232 216 Z" fill="url(#aquaShield)" stroke="#B2FFFF" strokeWidth="2"/>
    <Path d="M269 176 V244 M239 210 H299" stroke="#E8FFFF" strokeWidth="14" strokeLinecap="round"/>
    <Path d="M269 176 V244 M239 210 H299" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
   </G>}
   <G opacity={subtle?.52:1}>
    <Path d="M52 85 V113 M38 99 H66" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
    <Path d="M293 57 V85 M279 71 H307" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
    <Path d="M324 107 V119 M318 113 H330" stroke="#BBFFFF" strokeWidth="3" strokeLinecap="round"/>
    <Circle cx="64" cy="237" r="6" fill="#A3FEFF" opacity=".9"/>
    <Circle cx="307" cy="300" r="8" fill="#FFFFFF" opacity=".52" stroke="#8EEAF3" strokeWidth="2"/>
    <Circle cx="94" cy="50" r="3" fill="#FFFFFF"/>
   </G>
  </Svg>
 </View>
}

export function AmbientGlass({size=150,color='cyan',style}:{size?:number,color?:'cyan'|'blue'|'white',style?:ViewStyle}){
 const colors = color==='blue'?['rgba(112,198,255,.53)','rgba(138,226,254,.04)'] as const:color==='white'?['rgba(255,255,255,.9)','rgba(255,255,255,.03)'] as const:['rgba(117,250,252,.53)','rgba(195,248,255,.03)'] as const;
 return <LinearGradient colors={colors} style={[{height:size,width:size,borderRadius:size/2,borderWidth:1,borderColor:'rgba(255,255,255,.35)'},style]}/>;
}
