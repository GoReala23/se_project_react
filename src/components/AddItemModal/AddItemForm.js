// AddItemModal.js
import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddItemForm from "./AddItemForm"; // Assuming AddItemForm is the form component

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  // Declare state for each input field
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [weather, setWeather] = useState("hot");
  const [types, setTypes] = useState([]);

  // Reset the input field state to empty strings when the modal is opened
  useEffect(() => {
    if (isOpen) {
      setName("");
      setUrl("");
      setWeather("hot");
      setTypes([]);
    }
  }, [isOpen]);

  // Create onChange handlers corresponding to each state variable
  const handleNameChange = (e) => setName(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);
  // Assuming types is an array of selected types, adjust as necessary

  // Submit handler
  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, url, weather, types });
    onCloseModal();
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      title="Add New Item"
      buttonText="Add Item"
    >
      {/* Form fields go here, utilizing state and handlers */}
      <AddItemForm
        formValues={{ name, url, weather, types }}
        onNameChange={handleNameChange}
        onUrlChange={handleUrlChange}
        onWeatherChange={handleWeatherChange}
        // Add more props as needed for handling types and other fields
      />
    </ModalWithForm>
  );
};

export default AddItemModal;
