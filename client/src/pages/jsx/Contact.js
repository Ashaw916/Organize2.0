import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
// import Table from "../../components/Table/Table.js";
import API from "../../utils/API";
import "../css/Contact.css";
import Contactimg from "../../images/contactimg.png";

class Contact extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    API.getUserProfiles()
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="card col-12" id="contact-card">
              <div className="card-img-top">
                <img
                  class="card-img-top"
                  src={Contactimg}
                  alt="contact-img"
                  id="contact-img"
                />
                <h2 className="card-title" id="contact-title">
                  Participating Organizations
                </h2>
              </div>

              <div className="card-body" id="contact-body">
                <table className="table table-striped table-sm table-responsive">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Organization</th>
                      <th scope="col">Email</th>
                      <th scope="col">Web</th>
                      <th scope="col">FB</th>
                      <th scope="col">Insta</th>
                      <th scope="col">Twitter</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "10px" }}>
                    {this.state.users.map((user) => (
                      <tr>
                        <td className="contact-org">{user.organization}</td>
                        <td>{user.email}</td>
                        <a href={user.website} target="_blank" rel="noopener noreferrer">
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
      </>
    );
  }
}

export default Contact;
