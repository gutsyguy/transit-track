import { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from "react-native";
import { LogIn, SignUp, TransitData, TransitUnit } from "../lib/routes";
import { SettingsPage } from "./settings";
import SelectDropdown from "react-native-select-dropdown";
import { TokenContext } from "../components/Navbar";

const Login = ({
  transitData,
  setSettingsPage,
}: {
  transitData: TransitData;
  setSettingsPage: (next: SettingsPage) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busTransit, setBusTransit] = useState("");

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
      <View>
        <SelectDropdown
          data={transitData.units.map((unit) => unit.short_name)}
          onSelect={(selectedItem, index) => {
            setBusTransit(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          defaultButtonText="Select Transit"
        />
      </View>

      <Button
        title="Log In"
        onPress={async () => {
          try {
            const login = await LogIn({
              email,
              password,
              transit: JSON.stringify(
                transitData.units.find((it) => it.short_name == busTransit),
              ),
            });
            setSettingsPage("Settings");
            // let { setToken } = useContext(TokenContext);
            // setToken(login.token);
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
  center: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
});

export default Login;
