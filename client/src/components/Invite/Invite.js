import React, { useState } from "react";
import Axios from "axios";

function Invite(props) {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteOrg, setInviteOrg] = useState("");
  const [host, setHost] = useState("");

  const invite = (e) => {
    e.preventDefault();
    const accessTokenObj = JSON.stringify(localStorage.getItem("token"));
    console.log("token 1", accessTokenObj);
    console.log("invite");
    // console.log(props);
    Axios({
      method: "POST",
      data: {
        email: inviteEmail,
        organization: inviteOrg,
        host: host,
        token: accessTokenObj,
      },
      url: "/users/invites",
    }).then((response) => {
      console.log("res react", response.data);
      if (response.data === "Already invited") {
        alert("Already invited");
      } else {
        alert("Invite successful");
      }
    });
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 id="profile-invite-title">Invite Another Organization</h4>
        </div>
        <div className="card-body">
          <p>Please enter information for the user you would like to invite</p>
          <form id="invite">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                onChange={(e) => setInviteEmail(e.target.value)}
              />
            </div>

            <div className="form-group col-md-6">
              <input
                className="form-control"
                id="organization"
                placeholder="Please enter
          the name of the organization you would like to invite"
                onChange={(e) => setInviteOrg(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="exampleInputPassword1">Your Email</label>
              <input
                className="form-control"
                id="userEmail"
                placeholder="Please enter
          the email address associated with your account"
                onChange={(e) => setHost(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-add" onClick={invite}>
              Invite
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Invite;
