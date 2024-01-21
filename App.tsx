import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
    // @ts-ignore - Temporarily ignore the TypeScript error
    <TailwindProvider utilities={utilities}>
      <Index />
    </TailwindProvider>
  );
};

export default App;
