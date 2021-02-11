import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
const Map = () => {
  const { state } = useContext(LocationContext);
  console.log(state);
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    ></MapView>
  );
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
  map: {
    height: 300,
  },
});

export default Map;
