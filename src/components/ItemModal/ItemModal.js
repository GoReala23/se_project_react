import "../ItemModal/ItemModal.css";
const ItemModal = ({
  selectedCard,
  onClose,
  currentWeather,
  temperatureUnit,
}) => {
  const displayUnit =
    currentWeather.temperatureUnit === "imperial" ? " F°" : " C°";
  return (
    <div className={"modal"}>
      <div className="modal__image-container">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <div>
          {" "}
          <img
            className="modal__image"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
        </div>
        <div className="modal__content-weather">
          <p>{selectedCard.name}</p>
          <p>Weather: {currentWeather.type}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
