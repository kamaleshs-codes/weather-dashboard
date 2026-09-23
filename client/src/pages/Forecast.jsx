import { DayForecastCard } from "../components/Forecast/DayForecastCard";
import { FiMapPin } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { getForecast } from "../services/forecastApi";
import { processForecastData } from "../utils/processForecastData";
import { PageHeader } from "../components/Layout/PageHeader";
import { HourlyForecast } from "../components/Forecast/HourlyForecast";
import { processHourlyForecastData } from "../utils/processHourlyForecastData";
import { useLocation } from "../context/LocationContext";
import { useRefresh } from "../context/RefreshContext";

export const Forecast = () => {
  const [forecast, setForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [forecastUpdatedAt, setForecastUpdatedAt] = useState(null);
  const { location } = useLocation();
  const { refreshKey, refreshStatus } = useRefresh();

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getForecast(location.lat, location.lon);
        setForecastUpdatedAt(data.list?.[0]?.dt);
        const processedData = processForecastData(data);
        setForecast(processedData);
        const processedHourlyData = processHourlyForecastData(data);
        setHourlyForecast(processedHourlyData);
        console.log("Processed Forecast:", processedData);
        console.log("Processed Hourly Forecast:", processedHourlyData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForecast();
  }, [location, refreshKey]);
  return (
    <section>
      <PageHeader
        title='Forecast'
        subtitle={`Know Weather Forecast for ${location.name}`}
        refreshStatus={refreshStatus}
      />
      <main className='p-4'>
        <div className='flex flex-col gap-3 rounded-lg bg-card-theme px-5 py-3 md:flex-row md:items-center md:justify-between'>
          <div className='flex items-center gap-2'>
            <span className='text-xl'>
              <FiMapPin />
            </span>
            <div>
              <p className='break-words font-semibold'>
                {location.name}, {location.state}, {location.country}
              </p>
              <p>
                Lat {location.lat.toFixed(2)} N, Lon {location.lon.toFixed(2)} E
              </p>
            </div>
          </div>
          <div className='w-full md:w-auto'>
            <p className='text-sm md:text-base'>
              Updated -{" "}
              {forecastUpdatedAt
                ? new Date(forecastUpdatedAt * 1000).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                : "Loading..."}
            </p>
          </div>
        </div>
        <DayForecastCard forecast={forecast} />
        <HourlyForecast hourlyForecast={hourlyForecast} />
      </main>
    </section>
  );
};
