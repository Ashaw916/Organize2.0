import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    // Auth();
    // console.log("nav:", userAuth);

    // const Auth = () => {
    const userObj = JSON.stringify(localStorage.getItem("user"));
    // console.log("userObj", userObj);
    let userRes;
    Axios({
      method: "POST",
      data: {
        user: userObj,
      },
      url: "/auth",
    })
      .then((response) => {
        // console.log("res react", response.data);
        if (response.data === "valid") {
          let userRes = "valid";

          console.log("userRes1", userRes);
          return userRes;
        } else {
          let userRes = "invalid";
          console.log("userRes2", userRes);
          return userRes;
        }
      })
      .then((userRes) => {
        setUserAuth(userRes);
      });
    // };
  }, []);
  // console.log("after async", userAuth);
  if (userAuth === "valid") {
    console.log("auth success react", userAuth);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        Organize
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-list"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/events"
              className={
                location.pathname === "/events" ? "nav-link active" : "nav-link"
              }
            >
              Events
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/resources"
              className={
                location.pathname === "/resources"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Resources
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/donate"
              className={
                location.pathname === "/donate" ? "nav-link active" : "nav-link"
              }
            >
              Donate
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/video"
              className={
                location.pathname === "/video" ? "nav-link active" : "nav-link"
              }
            >
              Video
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin"
              className={
                userAuth === "invalid" ? "nav-link" : "nav-link hidden"
              }
            >
              Login/Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/manage"
              className={userAuth === "valid" ? "nav-link" : "nav-link hidden"}
            >
              Manage
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={userAuth === "valid" ? "nav-link" : "nav-link hidden"}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className={userAuth === "valid" ? "nav-link" : "nav-link hidden"}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
