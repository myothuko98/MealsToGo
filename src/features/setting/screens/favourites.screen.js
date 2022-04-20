import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FlatList, TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavouritesSafeArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.placeId}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  ) : (
    <NoFavouritesSafeArea>
      <Text>No Favourites yet!</Text>
    </NoFavouritesSafeArea>
  );
};
