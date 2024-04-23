import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.module.css";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [weather, setWeather] = useState("hot");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setUrl("");
      setWeather("hot");
    }
  }, [isOpen]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { name, imageUrl: url, weather };
    onAddItem(newItem);
    onCloseModal();
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      title="New Garment"
      buttonText="Add Item"
    >
      <div className="modal__form">
        <div>
          <label className="modal__form-label">
            Name
            <input
              className="modal__form-input"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
            />
          </label>

          <label className="modal__form-label">
            Image URL
            <input
              className="modal__form-input"
              type="text"
              value={url}
              onChange={handleUrlChange}
              placeholder="Image URL"
            />
          </label>
        </div>

        <div className="modal__form-radios">
          Weather
          <label>
            <input
              type="radio"
              name="weather"
              value="hot"
              checked={weather === "hot"}
              onChange={handleWeatherChange}
            />
            Hot
          </label>
          <label>
            <input
              type="radio"
              name="weather"
              value="cold"
              checked={weather === "cold"}
              onChange={handleWeatherChange}
            />
            Cold
          </label>
          <label>
            <input
              type="radio"
              name="weather"
              value="warm"
              checked={weather === "warm"}
              onChange={handleWeatherChange}
            />
            Warm
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
