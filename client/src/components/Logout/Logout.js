import React, { useState, component, useEffect } from "react";
import Axios from "axios";

function LogoutUser(props) {
  const userObj = JSON.stringify(localStorage.getItem("user"));
  console.log("token 1", userObj);
  console.log("invite");
  useEffect(() => {
    Axios({
      method: "POST",
      data: {
        user: userObj,
      },

      url: "/users/logout",
    }).then((response) => {
      console.log("logout", response);
      localStorage.clear();
      window.location.href = "/";
    });
  });
  return <h1>Good Bye</h1>;
}

export default LogoutUser;
