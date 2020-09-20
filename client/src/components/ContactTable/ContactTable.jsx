import React, { Component } from "react";
//functional component for contact table on contact page
//when column names are clicked, the table is sorted by that column name
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
      <table
        className="table table-striped table table-responsive"
        id="contact-table"
      >
        <thead>
          <tr className="col">
            <th onClick={() => this.raiseSort("organization")}>Organization</th>
            <th onClick={() => this.raiseSort("email")}>Email</th>
            <th onClick={() => this.raiseSort("website")}>Web</th>
            <th onClick={() => this.raiseSort("facebook")}>FB</th>
            <th onClick={() => this.raiseSort("instagram")}>Insta</th>
            <th onClick={() => this.raiseSort("twitter")}>Twitter</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="contact-org">{user.organization}</td>
              <td className="contact-table-data">{user.email}</td>
              <td className="contact-table-data">{user.website}</td>
              <td className="contact-table-data">
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.facebook}
                </a>
              </td>
              <td className="contact-table-data">{user.instagram}</td>
              <td className="contact-table-data">{user.twitter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ContactTable;
