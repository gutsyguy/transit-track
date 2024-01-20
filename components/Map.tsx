import MapView, { Marker } from "react-native-maps";
import { styles } from "../App";

export type LatLong = [number, number];

interface MapSectionProps {
  bus_positions: LatLong[];
  camera_position: LatLong;
  camera_size: LatLong;
}

export default function MapSection({
  bus_positions,
  camera_position,
  camera_size,
}: MapSectionProps) {
  const markers = bus_positions.map((point) => {
    return <Marker coordinate={{ latitude: point[0], longitude: point[1] }} />;
  });

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: camera_position[0],
        longitude: camera_position[1],
        latitudeDelta: camera_size[0],
        longitudeDelta: camera_size[1],
      }}
      provider="google"
    >
      {markers}
    </MapView>
  );
}
