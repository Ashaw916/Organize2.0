import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../utils/API";
import "../css/Donate.css";
import Donatejumbo from "../../images/donatejumbo.png";

function Donate() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    loadLinks();
  }, []);
  // Loads all donation links and sets them to links
  function loadLinks() {
    API.getLinks()
      .then((res) => setLinks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container">
        <div className="row"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h4 id="search-title">Search Donation Links</h4>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <SearchForm />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <Pagination />
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8" id="donate-img">
            <img className="donate-jumbo" src={Donatejumbo} />
            <div className="donate-jumbo-title">Donate Here</div>
          </div>
          <div className="col-2"></div>
        </div>

        {links.map((link) => (
          <div className="row">
            <div className="col-2" />
            <div className="col-8" key={link._id}>
              <div className="card col-12" id="donation-cards-wrapper">
                <a href={link.src} className="btn btn" target="_blank">
                  <div className="card-body" id="donate-card">
                    <h4>{link.title}</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-2" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Donate;
