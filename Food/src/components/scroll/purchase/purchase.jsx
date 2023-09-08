import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Purchase = () => {
  const [icon1Color, setIcon1Color] = useState("#002140");
  const [icon2Color, setIcon2Color] = useState("#DCE8D6");
  const [icon3Color, setIcon3Color] = useState("#DCE8D6");

  const handleIconClick = (iconNumber) => {
    // Set the clicked icon to #002140 and others to #DCE8D6
    if (iconNumber === 1) {
      setIcon1Color("#002140");
      setIcon2Color("#DCE8D6");
      setIcon3Color("#DCE8D6");
    } else if (iconNumber === 2) {
      setIcon1Color("#DCE8D6");
      setIcon2Color("#002140");
      setIcon3Color("#DCE8D6");
    } else if (iconNumber === 3) {
      setIcon1Color("#DCE8D6");
      setIcon2Color("#DCE8D6");
      setIcon3Color("#002140");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleIconClick(1)}>
        <View>
          <Icon
            name="tree"
            style={[styles.icon, { color: icon1Color }]}
            size={35}
          ></Icon>
          <Text style={[styles.text, { color: icon1Color }]}>Indoor</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleIconClick(2)}>
        <View>
          <Icon
            name="leaf"
            style={[styles.icon, { color: icon2Color }]}
            size={35}
          ></Icon>
          <Text style={[styles.text, { color: icon2Color }]}>Indoor</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleIconClick(3)}>
        <View>
          <Icon
            name="star"
            style={[styles.icon, { color: icon3Color }]}
            size={35}
          ></Icon>
          <Text style={[styles.text, { color: icon3Color }]}>Indoor</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    left: -5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    width: screenWidth,
    height: 74.77,
    backgroundColor: "#FFF",
    position: "absolute",
    top: 400,
    alignItems: "center",
  },
  svg: {
    marginRight: 0,
  },
  icon: {
    alignItems: "center",
    left: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
});

export default Purchase;
