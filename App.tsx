import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font"
import  {useFonts} from "@use-expo/font"

const customFonts ={
  changa: require("./assets/fonts/Changa-Regular.ttf")
}

export default function App() {
  const [isLoaded] = useFonts(customFonts)

  if(isLoaded){

    return (
      <View style={styles.container}>
      <View style={styles.car}>
   <View style={styles.titles}>
  <Text style={styles.title}>Model Alpha</Text>
  <Text style={styles.subtitle}>Starting at $780</Text>
   </View>
  
  
  
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  car:{
       width:"100%",
       height:"100%",

  },
  titles:{
      marginTop:"20%",
      width:"100%",
      alignItems:"center"
  },
  title:{
    fontSize:42,
    fontWeight:"500",
    // fontFamily:"Alumni Sans"
      },
  subtitle:{
   fontSize:16,
   color:"#5c5e62"
  }
});
