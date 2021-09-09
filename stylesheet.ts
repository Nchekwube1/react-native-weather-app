import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const theme2 = "#904048"
const theme="#000"
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
       color:theme2 
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
    backgroundColor:theme2,
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
   fontSize:13,
   fontFamily:"changa",
   textTransform:"capitalize"
  },
  body:{
      position:"relative",
      paddingTop:10,
       
  },
  main:{
        position:"relative",
    display:"flex",
    justifyContent:"space-between",
   alignItems: "center",
   height:"85vh",
   width:"100%"

  },
  bg:{
       position:"relative",
 display:"flex",
    justifyContent:"center",
   alignItems: "center",
   height:"40%",
   width:"100%",
   paddingTop:30,

  },
  background:{
   position:"relative",
   width:"100%",
   height:"100%"
  },

  icon:{
       position:"relative",
 display:"flex",
    justifyContent:"center",
   alignItems: "center",
   height:"50%",
   width:"100%",
  },
  iconImg:{
  position:"relative",
  height:"100%",
  width:120

  },
  deg:{
      position:"relative",
 display:"flex",
    justifyContent:"center",
   alignItems: "center",
   height:"50%",
   width:"100%",
  },
  temp:{
    position:"relative",
 display:"flex",
    justifyContent:"center",
   alignItems: "center",
   height:"70%",
   width:"100%",
},
temptext:{
      fontSize:54,
       fontFamily:"greze",
      
  },
desctext:{
      fontSize:18,
      color:"#585860",
       fontFamily:"changa",
   textTransform:"capitalize"
  },
  desc:{
        position:"relative",
 display:"flex",
    justifyContent:"center",
   alignItems: "center",
   height:"30%",
   width:"100%",
  },
  tabs:{
      position:"relative",
 display:"flex",
 flexWrap:"wrap",
    justifyContent:"center",
   alignItems: "center", 
   height:"60%",
   width:"100%",
   paddingTop:30,
  },
  tab:{
    position:"relative",
    width:"40%",
    height:"90%",
    borderRadius:6,
    marginRight:"2%",
     backgroundColor:theme2,
      display:"flex",
   justifyContent:"center",
   alignItems:"center"
  },
  tab1:{
   position:"relative",
   width:"100%",
   height:"30%",
   display:"flex",
   justifyContent:"center",
   alignItems:"center"
  },
  tab2:{
     position:"relative",
   width:"100%",
   height:"30%",
   display:"flex",
   justifyContent:"center",
   alignItems:"center"
  },
  tab1txt:{
   fontFamily:"changa",
    textTransform:"uppercase",
    fontSize:19,
    color:"#fff"
  },
  tab2txt:{
    fontFamily:"changa",
    textTransform:"capitalize",
    fontSize:14,
    color:"#fff"
  },
  each:{
        position:"relative",
    width:"100%",
    height:"25%", 
    display:"flex",
    justifyContent:"center",
   alignItems: "center", 
   flexDirection:"row"
  }
});