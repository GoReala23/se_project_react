import { useEffect } from "react";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import "./WeatherBar.css";
import { weatherImages } from "../../utils/constants";

const WeatherBar = ({ currentWeather }) => {
  const { temperatureUnit } = useCurrentTemperatureUnit();

  const weatherIcon = weatherImages.find(
    (img) => img.type === currentWeather.type && img.day === currentWeather.day
  )?.src.default;

  const displayTemperature = () => {
    return temperatureUnit === "imperial"
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

export default WeatherBar;
