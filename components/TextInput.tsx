import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import {Sign} from "../lib/routes";

const SignUpTextInput = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [transitCompany, setTransitCompany] = useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
      />
      <TextInput
        style={styles.input}
        onChangeText={setVehicleType}
        value={vehicleType}
        placeholder="Vehicle Type"
      />
      <TextInput
        style={styles.input}
        onChangeText={setTransitCompany}
        value={transitCompany}
        placeholder="Transit Company"
      />
      <Button
        title="Sign Up"
        onPress={async () => {
          try {
            await Sign({ email, name, password, vehicleType, transitCompany});
            console.log("succulent");
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignUpTextInput;
