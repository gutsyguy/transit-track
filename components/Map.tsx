import MapView, { Marker } from "react-native-maps";
import { LatLong } from "../lib/latlong";
import {
  TransitData,
  TransitUnit,
  getAdminLocationWithTransit,
} from "../lib/routes";
import { View } from "react-native";
import { useEffect, useState } from "react";

interface MapSectionProps {
  selectedTransit: TransitUnit | null;
  transitData: TransitData;
  camera_position: LatLong;
  camera_size: LatLong;
}

export default function MapSection({
  transitData,
  camera_position,
  camera_size,
  selectedTransit,
}: MapSectionProps) {
  const [busPositions, setBusPositions] = useState([]);
  useEffect(() => {
    setInterval(async () => {
      if (selectedTransit) {
        let res = await getAdminLocationWithTransit({
          transit: selectedTransit,
        });
        console.log(res);
        setBusPositions(res.locations);
      } else {
        setBusPositions([]);
      }
    }, 3000);
  }, []);
  const markers = busPositions.map((point) => {
    return <Marker coordinate={{ latitude: point[0], longitude: point[1] }} />;
  });

  let stops = transitData
    ? transitData.stops.map((stop) => {
        return (selectedTransit &&
          selectedTransit.stop_ids.includes(stop.stop_id)) ||
          !selectedTransit ? (
          <Marker
            coordinate={{
              latitude: stop.lat,
              longitude: stop.long,
            }}
            key={stop.stop_id}
            focusable={true}
            description={stop.name}
            pinColor={"orange"}
          />
        ) : (
          <View key={stop.stop_id}></View>
        );
      })
    : [];

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
      {stops}
    </MapView>
  );
}
