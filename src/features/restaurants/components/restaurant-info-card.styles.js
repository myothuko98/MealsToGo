import styled from "styled-components/native";
import { Card,Title } from "react-native-paper";

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Info = styled(Card.Content)``;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const StyledTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;



export const StyledCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
`;

export const OpenStatus = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;