import React, { Component } from "react";
import "../css/Profile.css";
import Invite from "../../components/Invite/Invite.js";
import { getUsers } from "../../resources/users";
// import ProfileCard from "../../components/ProfileCard/ProfileCard";

class Profile extends Component {
  state = {
    users: getUsers(),
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="profile-wrapper">
            <div className="card" id="profile-container">
              <div className="jumbotron jumbotron-fluid" id="jumbo-card-top">
                <div className="container" id="profile-card-top">
                  <h1 className="display-4">
                    {this.state.users[0].organization}
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
                      <td>{this.state.users[0].website}</td>
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
                      <td>{this.state.users[0].facebook}</td>
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
                      <td>{this.state.users[0].instagram}</td>
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
                      <td>{this.state.users[0].twitter}</td>
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
}
export default Profile;
