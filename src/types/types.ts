import type { Point, LineString } from "geojson";

export interface DroneProperties {
  id: string;
  [key: string]: string | number | boolean | null;
}

export interface DroneFeature {
  type: "Feature";
  geometry: Point;
  properties: DroneProperties;
}

export interface RouteFeature {
  type: "Feature";
  properties: {
    id: string;
  };
  geometry: LineString;
}

export interface DroneData {
  feature: DroneFeature;
  path: [number, number][];
}