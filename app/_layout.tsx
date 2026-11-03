import React,{useEffect} from 'react';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold} from '@expo-google-fonts/inter';
import {AppProvider} from '@/context/AppContext';
// Keep the native splash visible until typography is ready; then transition to the animated in-app splash.
void SplashScreen.preventAutoHideAsync().catch(()=>{});
export default function RootLayout(){
 const [fontsLoaded]=useFonts({Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold});
 useEffect(()=>{if(fontsLoaded)void SplashScreen.hideAsync().catch(()=>{})},[fontsLoaded]);
 if(!fontsLoaded)return null;
 return <AppProvider><StatusBar style="dark" backgroundColor="#EAF8FF"/><Stack screenOptions={{headerShown:false,animation:'slide_from_right',contentStyle:{backgroundColor:'#F5FAFE'}}}/></AppProvider>;
}
