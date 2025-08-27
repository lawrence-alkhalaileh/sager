import { configureStore } from "@reduxjs/toolkit";
import droneReducer from "./droneSlice";

export const store = configureStore({
  reducer: {
    drones: droneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
