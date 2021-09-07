import React,{useState,useEffect} from 'react';
import {  Text, View } from 'react-native';
import  {useFonts} from "@use-expo/font"
import {API_KEY} from "./variables"
import {styles} from "./stylesheet"
import * as location from "expo-location"
import axios from 'axios';
import Search from './Search';
import Main from './main';

const customFonts ={
  changa: require("./assets/fonts/Changa-Regular.ttf"),
  changaBold: require("./assets/fonts/Changa-Bold.ttf"),
  alumni: require("./assets/fonts/AlumniSans-Regular.ttf"),
  alumniBold: require("./assets/fonts/AlumniSans-Bold.ttf"),
  greze: require("./assets/fonts/GrenzeGotisch-Regular.ttf"),
  grezeBold: require("./assets/fonts/GrenzeGotisch-Bold.ttf")
}

export interface response{"coord":{
  "lon":Number,"lat":Number},"weather":[
    {"id":Number,"main":string,"description":string,"icon":string}]
    ,"base":string,
    "main":{
      "temp":Number,"feels_like":Number,"temp_min":Number,"temp_max":Number,"pressure":Number,"humidity":Number,"sea_level":Number,"grnd_level":Number},
      "visibility":Number,
      "wind":{
        "speed":Number,"deg":Number,"gust":Number},
        "rain":{"1h":Number},
        "clouds":{"all":Number},
        "dt":Number,
        "sys":{"country":string,"sunrise":Number,"sunset":Number},
        "timezone":Number,"id":Number,"name":string,"cod":Number}

export interface responseArr extends Array<response>{
}

export default function App() {
    const [isLoaded] = useFonts(customFonts)
  const [weather, setWeather] = useState<responseArr|[]>([])
  const [err, setErr] = useState<string>("")
const iconApi = `https://openweathermap.org/img/wn/{icon}@4x.png`

  useEffect(()=>{
   (async()=>{
     let {status} = await location.requestForegroundPermissionsAsync()
   
     if(status !== "granted"){
      setErr("Permission to access location was denied")
      return
     }

     let position = await location.getCurrentPositionAsync({})
     const {latitude, longitude} = position.coords
  
const latApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  axios.get(latApi).then(res=>{
    let newer = [res.data]
    console.log(newer)
    setWeather(newer)
    }).catch((err)=>{
      setErr(err)
    })
   })()
  },[])


  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style ={styles.textCon}>
        <Text style={styles.text}>Weather4u </Text>
      </View>
     </View>
      <View style={styles.body}>
        <Search/>
    
     {
       err? <Text>{err}</Text>: <Main 
       coord={weather[0]?.coord}
       weather={weather[0]?.weather}
       base={weather[0]?.base}
       main={weather[0]?.main}
       visibility={weather[0]?.visibility}
       wind={weather[0]?.wind}
       rain={weather[0]?.rain}
       clouds ={weather[0]?.clouds}
       dt={weather[0]?.dt}
       sys={weather[0]?.sys}
       timezone={weather[0]?.timezone}
       id={weather[0]?.id}
       name={weather[0]?.name}
       cod={weather[0]?.cod}
       />
     }
      
      </View>
    </View>
  );
}

