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
