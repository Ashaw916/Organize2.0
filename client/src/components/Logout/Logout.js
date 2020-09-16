import React, { useState, component, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./style.css";
import Axios from "axios";
import auth from "../PrivateRoutes/Auth";

function LogoutUser({ setUserAuth }) {
  console.log(setUserAuth);
  const userObj = JSON.stringify(localStorage.getItem("user"));
  setUserAuth("invalid");
  useEffect(() => {
    console.log("logout");
    Axios({
      method: "POST",
      data: {
        user: userObj,
      },

      url: "/users/logout",
    });

    // setUserAuth("invalid");
    console.log("logout then");
    // localStorage.clear();
    localStorage.setItem("user", "none");
    localStorage.setItem("token", "");
    // window.location.href = "/";
    // props.history.push("/");
  }, []);

  return (
    <Redirect to="/" />
    // <div className="padding">
    //   <h1 className="goodbye" onLoadedData={update}>
    //     {" "}
    //     Good Bye
    //   </h1>
    // </div>
    // );
  );
}
export default LogoutUser;
