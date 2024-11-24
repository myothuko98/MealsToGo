import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { FAB } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

// Style the wrapper instead of the Camera component
const CameraContainer = styled(View)`
  flex: 1;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      console.log(photo);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <Camera
        ref={(camera) => (cameraRef.current = camera)}
        style={{ flex: 1 }} // Apply inline styles directly to the Camera
        type={Camera.Constants.Type.front}
        ratio={"16:9"}
      >
        <FAB
          icon="camera"
          style={{ position: "absolute", margin: 20, left: 0, bottom: 0 }}
          onPress={snap}
        />
      </Camera>
    </CameraContainer>
  );
};
