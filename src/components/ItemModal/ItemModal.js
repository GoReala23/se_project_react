import "./ItemModal.css";
const ItemModal = ({
  selectedCard,
  onClose,
  temperatureUnit,
  currentWeather,
  onDelete,
}) => {
  const displayUnit = temperatureUnit === "imperial" ? " F°" : " C°";

  const handleDelete = () => {
    onDelete(selectedCard);
  };
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
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          />
        </div>
        <div className="modal__content-weather">
          <p>{selectedCard.name}</p>
          <p>Weather: {currentWeather.type}</p>
          <div>
            <button className="modal__delete" onClick={handleDelete}>
              {" "}
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
