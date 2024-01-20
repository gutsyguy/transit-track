import * as Location from "expo-location";
import { LatLong } from "./latlong";

export type PermissionCallback = (location: LatLong) => void;

export const requestLocationPermissions = async (
  callback: PermissionCallback,
) => {
  console.log("asking");
  const { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === "granted") {
    console.log("foreground granted");
    let position = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    callback([position.coords.latitude, position.coords.longitude]);
  }
};
