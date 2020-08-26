import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import PageWrapper from "./PageWrapper";

function Admin(props) {
  return (
    <div className="container">
      <PageWrapper />
      <h1>Admin Page</h1>
      <p>Login and registration stuff</p>
      <Link
        to={`${props.match.url}/learn`}
        role="button"
        className="btn btn-link"
      >
        Learn More
      </Link>{" "}
      <Link to="/admin" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Admin;
