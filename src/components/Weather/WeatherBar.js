import { useEffect, useState } from "react";

import "./WeatherBar.css";
import { WeatherImages } from "../../utils/constants";

const WeatherBar = ({ currentWeather }) => {
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    const image = WeatherImages.find(
      (img) =>
        img.type === currentWeather.type && img.day === currentWeather.day
    );

    if (image) setWeatherIcon(image.src.default);
  }, [currentWeather]);

  return (
    <div className="weather-bar">
      {weatherIcon && <img src={weatherIcon} alt="Weather Icon" />}
    </div>
  );
};

export default WeatherBar;
