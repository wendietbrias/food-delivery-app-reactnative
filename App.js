import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Confirmpage from "./screens/Confirmpage";
import Homepage from "./screens/Homepage";
import Detailpage from "./screens/Detailpage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    GeometriaBold: require("./assets/fonts/Geometria-Bold.ttf"),
    GeometriaLight: require("./assets/fonts/Geometria-Light.ttf"),
    GeometriaMedium: require("./assets/fonts/Geometria-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Confirm"
      >
        <Stack.Screen name="Confirm" component={Confirmpage} />
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Detail" component={Detailpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
