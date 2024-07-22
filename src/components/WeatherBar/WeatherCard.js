import { useEffect } from "react";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import "./WeatherBar.css";
import { weatherImages } from "../../utils/constants";

const WeatherCard = ({ weather }) => {
  const { currentTemperatureUnit } = useCurrentTemperatureUnit();

  const weatherIcon = weatherImages.find(
    (img) => img.type === weather?.type && img.day === weather?.day
  )?.src.default;

  const displayTemperature = () => {
    if (currentTemperatureUnit === "imperial") {
      return `${weather?.temperature.F} `;
    }
    return `${weather?.temperature.C}`;
  };

  return (
    <div className="weather__bar">
      {weatherIcon && <img src={weatherIcon} alt="Weather Icon" />}
      <div className="weather__bar-temp">{displayTemperature()}</div>
    </div>
  );
};

export default WeatherCard;
