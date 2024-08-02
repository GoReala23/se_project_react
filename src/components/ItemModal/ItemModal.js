import React, { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

import "./ItemModal.css";

const ItemModal = ({
  selectedCard,
  onClose,
  temperatureUnit,
  currentWeather,
  onDelete,
  isLoggedIn,
  context,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const displayUnit = temperatureUnit === "imperial" ? " F°" : " C°";

  const handleDelete = () => {
    onDelete(selectedCard);
  };

  console.log("Selected Card:", selectedCard);
  console.log("Current Weather:", currentWeather);

  const normalizedCurrentWeather = currentWeather.weather.trim().toLowerCase();
  const weatherType = Array.isArray(selectedCard.weather)
    ? selectedCard.weather.find(
        (weather) => weather.trim().toLowerCase() === normalizedCurrentWeather
      )
    : null;
  console.log("Weather Type:", weatherType);

  return (
    <div className={"modal"}>
      <div className="modal__image-container">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <div>
          <img
            className="modal__image"
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          />
        </div>
        <div className="modal__content-weather">
          <p>{selectedCard.name}</p>
          <p>Weather: {currentWeather.weather}</p>
          <div>
            {currentUser && (
              <button className="modal__delete" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
