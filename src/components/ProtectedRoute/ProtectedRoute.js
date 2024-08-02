import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
