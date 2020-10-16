import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//function that privatizes particular routes
const PrivateRoute = ({ component: Component, setUserAuth, ...rest }) => {
  const state = "valid";
  return (
    <Route
      {...rest}
      render={(props) => {
        if (state === "valid") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/admin",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export default PrivateRoute;
