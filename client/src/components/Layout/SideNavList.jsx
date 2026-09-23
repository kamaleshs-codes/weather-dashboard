import React from "react";
import { NavLink } from "react-router-dom";

export const SideNavList = ({ children, to, icon: Icon, className = "" }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block py-4 border-b border-border-muted ${className} ${
            isActive
              ? "bg-accent-secondary text-primary"
              : "bg-main text-text-muted hover:text-secondary hover:bg-accent"
          }`
        }>
        <div className='flex items-center gap-2 px-3'>
          <Icon className='text-xl' />
          <span>{children}</span>
        </div>
      </NavLink>
    </li>
  );
};
