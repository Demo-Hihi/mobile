import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../components/navbar/navbar";
import HomeHero from "../components/hero/homeHero/homehero";
import Ad from "../components/banner/ad/ad";
import Search from "../components/search/ItemSearch/search";

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHero />
      <Ad />
      <Navbar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
