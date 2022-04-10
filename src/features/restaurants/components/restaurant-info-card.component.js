import React from "react";
import { Card,Title } from "react-native-paper";
import styled from "styled-components/native";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const StyledView = styled.View`
  background-color: papayawhip;
`

  return (
    <>
      <Card>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </Card>
    </>
  );
};
