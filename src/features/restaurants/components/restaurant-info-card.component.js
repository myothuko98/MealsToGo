import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Address,
  Icon,
  Info,
  OpenStatus,
  Rating,
  Row,
  StyledCover,
  StyledTitle,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favoruites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/700"],
    address = "100 Random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const RatingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <Card elevation={5}>

        <Favourite restaurant={restaurant} />

        <StyledCover source={{ uri: photos[0] }} />
        <Info>
          <StyledTitle>{name}</StyledTitle>
          <Row>
            <Rating>
              {RatingArray.map((_, index) => (
                <SvgXml
                  xml={star}
                  width={20}
                  height={20}
                  key={`${placeId}-star${index}`}
                />
              ))}
            </Rating>
            <OpenStatus>
              {isClosedTemporarily && (
                <Text variant="caption" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer size="medium" position="left">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer size="medium" position="left">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </OpenStatus>
          </Row>
          <Address>{address}</Address>
        </Info>
      </Card>
    </>
  );
};
