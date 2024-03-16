const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={"modal"}>
      <button type="button" onClick={onClose}>
        Close
      </button>
      <div className="modal__content"></div>
      <img src={selectedCard.link} />
      <div> {selectedCard.name}</div>
      <div> {selectedCard.weather}</div>
    </div>
  );
};

export default ItemModal;
