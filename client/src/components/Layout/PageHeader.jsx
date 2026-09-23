import React, { useState } from "react";
import { LuTriangleAlert, LuChevronDown } from "react-icons/lu";

export const PageHeader = ({
  title,
  subtitle,
  children,
  refreshStatus,
  weatherAlerts = [],
  showWeatherAlerts = false,
}) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  return (
    <header className='flex flex-col gap-4 px-5 py-3 bg-primary border-b-2 border-border-muted md:flex-row md:items-center md:gap-8'>
      <div className='w-full md:w-auto'>
        <h1 className='lg:text-xl text-md font-bold'>{title}</h1>
        <p className='lg:text-lg text-md'>{subtitle}</p>
      </div>
      <div className='w-full md:flex-1'>
        {children && <div>{children}</div>}
      </div>
      <div className='flex w-full flex-col items-start gap-2 md:w-auto md:items-end'>
        {refreshStatus && (
          <div className='text-sm text-text-muted whitespace-nowrap'>
            <span className='font-semibold'>Auto Refresh</span> -{" "}
            {refreshStatus}
          </div>
        )}

        {showWeatherAlerts && weatherAlerts !== null && (
          <div className='relative'>
            <button
              type='button'
              onClick={() => {
                if (weatherAlerts.length > 0) {
                  setIsAlertOpen((prev) => !prev);
                }
              }}
              className='flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-accent-secondary transition-colors'>
              {weatherAlerts.length > 0 && (
                <LuTriangleAlert className='w-5 h-5 text-yellow-700' />
              )}
              <span>
                {weatherAlerts.length > 0
                  ? `Weather Alert${
                      weatherAlerts.length > 1
                        ? ` (${weatherAlerts.length})`
                        : ""
                    }`
                  : "No weather alerts"}
              </span>
              {weatherAlerts.length > 0 && (
                <LuChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isAlertOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
            {isAlertOpen && weatherAlerts.length > 0 && (
              <div className='absolute left-0 right-auto top-full z-50 mt-3 w-[calc(100vw-2rem)] max-w-80 rounded-lg border-2 border-border-muted bg-main shadow-drop md:left-auto md:right-0'>
                <div className='px-4 py-3 border-b border-border-muted'>
                  <h2 className='font-semibold text-text-muted'>
                    Weather Alerts
                  </h2>
                </div>
                <div className='p-3 flex flex-col gap-2'>
                  {weatherAlerts.map((alert, index) => (
                    <div
                      key={`${alert.type}-${index}`}
                      className='flex gap-2 p-3 rounded-md bg-secondary text-primary'>
                      <LuTriangleAlert className='w-5 h-5 shrink-0 mt-0.5' />
                      <p className='text-sm leading-5'>{alert.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
