import React, { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

const Profile = ({
  currentWeather,
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
  const filteredClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="profile">
      <SideBar
        username={currentUser?.name}
        avatar={currentUser?.avatar || ""}
        onEditProfileModal={onEditProfileModal}
        onLogout={onLogout}
      />
      <ClothesSection
        className="clothes__section-container--3"
        clothingItems={filteredClothingItems}
        currentWeather={currentWeather}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onDeleteItem={onDeleteItem}
        onCardLike={onCardLike}
        currentUser={currentUser}
        showSectionBar={true}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default Profile;
