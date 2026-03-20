import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function SplashScreen({ navigation }) {

return (

<TouchableOpacity
style={styles.container}
activeOpacity={1}
onPress={() => navigation.replace("Home")}
>

<Image
source={require("../assets/images/splash.png")}
style={styles.image}
/>

<Text style={styles.title}>Scan, Pay & Enjoy!</Text>

<Text style={styles.desc}>
scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!
</Text>

<View style={styles.dots}>
<View style={styles.dot1}/>
<View style={styles.dot2}/>
<View style={styles.dot3}/>
</View>

</TouchableOpacity>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F6F2EF",
alignItems:"center",
justifyContent:"center",
padding:20
},

image:{
width:260,
height:260,
resizeMode:"contain",
marginBottom:30
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:10,
color:"#333"
},

desc:{
textAlign:"center",
color:"#777",
fontSize:14,
lineHeight:22,
marginBottom:40
},

dots:{
flexDirection:"row"
},

dot1:{
width:8,
height:8,
borderRadius:5,
backgroundColor:"#F4B5B5",
marginHorizontal:4
},

dot2:{
width:8,
height:8,
borderRadius:5,
backgroundColor:"#F4B5B5",
marginHorizontal:4
},

dot3:{
width:8,
height:8,
borderRadius:5,
backgroundColor:"#4A6CF7",
marginHorizontal:4
}

});