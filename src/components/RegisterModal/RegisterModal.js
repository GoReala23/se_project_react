import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './RegisterModal.css';

const RegisterModal = ({
  isOpen,
  onClose,
  onRegister,
  errorMessage,
  onLoginModal,
}) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  // RegisterModal.js
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Attempting to register user with data:', values); // Log the form data before submission

    try {
      await onRegister(values); // Make the API call to register
    } catch (err) {
      if (err.response) {
        console.error('Registration failed with response:', err.response.data); // Log the server's error response
        alert(`Registration failed: ${err.response.data.message}`); // Show a user-friendly error
      } else {
        console.error('Unexpected error during registration:', err); // Handle unexpected errors
        alert('An unexpected error occurred during registration.');
      }
    }

    resetForm(); // Ensure the form is reset after submission
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Register'
      buttonText='Sign Up'
      secondaryButtonText='or log in'
      onSecondaryButtonClick={onLoginModal}
      isSubmitDisabled={!isValid}
    >
      <label className='modal__form-label'>
        Email
        <input
          className='modal__form-input'
          type='email'
          name='email'
          placeholder='Email'
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        {errors.email && <p className='error__message'>{errors.email}</p>}
      </label>
      <label className='modal__form-label'>
        Password
        <input
          className='modal__form-input'
          type='password'
          name='password'
          placeholder='Password'
          value={values.password || ''}
          onChange={handleChange}
          required
        />
        {errors.password && <p className='error__message'>{errors.password}</p>}
      </label>
      <label className='modal__form-label'>
        Name
        <input
          className='modal__form-input'
          type='text'
          name='name'
          placeholder='Name'
          value={values.name || ''}
          onChange={handleChange}
          required
        />
        {errors.name && <p className='error__message'>{errors.name}</p>}
      </label>
      <label className='modal__form-label'>
        Avatar URL
        <input
          className='modal__form-input'
          type='url'
          name='avatar'
          placeholder='Avatar URL'
          value={values.avatar || ''}
          onChange={handleChange}
          required
        />
        {errors.avatar && <p className='error__message'>{errors.avatar}</p>}
      </label>
      {errorMessage && <p className='error__message'>{errorMessage}</p>}
    </ModalWithForm>
  );
};

export default RegisterModal;
