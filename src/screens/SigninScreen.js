import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { navigate } from "../navigationRef";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign in to tracker</Text>
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

      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign In" onPress={() => signin({ email, password })} />
      </Spacer>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Spacer>
          <Text style={styles.link}>Sign up Here...</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};
SigninScreen.navigationOptions = () => {
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
  link: {
    fontSize: 15,
    color: "blue",
    marginLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
