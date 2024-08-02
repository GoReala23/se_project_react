import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onLogin, onRegisterModal }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    resetForm();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Login"
      buttonText="Login"
      secondaryButtonText="or Sign Up"
      onSecondaryButtonClick={onRegisterModal}
      isSubmitDisabled={!isValid}
    >
      <label className="modal__form-label">
        Email
        <input
          className="modal__form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        {errors.email && <p className="error__message">{errors.email}</p>}
      </label>
      <label className="modal__form-label">
        Password
        <input
          className="modal__form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password || ""}
          onChange={handleChange}
          required
          autoComplete="current_password"
        />
        {errors.password && <p className="error__message">{errors.password}</p>}
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
