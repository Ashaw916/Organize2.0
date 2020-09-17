import React, { useState, component, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./style.css";
import Axios from "axios";
import auth from "../PrivateRoutes/Auth";
import AuthContext from "../../utils/AuthContext";

function LogoutUser({ checkAuth }) {
  let { authStatus } = useContext(AuthContext);
  const userObj = JSON.stringify(localStorage.getItem("user"));
  // setUserAuth("invalid");
  useEffect((checkAuth) => {
    console.log("logout");
    Axios({
      method: "POST",
      data: {
        user: userObj,
      },

      url: "/users/logout",
    });
    // const authRes = "invalid";
    authStatus = "invalid";
    // console.log("logout then", authRes);
    // checkAuth(authRes);
    // setUserAuth("invalid");
    // console.log("logout then", authRes);
    // localStorage.clear();
    localStorage.setItem("user", "none");
    localStorage.setItem("token", "");
    // window.location.href = "/";
    // props.history.push("/");
  }, []);

  return (
    <div className="padding">
      <h1 className="goodbye">
        Good Bye
        {/* Add timer to redirect */}
      </h1>
    </div>
  );
}
export default LogoutUser;
