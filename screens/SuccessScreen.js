import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SuccessScreen({navigation}){

return(

<View style={styles.container}>

{/* Back Button */}

<TouchableOpacity
style={styles.backBtn}
onPress={()=>navigation.goBack()}
>
<Text style={styles.back}>←</Text>
</TouchableOpacity>


{/* IMAGE */}

<Image
source={require("../assets/images/success.png")}
style={styles.image}
/>


{/* TEXT */}

<Text style={styles.title}>Payment Success, Yayy!</Text>

<Text style={styles.desc}>
we will send order details and invoice in your contact no. and registered email
</Text>


{/* CHECK DETAILS */}

<TouchableOpacity>
<Text style={styles.link}>
Check Details →
</Text>
</TouchableOpacity>


{/* DOWNLOAD BUTTON */}

<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("Home")}
>

<Text style={styles.buttonText}>
Download Invoice
</Text>

</TouchableOpacity>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F7F7F7",
alignItems:"center",
justifyContent:"center",
padding:20
},

backBtn:{
position:"absolute",
top:60,
left:20,
backgroundColor:"#eee",
padding:10,
borderRadius:10
},

back:{
fontSize:18
},

image:{
width:220,
height:220,
resizeMode:"contain",
marginBottom:20
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:10,
textAlign:"center"
},

desc:{
textAlign:"center",
color:"#777",
marginBottom:20,
paddingHorizontal:20
},

link:{
color:"#4A6CF7",
fontWeight:"bold",
marginBottom:25
},

button:{
backgroundColor:"#4A6CF7",
width:"100%",
padding:16,
borderRadius:12,
alignItems:"center"
},

buttonText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});