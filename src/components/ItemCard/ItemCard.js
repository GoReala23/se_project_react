import React from "react";
import "./ItemCard.css";
import likeButton from "../../images/likeButton.png";
import unlikeButton from "../../images/unlikeButton.png";

const ItemCard = ({
  item,
  currentWeather,
  showWeatherInfo,
  onSelectCard,
  temperatureUnit,
  onDeleteItem,
  onCardLike,
  currentUser,
  className,
  isLoggedIn,
}) => {
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
        {showWeatherInfo && currentWeather && (
          <div className="card__weather-info">{item.weather}</div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
