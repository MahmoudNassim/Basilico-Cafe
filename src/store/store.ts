import { configureStore } from "@reduxjs/toolkit";
import routesReducer from "../features/routesSlice";

export const store = configureStore({
  reducer: {
    routes:routesReducer
  },
});

