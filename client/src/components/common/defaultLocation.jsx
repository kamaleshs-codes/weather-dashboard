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
    <div className='rounded-xl border border-border-muted bg-primary px-8 py-6 mb-6'>
      <div className='mb-4'>
        <h3 className='text-xl font-semibold'>Location Settings</h3>
        <p className='text-sm text-accent-secondary mt-1 font-semibold'>
          Choose the default location used for weather information.
        </p>
      </div>
      <div className='bg-secondary text-main rounded-lg px-6'>
        <div className='flex items-center justify-between py-4'>
          <div>
            <h4 className='font-medium'>Default Location</h4>
            <p className='text-sm text-text-light'>
              Choose the location shown when the dashboard opens.
            </p>
          </div>
          <div className='w-72 rounded-lg border border-border-muted bg-main px-3 py-2'>
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
            className='block text-sm font-medium mb-2'>
            Search Location
          </label>
          <div className='relative'>
            <FiSearch className='absolute text-accent-secondary left-4 top-1/2 -translate-y-1/2 text-lg' />
            <input
              id='default-location-search'
              type='text'
              placeholder='Search for a city...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-110 rounded-lg border border-border-muted bg-main text-text-muted font-semibold px-4 py-2 pl-10 outline-none focus:border-accent'
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className='absolute top-full left-0 right-0 mt-2 border border-border-muted rounded-xl shadow-lg overflow-hidden z-50'>
                {suggestions.map((location, index) => (
                  <button
                    key={`${location.lat}-${location.lon}-${index}`}
                    type='button'
                    onClick={() => handleLocationSelect(location)}
                    className={`w-full text-left px-4 py-3 transition-colors ${
                      index === 0
                        ? "bg-secondary text-main"
                        : "bg-primary text-text-muted hover:text-secondary hover:bg-accent"
                    }`}>
                    <p className='font-semibold'>{location.name}</p>
                    <p
                      className={`text-sm ${
                        index === 0 ? "text-main" : "text-text-secondary"
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
