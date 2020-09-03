import React, { useState } from "react";
import Axios from "axios";
import Manage from "../../pages/jsx/Manage";

function LoginUser() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    console.log("submit");
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/users/login",
    });
  };
  return (
    <>
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form id="login">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setLoginUsername(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={login}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
