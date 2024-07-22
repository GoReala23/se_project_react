import React from "react";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../../images/Avatar.png"; // Placeholder for user avatar
import logo from "../../images/Logo.png";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import { useCurrentUser } from "../../context/CurrentUserContext";

const Header = ({
  currentWeather,
  onCreateModal,
  onRegisterModal,
  onLoginModal,

  isLoggedIn,
}) => {
  const { currentTemperatureUnit, handleToggleSwitchChange } =
    useCurrentTemperatureUnit();
  const currentUser = useCurrentUser();
  const isChecked = currentTemperatureUnit === "imperial";

  const displayTemperature = () => {
    if (!currentWeather) {
      return "N/A";
    }
    return currentTemperatureUnit === "imperial"
      ? `${currentWeather.temperature.F} F°`
      : `${currentWeather.temperature.C} C°`;
  };

  return (
    <header className="header">
      <div className="header__section header__section-left">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <div className="header__date-location">
          {currentWeather ? currentWeather.city : "Unknown Location"}{" "}
          {displayTemperature()}
        </div>
      </div>
      <div className="header__section header__section-right">
        <ToggleSwitch checked={isChecked} onChange={handleToggleSwitchChange} />
        <div className="header__right-container">
          {isLoggedIn ? (
            <>
              <button onClick={onCreateModal} className="header__add-clothes">
                Add Clothes
              </button>
              <Link className="header__link" to="/profile">
                <p className="header__user-name">{currentUser?.name}</p>
              </Link>

              <div className="header__avatar">
                <Link to="/profile">
                  <img
                    src={currentUser?.avatar || avatarPlaceholder}
                    alt="avatar"
                    className="header__avatar-img"
                  />
                </Link>
              </div>
            </>
          ) : (
            <>
              <button onClick={onRegisterModal} className="header__register">
                Signup
              </button>
              <button onClick={onLoginModal} className="header__login">
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
