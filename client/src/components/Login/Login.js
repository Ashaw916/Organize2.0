import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";
function LoginUser({ checkAuth }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const [userAuthState, setUserAuthState] = useState({
  //   authState: "",
  // });
  let { authStatus } = useContext(AuthContext);

  let history = useHistory();

  const login = (e) => {
    e.preventDefault();
    console.log("login");

    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/users/login",
    }).then((response) => {
      if (response.data === "No User Exists") {
        alert("You are not registered");
      }
      if (response.data !== "No User Exists") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user);

        authStatus = "valid";
        // console.log("setUserAuthState");

        history.push("/profile");
      } else {
        history.push("/");
      }
    });
    // .then(
    //   () =>
    //     function checkAuth() {
    //       setUserAuthState({
    //         ...userAuthState,
    //         authState: "valid",
    //       });
    //     }
    // );
  };

  return (
    <>
      <div className="card" id="login-card">
        <div className="card-header">
          <h4 id="login-title">Login</h4>
        </div>
        <div className="card-body">
          <form id="login">
            <div className="form-group">
              <label htmlFor="loginEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setLoginUsername(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="loginInputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="loginInputPassword"
                placeholder="Password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-admin" onClick={login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
