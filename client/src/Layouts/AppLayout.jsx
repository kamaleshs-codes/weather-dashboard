import React, { useState } from "react";
import NavbarHeader from "../components/Layout/NavbarHeader";
import Sidebar from "../components/Layout/Sidebar";
import MainContent from "../components/Layout/MainContent";
import { headerNavLinks, sidebarNavLinks } from "../data/navigation";
import { NavLink } from "react-router-dom";

const AppLayout = ({ location, setLocation }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const mobileNavLinks = [...headerNavLinks, ...sidebarNavLinks];

  return (
    <div className='cursor-default font-mooli'>
      <NavbarHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className='relative pt-16'>
        <div
          className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-hidden bg-secondary transition-all duration-300 ease-in-out ${
            sidebarOpen ? "w-1/7 md:w-64 lg:w-1/7" : "w-0"
          }`}>
          <Sidebar />
        </div>
        <div
          className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-full bg-secondary transition-all duration-300 ease-in-out md:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <nav className='flex h-full flex-col overflow-y-auto px-6 py-6'>
            <ul className='flex flex-col gap-2'>
              {mobileNavLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={toggleSidebar}
                      className='flex items-center gap-4 rounded-lg px-4 py-3 text-lg font-semibold text-main transition-all duration-300 hover:bg-accent hover:text-secondary'>
                      <Icon size={22} />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
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
