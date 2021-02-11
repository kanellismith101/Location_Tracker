import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage} />
          <AuthForm
            headerText="Sign in to Tracker"
            errorMessage={state.errorMessage}
            buttonText="Sign in"
            onSubmit={signin}
          ></AuthForm>
          <NavLink text="Click here to sign up" routeName="Signup" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
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
