import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../utils/API";

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
        <div className="row">
          <h1>Donate</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <SearchForm />
          </div>
          <div className="col-12">
            <Pagination />
          </div>
        </div>
        <div className="row">
          {links.map((link) => (
            <div className="col-12" key={link._id}>
              <div className="card mb-5">
                <div className="card-header">
                  <h4>Title: {link.title}</h4>
                </div>
                <div className="card-body">
                  <a href={link.src} className="btn btn-primary">
                    source: {link.src}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Donate;
