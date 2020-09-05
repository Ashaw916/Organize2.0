import React, { Component } from "react";
import "../css/Profile.css";
import Invite from "../../components/Invite/Invite.js";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { getUsers } from "../../resources/users";

class Profile extends Component {
  state = {
    users: getUsers(),
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Profile Page</h1>
          <div className="profile-wrapper">
            <div className="card" id="profile-container">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">
                    {this.state.users[0].organization}
                  </h1>
                  <p className="lead">PROFILE PAGE</p>
                </div>
              </div>

              {/* {this.state.users.map((user) => (
                <div>{user.organization}</div>
              ))} */}

              <div className="card-body">
                <h4>View and update your Organization's profile information</h4>

                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">WEBSITE: </th>
                      <th scope="col">{this.state.users[0].website}</th>
                      <th scope="col">
                        <span>
                          <input
                            type="url"
                            className="form-control col-6"
                            id="website"
                            aria-describedby="website"
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
                      <td>{this.state.users[0].facebook}</td>
                      <td>
                        <span>
                          <input
                            type="url"
                            className="form-control col-6"
                            id="facebook"
                            aria-describedby="facebook"
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
                      <td>{this.state.users[0].instagram}</td>
                      <td>
                        <span>
                          <input
                            type="text"
                            className="form-control col-6"
                            id="instagram"
                            aria-describedby="instagram"
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
                      <td>{this.state.users[0].twitter}</td>
                      <td>
                        <span>
                          <input
                            type="text"
                            className="form-control col-6"
                            id="twitter"
                            aria-describedby="twitter"
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
          <h1>Invite Another Organization</h1>
          <div className="card" id="invite-wrapper">
            <Invite />
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
