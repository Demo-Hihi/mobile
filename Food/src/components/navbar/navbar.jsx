import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

const screenWidth = Dimensions.get("window").width;

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Icon name="home" size={20} />
      <Icon name="heart" size={20} />
      <Icon name="search" size={20} />
      <Icon name="user" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
    width: screenWidth,
    height: 74.77,
    backgroundColor: "#FFF",
    borderRadius: 20,
    elevation: 19.7, // Use elevation for Android to set the shadow
    bottom: -10,
    position: "absolute",
  },
  iconBorder: {
    border: "black", // Border color
    color: "black",
    size: 20,
  },
});

export default Navigation;
