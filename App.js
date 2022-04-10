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
export default function App() {
 
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}


