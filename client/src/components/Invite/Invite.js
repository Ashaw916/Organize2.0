import React, { useState } from "react";
import Axios from "axios";

function Invite() {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteOrg, setInviteOrg] = useState("");
  const [host, setHost] = useState("");
  const invite = (e) => {
    e.preventDefault();
    console.log("invite");
    Axios({
      method: "POST",
      data: {
        email: inviteEmail,
        organization: inviteOrg,
        host: host,
      },
      withCredentials: true,
      url: "/users/invites",
    });
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          I am the Invite Component<h4>Invite Another User</h4>
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
            <button type="submit" className="btn btn-primary" onClick={invite}>
              Invite
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Invite;
