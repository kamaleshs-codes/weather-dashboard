import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Forecast } from "../pages/Forecast";
import { Settings } from "../pages/Settings";
import { WeatherMap } from "../pages/WeatherMap";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Help } from "../pages/Help";

export const AppRoutes = ({ sidebarOpen }) => {
  return (
    <Routes>
      <Route path='/' element={<Home sidebarOpen={sidebarOpen} />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/help' element={<Help />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/forecast' element={<Forecast />} />
      <Route path='/weathermap' element={<WeatherMap />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
};
