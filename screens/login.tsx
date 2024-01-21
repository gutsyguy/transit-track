import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { LogIn, SignUp } from "../lib/routes";
import { SettingsPage } from "./settings";

const Login = ({
  setSettingsPage,
}: {
  setSettingsPage: (next: SettingsPage) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        onChangeText={setPassword}
        value={password}
        placeholder="password"
      />
      <Button
        title="Log In"
        onPress={async () => {
          try {
            const login = await LogIn({
              email,
              password,
            });
            setSettingsPage("Settings");
            console.log(login);
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

export default Login;
