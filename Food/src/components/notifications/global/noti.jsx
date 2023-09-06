import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SvgUri from "react-native-svg-uri";
import MySvg from "../../../../assets/svg/hero/homeHero.svg";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

const Notification = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.noti} name="bell" size={21} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    marginLeft: 180,
  },
  noti: {
    borderColor: "black", // black color
    borderRadius: 5, // 5 pixel border radius (optional)
    padding: 10,
  },
});

export default Notification;
