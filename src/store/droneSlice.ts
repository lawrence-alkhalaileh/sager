import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DroneData, DroneFeature } from "@/types/types";

interface DroneState {
  drones: Record<string, DroneData>;
}

const initialState: DroneState = {
  drones: {},
};

interface DroneUpdatePayload {
  id: string;
  feature: DroneFeature;
  coords: [number, number];
}

const droneSlice = createSlice({
  name: "drones",
  initialState,
  reducers: {
    setDroneData: (state, action: PayloadAction<Record<string, DroneData>>) => {
      state.drones = action.payload;
    },
    updateDrone: (state, action: PayloadAction<DroneUpdatePayload>) => {
      const { id, feature, coords } = action.payload;
      const prevPath = state.drones[id]?.path || [];
      const newPath = [...prevPath, coords];
      if (newPath.length > 100) newPath.shift();

      state.drones[id] = {
        feature,
        path: newPath,
      };
    },
  },
});

export const { setDroneData, updateDrone } = droneSlice.actions;
export default droneSlice.reducer;