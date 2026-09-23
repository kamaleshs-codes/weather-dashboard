import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { headerNavLinks } from "../../data/navigation";
import weatherlyIcon from "../../assets/app_icon/weatherlyIcon.png";
import { Weatherly } from "../common/weatherly";

const NavbarHeader = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <header className='fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 border-border bg-secondary pl-2 pr-6 font-mooli text-lg font-semibold text-main shadow-subtle'>
      <div className='flex lg:justify-between md:gap-3 lg:gap-16'>
        <div className='flex items-center'>
          <button
            type='button'
            onClick={toggleSidebar}
            className='flex p-0.5 mr-3 md:mr-1 items-center justify-center rounded-sm transition-all duration-300 hover:bg-accent hover:text-secondary'>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h3 className='hidden sm:block'>Menu</h3>
        </div>
        <Weatherly />
      </div>
      <nav className='hidden md:block'>
        <ul className='flex gap-8'>
          {headerNavLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className='group flex flex-col items-center'>
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
                        <span className='mt-1 h-0.5 w-full rounded-full bg-accent' />
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
