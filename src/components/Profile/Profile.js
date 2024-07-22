import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

const Profile = ({
  currentWeather,
  onSelectCard,
  onCreateModal,
  clothingItems,
  onDeleteItem,
  currentUser,
  onEditProfileModal,
  onLogout,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <SideBar
        username={currentUser?.name}
        avatar={currentUser?.avatar || ""}
        onEditProfileModal={onEditProfileModal}
        onLogout={onLogout}
      />
      <ClothesSection
        clothingItems={clothingItems}
        currentWeather={currentWeather}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onDeleteItem={onDeleteItem}
        onCardLike={onCardLike}
        currentUser={currentUser}
        showSectionBar={true}
      />
    </div>
  );
};

export default Profile;
