import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { navigationTheme } from "./theme";
import LoginScreen from "./screens/LoginScreen";
import VinEntryScreen from "./screens/VinEntryScreen";
import VehicleSummaryScreen from "./screens/VehicleSummaryScreen";
import VehicleStateScreen from "./screens/VehicleStateScreen";

export type RootStackParamList = {
  Login: undefined;
  VinEntry: undefined;
  VehicleSummary: { vehicleId: string };
  VehicleState: { vehicleId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: navigationTheme.colors.card },
          headerTintColor: navigationTheme.colors.text,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="VinEntry" component={VinEntryScreen} />
        <Stack.Screen name="VehicleSummary" component={VehicleSummaryScreen} />
        <Stack.Screen name="VehicleState" component={VehicleStateScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
