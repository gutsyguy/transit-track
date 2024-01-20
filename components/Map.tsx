import MapView from "react-native-maps";
import { View } from "react-native";
import { styles } from "../App";

export default function MapSection() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider="google" />
    </View>
  );
}
