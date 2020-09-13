import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "../../App";
import Auth from "./Auth";
import Login from "../../components/Login/Login";
import Logout from "../../components/Logout/Logout";
import Manage from "../../pages/jsx/Manage";
import Profile from "../../pages/jsx/Profile";

const Router = (props) => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoute path="/Manage" component={Manage} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/logout" component={Logout} />
  </Switch>
);

const PrivateRoute = ({ component: Component, ...rest }, userRes) => (
  <Route
    {...rest}
    render={(props) =>
      userRes === "valid" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/Admin",
          }}
        />
      )
    }
  />
);

export default Router;
