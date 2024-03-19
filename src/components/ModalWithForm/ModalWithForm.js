import { useState } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}

          <button className="modal__form-submit" type="submit">
            {" "}
            {buttonText}{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
