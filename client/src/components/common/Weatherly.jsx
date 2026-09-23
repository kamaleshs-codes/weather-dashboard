import React from "react";
import weatherlyIcon from "../../assets/app_icon/appIcon.png";

export const Weatherly = () => {
  return (
    <div>
      <img
        src={weatherlyIcon}
        alt='Weatherly'
        className='h-35 w-60 object-contain'
      />
    </div>
  );
};
