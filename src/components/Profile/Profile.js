import React, { useContext } from 'react';
import { useCurrentTemperatureUnit } from '../../context/CurrentTemperatureUnitContext';
import CurrentUserContext from '../../context/CurrentUserContext';
import SideBar from '../SideBar/SideBar';
import ClothesSection from './ClothesSection';
import './Profile.css';

const Profile = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  onDeleteItem,
  onEditProfileModal,
  onLogout,
  onCardLike,
  isLoggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const { currentWeather } = useCurrentTemperatureUnit();
  const filteredClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  console.log('Filtered Clothing Items for Profile:', filteredClothingItems);

  return (
    <div className='profile'>
      <SideBar onEditProfileModal={onEditProfileModal} onLogout={onLogout} />
      <ClothesSection
        className='clothes__section-container--3'
        clothingItems={filteredClothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onDeleteItem={onDeleteItem}
        onCardLike={onCardLike}
        showSectionBar={true}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default Profile;
