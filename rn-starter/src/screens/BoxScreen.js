import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {},
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "red"
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    position: "absolute",
    backgroundColor: "blue",
    alignSelf: "flex-end"
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    alignSelf: "center"
  }
});

export default BoxScreen;
