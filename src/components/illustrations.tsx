import React from 'react';
import {View} from 'react-native';
import Svg,{Defs,Ellipse,LinearGradient as SvgGradient,Path,Stop,Circle,Rect} from 'react-native-svg';
import {LinearGradient} from 'expo-linear-gradient';
import {I,IconName,Txt} from './ui';
import {C,shadow} from '@/theme';
import {LuxeToothScene} from './premium-art';
/** Reusable original vector dental illustration: scalable on phones, no raster background. */
export function ToothArt({size=145,shield=false,orbit=true}:{size?:number,shield?:boolean,orbit?:boolean}){
 return <Svg width={size} height={size} viewBox="0 0 200 200">
  <Defs><SvgGradient id="toothWhite" x1="0" x2="1" y1="0" y2="1"><Stop offset="0" stopColor="#FFFFFF"/><Stop offset=".45" stopColor="#F7FCFF"/><Stop offset=".77" stopColor="#D5F1F7"/><Stop offset="1" stopColor="#9DD6E6"/></SvgGradient><SvgGradient id="shieldBlue" x1="0" y1="0" x2="1" y2="1"><Stop offset="0" stopColor="#7DFFFF"/><Stop offset="1" stopColor="#00A0BA"/></SvgGradient></Defs>
  <Ellipse cx="100" cy="174" rx="64" ry="12" fill="#70C9D7" opacity=".2"/>
  <Path d="M48 51 C37 28 56 15 78 24 C94 31 102 28 119 24 C145 16 165 38 151 64 C143 84 147 116 132 150 C127 166 115 165 110 150 L101 118 C97 106 89 110 86 121 L76 152 C71 167 58 164 54 147 C44 106 50 79 48 51 Z" fill="url(#toothWhite)" stroke="#C4E5EF" strokeWidth="2"/>
  <Path d="M62 39 Q76 29 92 39 C103 44 116 30 134 38" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" fill="none" opacity=".9"/>
  <Path d="M63 67 Q60 105 68 139" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none" opacity=".55"/>
  {orbit?<><Ellipse cx="102" cy="110" rx="89" ry="30" transform="rotate(-15 102 110)" stroke="#50E9EC" strokeWidth="3.7" fill="none" opacity=".8"/><Ellipse cx="102" cy="110" rx="90" ry="31" transform="rotate(-15 102 110)" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity=".8"/></>:null}
  {shield?<><Path d="M118 94 L145 82 L172 94 L170 128 C166 147 151 158 145 162 C128 151 118 137 118 116 Z" fill="url(#shieldBlue)" stroke="#E8FFFF" strokeWidth="3"/><Path d="M145 101 V142 M126 121 H163" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round"/></>:null}
  <Circle cx="39" cy="49" r="3" fill="#A9F6FF"/><Circle cx="168" cy="54" r="4" fill="#A9F6FF"/>
 </Svg>
}
export function ToothLogo({size=50}:{size?:number}){return <View style={{width:size,height:size,borderRadius:size*.3,backgroundColor:'#E1FAFC',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#B1F8F8'}}><ToothArt size={size*1.13} orbit={false}/></View>}
export function FeatureArt({icon='medical-outline',color=C.teal,size=62}:{icon?:IconName,color?:string,size?:number}){
 return <LinearGradient colors={['#FFFFFF','#DDFBFE','#CBEFF9']} start={{x:0,y:0}} end={{x:1,y:1}} style={{width:size,height:size,borderRadius:size*.31,alignItems:'center',justifyContent:'center',borderWidth:1.4,borderColor:'#FFFFFF',...shadow.card}}><View style={{position:'absolute',top:5,left:8,width:size*.28,height:size*.07,borderRadius:50,backgroundColor:'rgba(255,255,255,.9)'}}/><I name={icon} color={color} size={size*.43}/></LinearGradient>
}
export function DoctorAvatar({initials,color=C.mint,size=54}:{initials:string,color?:string,size?:number}){return <LinearGradient colors={['#FFFFFF',color]} style={{height:size,width:size,borderRadius:size*.34,backgroundColor:color,borderWidth:2,borderColor:C.white,alignItems:'center',justifyContent:'center',overflow:'hidden',...shadow.card}}><View style={{width:size*.34,height:size*.34,borderRadius:size,backgroundColor:'#F8D4B7',marginTop:size*.1}}/><View style={{width:size*.65,height:size*.42,borderTopLeftRadius:30,borderTopRightRadius:30,backgroundColor:C.white,marginTop:1,alignItems:'center',justifyContent:'center'}}><Txt size="mini" color={C.blue} style={{fontSize:size*.17}}>{initials}</Txt></View></LinearGradient>}
export function GlassHero({title,subtitle,icon='sparkles-outline',children}:{title:string,subtitle:string,icon?:IconName,children?:React.ReactNode}){return <LinearGradient colors={['#8BE9EB','#28C3D5','#087E9D']} start={{x:0,y:0}} end={{x:1,y:1}} style={{borderRadius:31,padding:22,overflow:'hidden',minHeight:185,borderWidth:1,borderColor:'#A4F5F6',...shadow.float}}><View style={{position:'absolute',right:-55,top:-62,width:220,height:220,borderRadius:115,backgroundColor:'#D9FFFF',opacity:.23}}/><View style={{position:'absolute',right:32,bottom:-90,width:150,height:150,borderRadius:90,backgroundColor:'#FFFFFF',opacity:.15}}/><View style={{maxWidth:'68%',gap:10,zIndex:1}}><Txt size="mini" color="#E6FFFF" weight="800" style={{letterSpacing:1.7}}>GÜLÜŞÜN BİR ADIM ÖNDE</Txt><Txt color={C.white} style={{fontSize:21,lineHeight:27,fontWeight:'800'}}>{title}</Txt><Txt color={'#E8FFFF'} size="caption">{subtitle}</Txt>{children}</View><View style={{position:'absolute',right:-37,bottom:-26}}><LuxeToothScene size={190}/></View></LinearGradient>}
