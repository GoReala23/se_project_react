// import React, { createContext, useContext, useState } from "react";

// export const CurrentTemperatureUnitContext = createContext();

// export const CurrentTemperatureUnitProvider = ({ children }) => {
//   const [temperatureUnit, setTemperatureUnit] = useState("imperial");

//   const handleUnitChange = () => {
//     setTemperatureUnit((currentUnit) =>
//       currentUnit === "imperial" ? "metric" : "imperial"
//     );
//   };
//   return (
//     <CurrentTemperatureUnitContext.Provider
//       value={{ temperatureUnit, handleUnitChange }}
//     >
//       {children}
//     </CurrentTemperatureUnitContext.Provider>
//   );
// };

// export const useCurrentTemperatureUnit = () =>
//   useContext(CurrentTemperatureUnitContext);

import React, { createContext, useContext, useState } from "react";

export const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "imperial",
  setCurrentTemperatureUnit: () => {},
  handleToggleSwitchChange: () => {},
  currentWeather: {},
  handleToggleSwitchChange: () => {},
});

export const useCurrentTemperatureUnit = () =>
  useContext(CurrentTemperatureUnitContext);

export default CurrentTemperatureUnitContext;
