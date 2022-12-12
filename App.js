import React from "react"; 
import { View, Text } from "react-native";
import BelajarProps from "./src/learn/BelajarProps";
import Latihan2 from "./src/learn/latihan2";
import BelajarUseState from "./src/learn/BelajarUseState";
import BelajarImage from "./src/learn/BelajarImage";
import BelajarImageBackground from "./src/learn/BelajarImageBackground";
import BelajarScrollView from "./src/learn/BelajarScrollView";
import ExamNative from "./src/learn/ExamNative";
import Welcome from "./src/project/Welcome";
import Home from "./src/project/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;