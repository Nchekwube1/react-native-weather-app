import React,{useState,useEffect,FC} from 'react';
import { View,Text,Image,ImageBackground } from 'react-native';
import {styles} from "./stylesheet"
import {response} from "./App"

const Main:FC<response> = (Prop) => {
       const {weather,coord,main,wind,sys,visibility,timezone} = Prop
    if(weather === undefined){
    return(
        <View></View>

    )
    }
     const {icon} = Prop.weather[0]
    const iconApi = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
       <View style={styles.main}>
           <View style={styles.bg}>
             <ImageBackground  source={{uri:iconApi}} resizeMode="cover" style={styles.background}>
                     <View style={styles.icon}>
                {/* <Image style={styles.iconImg} source={{uri:iconApi}}/> */}
            </View>
            <View style={styles.deg}>
    <View style={styles.temp}><Text style={styles.temptext}>{(main.temp - 273).toFixed(0)}°</Text></View>
    <View style={styles.desc}><Text style={styles.desctext}>{weather[0].description}</Text></View>
            </View>
             </ImageBackground>
           </View>
           <View style={styles.tabs}>
            
              <View style={styles.each}>
                   <View style={styles.tab}>
                      <View style={styles.tab1}>
                          <Text style={styles.tab1txt}>
                              latitude
                          </Text>
                      </View>
                      <View style={styles.tab2}>
                        <Text style={styles.tab2txt}>{`${coord.lat}°`}</Text>
                      </View>
           </View>
             <View style={styles.tab}>
                 <View style={styles.tab1}>
                          <Text style={styles.tab1txt}>
                              longitude
                          </Text>
                      </View>
                      <View style={styles.tab2}>
                        <Text style={styles.tab2txt}>{coord.lon}°</Text>
                      </View>
           </View>
              </View>



              
              <View style={styles.each}>
                   <View style={styles.tab}>
                      <View style={styles.tab1}>
                          <Text style={styles.tab1txt}>
                              Wind speed
                          </Text>
                      </View>
                      <View style={styles.tab2}>
                        <Text style={styles.tab2txt}>{`${wind.speed}Km/h`}</Text>
                      </View>
           </View>
             <View style={styles.tab}>
                 <View style={styles.tab1}>
                          <Text style={styles.tab1txt}>
                              country
                          </Text>
                      </View>
                      <View style={styles.tab2}>
                        <Text style={styles.tab2txt}>{sys.country}</Text>
                      </View>
           </View>
              </View>


              
              <View style={styles.each}>
                   <View style={styles.tab}>
                      <View style={styles.tab1}>
                          <Text style={styles.tab1txt}>
                              visibility
                          </Text>
                      </View>
                      <View style={styles.tab2}>
                        <Text style={styles.tab2txt}>{`${visibility/1000}Km`}</Text>
                      </View>
           </View>
             <View style={styles.tab}>
                 <View style={styles.tab1}>
                          <Text style={styles.tab1txt}>
                              timezone
                          </Text>
                      </View>
                      <View style={styles.tab2}>
                        <Text style={styles.tab2txt}>{timezone}</Text>
                      </View>
           </View>
              </View>
                      </View>
       </View>
    )
}

export default Main
