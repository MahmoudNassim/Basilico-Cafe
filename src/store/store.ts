import { configureStore } from "@reduxjs/toolkit";
import routesReducer from "../features/routesSlice";
import productsReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    routes:routesReducer,
    products:productsReducer,
  },
});

