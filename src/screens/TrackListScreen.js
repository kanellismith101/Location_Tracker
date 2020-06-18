import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Button, Divider } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text h1>TrackListScreen</Text>

      <Button
        title="Details"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};
const styles = StyleSheet.create({});

export default TrackListScreen;
