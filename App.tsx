import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import Index from "./Index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./components/Navbar";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <Index />
      <Navbar />
    </>
  );
};

export default App;
