import MapView, { Marker } from "react-native-maps";
import { LatLong } from "../lib/latlong";
import { useEffect, useMemo, useState } from "react";
import { TransitData, getTransitData } from "../lib/routes";

interface MapSectionProps {
  transitData: TransitData;
  bus_positions: LatLong[];
  camera_position: LatLong;
  camera_size: LatLong;
}

export default function MapSection({
  transitData,
  bus_positions,
  camera_position,
  camera_size,
}: MapSectionProps) {
  const markers = bus_positions.map((point) => {
    return <Marker coordinate={{ latitude: point[0], longitude: point[1] }} />;
  });

  let stops = transitData
    ? transitData.stops.map((stop) => {
        return (
          <Marker
            coordinate={{
              latitude: stop.lat,
              longitude: stop.long,
            }}
            key={stop.stop_id}
            focusable={true}
            description={stop.name}
            pinColor="#FFFFFF"
          />
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
