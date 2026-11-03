import React,{useState} from 'react';
import {Pressable,View} from 'react-native';
import {useRouter} from 'expo-router';
import {LinearGradient} from 'expo-linear-gradient';
import {Screen,Button,Field,Header,I,Txt} from '@/components/ui';
import {LuxeToothScene,DentalMark} from '@/components/premium-art';
import {C,shadow} from '@/theme';
import {useApp} from '@/context/AppContext';
export default function SignIn(){
 const r=useRouter();const {setOnboarded}=useApp();const [mode,setMode]=useState<'in'|'up'>('in');const [email,setEmail]=useState('');const [password,setŞifre]=useState('');const [name,setName]=useState('');const [show,setShow]=useState(false);const [error,setError]=useState('');
 const proceed=()=>{if(mode==='up'&&name.trim().length<2){setError('Lütfen adınızı ve soyadınızı girin.');return}if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)||password.length<6){setError('Demo için geçerli bir e-posta ve en az 6 karakterli şifre girin.');return}setError('');setOnboarded(true);r.replace('/(tabs)/home')};
 const social=(name:string,icon:React.ComponentProps<typeof I>['name'])=><Pressable onPress={()=>setError(`${name} ile giriş için servis bağlantısı gerekir. Aşağıdan “Demoyu keşfet” seçeneğini kullanabilirsiniz.`)} style={{flex:1,alignItems:'center',justifyContent:'center',gap:7,paddingVertical:12,borderRadius:18,backgroundColor:'rgba(255,255,255,.88)',borderColor:'#FFFFFF',borderWidth:1,...shadow.card}}><I name={icon} color={C.ink} size={22}/><Txt size="mini" color={C.secondary}>{name}</Txt></Pressable>;
 return <Screen>
  <Header title="Tekrar hoş geldin"/>
  <View style={{alignItems:'center',marginTop:-4,marginBottom:10}}>
   <LinearGradient colors={['rgba(215,251,255,.83)','rgba(252,255,255,.4)']} style={{height:151,width:'100%',borderRadius:34,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#FFFFFF',overflow:'hidden'}}>
    <View style={{position:'absolute',top:13,left:15,flexDirection:'row',gap:5,alignItems:'center'}}><DentalMark size={28}/><Txt weight="800">DentaCare</Txt></View>
    <LuxeToothScene size={173} shield={false}/>
   </LinearGradient>
  </View>
  <Txt size="title" style={{marginTop:11}}>Gülümsemen burada başlıyor.</Txt>
  <Txt color={C.secondary} style={{marginTop:7,marginBottom:18}}>Diş sağlığında ayrıcalıklı bir deneyime adım at.</Txt>
  <View style={{height:51,flexDirection:'row',borderRadius:99,backgroundColor:'rgba(255,255,255,.7)',marginBottom:19,padding:4,borderWidth:1,borderColor:C.white}}>
   {(['in','up'] as const).map(m=><Pressable key={m} onPress={()=>{setMode(m);setError('')}} style={{flex:1,justifyContent:'center',borderRadius:99,overflow:'hidden'}}>{mode===m?<LinearGradient colors={['#4DDDE5','#0EACBF']} style={{position:'absolute',top:0,right:0,bottom:0,left:0,borderRadius:99}}/>:null}<Txt style={{textAlign:'center'}} weight="800" color={mode===m?C.white:C.secondary}>{m==='in'?'Giriş Yap':'Hesap Oluştur'}</Txt></Pressable>)}
  </View>
  <View style={{gap:13}}>
   {mode==='up'?<Field icon="person-outline" placeholder="Ad Soyad" autoCapitalize="words" value={name} onChangeText={setName}/>:null}
   <Field icon="mail-outline" placeholder="E-posta adresi" autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" value={email} onChangeText={setEmail}/>
   <View><Field icon="lock-closed-outline" placeholder="Şifre" secureTextEntry={!show} textContentType={mode==='up'?'newŞifre':'password'} value={password} onChangeText={setŞifre} style={{paddingRight:30}}/><Pressable onPress={()=>setShow(!show)} accessibilityLabel={show?'Şifreyi gizle':'Şifreyi göster'} style={{position:'absolute',right:10,top:6,width:43,height:43,justifyContent:'center',alignItems:'center'}}><I name={show?'eye-off-outline':'eye-outline'} color={C.secondary} size={20}/></Pressable></View>
   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}><View style={{flexDirection:'row',alignItems:'center',gap:7}}><I name="shield-checkmark-outline" size={16} color={C.teal}/><Txt size="caption" color={C.secondary}>Güvenli ve konforlu hizmet</Txt></View><Pressable onPress={()=>setError('Şifre sıfırlama için kimlik doğrulama servisi bağlanmalıdır.') }><Txt size="caption" weight="700" color={C.teal}>Şifremi unuttum</Txt></Pressable></View>
   {error?<View style={{backgroundColor:C.dangerBg,padding:12,borderRadius:13,borderWidth:1,borderColor:'#FFD9E1'}}><Txt color={C.danger} size="caption">{error}</Txt></View>:null}
   <Button title={mode==='in'?'Giriş Yap':'Hesap Oluştur'} icon="arrow-forward" onPress={proceed} style={{marginTop:7}}/>
   <View style={{flexDirection:'row',alignItems:'center',gap:12,marginVertical:5}}><View style={{height:1,flex:1,backgroundColor:'#CEE7F0'}}/><Txt size="caption" color={C.muted}>veya şununla devam et</Txt><View style={{height:1,flex:1,backgroundColor:'#CEE7F0'}}/></View>
   <View style={{flexDirection:'row',gap:12}}>{social('Google','logo-google')}{social('Apple','logo-apple')}{social('Telefon','call-outline')}</View>
   <Button title="Demoyu keşfet  →" kind="text" onPress={()=>{setOnboarded(true);r.replace('/(tabs)/home')}}/>
  </View>
  <Txt size="mini" muted style={{textAlign:'center',marginTop:14,lineHeight:17}}>Bu bir demodur. Giriş işlemi yalnızca cihazda simüle edilir; hesap veya hasta verisi gönderilmez.</Txt>
 </Screen>;
}
