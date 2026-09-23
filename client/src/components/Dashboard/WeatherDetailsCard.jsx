import React from "react";
import { Card } from "../ui/Card";
import { InnerCard } from "../ui/InnerCard";
import { getWindDirection } from "../../utils/WindDirection";
import { getAirQualityLevel } from "../../utils/AQLevelConvert";
import { dewPointCalculation } from "../../utils/DewPoint";
import { getVisibilityLevel } from "../../utils/visibilityCondition";
import { getCloudinessLevel } from "../../utils/CloudCondition";
import { getPressureLevel } from "../../utils/PressureLevel";
import {
  WiCloudy,
  WiHumidity,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi";
import { FiEye } from "react-icons/fi";
import { LuGauge, LuWind } from "react-icons/lu";
import sunriseIcon from "../../assets/weathersvg/sunrise.svg";
import sunsetIcon from "../../assets/weathersvg/sunset.svg";
import { daylightSeconds } from "../../utils/DayLightSeconds";
import {
  convertTemperature,
  convertWindSpeed,
  mpsToKmh,
  temperatureSymbol,
  windSpeedSymbol,
} from "../../utils/weathersettings";
import { useSettings } from "../../context/SettingsContext";

export const WeatherDetailsCard = ({ weather, dateTime, airQuality }) => {
  const { settings } = useSettings();
  const { sunrise, sunset } = dateTime;
  const windDirection = getWindDirection(weather.wind.deg);
  const visibilityKm = weather.visibility / 1000;
  const visibilityLevel = getVisibilityLevel(visibilityKm);
  const aqi = airQuality.list[0].main.aqi;
  const AQLevel = getAirQualityLevel(aqi);
  const minTemp = Math.round(
    convertTemperature(weather.main.temp_min, settings.temperatureUnit),
  );

  const maxTemp = Math.round(
    convertTemperature(weather.main.temp_max, settings.temperatureUnit),
  );
  const dewPoint = dewPointCalculation(
    weather.main.temp,
    weather.main.humidity,
  );
  const dewPointConvert = Math.round(
    convertTemperature(dewPoint, settings.temperatureUnit),
  );
  const cloudiness = weather.clouds.all;
  const cloudLevel = getCloudinessLevel(cloudiness);
  const pressure = weather.main.pressure;
  const pressureLevel = getPressureLevel(pressure);
  const { daylightDuration } = daylightSeconds(
    weather.sys.sunrise,
    weather.sys.sunset,
  );
  const windSpeedKmph = mpsToKmh(weather.wind.speed);
  const windSpeed = Math.round(
    convertWindSpeed(windSpeedKmph, settings.windSpeedUnit),
  );

  const cards = [
    {
      title: "Wind Status",
      value: `${windSpeed} ${windSpeedSymbol(settings.windSpeedUnit)}`,
      secondary: windDirection,
      icon: WiStrongWind,
    },
    {
      title: "Humidity",
      value: `${weather.main.humidity}%`,
      secondary: `${dewPointConvert}${temperatureSymbol(settings.temperatureUnit)} Dp`,
      icon: WiHumidity,
    },
    {
      title: "Visibility",
      value: `${visibilityKm} Km`,
      secondary: visibilityLevel,
      icon: FiEye,
    },
    {
      title: "Air Quality",
      value: aqi,
      secondary: AQLevel,
      icon: LuWind,
    },
    {
      title: "Pressure",
      value: `${pressure} hPa`,
      secondary: pressureLevel,
      icon: LuGauge,
    },
    {
      title: "Cloudiness",
      value: `${cloudiness}%`,
      secondary: cloudLevel,
      icon: WiCloudy,
    },
  ];

  return (
    <Card>
      <h2 className='text-2xl text-primary font-semibold mb-3'>
        Today's Highlights
      </h2>
      <section className='flex flex-col gap-3 lg:flex-row'>
        <div className='grid w-full grid-cols-2 gap-3 lg:w-[60%] lg:grid-rows-3'>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <InnerCard key={card.title}>
                <h3 className='text-xl font-semibold'>{card.title}</h3>
                <div className='mt-3 flex items-center gap-3 sm:gap-7'>
                  <div>
                    <p>{card.value}</p>
                    <p>{card.secondary}</p>
                  </div>
                  <Icon className='text-3xl'></Icon>
                </div>
              </InnerCard>
            );
          })}
        </div>

        <div className='flex w-full flex-col gap-3 lg:w-[40%]'>
          <InnerCard className='flex-1 py-4'>
            <div className='flex flex-col gap-1'>
              <div className='flex justify-around'>
                <div>
                  <h3 className='text-2xl font-semibold'>Sunrise</h3>
                  <p>{sunrise}</p>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold'>Sunset</h3>
                  <p>{sunset}</p>
                </div>
              </div>
              <div className='flex justify-between items-center gap-7 px-4'>
                <img src={sunriseIcon} alt='' className='w-16 h-16' />
                <img src={sunsetIcon} alt='' className='w-16 h-16' />
              </div>
              <h3 className='text-xl font-semibold'>Daylight</h3>
              <p>{daylightDuration}</p>
            </div>
          </InnerCard>
          <InnerCard className=''>
            <h3 className='text-xl font-semibold'>Temperature Range</h3>
            <div className='flex gap-5 items-center'>
              <div className='mt-2'>
                <p className='text-xl'>Low / High</p>
                <p>
                  {minTemp}
                  {temperatureSymbol(settings.temperatureUnit)}
                  {" - "}
                  {maxTemp}
                  {temperatureSymbol(settings.temperatureUnit)}
                </p>
              </div>
              <WiThermometer className='text-3xl' />
            </div>
          </InnerCard>
        </div>
      </section>
    </Card>
  );
};
