import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "../components/navbar/navbar";
import HomeHero from "../components/hero/homeHero/homehero";
import Ad from "../components/banner/ad/ad";
import PropTypes from "prop-types";
import Purchase from "../components/scroll/purchase/purchase";
import List from "../components/list/purchase/list";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[2]}>
        <HomeHero />
        <Ad />
        <Purchase />
        <List />
        <Navbar />
      </ScrollView>
    </View>
  );
};

Home.propTypes = {
  item: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired, // Define the expected data type (string) and mark it as required
    // Add other PropTypes for item properties if needed
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    // You can add padding or other styles here as needed
  },
});

export default Home;
