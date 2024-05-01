import { API_KEY, LOCATION, weatherCodesLog } from "./constants";

// ApiWeather.js

export const processServerResponse = async (response) => {
  if (!response.ok) {
    throw new Error("Weather data fetch failed");
  }

  return await response.json();
};
const fetchWeatherData = async (temperatureUnit = "imperial") => {
  const { latitude, longitude } = LOCATION;
  const apiKey = API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${"imperial"}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await processServerResponse(response);

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

const extractWeatherInfo = (data) => {
  if (!data)
    return {
      city: "",
      temperature: { F: "", C: "" },
      type: "",
      day: true,
    };
  const temperatureF = Math.round(data.main.temp);
  const temperatureC = Math.round(((temperatureF - 32) * 5) / 9);
  console.log(temperatureC, temperatureF);
  const city = data.name;
  const weatherCodes = data.weather[0].id;
  const type = weatherCodesLog(weatherCodes);
  const isDay = data.weather[0].icon.includes("d");
  return {
    city,
    temperature: { F: `${temperatureF}°F`, C: `${temperatureC}°C` },
    type,
    day: isDay,
  };
};
export { fetchWeatherData, extractWeatherInfo };
