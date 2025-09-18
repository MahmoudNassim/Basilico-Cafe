import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ReservationPage from "../pages/ReservationPage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";

type Route = {
  name: string,
  path: string,
  element: React.ReactElement
}

type RouteState = {
  routes: Route[]
}
const initialState: RouteState = {
  routes: [
    { name: "Home", path: "/", element: <HomePage /> },
    { name: "Menu", path: "/menu", element: <MenuPage /> },
    { name: "Reservation", path: "/reservation", element: <ReservationPage /> },
    { name: "Shop", path: "/shop", element: <ShopPage /> },
    { name: "Blog", path: "/blog", element: <BlogPage /> },
    { name: "About", path: "/about", element: <AboutPage /> },
  ],
}

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {}
})
export default routesSlice.reducer 