import { FiHome, FiInfo, FiMail } from "react-icons/fi";
import {
  LuCircleHelp,
  LuCloudSunRain,
  LuLayoutDashboard,
  LuMap,
  LuSettings,
} from "react-icons/lu";

export const headerNavLinks = [
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

export const sidebarNavLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    label: "Forecast",
    path: "/forecast",
    icon: LuCloudSunRain,
  },
  {
    label: "Weather Map",
    path: "/weathermap",
    icon: LuMap,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: LuSettings,
  },
];
