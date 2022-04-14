import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { RestaurantInfo } from "./src/features/restaurants/components/restaurant-info-card.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme/light-theme";
import { useColorScheme } from "react-native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.component";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ focused, size, color }) => (
      <Ionicons
        name={focused ? iconName : iconName + "-outline"}
        size={size}
        color={color}
      />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

export default function App() {
  const scheme = useColorScheme();
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  function MapScreen() {
    return (
      <SafeArea>
        <Text>Map!</Text>
      </SafeArea>
    );
  }

  function SettingsScreen() {
    return (
      <SafeArea>
        <Text>Settings!</Text>
      </SafeArea>
    );
  }

  return (
    <>
      <ThemeProvider theme={scheme === "dark" ? theme : theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
