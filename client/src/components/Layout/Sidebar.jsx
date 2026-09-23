import React from "react";
import weatherImg from "../../assets/weatherImg.png";
import { SideNavList } from "../Layout/SideNavList";
import { sidebarNavLinks } from "../../data/navigation";

const Sidebar = () => {
  return (
    <aside className='flex h-screen w-full flex-col items-center border-r-2 border-border bg-surface text-primary'>
      <img
        src={weatherImg}
        alt='Weather Dashboard'
        className='hidden md:block h-52 w-full object-cover object-top'
      />
      <nav className='w-full bg-secondary text-center'>
        <ul className='flex flex-col bg-main text-xl font-semibold text-text-muted'>
          {sidebarNavLinks.map((item) => {
            const Icon = item.icon;
            return (
              <SideNavList
                key={item.path}
                to={item.path}
                icon={Icon}
                className={item.label === "Weather Map" ? "text-lg" : ""}>
                {item.label}
              </SideNavList>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
