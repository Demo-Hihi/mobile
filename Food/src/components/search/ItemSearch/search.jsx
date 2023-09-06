import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SvgUri from "react-native-svg-uri";
import MySvg from "../../../../assets/svg/hero/homeHero.svg";
import Notification from "../../../components/notifications/global/noti";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SvgUri
          width={50} // Set the width of your SVG
          height={50} // Set the height of your SVG
          source={MySvg} // Pass the imported SVG as the source
        />
        <Text style={styles.text}>PLANTSCAPE</Text>
        <Notification />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    top: 50,
    right: 25,
  },
  row: {
    flexDirection: "row", // Arrange children in a horizontal row
    alignItems: "center", // Center items vertically within the row
  },
  svg: {
    marginRight: 0, // Add some spacing between SVG and text
  },
  text: {
    fontSize: (39.39).sp,
    fontWeight: "bold", // Use the correct fontWeight property
    color: "#0d986a", // Set the color using a hexadecimal color code
  },
});

export default Search;
