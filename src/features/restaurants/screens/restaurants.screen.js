import React, { useState } from "react";
import {
  StatusBar,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const StyledView = styled.View`
    padding: 10px;
  `;
  const StyledListView= styled.View`
    flex:1;
    padding: 10px;
    backgroundColor: red;
  `;
  const StyledSafeArea = styled.SafeAreaView`
  flex:1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  `;


  return (
    <StyledSafeArea>
      <StyledView>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </StyledView>
      <StyledListView>
        <RestaurantInfoCard />
      </StyledListView>
    </StyledSafeArea>
  );
};

