import React, { useState, useEffect, useContext } from "react";
import "../css/Profile.css";
import Invite from "../../components/Invite/Invite.js";
import NavTabs from "../../components/NavTabs/NavTabs";
// import ProfileCard from "../../components/ProfileCard/ProfileCard";
import API from "../../utils/API";
import auth from "../../utils/Auth";
import AuthContext from "../../utils/AuthContext";

function Profile() {
  let { authStatus } = useContext(AuthContext);
  const [user, setUser] = useState({});
  // console.log("profile authostatus:", authStatus);
  useEffect(() => {
    auth();
    console.log(authStatus);
    API.getProfile()
      .then((res) => setUser(res.data))
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

              <table className="table table-sm table-striped table-responsive">
                <thead></thead>
                <tbody>
                  <tr>
                    <th scope="row">WEBSITE: </th>
                    <td>{user.website}</td>
                    <td>
                      <input
                        type="url"
                        className="profile-form-input"
                        id="website"
                        aria-describedBy="website"
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
                    <td>{user.facebook}</td>
                    <td>
                      <span>
                        <input
                          type="url"
                          className="profile-form-input"
                          id="facebook"
                          aria-describedBy="facebook"
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
                    <td>{user.instagram}</td>
                    <td>
                      <span>
                        <input
                          type="text"
                          className="profile-form-input"
                          id="instagram"
                          aria-describedBy="instagram"
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
                    <td>{user.twitter}</td>
                    <td>
                      <span>
                        <input
                          type="text"
                          className="profile-form-input"
                          id="twitter"
                          aria-describedBy="twitter"
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
