import React, { useContext, useState } from "react";
import { StatusBar, FlatList } from "react-native";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
  `;

  const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;

  const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
  `;

  const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
  `;

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </SearchContainer>
      {isLoading && <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue500} />
        </LoadingContainer>}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.placeId}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
