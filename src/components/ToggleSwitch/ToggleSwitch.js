import React from "react";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { temperatureUnit, handleUnitChange } = useCurrentTemperatureUnit();
  const isChecked = temperatureUnit === "imperial";

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleUnitChange}
        checked={isChecked}
      />
      <div className="switch__slider">
        <p className={`switch__label ${isChecked ? "active" : ""}`}>F</p>
        <p className={`switch__label ${!isChecked ? "active" : ""}`}>C</p>
      </div>
    </label>
  );
};

export default ToggleSwitch;
