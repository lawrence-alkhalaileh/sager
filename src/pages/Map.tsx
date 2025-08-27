import { useEffect, useState, useMemo } from "react";
import Map, { Source, Layer, Marker } from "react-map-gl/mapbox";
import io from "socket.io-client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "@/store/store";
import { updateDrone } from "@/store/droneSlice";
import type {
  DroneFeature,
  DroneProperties,
  RouteFeature,
} from "@/types/types";

const MAPBOX_TOKEN = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;

const MapComponent = () => {
  const [viewState, setViewState] = useState({
    longitude: 35.93,
    latitude: 31.94,
    zoom: 11,
  });

  const drones = useSelector((state: RootState) => state.drones.drones);
  const dispatch = useDispatch();

  const dronesGeoJSON = useMemo((): GeoJSON.FeatureCollection<
    GeoJSON.Point,
    DroneProperties
  > => {
    const features: DroneFeature[] = Object.values(drones).map(
      (d) => d.feature
    );
    return {
      type: "FeatureCollection",
      features,
    };
  }, [drones]);

  const routesGeoJSON =
    useMemo((): GeoJSON.FeatureCollection<GeoJSON.LineString> => {
      const features: RouteFeature[] = Object.entries(drones).map(
        ([id, d]) => ({
          type: "Feature",
          properties: { id },
          geometry: {
            type: "LineString",
            coordinates: d.path,
          },
        })
      );
      return {
        type: "FeatureCollection",
        features,
      };
    }, [drones]);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_SERVER_API);

    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("message", (data: { features: DroneFeature[] }) => {
      if (data && data.features) {
        data.features.forEach((feature: DroneFeature) => {
          const id = feature.properties.id;
          const coords = feature.geometry.coordinates;

          if (
            Array.isArray(coords) &&
            coords.length >= 2 &&
            typeof coords[0] === "number" &&
            typeof coords[1] === "number"
          ) {
            dispatch(
              updateDrone({
                id,
                feature,
                coords: [coords[0], coords[1]] as [number, number],
              })
            );
          } else {
            console.warn(`Invalid coordinates for drone ${id}:`, coords);
          }
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {dronesGeoJSON.features.map((feature) => (
        <Marker
          key={feature.properties.id}
          longitude={feature.geometry.coordinates[0]}
          latitude={feature.geometry.coordinates[1]}
        >
          <img src="/Icon/drone.svg" alt="Drone" className="w-5 h-5" />
        </Marker>
      ))}
      <Source id="routes" type="geojson" data={routesGeoJSON}>
        <Layer
          id="routes-layer"
          type="line"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "#0000FF",
            "line-width": 3,
            "line-opacity": 0.8,
          }}
        />
      </Source>
    </Map>
  );
};

export default MapComponent;
