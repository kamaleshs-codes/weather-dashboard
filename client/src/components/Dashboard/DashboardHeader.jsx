import React from "react";
import DashboardSearch from "./DashboardSearch";
import { PageHeader } from "../Layout/PageHeader";
import { useRefresh } from "../../context/RefreshContext";
import { LuLogIn } from "react-icons/lu";

const DashboardHeader = ({ onSearch, weatherAlerts }) => {
  const { refreshStatus } = useRefresh();
  return (
    <div className='flex flex-col md:flex-row md:justify-between'>
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
      <div className='flex w-full cursor-pointer items-center justify-center gap-2 border-b-2 border-border-muted bg-secondary p-3 text-main hover:bg-accent hover:text-secondary md:w-30 md:border-l-2'>
        <p className='font-semibold'>Login</p>
        <LuLogIn className='text-xl' />
      </div>
    </div>
  );
};

export default DashboardHeader;
