import React, { useState, component, useEffect } from "react";
import "./style.css";
import Axios from "axios";
import NavTabs from "../../components/NavTabs/NavTabs";
// import auth from "../../utils/Auth";

function LogoutUser(props) {
  const userObj = JSON.stringify(localStorage.getItem("user"));

  useEffect(() => {
    console.log("logout");
    Axios({
      method: "POST",
      data: {
        user: userObj,
      },

      url: "/api/users/logout",
    });
    console.log("logout then");
    // localStorage.clear();
    localStorage.setItem("user", "null");
    localStorage.setItem("token", "");
    // window.location.href = "/";
    props.history.push("/");
  }, []);
  // function update() {
  //   this.forceUpdate();
  // }
  return (
    <>
      <NavTabs />
      <div className="padding">
        <h1 className="goodbye"> Good Bye</h1>
      </div>
    </>
  );
}

export default LogoutUser;
