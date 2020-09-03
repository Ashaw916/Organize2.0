import React from "react";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <>
      <div className="card" id="profile-container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        I am a ProfileCard Component
        <div className="row">{/* <div className="user-image"></div> */}</div>
      </div>
    </>
  );
}
export default ProfileCard;
