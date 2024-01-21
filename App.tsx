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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="settings" component={SettingsScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="sign up" component={SignUp} />
      </Stack.Navigator>
      {/* <Navbar /> */}
    </NavigationContainer>
  );
}

export default App;
