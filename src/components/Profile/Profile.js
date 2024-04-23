import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";
const Profile = ({ currentWeather, username, onSelectCard, onCreateModal }) => {
  return (
    <div className="profile">
      <Sidebar username={username} />
      <ClothesSection
        currentWeather={currentWeather}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </div>
  );
};

export default Profile;
