import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useLocation } from "../context/LocationContext";
import { Card } from "../components/ui/Card";
import { PageHeader } from "../components/Layout/PageHeader";
import { useSettings } from "../context/SettingsContext";

const MapUpdater = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, 8);
  }, [position, map]);
  return null;
};

export const WeatherMap = () => {
  const { location } = useLocation();
  const { settings } = useSettings();
  const selectedPosition = [location.lat, location.lon];
  const [activeLayer, setActiveLayer] = useState(settings.defaultMapLayer);
  const layerNames = {
    temperature: "temp_new",
    precipitation: "precipitation_new",
    clouds: "clouds_new",
    wind: "wind_new",
  };

  return (
    <section className='h-full'>
      <PageHeader
        title='Weather Map'
        subtitle='Explore weather conditions on the map'
      />
      <main className='p-4'>
        <div className='w-200 mx-auto'>
          <Card className='px-10 py-6'>
            <h2 className='text-2xl font-semibold mb-4'>Weather Overview</h2>
            <div className='relative mx-auto h-[480px] overflow-hidden rounded-xl'>
              <MapContainer
                center={selectedPosition}
                zoom={8}
                className='h-full w-full'>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {activeLayer !== "none" && (
                  <TileLayer
                    key={activeLayer}
                    url={`https://tile.openweathermap.org/map/${layerNames[activeLayer]}/{z}/{x}/{y}.png?appid=${
                      import.meta.env.VITE_WEATHER_API_KEY
                    }`}
                  />
                )}
                <MapUpdater position={selectedPosition} />
                <Marker position={selectedPosition}>
                  <Popup>
                    <strong>{location.name}</strong>
                    <br />
                    {location.state}, {location.country}
                  </Popup>
                </Marker>
              </MapContainer>
              <div className='absolute top-4 right-4 z-[1000] rounded-xl bg-main/65 p-3 shadow-lg'>
                <h3 className='mb-2 text-md font-semibold text-text-muted'>
                  Weather Layers
                </h3>
                <div className='flex flex-col gap-2'>
                  <button
                    onClick={() => setActiveLayer("none")}
                    className={`rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                      activeLayer === "none"
                        ? "bg-secondary text-main"
                        : "text-secondary hover:bg-accent"
                    }`}>
                    🗺️ Base Map
                  </button>
                  <button
                    onClick={() => setActiveLayer("temperature")}
                    className={`rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                      activeLayer === "temperature"
                        ? "bg-secondary text-main"
                        : "text-secondary hover:bg-accent"
                    }`}>
                    🌡️ Temperature
                  </button>
                  <button
                    onClick={() => setActiveLayer("precipitation")}
                    className={`rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                      activeLayer === "precipitation"
                        ? "bg-secondary text-main"
                        : "text-secondary hover:bg-accent"
                    }`}>
                    🌧️ Precipitation
                  </button>
                  <button
                    onClick={() => setActiveLayer("clouds")}
                    className={`rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                      activeLayer === "clouds"
                        ? "bg-secondary text-main"
                        : "text-secondary hover:bg-accent"
                    }`}>
                    ☁️ Clouds
                  </button>
                  <button
                    onClick={() => setActiveLayer("wind")}
                    className={`rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                      activeLayer === "wind"
                        ? "bg-secondary text-main"
                        : "text-secondary hover:bg-accent"
                    }`}>
                    💨 Wind
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </section>
  );
};
