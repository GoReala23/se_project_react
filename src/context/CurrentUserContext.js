import React, { createContext, useContext } from "react";

const CurrentUserContext = createContext(null);

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};

export default CurrentUserContext;
