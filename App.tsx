import React,{useState,useEffect} from 'react';
import {  Text, View,TextInput, TouchableOpacity } from 'react-native';
import  {useFonts} from "@use-expo/font"
import {API_KEY} from "./variables"
import {styles} from "./stylesheet"
import * as location from "expo-location"
import axios from 'axios';

const customFonts ={
  changa: require("./assets/fonts/Changa-Regular.ttf"),
  changaBold: require("./assets/fonts/Changa-Bold.ttf"),
  alumni: require("./assets/fonts/AlumniSans-Regular.ttf"),
  alumniBold: require("./assets/fonts/AlumniSans-Bold.ttf"),
  greze: require("./assets/fonts/GrenzeGotisch-Regular.ttf"),
  grezeBold: require("./assets/fonts/GrenzeGotisch-Bold.ttf")
}


// interface WeatherType {
//   "coord":{
//     "lon":Number,
//     "lat":Number
//   },
//   "weather":[
//     {
//       "id":Number,
//       "main":String,
//       "description":String,
//       "icon":String
//     }
//   ],
//   "base":String,
//   "main":{
//     "temp":Number,
//     "feels_like":Number,
//     "temp_min":Number,
//     "temp_max":Number,
//     "pressure":Number,
//     "humidity":Number​},
//   "visibility":Number,
//   "wind":{
//     "speed":Number,
//     "deg":Number,
//     "gust":Number
//   },
//   "clouds":{
//     "all":Number
//   },
//   "dt":Number,
//   "sys":{
//     "type":Number,
//    "id":Number,
//    "message":Number,
//    "country":String,
//    "sunrise":Number,
//    "sunset":Number
//   },
  
//   "timezone":Number,
//   "id":Number,
//   "name":String,
//   "cod":Number
// }

interface response{"coord":{
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

interface responseArr extends Array<response>{
}

export default function App() {
    const [isLoaded] = useFonts(customFonts)
  const [weather, setWeather] = useState<responseArr|[]>([])
  const [loc, setLoc] = useState<string>("")
  const [err, setErr] = useState<string>("")
  const cityApi = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}`
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
    console.log(weather)
    })
   })()
  },[])

function btnPress(){
  alert("pressed")
}
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style ={styles.textCon}>
        <Text style={styles.text}>Weather4u </Text>
      </View>
     </View>

     <View style={styles.inputCon}>
       <TextInput
        style={styles.input}
        placeholder="Search by city name"
        onChangeText={text => setLoc(text)}
        defaultValue={loc}
      />
     <TouchableOpacity
        style={styles.button}
        onPress={btnPress}
      >
        <Text style={styles.btntxt}>search</Text>
      </TouchableOpacity>
     </View>
     <Text>
       {weather.map((er)=>{
         return er.coord.lon
       })}
     </Text>
    </View>
  );
}

