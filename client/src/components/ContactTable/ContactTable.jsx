import React, { Component } from "react";

class ContactTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    console.log(sortColumn);
    this.props.onSort(sortColumn);
  };

  render() {
    const { users } = this.props;
    return (
      <table className="table table-striped table-sm table-responsive">
        <thead>
          <tr className="text-center">
            <th scope="col" onClick={() => this.raiseSort("organization")}>
              Organization
            </th>
            <th scope="col" onClick={() => this.raiseSort("email")}>
              Email
            </th>
            <th scope="col" onClick={() => this.raiseSort("website")}>
              Web
            </th>
            <th scope="col" onClick={() => this.raiseSort("facebook")}>
              FB
            </th>
            <th scope="col" onClick={() => this.raiseSort("instagram")}>
              Insta
            </th>
            <th scope="col" onClick={() => this.raiseSort("twitter")}>
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
    );
  }
}

export default ContactTable;
