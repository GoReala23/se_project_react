import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm"; // Adjust the import path as necessary
import AddItemForm from "./AddItemForm"; // Adjust the import path as necessary

const AddItemModal = ({ isOpen, onCloseModal }) => {
  if (!isOpen) return null;

  return (
    <div className="add__modal">
      <ModalWithForm onClose={onCloseModal}>
        <AddItemForm />
      </ModalWithForm>
    </div>
  );
};

export default AddItemModal;
