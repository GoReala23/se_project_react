export const API_KEY = "9008c8bc8892a390e1d2fa979d3a4f37";

export const LOCATION = {
  latitude: "28.039465",
  longitude: "-81.949806",
};

export const weatherCodesLog = (code) => {
  if (code >= 200 && code <= 232) return "Storm";
  if ((code >= 300 && code <= 321) || (code >= 500 && code <= 531))
    return "Rain";
  if (code >= 600 && code <= 622) return "Snow";
  if (code >= 701 && code <= 781) return "Fog";
  if (code === 800) return "Sunny";
  if (code >= 801 && code <= 804) return "Cloudy";
  return "Unknown";
};

export const weatherImages = [
  {
    type: "Cloudy",
    day: true,
    src: require("../../src/components/Weather/WeatherImages/DayWeather/day-cloudy.svg"),
  },
  {
    type: "Fog",
    day: true,
    src: require("../../src/components/Weather/WeatherImages/DayWeather/day-fog.svg"),
  },
  {
    type: "Rain",
    day: true,
    src: require("../../src/components/Weather/WeatherImages/DayWeather/day-rain.svg"),
  },
  {
    type: "Snow",
    day: true,
    src: require("../../src/components/Weather/WeatherImages/DayWeather/day-snow.svg"),
  },
  {
    type: "Storm",
    day: true,
    src: require("../../src/components/Weather/WeatherImages/DayWeather/day-storm.svg"),
  },
  {
    type: "Sunny",
    day: true,
    src: require("../../src/components/Weather/WeatherImages/DayWeather/day-sunny.svg"),
  },
  {
    type: "Sunny",
    day: false,
    src: require("../../src/components/Weather/WeatherImages/NightWeather/night-moonlight.svg"),
  },
  {
    type: "Fog",
    day: false,
    src: require("../../src/components/Weather/WeatherImages/NightWeather/night-fog.svg"),
  },
  {
    type: "Cloudy",
    day: false,
    src: require("../../src/components/Weather/WeatherImages/NightWeather/night-cloudy.svg"),
  },
  {
    type: "Rain",
    day: false,
    src: require("../../src/components/Weather/WeatherImages/NightWeather/night-rain.svg"),
  },
  {
    type: "Snow",
    day: false,
    src: require("../../src/components/Weather/WeatherImages/NightWeather/night-snow.svg"),
  },
  {
    type: "Storm",
    day: false,
    src: require("../../src/components/Weather/WeatherImages/NightWeather/night-storm.svg"),
  },
];
