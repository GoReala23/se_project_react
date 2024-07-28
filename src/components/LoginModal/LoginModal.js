import React, { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onLogin, onRegisterModal }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="login__modal">
      <div className="login__modal-content">
        <button
          className="login__modal-close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="login__modal-title">Login</h2>
        <form className="login__modal-form" onSubmit={handleSubmit}>
          <label className="login__modal-form-label">
            Email
            <input
              className="login__modal-form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </label>
          <label className="login__modal-form-label">
            Password
            <input
              className="login__modal-form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </label>
          <div className="login__modal-button-container">
            <button className="login__modal-form-submit" type="submit">
              Login
            </button>
            <button
              className="login__modal-form-signup"
              type="button"
              onClick={onRegisterModal}
            >
              or Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
