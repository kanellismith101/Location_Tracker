import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { navigate } from "../navigationRef";

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={buttonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 15,
    color: "red",
    marginLeft: 15,
  },
});

export default AuthForm;
