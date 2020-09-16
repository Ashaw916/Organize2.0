import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../utils/AuthContext";
import Axios from "axios";

const Auth = (props, user) => {
  const [state, dispatch] = useContext({ Context });
  const userObj = JSON.stringify(localStorage.getItem("user"));
  console.log("userObj", userObj);
  let userRes;
  Axios({
    method: "POST",
    data: {
      user: userObj,
    },
    url: "/auth",
  }).then((response) => {
    console.log("res react", response.data);
    if (response.data === "valid") {
      let userRes = response.data;
      console.log("if", userRes);
      //   return userRes;
      dispatch({ type: "USER_VALID", payload: userRes });
    } else {
      let userRes = response.data;
      console.log("else", userRes);
      //   return userRes;
      dispatch({ type: "USER_INVALID", payload: userRes });
    }
  });
  // .then((userRes) => {
  //   setUserAuth(userRes);
  //   console.log("setUserAuth", userRes);
  // });
};
export default Auth;
