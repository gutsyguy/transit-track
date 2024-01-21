import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = () => {
  return (
    <View
    // style={styles.container}
    >
      <View style={styles.mapContainer}>
        <Text style={styles.searchBar}>Search Bar</Text>
        <Text style={styles.map}>Map</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    backgroundColor: "#61dafb",
  },
  map: {
    // Your existing styles for the title
    height: windowHeight * 0.4,
    borderColor: "#20232a",
    borderWidth: 4,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  searchBar: {
    // Your existing styles for the title
    height: windowHeight * 0.1,
    borderWidth: 4,
    borderRadius: 6,
    borderColor: "#20232a",
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Home;
