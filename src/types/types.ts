export interface DroneProperties {
  id: string;
  [key: string]: any;
}

export interface DroneFeature {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: DroneProperties;
}

export interface RouteFeature {
  type: "Feature";
  properties: {
    id: string;
  };
  geometry: {
    type: "LineString";
    coordinates: [number, number][];
  };
}

export interface DroneData {
  feature: DroneFeature;
  path: [number, number][];
}