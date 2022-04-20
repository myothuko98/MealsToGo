import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme/light-theme";
import { useColorScheme } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import { AuthenticationProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

// const firebaseConfig = {
//   apiKey: "AIzaSyDalgPnFWoRdKDwIp1XGV38wQsIW-hCo7M",
//   authDomain: "mealstogo-78b1b.firebaseapp.com",
//   projectId: "mealstogo-78b1b",
//   storageBucket: "mealstogo-78b1b.appspot.com",
//   messagingSenderId: "846893326126",
//   appId: "1:846893326126:web:0aecc16ee0de5ca87524bf",
// };

// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }

export default function App() {
  const scheme = useColorScheme();

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      {/* use <SafeAreaProvider from react-native-safe-area-context for without header bar in react navigation */}
      {/* <SafeAreaProvider> */}
      <ThemeProvider theme={scheme === "dark" ? theme : theme}>
        <AuthenticationProvider>
          <Navigation />
        </AuthenticationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
      {/* </SafeAreaProvider> */}
    </>
  );
}
