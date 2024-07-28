import React, { useState } from "react";
import "../ModalWithForm/ModalWithForm.css";
import "./RegisterModal.css";

const RegisterModal = ({
  isOpen,
  onClose,
  onRegister,
  errorMessage,
  onLoginModal,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="modal__form-label">
            Email
            <input
              className="modal__form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal__form-label">
            Password
            <input
              className="modal__form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal__form-label">
            Name
            <input
              className="modal__form-input"
              type="text"
              name="name"
              placeholder="Name"
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
              placeholder="Avatar URL"
              value={formData.avatar}
              onChange={handleChange}
              required
            />
          </label>
          <div className="modal__buttons-container">
            <button
              className="modal__form-buttons modal__form-submit"
              type="submit"
            >
              Register
            </button>
            <button
              className="modal__form-buttons modal__form-login"
              type="button"
              onClick={onLoginModal}
            >
              or log in
            </button>
          </div>
          <button
            className="modal__close"
            type="button"
            onClick={onClose}
          ></button>
        </form>
        {errorMessage && <p className="error__message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default RegisterModal;
