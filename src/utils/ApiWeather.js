import { API_KEY, LOCATION, weatherCodesLog } from "./constants";
import { checkResponse } from "./Api";

const fetchWeatherData = async (temperatureUnit = "imperial") => {
  const { latitude, longitude } = LOCATION;
  const apiKey = API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${"imperial"}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await checkResponse(response);

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

const categorizeWeather = (temperatureF) => {
  if (temperatureF >= 86) {
    return "hot";
  } else if (temperatureF >= 66) {
    return "warm";
  } else {
    return "cold";
  }
};

const extractWeatherInfo = (data) => {
  if (!data)
    return { city: "", temperature: { F: "", C: "" }, type: "", day: true };

  const temperatureF = Math.round(data.main.temp);
  const temperatureC = Math.round(((temperatureF - 32) * 5) / 9);

  const city = data.name;
  const weatherCodes = data.weather[0].id;
  const type = weatherCodesLog(weatherCodes);
  const isDay = data.weather[0].icon.includes("d");

  const weatherCategory = categorizeWeather(temperatureF);

  return {
    city,
    temperature: { F: `${temperatureF}°F`, C: `${temperatureC}°C` },
    type,
    day: isDay,
    weather: weatherCategory,
  };
};

export { fetchWeatherData, extractWeatherInfo, categorizeWeather };
