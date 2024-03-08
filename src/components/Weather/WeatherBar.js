import { useEffect, useState } from "react";

import "./WeatherBar.css";
import weatherImages from "./WeatherImages";

const WeatherBar = ({ currentWeather }) => {
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    if (currentWeather) {
      const { type, day } = currentWeather;

      // Find the matching weather image object based on the current weather type and day/night status
      const matchingImage = weatherImages.find(
        (image) => image.type === type && image.day === day
      );

      console.log(matchingImage);

      if (matchingImage) {
        setWeatherIcon(matchingImage.src.default);
      } else {
        console.log("No matching weather image found for:", currentWeather);
      }
    } else {
      console.log("No weather data:", currentWeather);
    }
  }, [currentWeather]);

  return (
    <div className="weather-bar">
      {weatherIcon && <img src={weatherIcon} alt="Weather Icon" />}
    </div>
  );
};

export default WeatherBar;
