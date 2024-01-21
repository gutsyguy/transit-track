import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapSection from "../components/Map";
import { getCurrentLocation, requestLocationPermissions } from "../lib/perms";
import { LatLong } from "../lib/latlong";
import { TransitUnit } from "../lib/routes";
import SelectDropdown from 'react-native-select-dropdown'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const transitList: TransitUnit[] = [
  {
    id: "1",
    short_name: "51A",
    long_name: "Fruitvale",
    color: "red",
    text_color: "string",
    stop_ids: ["e", "e"],
  },
  {
    id: "2",
    short_name: "51B",
    long_name: "Fruitvole",
    color: "redd",
    text_color: "stringg",
    stop_ids: ["e", "e", "e"],
  },
  {
    id: "3",
    short_name: "51C",
    long_name: "Fruitvule",
    color: "reddd",
    text_color: "stringgg",
    stop_ids: ["e", "e", "e", "e"],
  },
];

const Home = () => {
  const [cameraPosition, setCameraPosition] = useState([
    36.9972128776262, -122.05174272604341,
  ] as LatLong);

  useEffect(() => {
    (async () => {
      await requestLocationPermissions((location) => {
        setCameraPosition(location);
      });
      setInterval(async () => {
        await getCurrentLocation((location) => setCameraPosition(location));
      }, 3000);
    })();
  }, []);

  return (
    <View
    // style={styles.container}
    >
      <View style={styles.mapContainer}>
        <Text style={styles.searchBar}>Search Bar</Text>
        <MapSection
          bus_positions={[]}
          camera_position={cameraPosition}
          camera_size={[0.0001, 0.0001]}
        />
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
    height: windowHeight * 0.05,
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
