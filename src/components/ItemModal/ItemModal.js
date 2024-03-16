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
      <button type="button" onClick={onClose}>
        Close
      </button>
      <div className="modal__content">
        <img src={selectedCard.link} alt={selectedCard.name} />
        <div>{selectedCard.name}</div>
        <div>{selectedCard.weather}</div>
        <div>
          <p>Weather: {currentWeather.type}</p>
          <p>
            Temperature: {currentWeather.temperature} {displayUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
