import React from "react";
import weatherlyIcon from "../../assets/app_icon/appIcon.png";

export const Weatherly = ({ className="" }) => {
  return (
    <div>
      <img
        src={weatherlyIcon}
        alt='Weatherly'
        className={`${className} object-contain`}
      />
    </div>
  );
};
