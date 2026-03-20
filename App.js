import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screens/SplashScreen";
import MainTab from "./navigation/MainTab";   // 👈 THÊM
import ScanScreen from "./screens/ScanScreen";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import SuccessScreen from "./screens/SuccessScreen";

const Stack = createNativeStackNavigator();

export default function App() {

return(

<NavigationContainer>

<Stack.Navigator screenOptions={{ headerShown:false }}>

<Stack.Screen name="Splash" component={SplashScreen}/>

{/* 👇 DÙNG TAB Ở ĐÂY */}
<Stack.Screen name="Home" component={MainTab}/>

<Stack.Screen name="Scan" component={ScanScreen}/>
<Stack.Screen name="Cart" component={CartScreen}/>
<Stack.Screen name="Payment" component={PaymentScreen}/>
<Stack.Screen name="Success" component={SuccessScreen}/>

</Stack.Navigator>

</NavigationContainer>

)

}