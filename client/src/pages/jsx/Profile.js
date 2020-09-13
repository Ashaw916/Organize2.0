import React, { useState, useEffect } from "react";
import "../css/Profile.css";
import Invite from "../../components/Invite/Invite.js";
// import ProfileCard from "../../components/ProfileCard/ProfileCard";
import API from "../../utils/API";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    API.getProfile()
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [])
 
    return (
      <>
        <div className="container">
          <div className="profile-wrapper">
            <div className="card" id="profile-container">
              <div className="jumbotron jumbotron-fluid" id="jumbo-card-top">
                <div className="container" id="profile-card-top">
                  <h1 className="display-4">
                    {user.organization}
                  </h1>
                  <p className="lead">PROFILE PAGE</p>
                </div>
              </div>

              <div className="card-body">
                <h4>View and update your Organization's profile information</h4>

                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">WEBSITE: </th>
                      <th scope="col">{user.website}</th>
                      <th scope="col">
                        <span>
                          <input
                            type="url"
                            className="form-control col-6"
                            id="website"
                            aria-describedBy="website"
                            placeholder="enter new url"
                          />
                        </span>
                      </th>
                      <th scope="col">
                        <span>
                          <button type="button" className="btn btn-dark">
                            Update
                          </button>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">FACEBOOK</th>
                      <td>{user.facebook}</td>
                      <td>
                        <span>
                          <input
                            type="url"
                            className="form-control col-6"
                            id="facebook"
                            aria-describedBy="facebook"
                            placeholder="enter new url"
                          />
                        </span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-dark">
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
                            className="form-control col-6"
                            id="instagram"
                            aria-describedBy="instagram"
                            placeholder="enter new @"
                          />
                        </span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-dark">
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
                            className="form-control col-6"
                            id="twitter"
                            aria-describedBy="twitter"
                            placeholder="enter new @"
                          />
                        </span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-dark">
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
