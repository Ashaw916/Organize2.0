import React, { useState, useEffect, useContext } from "react";
import "../css/Profile.css";
import Invite from "../../components/Invite/Invite.js";
import NavTabs from "../../components/NavTabs/NavTabs";
// import ProfileCard from "../../components/ProfileCard/ProfileCard";
import API from "../../utils/API";
import auth from "../../utils/Auth";
// import AuthContext from "../../utils/AuthContext";

//api call profile data for the logged in user
// the correct data is displayed using the auth function from utils folder
function Profile() {
  // let { authStatus } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  // console.log("profile authostatus:", authStatus);
  // const userObj = user[0];
  // console.log(email);
  // console.log("saular test", userObj);

  useEffect(() => {
    auth();
    // console.log(authStatus);
    API.getProfile()
      .then((res) => {
        setEmail(res.data.email);
        console.log(res.data.email);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavTabs />
      <div className="container">
        <div className="profile-wrapper">
          <div className="card" id="profile-container">
            <div className="jumbotron jumbotron-fluid" id="jumbo-card-top">
              <div className="container" id="profile-card-top">
                <h1 className="display-4">
                  {user.organization}
                  <span>
                    <p className="lead">PROFILE PAGE</p>
                  </span>
                </h1>
              </div>
            </div>

            <div className="card-body">
              <h4 id="profile-table-header">
                View and update your Organization's profile information
              </h4>

              <table
                className="table table-sm table-striped table-responsive"
                id="profile-table-all"
              >
                <thead></thead>
                <tbody>
                  <tr>
                    <th scope="row">WEBSITE: </th>
                    <td className="profile-table">
                      {user.website} www.socialorgfake.com
                    </td>
                    <td>
                      <input
                        type="url"
                        className="profile-form-input"
                        id="website"
                        aria-describedby="website"
                        placeholder="enter new url"
                      />
                    </td>
                    <td>
                      <button type="button" className="btn btn-add">
                        Update
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">FACEBOOK</th>
                    <td className="profile-table">
                      {user.facebook}Social Organizers Fake
                    </td>
                    <td>
                      <span>
                        <input
                          type="url"
                          className="profile-form-input"
                          id="facebook"
                          aria-describedby="facebook"
                          placeholder="enter new url"
                        />
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-add">
                        Update
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">INSTAGRAM</th>
                    <td className="profile-table">
                      {user.instagram}@socialorgFake
                    </td>
                    <td>
                      <span>
                        <input
                          type="text"
                          className="profile-form-input"
                          id="instagram"
                          aria-describedby="instagram"
                          placeholder="enter new @"
                        />
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-add">
                        Update
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">TWITTER</th>
                    <td className="profile-table">
                      {user.twitter}@socialorgFake
                    </td>
                    <td>
                      <span>
                        <input
                          type="text"
                          className="profile-form-input"
                          id="twitter"
                          aria-describedby="twitter"
                          placeholder="enter new @"
                        />
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-add">
                        Update
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card" id="invite-wrapper">
          <Invite />
        </div>
      </div>
    </>
  );
}
export default Profile;
