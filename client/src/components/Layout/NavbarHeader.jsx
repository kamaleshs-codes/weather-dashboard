import React from "react";
import { FiHome, FiInfo, FiMail } from "react-icons/fi";
import { LuCircleHelp } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavbarHeader = ({ sidebarOpen, toggleSidebar }) => {
  const navLinks = [
    {
      label: "Home",
      path: "/",
      icon: FiHome,
    },
    {
      label: "About",
      path: "/about",
      icon: FiInfo,
    },
    {
      label: "Contact",
      path: "/contact",
      icon: FiMail,
    },
    {
      label: "Help",
      path: "/help",
      icon: LuCircleHelp,
    },
  ];
  return (
    <header className='fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 border-border bg-secondary pl-2 pr-6 font-mooli text-lg font-semibold text-main shadow-subtle'>
      <div className='w-1/3 flex justify-between'>
        <div className='flex items-center justify-between gap-2'>
          <button
            type='button'
            onClick={toggleSidebar}
            className='flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 hover:bg-accent hover:text-secondary'>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h3>Menu</h3>
        </div>
        <h1 className='text-3xl text-olive-400'>WEATHERLY</h1>
      </div>
      <nav>
        <ul className='flex gap-8'>
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex flex-col items-end`
                  }>
                  {({ isActive }) => (
                    <>
                      <div
                        className={`flex items-center gap-1 transition-colors duration-300 ${
                          isActive ? "text-accent" : "hover:text-accent"
                        }`}>
                        <Icon />
                        <span>{item.label}</span>
                      </div>
                      {isActive && (
                        <span className='mt-1 h-0.5 w-2/3 rounded-full bg-accent' />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarHeader;
