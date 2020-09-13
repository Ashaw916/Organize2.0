import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
// import Table from "../../components/Table/Table.js";
import API from "../../utils/API";
import "../css/Contact.css";
import Contactimg from "../../images/contactimg.png";

class Contact extends Component {
  state = {
    users: [],
    sortColumn: { path: "title", order: "asc" },
  };

  // componentDidMount() {
  //   const user = {
  //     email: "test@test.com",
  //   };
  //   this.setState((state) => {
  //     {
  //       state.users = { user };
  //     }
  //   });
  //   console.log(this.state);
  // }

  componentDidMount() {
    API.getProfiles()
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  };

  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { users } = this.state;

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
                      <th scope="col" onClick={() => this.raiseSort()}>
                        Organization
                      </th>
                      <th scope="col" onClick={() => this.raiseSort()}>
                        Email
                      </th>
                      <th scope="col" onClick={() => this.raiseSort()}>
                        Web
                      </th>
                      <th scope="col" onClick={() => this.raiseSort()}>
                        FB
                      </th>
                      <th scope="col" onClick={() => this.raiseSort()}>
                        Insta
                      </th>
                      <th scope="col" onClick={() => this.raiseSort()}>
                        Twitter
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "10px" }}>
                    {users.map((user) => (
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
