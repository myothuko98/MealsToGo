import React, { useState } from "react";
import { StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const SearchContainer = styled.View`
    padding: 10px;
  `;
  const RestaurantListView = styled.View`
    flex: 1;
    padding: 10px;
    background-color: red;
  `;
  const StyledSafeArea = styled.SafeAreaView`
    flex: 1;
    margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  `;

  return (
    <StyledSafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </SearchContainer>
      <RestaurantListView>
        <RestaurantInfoCard />
      </RestaurantListView>
    </StyledSafeArea>
  );
};