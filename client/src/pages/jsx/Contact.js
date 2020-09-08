import React, { Component } from "react";
import { getUsers } from "../../resources/users";
// import { Link, Route } from "react-router-dom";
// import Table from "../../components/Table/Table.js";
// import Users from "../../resources/users";

class Contact extends Component {
  state = {
    users: getUsers(),//link up with atlas instead
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Organization Contact Page</h1>
        </div>
        <div className="row">
          <p>
            The table below renders dynamically from the
            client/resources/users.js seed file
          </p>
        </div>
        <div className="row">
          <div className="card col-12">
            <div className="card-body">
              <h4 className="card-title">Participating Organizations</h4>
              <table className="table table-striped table-sm">
                <thead>
                  <tr className="text-center">
                    <th scope="col">Organization</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                    <th scope="col">FB</th>
                    <th scope="col">Instagram</th>
                    <th scope="col">Twitter</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "10px" }}>
                  {this.state.users.map((user) => (
                    <tr>
                      <td>{user.organization}</td>
                      <td>{user.email}</td>
                      <a href={user.website} target="_blank">
                        <td>{user.website}</td>
                      </a>
                      <td>{user.facebook}</td>

                      <td>{user.instagram}</td>
                      <td>{user.twitter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
