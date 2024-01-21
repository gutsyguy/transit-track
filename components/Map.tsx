import MapView, { Marker } from "react-native-maps";
import { LatLong } from "../lib/latlong";

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
      style={{
        width: "100%",
        height: "100%",
      }}
      initialRegion={{
        latitude: camera_position[0],
        longitude: camera_position[1],
        latitudeDelta: camera_size[0],
        longitudeDelta: camera_size[1],
      }}
      provider="google"
    >
      <Marker
        title="You"
        coordinate={{
          latitude: camera_position[0],
          longitude: camera_position[1],
        }}
      />
      {markers}
    </MapView>
  );
}
