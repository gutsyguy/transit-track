import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapSection from "../components/Map";
import { getCurrentLocation, requestLocationPermissions } from "../lib/perms";
import { LatLong } from "../lib/latlong";
import { TransitData, TransitUnit } from "../lib/routes";
import SearchableDropdown from "react-native-searchable-dropdown";
import { idText } from "typescript";
import SelectDropdown from "react-native-select-dropdown";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = ({ transitData }: { transitData: TransitData }) => {
  const [cameraPosition, setCameraPosition] = useState([
    36.9972128776262, -122.05174272604341,
  ] as LatLong);

  const [selectedTranitUnit, setSelectedTransitUnit] = useState("");
  const [busTransit, setBusTransit] = useState("");

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
        <View>

        <SelectDropdown
          data={
            transitData ? transitData.units.map((unit) => unit.short_name) : []
          }
          onSelect={(selectedItem, index) => {
            setBusTransit(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          defaultButtonText="Select Transit"
        />
        </View>
        <MapSection
          transitData={transitData}
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
