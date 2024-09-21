import React, { useContext } from 'react';
import { useCurrentTemperatureUnit } from '../../context/CurrentTemperatureUnitContext';
import CurrentUserContext from '../../context/CurrentUserContext';

import './ItemModal.css';

const ItemModal = ({
  selectedCard,
  onClose,
  onDelete,
  isLoggedIn,
  context,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const { currentWeather, currentTemperatureUnit } =
    useCurrentTemperatureUnit();
  const displayUnit = currentTemperatureUnit === 'imperial' ? ' F°' : ' C°';

  const handleDelete = () => {
    onDelete(selectedCard);
  };

  const normalizedCurrentWeather = currentWeather.weather.trim().toLowerCase();
  const weatherType = Array.isArray(selectedCard.weather)
    ? selectedCard.weather.find(
        (weather) => weather.trim().toLowerCase() === normalizedCurrentWeather
      )
    : null;

  return (
    <div className={'modal'}>
      <div className='modal__image-container'>
        <button
          className='modal__close'
          type='button'
          onClick={onClose}
        ></button>
        <div>
          <img
            className='modal__image'
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          />
        </div>
        <div className='modal__content-weather'>
          <p>{selectedCard.name}</p>
          <p>Weather: {selectedCard.weather}</p>
          <div>
            {currentUser && (
              <button className='modal__delete' onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
