import React from "react";
import { Link, Route } from "react-router-dom";
import "../css/Admin.css";

import Registration from "../../components/Registration/Registration.js";
import Login from "../../components/Login/Login.js";

function Admin(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Admin Page</h1>
          <p>
            Administrators are by invitation only. If you have received an
            invitation please register to set up your account.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Login {...props} />
        </div>

        <div className="col">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default Admin;
