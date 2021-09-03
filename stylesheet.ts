import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e8d0',

  },
  header:{
       width:"100%",
       height:"50px",
      backgroundColor:"transparent",
    justifyContent: 'center',
      shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  textCon:{
    position:"relative",
      width:"100%",
      alignItems:"center",
      fontSize:20,
       fontFamily:"greze",
      
  },
  text:{
      fontSize:32,
       fontFamily:"greze",
       color:"#904048"
  },
  inputCon:{
    position:"relative",
      width:"100%",
      alignItems:"center",
      height:"31px",
      marginTop:"10px"
  },
  input:{
    position:"relative",
    width:"80%",
    height:"100%",
    backgroundColor:"#fff",
    color:"#000",
      shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 12,
    borderRadius:4,
    fontFamily:"changa",
    textTransform:"capitalize",
    fontSize:13,
    paddingLeft:3,
    paddingRight:70
    
  },
  button:{
    position:"absolute",
    height:"85%",
    backgroundColor:"#904048",
    paddingHorizontal:10,
    borderRadius:3,
    right:"11%",
    top:"7%",
    display:"flex",
    justifyContent:"center",
   alignItems: "center",
},
btntxt:{
      color:"#fff",
    textAlign:"center",
       display:"flex",
    justifyContent:"center",
   alignItems: "center",
   fontFamily:"changa",
   fontSize:13,
   textTransform:"capitalize"
  }
});