import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              Video
            </Link>
          </li>
          <li class="nav-item">
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
          <li class="nav-item">
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
          {/* <li className="nav-item">
            <Link
              to="/contact/learn"
              className={
                location.pathname === "/contact/learn"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Learn
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
