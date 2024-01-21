import { Button, TextInput, SafeAreaView, StyleSheet } from "react-native";
import { SettingsPage } from "./settings";
import SignUpTextInput from "../components/TextInput";
import { useState } from "react";

const SignUp = ({
  setSettingsPage,
}: {
  setSettingsPage: (next: SettingsPage) => void;
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [transitCompany, setTransitCompany] = useState("");

  return (
    <>
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
              SignUp({
                // @ts-ignore:
                email,
                name,
                password,
                vehicleType,
                transitCompany,
              });
              setSettingsPage("Settings");
            } catch (error) {
              console.error(error);
            }
          }}
        />
      </SafeAreaView>
      <Button title="Go Back" onPress={() => setSettingsPage("Settings")} />
    </>
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

export default SignUp;
