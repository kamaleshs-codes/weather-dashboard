import React, { useEffect, useState } from "react";
import { searchLocations } from "../../services/geocodingApi";
import { FiSearch } from "react-icons/fi";

const DashboardSearch = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Search location suggestions
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

  // User presses Enter
  const handleSearch = () => {
    if (suggestions.length === 0) {
      return;
    }

    onSearch(suggestions[0]);

    setSearch("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // User clicks a suggestion
  const handleLocationSelect = (location) => {
    onSearch(location);

    setSearch("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className='relative'>
      <FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-xl' />
      <input
        className='w-full max-w-full rounded-full border bg-card px-6 py-3 pl-10 font-semibold text-text-muted sm:w-75'
        type='text'
        placeholder='Search Weather, Places...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      {showSuggestions && suggestions.length > 0 && (
        <div className='absolute top-full left-0 right-0 mt-2 border rounded-xl shadow-lg overflow-hidden z-50'>
          {suggestions.map((location, index) => (
            <button
              key={`${location.lat}-${location.lon}-${index}`}
              type='button'
              className={`w-full text-left px-4 py-3 transition-colors ${
                index === 0
                  ? "bg-secondary text-main"
                  : "bg-primary text-text-muted hover:text-secondary hover:bg-accent"
              }`}
              onClick={() => handleLocationSelect(location)}>
              <p className='font-semibold'>{location.name}</p>

              <p
                className={`text-sm w-full ${
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
  );
};

export default DashboardSearch;
