import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors, TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountContainer,
  AccountCover,
  AccountImageBackground,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatedPassword, setRepeatedPassword] = useState(null);
  const { onLogin, error, isLoading, onRegister } = useContext(
    AuthenticationContext
  );

  return (
    <AccountImageBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Spacer size="medium" />
        <AuthInput
          label="Confirm Password"
          value={repeatedPassword}
          onChangeText={(text) => setRepeatedPassword(text)}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <Spacer size="medium" />
        <AuthInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
        />
        {error && (
          <>
            <ErrorContainer>
              <Text variant="error">{error.message}</Text>
            </ErrorContainer>
          </>
        )}

        <Spacer size="large" />

        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => onRegister(email, password, repeatedPassword)}
          loading={isLoading}
        >
          {isLoading ? "Loading" : "Register"}
        </AuthButton>
      </AccountContainer>
      <Spacer size="large" />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountImageBackground>
  );
};
