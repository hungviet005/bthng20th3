import React from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
ScrollView
} from "react-native";

export default function HomeScreen({ navigation }) {

return(

<View style={{flex:1}}>

{/* SCROLL */}
<ScrollView
style={styles.container}
contentContainerStyle={{ paddingBottom: 120 }}
showsVerticalScrollIndicator={false}
>

{/* HEADER */}
<View style={styles.header}>
<View>
<Text style={styles.hello}>Hello 👋</Text>
<Text style={styles.name}>Christie Doe</Text>
</View>

<Image
source={require("../assets/images/avatar.png")}
style={styles.avatar}
/>
</View>


{/* INSIGHTS */}
<Text style={styles.section}>Your Insights</Text>

<View style={styles.grid}>

{/* Scan */}
<TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Scan")}>
<Image source={require("../assets/images/scan1.png")} style={styles.icon}/>
<Text style={styles.cardTitle}>Scan new</Text>
<Text style={styles.cardSub}>Scanned 483</Text>
</TouchableOpacity>

{/* Counterfeits */}
<TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Splash")}>
<Image source={require("../assets/images/warning.png")} style={styles.icon}/>
<Text style={styles.cardTitle}>Counterfeits</Text>
<Text style={styles.cardSub}>Counterfeited 32</Text>
</TouchableOpacity>


{/* Success */}
<TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Success")}>
<Image source={require("../assets/images/check.png")} style={styles.icon}/>
<Text style={styles.cardTitle}>Success</Text>
<Text style={styles.cardSub}>Checkouts 8</Text>
</TouchableOpacity>

{/* Directory */}
<TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Cart")}>
<Image source={require("../assets/images/calendar.png")} style={styles.icon}/>
<Text style={styles.cardTitle}>Directory</Text>
<Text style={styles.cardSub}>History 26</Text>
</TouchableOpacity>

</View>


{/* EXPLORE MORE */}
<View style={styles.exploreRow}>
<Text style={styles.section}>Explore More</Text>
<Text style={styles.arrow}>→</Text>
</View>

<View style={styles.products}>
<Image source={require("../assets/images/p1.png")} style={styles.product}/>
<Image source={require("../assets/images/p2.png")} style={styles.product}/>
<Image source={require("../assets/images/p3.png")} style={styles.product}/>
</View>

</ScrollView>




</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F5F5",
paddingHorizontal:20
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:40
},

hello:{
fontSize:22,
fontWeight:"bold"
},

name:{
color:"#777"
},

avatar:{
width:50,
height:50,
borderRadius:25
},

section:{
marginTop:25,
fontSize:18,
fontWeight:"bold"
},

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between",
marginTop:15,

minHeight:460
},

card:{
width:"48%",
backgroundColor:"#fff",
padding:50,
borderRadius:25,
marginBottom:20,
alignItems:"center",

shadowColor:"#000",
shadowOpacity:0.05,
shadowRadius:10,
elevation:3
},

icon:{
width:40,
height:50,
marginBottom:12,
resizeMode:"contain"
},

cardTitle:{
fontWeight:"bold"
},

cardSub:{
fontSize:13,
color:"#888"
},

exploreRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

arrow:{
fontSize:45
},

products:{
flexDirection:"row",
marginTop:10
},

product:{
width:120,
height:200,
borderRadius:10,
marginRight:10
},

bottomNav:{
position:"absolute",
bottom:20,
left:10,
right:10,
backgroundColor:"#fff",
padding:15,
borderRadius:25,
flexDirection:"row",
justifyContent:"space-around",

shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:100,
elevation:100
},

navIcon:{
width:24,
height:120,
opacity:0.5,
resizeMode:"contain"
},

navIconActive:{
width:24,
height:120,
resizeMode:"contain"
}

});