import React from "react";
import {
View,
Text,
StyleSheet,
TextInput,
TouchableOpacity,
Image
} from "react-native";

export default function PaymentScreen({ navigation }) {

return(

<View style={styles.container}>

{/* HEADER */}

<View style={styles.header}>
    

<TouchableOpacity 
  style={styles.backBtn}
  onPress={() => navigation.navigate("Home")}
>
<Image
source={require("../assets/images/back.png")}
style={styles.backIcon}
/>
</TouchableOpacity>

<View style={styles.headerRow}>

<Text style={styles.title}>Checkout 💳</Text>

<View>
<Text style={styles.price}>₹ 1,527</Text>
<Text style={styles.tax}>Including GST (18%)</Text>
</View>

</View>

</View>


{/* PAYMENT METHOD */}

<View style={styles.methodContainer}>

<View style={styles.methodBox}>

<TouchableOpacity style={styles.creditBtn}>

<Image
source={require("../assets/images/card.png")}
style={styles.methodIcon}
/>

<Text style={styles.creditText}>Credit card</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.appleBtn}>

<Image
source={require("../assets/images/apple.png")}
style={styles.methodIcon}
/>

<Text style={styles.appleText}>Apple Pay</Text>

</TouchableOpacity>

</View>

</View>


{/* CARD NUMBER */}

<Text style={styles.label}>Card number</Text>

<View style={styles.inputBox}>

<TextInput
placeholder="5261 4141 0151 8472"
style={styles.input}
/>

<Image
source={require("../assets/images/mastercard.png")}
style={styles.masterIcon}
/>

<Image
source={require("../assets/images/scan.png")}
style={styles.scanIcon}
/>

</View>


{/* CARDHOLDER */}

<Text style={styles.label}>Cardholder name</Text>

<View style={styles.inputBox}>
<TextInput
placeholder="Christie Doe"
style={styles.input}
/>
</View>


{/* EXPIRY + CVV */}

<View style={styles.row}>

<View style={{flex:1}}>

<Text style={styles.label}>Expiry date</Text>

<View style={styles.inputBox}>
<TextInput
placeholder="06 / 2024"
style={styles.input}
/>
</View>

</View>

<View style={{flex:1,marginLeft:10}}>

<View style={styles.cvvTitle}>
<Text style={styles.label}>CVV / CVC</Text>

<View style={styles.help}>
<Text style={styles.helpText}>?</Text>
</View>

</View>

<View style={styles.inputBox}>
<TextInput
placeholder="915"
style={styles.input}
/>
</View>

</View>

</View>


<Text style={styles.note}>
We will send you an order details to your email after the successfull payment
</Text>


{/* PAY BUTTON */}

<TouchableOpacity
onPress={() => navigation.navigate("Success")}
style={styles.payBtn}
>

<Image
source={require("../assets/images/lock.png")}
style={styles.payImage}
/>

</TouchableOpacity>

</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F5F5"
},

header:{
backgroundColor:"#fff",
paddingTop:50,
paddingHorizontal:20,
paddingBottom:25,
borderBottomLeftRadius:40,
borderBottomRightRadius:40
},

backBtn:{
backgroundColor:"#F2F2F2",
width:40,
height:40,
borderRadius:12,
alignItems:"center",
justifyContent:"center",
marginBottom:20
},

backIcon:{
width:18,
height:18
},

headerRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

title:{
fontSize:24,
fontWeight:"bold"
},

price:{
color:"#2ECC71",
fontWeight:"bold",
fontSize:18,
textAlign:"right"
},

tax:{
fontSize:12,
color:"#888"
},

methodContainer:{
marginTop:-15,
paddingHorizontal:20
},

methodBox:{
flexDirection:"row",
backgroundColor:"#EDEDED",
borderRadius:20,
padding:6
},

creditBtn:{
flex:1,
flexDirection:"row",
alignItems:"center",
justifyContent:"center",
backgroundColor:"#2ECC71",
padding:14,
borderRadius:16
},

creditText:{
color:"#fff",
fontWeight:"bold",
marginLeft:6
},

appleBtn:{
flex:1,
flexDirection:"row",
alignItems:"center",
justifyContent:"center"
},

appleText:{
marginLeft:6,
fontWeight:"500"
},

methodIcon:{
width:18,
height:18,
resizeMode:"contain"
},
label:{
marginTop:20,
marginBottom:6,
marginLeft:20,
fontWeight:"500"
},

inputBox:{
backgroundColor:"#ECECEC",
marginHorizontal:20,
borderRadius:14,
padding:14,
justifyContent:"center"
},

input:{
fontSize:16
},

masterIcon:{
width:28,
height:18,
position:"absolute",
right:55,
top:16
},

scanIcon:{
width:22,
height:22,
position:"absolute",
right:18,
top:14
},

row:{
flexDirection:"row",
paddingHorizontal:20
},

cvvTitle:{
flexDirection:"row",
alignItems:"center",
marginTop:20
},

help:{
backgroundColor:"#CFF5DF",
width:18,
height:18,
borderRadius:10,
alignItems:"center",
justifyContent:"center",
marginLeft:5
},

helpText:{
fontSize:12,
color:"#2ECC71"
},

note:{
fontSize:12,
color:"#999",
textAlign:"center",
marginTop:20,
paddingHorizontal:40
},

payBtn:{
alignItems:"center",
marginTop:30
},

payImage:{
width:"90%",
height:60,
resizeMode:"contain"
},

lockIcon:{
width:18,
height:18,
resizeMode:"contain"
},

payText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
}

});