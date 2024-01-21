import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Settings } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import SettingsScreen from "../screens/settings";
import Profile from "./Profile";
import { TransitData, getTransitData } from "../lib/routes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

const Navbar = () => {
  const [token, setToken] = useState(null as string | null);
  const [transitData, setTransitData] = useState(null as TransitData | null);
  useMemo(async () => {
    setTransitData(await getTransitData());
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Maps"
          component={() => <Home transitData={transitData} />}
        />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen
          name="Settings"
          component={() => (
            <SettingsScreen transitData={transitData} token={token} setToken={setToken} />
          )}
        />
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
