import React from "react";
import { View, Text, StyleSheet, Dimensions, Settings } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import SettingsScreen from "../screens/settings";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Maps" component={Home} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default Navbar;
