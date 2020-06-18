import React, {  useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {  Text,  } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { navigate } from "../navigationRef";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        buttonText="Sign up"
        onSubmit={signup}
      ></AuthForm>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>Sign in Here...</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
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

export default SignupScreen;
