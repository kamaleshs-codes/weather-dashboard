import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { searchLocations } from "../../services/geocodingApi";
import { useSettings } from "../../context/SettingsContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../../context/LocationContext";

export const DefaultLocation = () => {
  const { settings, updateSettings } = useSettings();
  const { setLocation } = useLocation();
  const navigate = useNavigate();
  const { defaultLocation } = settings;

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (search.trim().length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const results = await searchLocations(search.trim());
        setSuggestions(results);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Location search error:", error);
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const handleLocationSelect = (location) => {
    updateSettings("defaultLocation", location);
    setLocation(location);
    setSearch("");
    setSuggestions([]);
    setShowSuggestions(false);

    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className='mb-6 rounded-xl border border-border-muted bg-surface px-4 py-5 sm:px-6 sm:py-6 lg:px-8'>
      <div className='mb-4'>
        <h3 className='text-xl font-semibold'>Location Settings</h3>
        <p className='mt-1 text-sm font-semibold text-accent-secondary'>
          Choose the default location used for weather information.
        </p>
      </div>
      <div className='rounded-lg bg-secondary px-3 text-primary sm:px-6'>
        <div className='flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h4 className='font-medium'>Default Location</h4>
            <p className='text-sm text-text-light'>
              Choose the location shown when the dashboard opens.
            </p>
          </div>
          <div className='w-full rounded-lg border border-border-muted bg-main px-3 py-2 sm:w-72'>
            <p className='text-sm font-semibold text-text-muted'>
              {defaultLocation.name}
              {defaultLocation.state && `, ${defaultLocation.state}`}
            </p>
            <p className='text-xs text-text-muted'>{defaultLocation.country}</p>
          </div>
        </div>
        <div className='border-t border-border-muted py-4'>
          <label
            htmlFor='default-location-search'
            className='mb-2 block text-sm font-medium'>
            Search Location
          </label>
          <div className='relative'>
            <FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-lg text-accent-secondary' />
            <input
              id='default-location-search'
              type='text'
              placeholder='Search for a city...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-full rounded-lg border border-border-muted bg-main px-4 py-2 pl-10 font-semibold text-text-muted outline-none focus:border-accent sm:w-110'
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className='absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-border-muted shadow-lg'>
                {suggestions.map((location, index) => (
                  <button
                    key={`${location.lat}-${location.lon}-${index}`}
                    type='button'
                    onClick={() => handleLocationSelect(location)}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      index === 0
                        ? "bg-secondary text-primary"
                        : "bg-main text-text-muted hover:bg-accent hover:text-secondary"
                    }`}>
                    <p className='font-semibold'>{location.name}</p>
                    <p
                      className={`text-sm ${
                        index === 0 ? "text-primary" : "text-text-secondary"
                      }`}>
                      {location.state && `${location.state}, `}
                      {location.country}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
