import { SideNavList } from "./SideNavList";
import weatherImg from "../assets/weather_imgheader.png";
import { LuCloudSunRain, LuLayoutDashboard, LuMap, LuSettings } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className='sticky top-0 h-screen w-1/7 flex flex-col items-center bg-secondary text-main border-r-2 border-border'>
        <img
          src={weatherImg}
          alt='Weather Dashboard'
          className='w-full h-52 object-cover object-top'
        />
      <nav className='w-full text-center bg-secondary'>
        <ul className='flex flex-col bg-primary text-text-muted text-xl font-semibold'>
          <SideNavList to='/dashboard' icon={LuLayoutDashboard}>
            Dashboard
          </SideNavList>
          <SideNavList to='/forecast' icon={LuCloudSunRain}>
            Forecast
          </SideNavList>
          <SideNavList to='/weathermap' icon={LuMap} className="text-lg">
            Weather Map
          </SideNavList>
          <SideNavList to='/settings' icon={LuSettings}>
            Settings
          </SideNavList>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
