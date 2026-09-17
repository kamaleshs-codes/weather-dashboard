import React from "react";
import DashboardSearch from "./DashboardSearch";
import { PageHeader } from "./PageHeader";
import { useRefresh } from "../context/RefreshContext";
import { LuLogIn } from "react-icons/lu";

const DashboardHeader = ({ onSearch, weatherAlerts }) => {
  const { refreshStatus } = useRefresh();
  return (
    <div className='flex justify-between'>
      <div className='flex-1'>
        <PageHeader
          title='Hi, Kamalesh! Good Morning,'
          subtitle="Here's your Weather Overview"
          refreshStatus={refreshStatus}
          weatherAlerts={weatherAlerts}
          showWeatherAlerts>
          <DashboardSearch onSearch={onSearch} />
        </PageHeader>
      </div>
      <div className='flex items-center justify-center gap-2 bg-secondary text-main cursor-pointer hover:bg-accent hover:text-secondary w-30 p-3 border-b-2 border-border-muted border-l-2'>
        <p className='font-semibold'>Login</p>
        <LuLogIn className='text-xl' />
      </div>
    </div>
  );
};

export default DashboardHeader;
