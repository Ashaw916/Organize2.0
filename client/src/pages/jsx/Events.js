import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../utils/API";
import "../css/Events.css";

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

  function splitDate(str) {
    return str.slice(5, 10);
  }

  function splitYear(str) {
    return str.slice(0, 4);
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

        <div className="container-events" id="events-wrapper">
          {events.map((event) => (
            <div
              className="card col-xs-6 col-sm-6 col-md-3 col-lg-3"
              id="event-cards-wrapper"
              key={event._id}
            >
              <div className="card-body" id="event-card">
                <h6 id="event-card-title">{event.title}</h6>
                <p className="event-card-ptag">
                  START DATE:{" "}
                  <span className="event-spantag">
                    {splitDate(event.start_date)}-{splitYear(event.start_date)}
                  </span>
                </p>
                <p className="event-card-ptag">
                  TIME:{" "}
                  <span className="event-spantag">{event.start_time}</span>
                </p>
                <p className="event-card-ptag">
                  LOCATION:{" "}
                  <span className="event-spantag">{event.location}</span>
                </p>
                <p className="event-card-ptag">
                  POSTED BY:{" "}
                  <span className="event-spantag">{event.organization}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
