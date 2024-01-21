import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./components/Navbar";
import { View } from "react-native";
import Home from "./screens/home";
import SettingsScreen from "./screens/settings";
import Login from "./screens/login";
import SignUp from "./screens/signup";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
