import "./ItemCard.css";
import React from "react";

const ItemCard = ({
  item,
  currentWeather,
  showWeatherInfo,
  onSelectCard,
  temperatureUnit,
}) => {
  const displayUnit = temperatureUnit === "imperial" ? " F°" : " C°";
  const clothesForWeather =
    currentWeather?.type && item.types?.includes(currentWeather.type);

  if (!clothesForWeather) {
    return null;
  }
  return (
    <div className="card__container">
      <div></div>
      <div className="card__name">{item.name}</div>
      <div onClick={() => onSelectCard(item)}>
        <img className="card__image" src={item.link} alt={item.name} />
        {showWeatherInfo && (
          <div className="card__weather-info">
            <p className="card__weather-type">Weather: {currentWeather.type}</p>
            <p
              className="
            card__weather-temperature"
            >
              Temperature: {currentWeather.temperature} {displayUnit}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
