import React from "react";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { temperatureUnit, handleUnitChange } = useCurrentTemperatureUnit();
  const isChecked = temperatureUnit === "metric";

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleUnitChange}
        checked={isChecked}
      />
      <div className="switch__slider">
        <p
          className={`switch__label switch__label__fahrenheit ${
            isChecked ? "switch__label--inactive" : ""
          }`}
        >
          F
        </p>
        <p
          className={`switch__label switch__label__celsius ${
            !isChecked ? "switch__label--inactive" : ""
          }`}
        >
          C
        </p>
      </div>
    </label>
  );
};

export default ToggleSwitch;
