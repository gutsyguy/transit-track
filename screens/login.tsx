import { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from "react-native";
import { LogIn, SignUp, TransitUnit } from "../lib/routes";
import { SettingsPage } from "./settings";
import SelectDropdown from "react-native-select-dropdown";
import { TokenContext } from "../components/Navbar";

const Login = ({
  setSettingsPage,
}: {
  setSettingsPage: (next: SettingsPage) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busTransit, setBusTransit] = useState("");

  const transitNumbers: any[] = ["51A", "51B", "51C"];
  const transitList: TransitUnit[] = [
    {
      id: "1",
      short_name: "51A",
      long_name: "Fruitvale",
      color: "red",
      text_color: "string",
      stop_ids: ["e", "e"],
    },
    {
      id: "2",
      short_name: "51B",
      long_name: "Fruitvole",
      color: "redd",
      text_color: "stringg",
      stop_ids: ["e", "e", "e"],
    },
    {
      id: "3",
      short_name: "51C",
      long_name: "Fruitvule",
      color: "reddd",
      text_color: "stringgg",
      stop_ids: ["e", "e", "e", "e"],
    },
  ];

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
          data={transitNumbers}
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
              transit: transitList.find((it) =>{
                return it.short_name === busTransit
              }),
            });
            setSettingsPage("Settings");
            let { setToken } = useContext(TokenContext);
            setToken(login.token);
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
