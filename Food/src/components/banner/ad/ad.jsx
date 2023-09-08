import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel"; // Import Pagination
import PropTypes from "prop-types";
import Women from "../../../../assets/png/ad/women.png";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Ad = () => {
  const carouselRef = useRef(null); // Create a ref to control the carousel
  const [activeSlide, setActiveSlide] = React.useState(0); // Track the active slide index

  const data = [
    {
      id: 1,
      text: "Exclusive Offer",
      backgroundColor: "#F9D7BD",
    },
    {
      id: 1,
      text: "Slide 3",
      backgroundColor: "#F9D7BD",
    },
    {
      id: 1,
      text: "Slide 4",
      backgroundColor: "#F9D7BD",
    },
    {
      id: 1,
      text: "Slide 5",
      backgroundColor: "#F9D7BD",
    },
    {
      id: 2,
      text: "Slide 2",
      backgroundColor: "#FFA07A",
    },
    // Add more slides as needed
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.ad, { backgroundColor: item.backgroundColor }]}>
      <Image source={Women} style={styles.img}></Image>
      <Text style={styles.text}>Exclusive</Text>
      <Text style={styles.text}>Offer</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 50}
        layout="default"
        loop
        onSnapToItem={(index) => {
          // Handle any logic when the carousel snaps to an item
          console.log(`Snapped to item ${index}`);
          setActiveSlide(index); // Update the active slide index
        }}
      />
      <Pagination // Add pagination dots
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

Ad.propTypes = {
  item: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired, // Define the expected data type (string) and mark it as required
    // Add other PropTypes for item properties if needed
  }),
};

const styles = StyleSheet.create({
  container: {
    right: 25,
    position: "absolute",
    height: 600,
    top: -140,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    top: 0,
    bottom: 10,
    height: 220,
    width: 190,
    left: 0,
    position: "absolute",
  },
  ad: {
    marginTop: 260,
    width: screenWidth - 52,
    height: 220,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    left: 21,
    position: "relative",
  },
  text: {
    bottom: 0,
    fontSize: 30, // Adjust the font size as needed
    left: 90,
    fontWeight: "bold",
    color: "#002140",
  },
  paginationContainer: {
    bottom: 0,
    top: -60,
    left: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
    backgroundColor: "#0d986a",
  },
  paginationInactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
    backgroundColor: "#ccc", // Color for inactive dots
  },
});

export default Ad;
