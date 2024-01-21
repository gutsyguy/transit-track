import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./components/Navbar";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
