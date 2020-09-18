import React from "react";
import { Link, Route } from "react-router-dom";
import "../css/Admin.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import Registration from "../../components/Registration/Registration.js";
import Login from "../../components/Login/Login.js";

function Admin(props) {
  return (
    <>
      <NavTabs />
      <div className="container">
        <div className="row">
          <div className="col-12" id="admin-info">
            <h6>
              Administrators are by invitation only. If you received an
              invitation please register to set up your account.
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Login {...props} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Registration />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
