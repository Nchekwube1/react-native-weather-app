import React,{useState} from 'react'
import {styles} from "./stylesheet"
import { API_KEY } from './variables';

import {  Text, View,TextInput, TouchableOpacity } from 'react-native';
function Search() {
  const [loc, setLoc] = useState<string>("")
  function btnPress(){
    alert("pressed")
  }
  const cityApi = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${API_KEY}`
    return (
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
    )
}

export default Search
