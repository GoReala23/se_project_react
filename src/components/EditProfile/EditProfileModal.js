import React, { useState } from "react";
import "../ModalWithForm/ModalWithForm.css";
import "./EditProfileModal.css";

const EditProfileModal = ({ isOpen, onClose, onUpdateUser, currentUser }) => {
  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    avatar: currentUser?.avatar || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}></button>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label className="modal__form-label">
            Name
            <input
              className="modal__form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal__form-label">
            Avatar URL
            <input
              className="modal__form-input"
              type="url"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              required
            />
          </label>
          <button className="modal__form-submit" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
