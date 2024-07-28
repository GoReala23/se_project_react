import React, { createContext, useContext, useState } from "react";

export const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "imperial",

  handleToggleSwitchChange: () => {},
});

export const useCurrentTemperatureUnit = () =>
  useContext(CurrentTemperatureUnitContext);

export default CurrentTemperatureUnitContext;
