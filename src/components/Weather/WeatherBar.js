import { useEffect } from "react";

import "./WeatherBar.css";
import { weatherImages } from "../../utils/constants";

const WeatherBar = ({ currentWeather }) => {
  const weatherIcon = weatherImages.find(
    (img) => img.type === currentWeather.type && img.day === currentWeather.day
  )?.src.default;

  return (
    <div className="weather-bar">
      {weatherIcon && <img src={weatherIcon} alt="Weather Icon" />}
    </div>
  );
};

export default WeatherBar;
