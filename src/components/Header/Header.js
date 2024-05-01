import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/Avatar.png";
import logo from "../../images/Logo.png";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";

const Header = ({ currentWeather, onCreateModal, name }) => {
  const { currentTemperatureUnit, handleToggleSwitchChange } =
    useCurrentTemperatureUnit();
  const isChecked = currentTemperatureUnit === "imperial";
  const displayTemperature = () => {
    if (currentTemperatureUnit === "imperial") {
      return `${currentWeather.temperature.F}`;
    } else {
      return `${currentWeather.temperature.C}`;
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__section header__section-left">
          <Link to="/">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          <div className="header__date-location">
            {currentWeather.city} {displayTemperature()}
          </div>
        </div>
        <div className="header__section header__section-right">
          <ToggleSwitch
            checked={isChecked}
            onChange={handleToggleSwitchChange}
          />
          <div className="header__right-container">
            <button onClick={onCreateModal} className="header_add-clothes">
              Add Clothes
            </button>

            <p className="header__user-name">{name}</p>
          </div>
          <div className="header__avatar">
            <Link to="/profile">
              <img src={avatar} alt="avatar" className="header__avatar-img" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
