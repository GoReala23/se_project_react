import React, { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";

const Header = ({
  onCreateModal,
  onRegisterModal,
  onLoginModal,
  isLoggedIn,
}) => {
  const { currentTemperatureUnit, handleToggleSwitchChange, currentWeather } =
    useCurrentTemperatureUnit();

  const currentUser = useContext(CurrentUserContext);

  const isChecked = currentTemperatureUnit === "imperial";

  const displayTemperature = () => {
    if (!currentWeather) {
      return "N/A";
    }
    return currentTemperatureUnit === "imperial"
      ? `${currentWeather.temperature.F} `
      : `${currentWeather.temperature.C} `;
  };

  const options = { month: "long", day: "numeric" };
  const currentDate = new Date().toLocaleDateString(undefined, options);

  return (
    <header className="header">
      <div className="header__section header__section-left">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <div className="header__date-location">
          {currentDate},{" "}
          {currentWeather ? currentWeather.city : "Unknown Location"}
        </div>
      </div>
      <div className="header__section header__section-right">
        <ToggleSwitch checked={isChecked} onChange={handleToggleSwitchChange} />
        <div className="header__right-container">
          {isLoggedIn && currentUser ? (
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
                    src={currentUser?.avatar}
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
