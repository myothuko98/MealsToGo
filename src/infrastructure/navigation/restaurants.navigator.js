import React from "react";
import {
  createNativeStackNavigator,
  TransitionPresets,
} from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Platform } from "react-native";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
const RestaurantStack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={
        !isAndroid && { ...TransitionPresets.ModalPresentationIOS }
      }
    >
      <RestaurantStack.Screen component={RestaurantsScreen} name="Restaurant" />
      <RestaurantStack.Screen
        component={RestaurantDetailScreen}
        name="RestaurantDetail"
      />
    </RestaurantStack.Navigator>
  );
};
