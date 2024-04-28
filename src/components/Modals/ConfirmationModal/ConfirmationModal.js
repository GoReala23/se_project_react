import React from "react";
import "./ConfirmationModal.css";
const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, item }) => {
  if (!isOpen) return null;

  onclose = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__close" onClick={onClose}>
          X
        </button>
        <p className="modal__confirm-question">
          Are you sure you want to delete{" "}
          {item ? `"${item.name}"` : "this item"}? This action is irreversible.
        </p>
        <button
          className=" modal__confirm_button modal__yes-button"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>
        <button
          className="modal__confirm_button modal__cancel-button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
