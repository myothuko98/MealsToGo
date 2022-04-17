import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
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
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

export default function App() {
  const scheme = useColorScheme();
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      {/* use <SafeAreaProvider from react-native-safe-area-context for without header bar in react navigation */}
      {/* <SafeAreaProvider> */}
      <ThemeProvider theme={scheme === "dark" ? theme : theme}>
        <FavouritesContextProvider>
          <LocationContextProider>
            <RestaurantContextProvider>
              <AppNavigator />
            </RestaurantContextProvider>
          </LocationContextProider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
      {/* </SafeAreaProvider> */}
    </>
  );
}
