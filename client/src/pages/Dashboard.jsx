import React, { useState, useEffect } from "react";
import { getWeather } from "../services/weatherapi";
import { WeatherCard } from "../components/Dashboard/WeatherCard";
import { WeatherDetailsCard } from "../components/Dashboard/WeatherDetailsCard";
import { getLocalDateTime } from "../utils/DateTimeFormat";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import { getAirQuality } from "../services/airQualityApi";
import { useLocation } from "../context/LocationContext";
import { useRefresh } from "../context/RefreshContext";
import { DailySummary } from "../components/Dashboard/DailySummary";
import { getDailySummary } from "../services/dailySummaryApi";
import {
  getTodaySummary,
  getWeatherCondition,
  getTemperatureRange,
  getRainPossibility,
  getWindCondition,
  generateDailySummary,
} from "../utils/dailySummary";
import { getWeatherAlerts } from "../utils/weatherAlerts";
import { useSettings } from "../context/SettingsContext";

export const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [dailySummary, setDailySummary] = useState(null);
  const [weatherAlerts, setWeatherAlerts] = useState([]);

  const { location, setLocation } = useLocation();
  const { refreshKey } = useRefresh();
  const { settings } = useSettings();

  const weatherAlert = settings.weatherAlerts;
  const dailySummaryEnabled = settings.dailySummary;

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeather(location.lat, location.lon);
      setWeather(weatherData);
      console.log("Selected Location:", location);
      console.log("Weather API Data:", weatherData);
      console.log("Weather Condition:", weatherData?.weather);

      if (weatherAlert) {
        const alerts = getWeatherAlerts(weatherData);
        setWeatherAlerts(alerts);

        console.log("Weather Alerts:", alerts);
      } else {
        setWeatherAlerts(null);
      }

      const aqData = await getAirQuality(
        weatherData.coord.lat,
        weatherData.coord.lon,
      );
      setAirQuality(aqData);

      if (dailySummaryEnabled) {
        const dailySummaryData = await getDailySummary(
          location.lat,
          location.lon,
        );

        const todaySummary = getTodaySummary(dailySummaryData);
        const weatherCondition = getWeatherCondition(todaySummary);
        const temperatureRange = getTemperatureRange(todaySummary);
        const rainPossibility = getRainPossibility(todaySummary);
        const windCondition = getWindCondition(todaySummary);

        const summaryText = generateDailySummary(
          weatherCondition,
          temperatureRange,
          rainPossibility,
          windCondition,
        );
        setDailySummary(summaryText);
      } else {
        setDailySummary(null);
      }
    };
    fetchWeather();
  }, [location, refreshKey, weatherAlert, dailySummaryEnabled]);

  if (!weather || !airQuality) {
    return (
      <div>
        <DashboardHeader onSearch={setLocation} weatherAlerts={weatherAlerts} />
        <p className='text-center mt-3'>Loading...</p>
      </div>
    );
  }

  const dateTime = getLocalDateTime(weather);

  return (
    <div>
      <DashboardHeader onSearch={setLocation} weatherAlerts={weatherAlerts} />
      <section className='flex flex-col gap-7 p-4 lg:flex-row'>
        <div className='w-full lg:w-1/3'>
          <div className='flex flex-col'>
            <WeatherCard weather={weather} dateTime={dateTime} />
            {dailySummaryEnabled && <DailySummary summary={dailySummary} />}
          </div>
        </div>
        <div className='flex-1'>
          <WeatherDetailsCard
            weather={weather}
            dateTime={dateTime}
            airQuality={airQuality}
          />
        </div>
      </section>
    </div>
  );
};
