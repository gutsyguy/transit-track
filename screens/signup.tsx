import { Button, TextInput } from "react-native";
import { SettingsPage } from "./settings";

const SignUp = ({
  setSettingsPage,
}: {
  setSettingsPage: (next: SettingsPage) => void;
}) => {
  return (
    <>
      <TextInput />
      <Button title="Go Back" onPress={() => setSettingsPage("Settings")} />
    </>
  );
};

export default SignUp;
