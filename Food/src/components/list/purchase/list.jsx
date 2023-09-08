import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { screenWidth, screenHeight } from "../../../config/screen";

const List = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 480,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    left: 0,
    marginTop: 30,
    height: 130,
    width: screenWidth - 50,
    backgroundColor: "#DCE8D6",
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    marginRight: 10,
  },
  text: {
    fontSize: 39.39,
    fontWeight: "bold",
    color: "#0d986a",
  },
});

export default List;
