import React, { useState } from "react";
import NavbarHeader from "../components/NavbarHeader";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const AppLayout = ({ location, setLocation }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className='cursor-default font-mooli'>
      <NavbarHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className='relative pt-16'>
        <div
          className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-hidden transition-all duration-300 ease-in-out ${
            sidebarOpen ? "w-1/7" : "w-0"
          }`}>
          <Sidebar />
        </div>
        <MainContent
          location={location}
          setLocation={setLocation}
          sidebarOpen={sidebarOpen}
        />
      </div>
    </div>
  );
};

export default AppLayout;
