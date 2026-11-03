import React,{useState} from 'react';
import {ScrollView,View} from 'react-native';
import {Screen,Chip,Field,Header,Txt} from '@/components/ui';
import {TreatmentCard} from '@/components/catalog';
import {treatments} from '@/data/demo';
import {C} from '@/theme';
export default function Tedaviler(){const [category,setCategory]=useState('Tümü');const [search,setSearch]=useState('');const found=treatments.filter(x=>(category==='Tümü'||x.category===category)&&`${x.title} ${x.desc}`.toLowerCase().includes(search.toLowerCase()));return <Screen><Header title="Tedaviler"/><Txt size="title" style={{marginBottom:8}}>Tedavi seçeneklerini keşfet</Txt><Txt muted style={{marginBottom:16}}>Daha sağlıklı bir gülümseme için sana uygun tedaviyi bul.</Txt><Field icon="search-outline" placeholder="Tedavi ara..." value={search} onChangeText={setSearch}/><ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:16,marginBottom:18}} contentContainerStyle={{gap:8}}>{['Tümü','Genel','Estetik','Ortodonti','Acil'].map(x=><Chip key={x} label={x} active={category===x} onPress={()=>setCategory(x)}/>)}</ScrollView><View style={{flexDirection:'row',flexWrap:'wrap',gap:12}}>{found.map(x=><View key={x.id} style={{width:'48%',flexGrow:1,maxWidth:'48%'}}><TreatmentCard item={x}/></View>)}</View>{!found.length?<Txt color={C.muted}>Tedavi bulunamadı.</Txt>:null}</Screen>}
