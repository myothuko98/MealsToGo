import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { StatusBar, Platform } from "react-native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top:40px;
  width: 100%;
  z-index: 999;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}

        // onIconPress={search(searchKeyword)}
      />
    </SearchContainer>
  );
};
