import React, { useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useCurrentUser } from '../../context/CurrentUserContext';
import './EditProfileModal.css';

const EditProfileModal = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useCurrentUser();
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name,
        avatar: currentUser.avatar,
      });
    }
  }, [isOpen, currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting to update user's profile:", values);
    if (isValid) {
      onUpdateUser(values);
      console.log(values);
      console.log('Profile updated successfully');
    }
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Edit Profile'
      buttonText='Save'
      isSubmitDisabled={!isValid}
    >
      <label className='modal__form-label'>
        Name
        <input
          className='modal__form-input'
          type='text'
          name='name'
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
          value={values.avatar || ''}
          onChange={handleChange}
          required
        />
        {errors.avatar && <p className='error__message'>{errors.avatar}</p>}
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
