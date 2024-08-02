import React from "react";
import Modal from "../Modal/Modal";
import "./ModalWithForm.css";

const ModalWithForm = ({
  isOpen,
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
  secondaryButtonText,
  onSecondaryButtonClick,
  isSubmitDisabled,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} name={name}>
      <h3 className="modal__title">{title}</h3>
      <form className="modal__form" onSubmit={handleSubmit}>
        {children}
        <div className="modal__button-container">
          <button
            className="modal__form-submit"
            type="submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
          {onSecondaryButtonClick && (
            <button
              className="modal__form-secondary"
              type="button"
              onClick={onSecondaryButtonClick}
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default ModalWithForm;
