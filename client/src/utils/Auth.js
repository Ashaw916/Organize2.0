import React, { useState, useEffect, useContext } from "react";
// import AuthContext from "./utils/AuthContext";
import Axios from "axios";

const Auth = () => {
  const userObj = JSON.stringify(localStorage.getItem("user"));
  console.log("userObj", userObj);
  let userRes;
  Axios({
    method: "POST",
    data: {
      user: userObj,
    },
    url: "/api/auth",
  }).then((response) => {
    console.log("res react", response.data);
    if (response.data === "valid") {
      let userRes = response.data;
      console.log("if", userRes);
      // checkAuth("valid");
    } else {
      let userRes = response.data;
      console.log("else", userRes);
      // checkAuth("invalid");
    }
  });
};
export default Auth;
