import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemForm = ({ onClose, onAddNewItem }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    url: "",
    weather: "hot",
    types: [],
  });

  const handleSubmit = () => {
    const newItem = {
      _id: Date.now(),
      name: formValues.name,
      link: formValues.url,
      weather: formValues.weather,
      types: [formValues.types],
    };

    onAddNewItem(newItem);
  };

  return (
    <ModalWithForm
      title="New Garments"
      onClose={onClose}
      name="create"
      buttonText="Add Garments"
      onSubmit={handleSubmit}
    >
      <div>
        {" "}
        <label className="modal__form-group" htmlFor="name">
          Name
        </label>
        <input
          className="modal__form-input"
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
      </div>
      <div className="modal__form-group">
        {" "}
        <label htmlFor="url">Image</label>
        <input
          className="modal__form-input"
          type="url"
          name="weather"
          placeholder="Image URL"
          value={formValues.url}
          onChange={(e) =>
            setFormValues({ ...formValues, url: e.target.value })
          }
        />
      </div>
      <div>
        <p> Select the weather type: </p>
        <div className="modal__form-radio">
          <label className="modal__form-radio-label">
            <input
              className="modal__form-radio modal__form-radio-options"
              type="radio"
              name="weather"
              value="hot"
              checked={formValues.weather === "hot"}
              onChange={(e) =>
                setFormValues({ ...formValues, weather: e.target.value })
              }
            />
            Hot
          </label>
          <label className="modal__form-radio-label">
            <input
              className="modal__form-radio modal__form-radio-options"
              type="radio"
              name="weather"
              value="cold"
              checked={formValues.weather === "cold"}
              onChange={(e) =>
                setFormValues({ ...formValues, weather: e.target.value })
              }
            />
            Cold
          </label>
          <label className="modal__form-radio-label">
            <input
              className="modal__form-radio modal__form-radio-options"
              type="radio"
              name="weather"
              value="warm"
              checked={formValues.weather === "warm"}
              onChange={(e) =>
                setFormValues({ ...formValues, weather: e.target.value })
              }
            />
            Warm
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemForm;
