import { useEffect, useState } from "react";
import weatherImages from "../Weather/WeatherImages";
import "./WeatherBar.css";

const WeatherBar = ({ weather }) => {
  const [isDayTime, setIsDayTime] = useState(true);

  // Simulated temperature value
  const temperature = "Drippy";

  useEffect(() => {
    const currentHour = new Date().getHours();
    setIsDayTime(currentHour >= 6 && currentHour < 18);
  }, []);

  const weatherType = isDayTime
    ? weather
    : weather === "Sunny"
    ? "Moon"
    : weather;
  const weatherImageSrc =
    weatherImages.find(
      (image) => image.type === weatherType && image.day === isDayTime
    )?.src.default || "";

  return (
    <section className="weather__bar" id="weather">
      <div className="weather__bar-temp">{`${temperature}°F`}</div>
      <img
        className="weather__bar-display"
        src={weatherImageSrc}
        alt={weather}
      />
    </section>
  );
};

export default WeatherBar;
