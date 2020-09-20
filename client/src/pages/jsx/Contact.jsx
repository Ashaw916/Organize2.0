import React, { Component } from "react";
import ContactTable from "../../components/ContactTable/ContactTable";
import API from "../../utils/API";
import "../css/Contact.css";
import Contactimg from "../../images/contactimg.png";
import _ from "lodash";
import Table from "../../components/Table/Table";
import NavTabs from "../../components/NavTabs/NavTabs";
// displays a table of all contact information for each organization
class Contact extends Component {
  state = {
    users: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    API.getProfile()
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { sortColumn, users: allUsers } = this.state;

    const sorted = _.orderBy(allUsers, [sortColumn.path], [sortColumn.order]);

    const users = sorted;

    return (
      <>
        <NavTabs />
        <div className="container">
          <div className="row">
            <div className="card col-12" id="contact-card">
              <div className="card-img-top">
                <img
                  className="card-img-top"
                  src={Contactimg}
                  alt="contact-img"
                  id="contact-img"
                />
                <h2 className="card-title" id="contact-title">
                  Contact Participating Organizations
                </h2>
              </div>
              <div className="card-body" id="contact-body">
                <ContactTable
                  users={users}
                  sortColumn={sortColumn}
                  onSort={this.handleSort}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
