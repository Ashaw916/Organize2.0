import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        Organize 2.0
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
              fill-rule="evenodd"
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
                location.pathname === "/admin" ? "nav-link active" : "nav-link"
              }
            >
              Login/Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/manage"
              className={
                location.pathname === "/manage" ? "nav-link active" : "nav-link"
              }
            >
              Manage
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className={
                location.pathname === "/logout" ? "nav-link active" : "nav-link"
              }
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
