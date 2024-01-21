import React from "react";
import { Button } from "react-native";
import { SettingsPage } from "./settings";

const Login = ({
  setSettingsPage,
}: {
  setSettingsPage: (next: SettingsPage) => void;
}) => {
  return (
    <>
      <Button title="Go Back" onPress={() => setSettingsPage("Settings")} />
    </>
  );
};

export default Login;
