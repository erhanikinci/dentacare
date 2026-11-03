import React,{createContext,useCallback,useContext,useEffect,useMemo,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appointment,initialAppointments} from '@/data/demo';

type AppState={
 ready:boolean; onboarded:boolean; setOnboarded:(v:boolean)=>void;
 favorites:string[];toggleFavorite:(id:string)=>void;
 habits:Record<string,boolean>;toggleHabit:(key:string)=>void;
 appointments:Appointment[];addAppointment:(a:Appointment)=>void;cancelAppointment:(id:string)=>void;
 notificationsRead:boolean;markNotificationsRead:()=>void;
 sentMessages:Record<string,string[]>;sendMessage:(id:string,msg:string)=>void;
 resetDemo:()=>void;
};
type Persisted=Pick<AppState,'onboarded'|'favorites'|'habits'|'appointments'|'notificationsRead'|'sentMessages'>;
const defaults:Persisted={onboarded:false,favorites:['sarah'],habits:{brushing:true,flossing:false,mouthwash:true,water:false},appointments:initialAppointments,notificationsRead:false,sentMessages:{}};
const Ctx=createContext<AppState|null>(null);
const KEY='dentacare.demo.tr.v3';
export function AppProvider({children}:{children:React.ReactNode}){
 const [ready,setReady]=useState(false);
 const [state,setState]=useState<Persisted>(defaults);
 useEffect(()=>{let active=true;AsyncStorage.getItem(KEY).then(s=>{if(active&&s){try{setState({...defaults,...JSON.parse(s)})}catch{}}}).catch(()=>{}).finally(()=>{if(active)setReady(true)});return()=>{active=false}},[]);
 useEffect(()=>{if(ready){AsyncStorage.setItem(KEY,JSON.stringify(state)).catch(()=>{})}},[ready,state]);
 const setOnboarded=useCallback((v:boolean)=>setState(s=>({...s,onboarded:v})),[]);
 const toggleFavorite=useCallback((id:string)=>setState(s=>({...s,favorites:s.favorites.includes(id)?s.favorites.filter(x=>x!==id):[...s.favorites,id]})),[]);
 const toggleHabit=useCallback((key:string)=>setState(s=>({...s,habits:{...s.habits,[key]:!s.habits[key]}})),[]);
 const addAppointment=useCallback((a:Appointment)=>setState(s=>({...s,appointments:[a,...s.appointments]})),[]);
 const cancelAppointment=useCallback((id:string)=>setState(s=>({...s,appointments:s.appointments.map(a=>a.id===id?{...a,status:'Cancelled'}:a)})),[]);
 const markNotificationsRead=useCallback(()=>setState(s=>({...s,notificationsRead:true})),[]);
 const sendMessage=useCallback((id:string,msg:string)=>setState(s=>({...s,sentMessages:{...s.sentMessages,[id]:[...(s.sentMessages[id]??[]),msg]}})),[]);
 const resetDemo=useCallback(()=>setState({...defaults}),[]);
 const value=useMemo(()=>({...state,ready,setOnboarded,toggleFavorite,toggleHabit,addAppointment,cancelAppointment,markNotificationsRead,sendMessage,resetDemo}),[state,ready,setOnboarded,toggleFavorite,toggleHabit,addAppointment,cancelAppointment,markNotificationsRead,sendMessage,resetDemo]);
 return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useApp=()=>{const v=useContext(Ctx);if(!v)throw new Error('useApp requires AppProvider');return v};
