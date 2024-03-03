import "./ItemCard.css";
import React from "react";

const ItemCard = ({ item, weather, showWeatherInfo, onSelectCard }) => {
  return (
    <div className="card__container">
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
