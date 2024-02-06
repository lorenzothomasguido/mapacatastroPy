"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl/dist/mapbox-gl.css";
import React from 'react';
import './globals.css';
import MapaCatastro from "./Map/Map";
import Tools from "@/components/Tools/Tools";
import MapViews from "@/components/Tools/MapViews";
import NavDrawer from "@/components/NavbarUI/NavDrawer";

import { Provider } from 'react-redux';
import store from "@/store/store";



function Home() {

  return (
    <Provider store={store}>
      <NavDrawer></NavDrawer>
      <MapaCatastro></MapaCatastro>
      <MapViews></MapViews>
      <Tools></Tools>   
     </Provider>
  )
  }
export default Home