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

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    types: ["Sunny"], // Suitable for sunny weather
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Raincoat",
    weather: "warm",
    types: ["Rain"], // Suitable for rain
    link: "https://example.com/raincoat.png",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    types: ["Cloudy", "Storm"], // Suitable for cloudy and stormy weather
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    types: ["Sunny", "Cloudy"], // Versatile for both sunny and cloudy days
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "Winter Boots",
    weather: "cold",
    types: ["Snow"], // Specifically for snowy conditions
    link: "https://example.com/winter-boots.png",
  },
  {
    _id: 5,
    name: "T-Shirt",
    weather: "hot",
    types: ["Sunny", "Cloudy"], // Ideal for sunny weather
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
];

export default defaultClothingItems;
