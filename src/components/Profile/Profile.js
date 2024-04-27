import React from "react";
import SideBar from "../Sidebar/SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";
const Profile = ({
  currentWeather,
  username,
  onSelectCard,
  onCreateModal,
  clothingItems,
}) => {
  console.log("Profile clothingItems:", clothingItems);

  return (
    <div className="profile">
      <SideBar username={username} />
      <ClothesSection
        clothingItems={clothingItems}
        currentWeather={currentWeather}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </div>
  );
};

export default Profile;
