import { Card } from "../ui/Card";
import { FiMapPin } from "react-icons/fi";
import { useSettings } from "../../context/SettingsContext";
import { convertTemperature } from "../../utils/weathersettings";
import { temperatureSymbol } from "../../utils/weathersettings";

export const WeatherCard = ({ weather, dateTime }) => {
  const { day, date, time } = dateTime;
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const { settings } = useSettings();

  return (
    <Card>
      <h2 className='text-2xl font-semibold mb-3'>Current Weather</h2>
      <section className='bg-inner-card rounded-xl shadow-subtle'>
        <article className='px-4 py-2'>
          <p className='flex gap-1 w-fit max-w-full text-center bg-main hover:bg-accent hover:text-secondary text-text-muted border border-border rounded-full px-4 py-2 mt-1 font-semibold'>
            <FiMapPin className='text-lg' /> <span>{weather.name}</span>
          </p>
          <div className='flex flex-col gap-4 mt-2 sm:flex-row sm:justify-around'>
            <div className='flex flex-col mt-3 gap-2 lg:items-start items-center'>
              <div>
                <h3 className='font-semibold text-lg'>{day}</h3>
                <p>{date}</p>
                <p className='text-sm'>{time}</p>
              </div>
              <img
                src={iconUrl}
                alt={weather.weather[0].description}
                className='lg:w-30 lg:h-30'
              />
            </div>
            <div className='flex flex-col justify-around lg:p-0 p-7'>
              <p className='text-4xl'>
                {Math.round(
                  convertTemperature(
                    weather.main.temp,
                    settings.temperatureUnit,
                  ),
                )}
                <span className='text-3xl'>
                  {temperatureSymbol(settings.temperatureUnit)}
                </span>
              </p>
              <div>
                <p className='font-semibold'>{weather.weather[0].main}</p>
                <p className='text-sm'>
                  Feels like{" "}
                  {Math.round(
                    convertTemperature(
                      weather.main.feels_like,
                      settings.temperatureUnit,
                    ),
                  )}
                  <span>{temperatureSymbol(settings.temperatureUnit)}</span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Card>
  );
};
