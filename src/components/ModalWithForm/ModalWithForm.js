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
      <div>
        <div className="modal__content">
          <button type="button" onClick={onClose}>
            Close
          </button>
          <h3>{title}</h3>
          <form onSubmit={handleSubmit}>
            {children}
            <input
              type="text"
              placeholder="Name"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            ></input>
            <input
              type="url"
              placeholder="Image URL"
              value={formValues.url}
              onChange={(e) =>
                setFormValues({ ...formValues, url: e.target.value })
              }
            ></input>
            <div>
              <label>
                <input
                  type="radio"
                  value="hot"
                  checked={formValues.weather === "hot"}
                  onChange={(e) =>
                    setFormValues({ ...formValues, weather: e.target.value })
                  }
                />
                Hot
              </label>
              <label>
                <input
                  type="radio"
                  value="cold"
                  checked={formValues.weather === "cold"}
                  onChange={(e) =>
                    setFormValues({ ...formValues, weather: e.target.value })
                  }
                />
                Cold
              </label>
              <label>
                <input
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
            <button type="submit"> {buttonText} </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWithForm;
