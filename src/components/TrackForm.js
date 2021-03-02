//import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Button, Divider } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(locationContext);

  return (
    <>
      <Spacer />
      <Input placeholder="Name your track..." />
      <Spacer />
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start" onPress={startRecording} />
      )}
    </>
  );
};
const styles = StyleSheet.create({});

export default TrackForm;
