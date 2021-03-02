import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // region={{ FOLLOWS THE USER AROUND ON THE MAP
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255. 1.0)"
        fillColor="rgba(158,158,255. 0.4)"
      ></Circle>
    </MapView>
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
