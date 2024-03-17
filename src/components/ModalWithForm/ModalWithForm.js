import { useState } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  onAddNewItem,
}) => {
  const [formValues, setFormValues] = useState({
    name: "",
    url: "",
    weather: "hot",
    types: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      _id: Date.now(),
      name: formValues.name,
      link: formValues.url,
      weather: formValues.weather,
      types: [formValues.types],
    };
    console.log(newItem);
    onAddNewItem(newItem);
  };

  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3>{title}</h3>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          <label htmlFor="name">Name</label>
          <input
            className="modal__form-input"
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          ></input>
          <label htmlFor="url">Image URL</label>
          <input
            className="modal__form-input"
            type="url"
            placeholder="Image URL"
            value={formValues.url}
            onChange={(e) =>
              setFormValues({ ...formValues, url: e.target.value })
            }
          ></input>
          <div>
            <div className="modal__form-radio">
              <label className="modal__form-radio-label">
                <input
                  className="modal__form-radio modal__form-radio-opttions"
                  type="radio"
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
                  className="modal__form-radio modal__form-radio-opttions"
                  type="radio"
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
                  className="modal__form-radio modal__form-radio-opttions"
                  type="radio"
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
          <button type="submit"> {buttonText} </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
