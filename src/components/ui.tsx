import React from 'react';
import {Alert,Pressable,ScrollView,StyleProp,StyleSheet,Text,TextInput,TextInputProps,View,ViewStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRouter} from 'expo-router';
import {C,G,radius,shadow,typography} from '@/theme';

export type IconName=React.ComponentProps<typeof Ionicons>['name'];
export const I=({name,size=22,color=C.navy}: {name:IconName,size?:number,color?:string})=><Ionicons name={name} size={size} color={color}/>;
export const Txt=({children,style,muted=false,size='body',color,weight,numberOfLines}: {children:React.ReactNode,style?:any,muted?:boolean,size?:keyof typeof typography,color?:string,weight?:'400'|'500'|'600'|'700'|'800',numberOfLines?:number})=><Text numberOfLines={numberOfLines} style={[typography[size],{fontFamily:(weight??typography[size].fontWeight)==='800'?'Inter_800ExtraBold':(weight??typography[size].fontWeight)==='700'?'Inter_700Bold':(weight??typography[size].fontWeight)==='600'?'Inter_600SemiBold':(weight??typography[size].fontWeight)==='500'?'Inter_500Medium':'Inter_400Regular'},{color:color??(muted?C.muted:C.navy)},weight?{fontWeight:weight}:null,style]}>{children}</Text>;

export function Screen({children,footer,scroll=true,style}: {children:React.ReactNode,footer?:React.ReactNode,scroll?:boolean,style?:StyleProp<ViewStyle>}){
 const inner=<View style={[{paddingHorizontal:20,paddingTop:12,paddingBottom:footer?24:34,flex:scroll?undefined:1},style]}>{children}</View>;
 return <SafeAreaView edges={['top','left','right','bottom']} style={s.safe}>
   <LinearGradient colors={G.background} start={{x:0,y:0}} end={{x:1,y:1}} style={StyleSheet.absoluteFillObject}/>
   <View pointerEvents="none" style={s.bgOrb1}/><View pointerEvents="none" style={s.bgOrb2}/>
   {scroll?<ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1}}>{inner}</ScrollView>:<View style={{flex:1}}>{inner}</View>}
   {footer?<View style={s.footer}>{footer}</View>:null}
  </SafeAreaView>;
}
export function Header({title,back=true,right,onRight,subtitle}:{title:string,back?:boolean,right?:IconName,onRight?:()=>void,subtitle?:string}){
 const router=useRouter();return <View style={s.head}>{back?<IconButton icon="arrow-back" onPress={()=>router.canGoBack()?router.back():router.replace('/(tabs)/home')} />:<View style={{width:44}}/>}<View style={{flex:1,alignItems:'center'}}><Txt size="subheading">{title}</Txt>{subtitle?<Txt size="mini" muted>{subtitle}</Txt>:null}</View>{right?<IconButton icon={right} onPress={onRight??(()=>{})}/>:<View style={{width:44}}/>}</View>;
}
export function Card({children,style,onPress,padding=16}:{children:React.ReactNode,style?:StyleProp<ViewStyle>,onPress?:()=>void,padding?:number}){
 const st=[s.card,{padding},style];if(onPress)return <Pressable accessibilityRole="button" onPress={onPress} style={({pressed})=>[st,{opacity:pressed?.83:1,transform:[{scale:pressed?.99:1}]}]}>{children}</Pressable>;return <View style={st}>{children}</View>;
}
export function Button({title,onPress,kind='primary',icon,disabled=false,style,small=false}:{title:string,onPress:()=>void,kind?:'primary'|'secondary'|'text'|'danger',icon?:IconName,disabled?:boolean,style?:StyleProp<ViewStyle>,small?:boolean}){
 if(kind==='text')return <Pressable accessibilityRole="button" onPress={onPress} disabled={disabled} style={[{padding:10,alignItems:'center',justifyContent:'center'},style]}><Txt weight="700" color={disabled?C.muted:C.teal}>{title}</Txt></Pressable>;
 if(kind==='primary')return <Pressable accessibilityRole="button" disabled={disabled} onPress={onPress} style={({pressed})=>[{opacity:disabled?.4:pressed?.9:1,transform:[{scale:pressed?.985:1}]},style]}><LinearGradient colors={G.action} start={{x:0,y:0}} end={{x:1,y:1}} style={[s.btn,s.primaryBtn,small&&{minHeight:42,paddingHorizontal:14}]}><View style={s.btnSheen}/><Txt color={C.white} weight="800" size={small?'caption':'body'}>{title}</Txt>{icon?<View style={s.btnCircle}><I name={icon} color={C.teal} size={17}/></View>:null}</LinearGradient></Pressable>;
 return <Pressable accessibilityRole="button" disabled={disabled} onPress={onPress} style={({pressed})=>[s.btn,{backgroundColor:kind==='danger'?C.dangerBg:'rgba(255,255,255,.78)',borderWidth:1,borderColor:kind==='danger'?'#F5CAD3':'rgba(255,255,255,.95)',opacity:pressed?.75:1},small&&{minHeight:42},style]}><Txt color={kind==='danger'?C.danger:C.navy} weight="700" size={small?'caption':'body'}>{title}</Txt>{icon?<I name={icon} color={C.teal} size={17}/>:null}</Pressable>;
}
export function IconButton({icon,onPress,size=44,active=false}:{icon:IconName,onPress:()=>void,size?:number,active?:boolean}){return <Pressable accessibilityLabel={icon.replaceAll('-',' ')} accessibilityRole="button" onPress={onPress} style={[s.iconBtn,{width:size,height:size,backgroundColor:active?C.mint:'rgba(255,255,255,.76)'}]}><I name={icon} size={20} color={active?C.teal:C.navy}/></Pressable>}
export function Chip({label,active=false,onPress,icon}:{label:string,active?:boolean,onPress?:()=>void,icon?:IconName}){return <Pressable accessibilityRole={onPress?'button':undefined} onPress={onPress} style={[s.chip,active&&{backgroundColor:C.teal,borderColor:C.teal}]}>{icon?<I name={icon} color={active?C.white:C.teal} size={13}/>:null}<Txt size="mini" weight="700" color={active?C.white:C.secondary}>{label}</Txt></Pressable>}
export function Field({icon,...rest}:{icon:IconName}&TextInputProps){return <View style={s.field}><I name={icon} color={C.teal} size={19}/><TextInput {...rest} placeholderTextColor={C.muted} style={[s.textInput,rest.style]}/></View>}
export function Section({title,action,onAction,children}:{title:string,action?:string,onAction?:()=>void,children:React.ReactNode}){return <View style={{marginTop:27,gap:13}}><View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}><Txt size="subheading">{title}</Txt>{action?<Pressable onPress={onAction} hitSlop={8}><Txt size="caption" weight="700" color={C.teal}>{action}  →</Txt></Pressable>:null}</View>{children}</View>}
export function InfoRow({icon,title,subtitle,onPress,color=C.teal,right}:{icon:IconName,title:string,subtitle?:string,onPress?:()=>void,color?:string,right?:React.ReactNode}){return <Pressable onPress={onPress} disabled={!onPress} style={{flexDirection:'row',alignItems:'center',gap:12,paddingVertical:12}}><View style={{width:42,height:42,borderRadius:15,backgroundColor:C.powder,alignItems:'center',justifyContent:'center'}}><I name={icon} color={color} size={20}/></View><View style={{flex:1}}><Txt weight="700">{title}</Txt>{subtitle?<Txt size="caption" muted>{subtitle}</Txt>:null}</View>{right??(onPress?<I name="chevron-forward" color={C.muted} size={17}/>:null)}</Pressable>}
export function Stat({label,value,icon}:{label:string,value:string,icon:IconName}){return <Card style={{flex:1,alignItems:'center',gap:6,padding:12}}><I name={icon} size={20} color={C.teal}/><Txt weight="800" size="subheading">{value}</Txt><Txt size="mini" muted>{label}</Txt></Card>}
export function Divider(){return <View style={{height:1,backgroundColor:C.border,marginVertical:10}}/>}
export function DemoPill(){return <View style={{alignSelf:'flex-start',backgroundColor:'rgba(221,246,255,.73)',borderColor:'#D6F1F8',borderWidth:1,paddingHorizontal:10,paddingVertical:6,borderRadius:99,flexDirection:'row',gap:6,alignItems:'center'}}><I name="sparkles-outline" size={13} color={C.blue}/><Txt size="mini" color={C.blue}>ÖNİZLEME · DEMO VERİLERİ</Txt></View>}
export const showDemoAlert=(feature:string)=>Alert.alert('DentaCare Demo',`${feature} örnek bir arayüzdür. Kullanıma açmadan önce güvenli ve doğrulanmış sağlık servisleri bağlanmalıdır.`);
const s=StyleSheet.create({
 safe:{flex:1,backgroundColor:C.canvas},bgOrb1:{position:'absolute',top:-180,right:-145,width:400,height:400,borderRadius:210,backgroundColor:'#B2E9FB',opacity:.3},bgOrb2:{position:'absolute',bottom:90,left:-210,width:340,height:340,borderRadius:210,backgroundColor:'#CCFCF8',opacity:.22},
 head:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:22,minHeight:44},card:{borderRadius:radius.card,backgroundColor:'rgba(255,255,255,.86)',borderColor:'rgba(255,255,255,.98)',borderWidth:1,...shadow.card},
 footer:{paddingHorizontal:20,paddingTop:12,paddingBottom:10,backgroundColor:'rgba(246,251,255,.96)',borderTopWidth:1,borderTopColor:'#E1F0F6'},
 btn:{minHeight:54,paddingHorizontal:20,borderRadius:radius.pill,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:12,...shadow.card},
 primaryBtn:{overflow:'hidden',borderWidth:1,borderColor:'#79F6FF',...shadow.float},btnSheen:{height:1,position:'absolute',top:1,left:22,right:22,backgroundColor:'rgba(255,255,255,.8)'},btnCircle:{height:30,width:30,borderRadius:18,backgroundColor:'rgba(255,255,255,.92)',justifyContent:'center',alignItems:'center',position:'absolute',right:11},
 iconBtn:{borderRadius:16,borderWidth:1,borderColor:C.white,alignItems:'center',justifyContent:'center',...shadow.card},
 chip:{borderRadius:99,flexDirection:'row',gap:5,alignItems:'center',paddingVertical:10,paddingHorizontal:14,backgroundColor:'rgba(255,255,255,.85)',borderWidth:1,borderColor:C.border},
 field:{height:55,borderWidth:1,borderColor:C.white,backgroundColor:'rgba(255,255,255,.76)',borderRadius:19,paddingHorizontal:16,alignItems:'center',flexDirection:'row',gap:12,...shadow.card},
 textInput:{flex:1,color:C.navy,fontSize:14,paddingVertical:0,fontFamily:'Inter_500Medium'},
});
