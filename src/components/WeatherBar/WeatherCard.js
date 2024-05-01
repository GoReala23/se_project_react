import { useEffect } from "react";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import "./WeatherBar.css";
import { weatherImages } from "../../utils/constants";

const WeatherCard = ({ currentWeather }) => {
  const { currentTemperatureUnit } = useCurrentTemperatureUnit();
  console.log(currentWeather);
  const weatherIcon = weatherImages.find(
    (img) => img.type === currentWeather.type && img.day === currentWeather.day
  )?.src.default;

  const displayTemperature = () => {
    return currentTemperatureUnit === "imperial"
      ? `${currentWeather.temperature.F}`
      : `${currentWeather.temperature.C}`;
  };

  return (
    <div className="weather__bar">
      {weatherIcon && <img src={weatherIcon} alt="Weather Icon" />}
      <div className="weather__bar-temp">{displayTemperature()}</div>
    </div>
  );
};

export default WeatherCard;
