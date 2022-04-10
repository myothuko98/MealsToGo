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
import { RestaurantInfo } from "./src/features/restaurants/components/restaurant-info.component";
export default function App() {
 
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 10,
  },
  list: {
    flex:1,
    padding:10,
    backgroundColor: "green",
  },
});
