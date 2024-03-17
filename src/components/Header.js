import React, { useState } from "react";
import avatar from "../images/Avatar.png";
import logo from "../images/Logo.png";
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
        <div className="header__date-location">
          {currentWeather.city} {currentWeather.temperature} {displayUnit}
        </div>
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
                C°
              </button>
              <button
                className="header__temp-switch-content-button header__temp-farenheit"
                onClick={() => handleUnitChange("Farenheit")}
              >
                F°
              </button>
            </div>
          )}
        </div>
        <div className="header__right-container">
          <button
            type="text"
            className="header__add-clothes"
            onClick={onCreateModal}
          >
            Add Clothes
          </button>

          <p className="header__user-name">name</p>
        </div>
        <div className="header__avatar">
          <img src={avatar} alt="avatar" className="header__avatar-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
