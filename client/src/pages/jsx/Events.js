import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../utils/API";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);
  // Loads all donation links and sets them to links
  function loadEvents() {
    API.getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container">
        <div className="row"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h4 id="search-title">Search Events</h4>
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
          <div className="col-8" id="events-img">
            <div className="events-jumbo-title">Events</div>
          </div>
          <div className="col-2"></div>
        </div>

        {events.map((event) => (
          <div className="row">
            <div className="col-2" />
            <div className="col-8" key={event._id}>
              <div className="card col-12" id="donation-cards-wrapper">
                <a href={event.src} className="btn btn" target="_blank">
                  <div className="card-body" id="donate-card">
                    <h4>{event.title}</h4>
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

export default Events;
