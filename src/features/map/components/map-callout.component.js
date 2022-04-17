import React from "react";
import { Caption } from "react-native-paper";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
const MyText = styled.Text``;
const ResImage = styled(Card.Cover)`
  border-radius: 5px;
  width: auto;
  height: auto;
`;
const CalloutView = styled(Card)`
  flex: 1;
`;
export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
