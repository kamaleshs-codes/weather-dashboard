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
    <header className='flex gap-8 items-center px-5 py-3 bg-primary border-b-2 border-border-muted'>
      <div>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='text-lg'>{subtitle}</p>
      </div>

      <div className='flex-1'>{children && <div>{children}</div>}</div>

      <div className='flex flex-col gap-2 items-end'>
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
              <div className='absolute right-0 top-full mt-3 w-80 bg-main border-2 border-border-muted rounded-lg shadow-drop z-50'>
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
