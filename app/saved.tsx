import React,{useState} from 'react';
import {View} from 'react-native';
import {useRouter} from 'expo-router';
import {Screen,Card,Chip,Header,I,Txt} from '@/components/ui';
import {DentistCard,TreatmentCard} from '@/components/catalog';
import {dentists,treatments} from '@/data/demo';
import {useApp} from '@/context/AppContext';
import {C} from '@/theme';
export default function Favoriler(){const r=useRouter();const {favorites}=useApp();const [tab,setTab]=useState('Hekimler');return <Screen><Header title="Favoriler"/><View style={{flexDirection:'row',gap:10,marginBottom:18}}>{['Hekimler','Tedaviler'].map(x=><Chip key={x} label={x} active={tab===x} onPress={()=>setTab(x)}/>)}</View>{tab==='Hekimler'?<View style={{gap:12}}>{dentists.filter(d=>favorites.includes(d.id)).map(d=><DentistCard key={d.id} item={d}/>)}{!favorites.length?<Card style={{gap:10,alignItems:'center',padding:30}}><I name="heart-outline" color={C.teal} size={46}/><Txt weight="800">Favori listen henüz boş</Txt><Txt size="caption" muted>Bir hekimi favorilere ekleyerek daha sonra kolayca ulaşabilirsin.</Txt><Chip label="Hekimleri Keşfet" onPress={()=>r.push('/dentists')}/></Card>:null}</View>:<View style={{gap:12}}>{treatments.slice(0,2).map(t=><TreatmentCard item={t} key={t.id} wide/>)}</View>}</Screen>}
