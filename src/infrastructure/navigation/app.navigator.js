import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "react-native";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Button } from "react-native-paper";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingScreen } from "../../features/setting/screens/setting.screen";
import { SettingsNavigator } from "./settings.navigator";

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
    headerShown: false,
  };
};

// function SettingsScreen() {
//   const { onSignout, isLoading } = useContext(AuthenticationContext);
//   return (
//     <SafeArea>
//       <Text>Settings!</Text>
//       <Button
//         style={{ marginTop: 40 }}
//         onPress={() => onSignout()}
//         loading={isLoading}
//       >
//         Logout
//       </Button>
//     </SafeArea>
//   );
// }
export const AppNavigator = () => {
  return (
    // <NavigationContainer>
    <FavouritesContextProvider>
      <LocationContextProider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProider>
    </FavouritesContextProvider>
    // </NavigationContainer>
  );
};
