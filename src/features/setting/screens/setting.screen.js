import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../../infrastructure/theme/light-theme/colors";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color:rgba(255,255,255,0.4);
`;
const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${(props) => props.theme.space[2]};
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  background-color: #ddd;
  width: 100%;
  height: 100%;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onSignout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    console.log("photoUri", photoUri);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );
  return (
    <SettingBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo ? (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            ) : (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="#2182BD"
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large" />
          <Text variant="label">{user.email}</Text>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            style={{ padding: 16 }}
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer />
          <SettingsItem
            style={{ padding: 16 }}
            title="Logout"
            left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="door" />}
            onPress={onSignout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingBackground>
  );
};
