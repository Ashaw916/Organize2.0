import React, { useState } from "react";
import Axios from "axios";

function Invite() {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteOrg, setInviteOrg] = useState("");
  const invitation = (e) => {
    e.preventDefault();
    console.log("submit");
    Axios({
      method: "POST",
      data: {
        email: inviteEmail,
        organization: inviteOrg,
      },
      withCredentials: true,
      url: "/users/invite",
    }).then((res) => console.log(res));
  };
  return (
    <>
      <div className="card-header">
        I am the Invite Component<h4>Invite Another User</h4>
      </div>
      <div className="card-body">
        <p>Please enter information for the user you would like to invite</p>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              id="organization"
              placeholder="Please enter
          the name of the organization you would like to invite"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Invite;
