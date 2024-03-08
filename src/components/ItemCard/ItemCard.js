import "./ItemCard.css";
import React from "react";

const ItemCard = ({ item, currentWeather, showWeatherInfo, onSelectCard }) => {
  return (
    <div className="card__container">
      <p>Today's weather is {currentWeather}. You may want to wear:</p>
      <div className="card__name">{item.name}</div>
      <div>
        <img
          className="card__image"
          src={item.link}
          alt={item.name}
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
