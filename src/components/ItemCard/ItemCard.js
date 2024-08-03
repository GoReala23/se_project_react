import React, { useContext } from "react";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./ItemCard.css";
import likeButton from "../../images/likeButton.png";
import unlikeButton from "../../images/unlikeButton.png";

const ItemCard = ({
  item,
  showWeatherInfo,
  onSelectCard,
  temperatureUnit,
  onDeleteItem,
  onCardLike,
  className,
  isLoggedIn,
}) => {
  // const currentWeather = useCurrentTemperatureUnit();
  const currentUser = useContext(CurrentUserContext);
  const { currentTemperatureUnit } = useCurrentTemperatureUnit();
  const displayUnit = temperatureUnit === "imperial" ? " F°" : " C°";

  const isLiked = item.likes
    ? currentUser && item.likes.includes(currentUser._id)
    : false;

  const handleLike = () => {
    if (typeof onCardLike === "function") {
      onCardLike({ _id: item._id, isLiked });
    } else {
      console.error("onCardLike is not a function");
    }
  };

  return (
    <div className="card__container">
      <div className="card__info">
        <p className="card__name">{item.name}</p>
        {isLoggedIn && (
          <button className="card__like-button" onClick={handleLike}>
            <img
              src={isLiked ? likeButton : unlikeButton}
              alt={isLiked ? "Unlike" : "Like"}
            />
          </button>
        )}
      </div>

      <div onClick={() => onSelectCard && onSelectCard(item)}>
        <img className="card__image" src={item.imageUrl} alt={item.name} />
        {showWeatherInfo && item.weather && (
          <div className="card__weather-info">{item.weather.join(", ")}</div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
