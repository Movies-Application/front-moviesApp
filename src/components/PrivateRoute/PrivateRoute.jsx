import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function PrivateRoute({ path, component }) {
  const auth = useContext(AuthContext);

  return (
    <>
      {auth.token ? (
        <Route exact path={path} component={component} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </>
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.element,
};

export default PrivateRoute;
