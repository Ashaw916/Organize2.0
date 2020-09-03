import React from "react";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <>
      <div className="card" id="profile-container">
        I am a ProfileCard Component
        <div className="row">
          <div className="user-image"></div>
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
