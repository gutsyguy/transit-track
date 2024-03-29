import { LatLong } from "./latlong";

const port = "https://transit-track-backend.onrender.com";
// const port = "https://localhost:8080"

interface Signup {
  email: string;
  name: string;
  password: string;
  vehicleType?: string;
  transitCompany: string;
}

interface LogIn {
  email: string;
  password: string;
  transit: string;
}

export const SignUp = async (req: Signup) => {
  let fetchRes = await fetch(port + "/api/signup", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  let resText = await fetchRes.text();

  return JSON.parse(JSON.stringify(resText));
};

export const LogIn = async (req: LogIn) => {
  let fetchRes = await fetch(port + "/api/login", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  let resText = await fetchRes.text();

  return JSON.parse(JSON.stringify(resText));
};

interface UpdateLocation {
  isAdmin: boolean;
  token: string;
  location: LatLong;
}

export const updateLocation = async (req: UpdateLocation) => {
  let fetchRes = await fetch(port + "/api/update_location", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  let resText = await fetchRes.text();

  return JSON.parse(JSON.stringify(resText));
};

interface CalculateDensity {
  isAdmin: boolean;
  token: string;
  location: LatLong;
}

export const calculateDensity = async (req: CalculateDensity) => {
  let fetchRes = await fetch(port + "/api/calculate_density", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  let resText = await fetchRes.text();

  return JSON.parse(JSON.stringify(resText));
};

export interface TransitData {
  stops: TransitStop[];
  units: TransitUnit[];
}

export interface TransitUnit {
  id: string;
  short_name: string;
  long_name: string;
  color: string;
  text_color: string;
  stop_ids: string[];
}

export interface TransitStop {
  stop_id: string;
  name: string;
  code: number;
  lat: number;
  long: number;
}

export async function getTransitData(): Promise<TransitData> {
  let fetchRes = await fetch(port + "/api/get_transit_data");
  return await fetchRes.json();
}

export interface Transits {
  transits: {
    location: LatLong;
    transit: TransitUnit;
  }[];
}

export async function getTransits(): Promise<Transits> {
  let fetchRes = await fetch(port + "/api/get_transits");
  return await fetchRes.json();
}

interface GetProfile {
  token: string;
}

export async function getProfile(req: GetProfile): Promise<{
  email: string;
  name: string;
  transitCompany: string;
}> {
  let fetchRes = await fetch(port + "/api/get_profile", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  let resText = await fetchRes.text();

  return JSON.parse(JSON.stringify(resText));
}

export interface GetAdminLocationWithTransit {
  transit: TransitUnit;
}

export async function getAdminLocationWithTransit(
  req: GetAdminLocationWithTransit,
): Promise<{
  locations: LatLong[];
}> {
  let fetchRes = await fetch(port + "/api/get_admin_location_with_transit", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  let resText = await fetchRes.text();

  return JSON.parse(JSON.stringify(resText));
}
