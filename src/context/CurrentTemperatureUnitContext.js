import React, { createContext, useContext, useState } from "react";

const CurrentTemperatureUnitContext = createContext();

export const CurrentTemperatureUnitProvider = ({ children }) => {
  const [temperatureUnit, setTemperatureUnit] = useState("imperial");

  const handleUnitChange = () => {
    setTemperatureUnit((currentUnit) =>
      currentUnit === "imperial" ? "metric" : "imperial"
    );
  };
  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ temperatureUnit, handleUnitChange }}
    >
      {children}
    </CurrentTemperatureUnitContext.Provider>
  );
};

export const useCurrentTemperatureUnit = () =>
  useContext(CurrentTemperatureUnitContext);
