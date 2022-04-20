import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//for without header use SafeAreaView from react-native-safe-are-context for screens

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
