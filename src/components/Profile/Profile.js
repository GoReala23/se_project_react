import React from "react";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";
const Profile = ({ currentWeather, username }) => {
  return (
    <div className="profile">
      <Sidebar username={username} />
      <ClothesSection currentWeather={currentWeather} />
    </div>
  );
};

export default Profile;
