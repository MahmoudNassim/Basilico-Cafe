import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ReservationPage from "../pages/ReservationPage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";

type Route = {
  name: string;
  path: string;
  element: React.ReactElement;
};

type RouteState = {
  routes: Route[];
};
const initialState: RouteState = {
  routes: [
    { name: "HOME", path: "/", element: <HomePage /> },
    { name: "MENU", path: "/menu", element: <MenuPage /> },
    { name: "RESERVATION", path: "/reservation", element: <ReservationPage /> },
    { name: "SHOP", path: "/shop", element: <ShopPage /> },
    { name: "BLOG", path: "/blog", element: <BlogPage /> },
    { name: "ABOUT", path: "/about", element: <AboutPage /> },
  ],
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {},
});
export default routesSlice.reducer;
