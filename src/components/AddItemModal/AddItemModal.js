import React, { useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './AddItemModal.css';

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: values.name,
      imageUrl: values.url,
      weather: values.weather,
    };
    onAddItem(newItem);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      title='New Garment'
      buttonText='Add Item'
      isSubmitDisabled={!isValid}
    >
      <div className='modal__form'>
        <div>
          <label className='modal__form-label'>
            Name
            <input
              className='modal__form-input'
              type='text'
              name='name'
              value={values.name || ''}
              onChange={handleChange}
              placeholder='Name'
              required
            />
            {errors.name && <p className='error__message'>{errors.name}</p>}
          </label>
          <label className='modal__form-label'>
            Image URL
            <input
              className='modal__form-input'
              type='url'
              name='url'
              value={values.url || ''}
              onChange={handleChange}
              placeholder='Image URL'
              required
            />
            {errors.url && <p className='error__message'>{errors.url}</p>}
          </label>
        </div>
        <div className='modal__form-radios'>
          Weather
          <label>
            <input
              type='radio'
              name='weather'
              value='hot'
              checked={values.weather === 'hot'}
              onChange={handleChange}
              required
            />
            Hot
          </label>
          <label>
            <input
              type='radio'
              name='weather'
              value='cold'
              checked={values.weather === 'cold'}
              onChange={handleChange}
              required
            />
            Cold
          </label>
          <label>
            <input
              type='radio'
              name='weather'
              value='warm'
              checked={values.weather === 'warm'}
              onChange={handleChange}
              required
            />
            Warm
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
