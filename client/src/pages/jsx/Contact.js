import React from "react";
import { Link, Route } from "react-router-dom";
import Table from "../../components/Table/Table.js";

function Contact(props) {
  return (
    <div className="container">
      <div className="row">
        <h1>Organization Contact Page</h1>
      </div>
      <div className="row">
        <p>Organization contact table renders here</p>
      </div>
      <div className="row">
        <Table />
      </div>
    </div>
  );
}

export default Contact;
