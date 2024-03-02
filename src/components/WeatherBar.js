import { useEffect, useState } from "react";
import "../components/WeatherBar.css";

import dayCloudy from "../components/images/Weather/Day/day-cloudy.svg";
import dayFog from "../components/images/Weather/Day/day-fog.svg";
import dayRain from "../components/images/Weather/Day/day-rain.svg";
import daySnow from "../components/images/Weather/Day/day-snow.svg";
import dayStorm from "../components/images/Weather/Day/day-storm.svg";
import daySunny from "../components/images/Weather/Day/day-sunny.svg";
import nightMoon from "../components/images/Weather/Night/night-moonlight.svg";
import nightFog from "../components/images/Weather/Night/night-fog.svg";
import nightCloudy from "../components/images/Weather/Night/night-cloudy.svg";
import nightRain from "../components/images/Weather/Night/night-rain.svg";
import nightSnow from "../components/images/Weather/Night/night-snow.svg";
import nightStorm from "../components/images/Weather/Night/night-storm.svg";

const dayWeatherImages = {
  Cloudy: dayCloudy,
  Fog: dayFog,
  Rain: dayRain,
  Snow: daySnow,
  Storm: dayStorm,
  Sunny: daySunny,
};

const nightWeatherImages = {
  Cloudy: nightCloudy,
  Fog: nightFog,
  Rain: nightRain,
  Snow: nightSnow,
  Storm: nightStorm,
  Sunny: nightMoon,
};

const WeatherBar = () => {
  const [isDayTime, setIsDayTime] = useState(true);
  const [weather, setWeather] = useState("Sunny");

  const determineDayOrNight = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18;
  };

  useEffect(() => {
    const dayorNight = determineDayOrNight();
    setIsDayTime(dayorNight);
  }, []);

  const weatherImageSrc = isDayTime
    ? dayWeatherImages[weather]
    : nightWeatherImages[weather];
  return (
    <section className="weather__bar" id="weather">
      <div className="weather__bar-temp">75F</div>
      <img
        className="weather__bar-display"
        src={weatherImageSrc}
        alt={weather}
      ></img>
    </section>
  );
};

export default WeatherBar;
