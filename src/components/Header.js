import React, { useState } from "react";
import avatar from "../components/images/Avatar.png";
import logo from "../components/images/Logo.png";
import "../components/Header.css";

const Header = ({
  currentWeather,
  onCreateModal,
  onUnitChange,
  temperatureUnit,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleUnitChange = (unit) => {
    onUnitChange(unit === "Celsius" ? "metric" : "imperial");
    setIsDropdownOpen(false);
  };

  const displayUnit = temperatureUnit === "imperial" ? " F°" : " C°";
  return (
    <header className="header">
      <div className=" header__section header__section-left">
        <img src={logo} alt="logo" className="header__logo" />
        <p className="date-locatation">
          {currentWeather.city} {currentWeather.temperature} {displayUnit}
        </p>
      </div>
      <div className="header__section header__section-right">
        <div
          className="header__temp-switch"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <button className="header__switch">{displayUnit}</button>
          {/* Drop Menu */}
          {isDropdownOpen && (
            <div className="header__temp-switch-content">
              <button
                className="header__temp-switch-content-button header__temp-celsius"
                onClick={() => handleUnitChange("Celsius")}
              >
                Celsius
              </button>
              <button
                className="header__temp-switch-content-button header__temp-farenheit"
                onClick={() => handleUnitChange("Farenheit")}
              >
                Farenheit
              </button>
            </div>
          )}
        </div>
        <div className="header__button-add">
          <button
            type="text"
            className="header__add-clothes"
            onClick={onCreateModal}
          >
            Add Clothes
          </button>
          {/* <p>{user}</p> */}
          <p>name</p>
        </div>
        <div className="header__avatar">
          <img src={avatar} alt="avatar" className="header__avatar-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
