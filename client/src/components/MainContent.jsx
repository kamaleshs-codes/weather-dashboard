import React from "react";
import { AppRoutes } from "../routes/AppRoutes";

const MainContent = ({ location, setLocation, sidebarOpen }) => {
  return (
    <main
      className={`min-w-0 bg-main text-text-muted transition-all duration-300 ease-in-out ${
        sidebarOpen ? "ml-[14.2857%]" : "ml-0"
      }`}>
      <AppRoutes
        location={location}
        setLocation={setLocation}
        sidebarOpen={sidebarOpen}
      />
    </main>
  );
};

export default MainContent;
