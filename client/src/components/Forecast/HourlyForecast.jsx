import React from "react";
import { Card } from "../ui/Card";
import { FiChevronRight } from "react-icons/fi";
import { HourlyForecastCard } from "./HourlyForecastCard";

export const HourlyForecast = ({ hourlyForecast }) => {
  return (
    <section className='mt-5'>
      <Card>
        <div className='flex justify-between items-center p-3 font-semibold'>
          <h3>3-Hour Forecast</h3>
          <p className='flex gap-1 items-center cursor-pointer hover:text-text-accent transition'>
            View more
            <FiChevronRight />
          </p>
        </div>
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5'>
          {hourlyForecast.slice(0, 5).map((hour) => (
            <HourlyForecastCard key={hour.time} hour={hour} />
          ))}
        </div>
      </Card>
    </section>
  );
};
