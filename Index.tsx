import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { useTailwind } from "tailwind-rn";
import { useTailwind } from "tailwind-rn";
import SignUpTextInput from "./components/TextInput";

export default function Index() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("bg-black")}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <SignUpTextInput />
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
