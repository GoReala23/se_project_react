import "./ItemModal.css";
import { categorizeWeather } from "../../utils/ApiWeather";

const ItemModal = ({
  selectedCard,
  onClose,
  temperatureUnit,
  currentWeather,
  onDelete,
  isLoggedIn,
  context,
}) => {
  const displayUnit = temperatureUnit === "imperial" ? " F°" : " C°";

  const handleDelete = () => {
    onDelete(selectedCard);
  };

  const currentWeatherCategory = currentWeather
    ? categorizeWeather(
        temperatureUnit === "imperial"
          ? parseFloat(currentWeather.temperature.F)
          : (parseFloat(currentWeather.temperature.C) * 9) / 5 + 32
      )
    : "Unknown";

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
          <p>Weather: {currentWeatherCategory}</p>
          <div>
            {isLoggedIn && (
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
