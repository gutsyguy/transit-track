import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import Login from "./login";
import SignUpTextInput from "../components/TextInput";
import SignUp from "./signup";
import { TransitData } from "../lib/routes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export type SettingsPage = "Settings" | "Login" | "Signup";

const SettingsScreen = ({
  transitData,
  token,
  setToken,
}: {
  transitData: TransitData;
  token: string;
  setToken: (token: string) => void;
}) => {
  let [settingsPage, setSettingsPage] = useState("Settings");

  let render = <></>;
  switch (settingsPage) {
    case "Settings":
      render = (
        <View style={styles.container}>
          <Text>Settings!</Text>
          <Button title="Sign Up" onPress={() => setSettingsPage("Signup")} />
          <Button title="Log In" onPress={() => setSettingsPage("Login")} />
        </View>
      );
      break;
    case "Login":
      render = (
        <Login
          setSettingsPage={setSettingsPage}
          transitData={transitData}
          setToken={setToken}
        />
      );
      break;
    case "Signup":
      render = <SignUp setSettingsPage={setSettingsPage} />;
      break;
  }

  return render;
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

export default SettingsScreen;
