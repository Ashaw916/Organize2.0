import React from "react";
import "../css/Profile.css";
import Invite from "../../components/Invite/Invite.js";

function Profile() {
  return (
    <>
      <div className="container">
        <h1>Profile Page</h1>

        <div className="card" id="profile-container">
          Area for user profile information
        </div>
        <h1>Invite Another Organization</h1>
        <div className="card" id="invite-wrapper">
          <Invite />
        </div>
      </div>
    </>
  );
}
export default Profile;
