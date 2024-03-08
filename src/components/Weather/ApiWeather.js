import { API_KEY, LOCATION } from "../utils/constants";
import { weatherCodesLog } from "../utils/constants";

const fetchWeatherData = async () => {
  const { latitude, longitude } = LOCATION;
  const apiKey = API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Weather data fetch failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

const extractWeatherInfo = (data) => {
  console.log("data:", data);
  if (!data)
    return {
      city: "",
      temperature: "",
      type: "",
      day: true,
    };
  const city = data.name;
  const temperature = Math.round(data.main.temp);
  const weatherCodes = data.weather[0].id;
  const type = weatherCodesLog(weatherCodes);
  return { city, temperature, type, day: true };
};

export { fetchWeatherData, extractWeatherInfo };
