import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import DetailPage from "./screens/DetailPage";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [stock, setStock] = useState({
    first: 1,
    second: 0,
    third: 500,
  });

  const updateStock = (stockid) => {
    setStock({
      ...stock,
      [stockid]: stock[stockid] === 0 ? 0 : stock[stockid] - 1,
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <HomePage {...props} stock={stock} updatestock={updateStock} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Detail"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <DetailPage {...props} stock={stock} updatestock={updateStock} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
