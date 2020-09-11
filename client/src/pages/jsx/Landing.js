import React, { useState, useEffect } from "react";
import "../css/Landing.css";
import Calendar from "../../components/Calendar/Calendar";
import API from "../../utils/API";
import { set } from "mongoose";

function Landing() {
  const [event, setEvent] = useState([]);

  //call api route to get all events
  function loadEvents() {
    API.getEvents()
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        const eventsArray = [];
        const events = res.data;
        for (let i = 0; i < events.length; i++) {
          const eventObj = {
            id: events[i]._id,
            groupId: events[i].organization,
            start: events[i].start_date,
            title: events[i].title,
            url: events[i].eventurl,
            description: events[i].description,
            extendedProps: {
              location: events[i].location,
            },
          };
          eventsArray.push(eventObj);
        }

        setEvent(eventsArray); //this is working now, but it's not turning up in calendar
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadEvents();
  });

  return (
    <>
      <div className="container">
        <div className="row" id="landing-r1">
          <div className="jumbotron jumbotron-fluid col" id="landing-jumbo">
            <div className="container" id="landing-jumbo-height">
              <h1 className="display-4" id="landing-header">
                Organize 2.0
              </h1>
              <p className="lead"></p>
            </div>
          </div>
        </div>

        <div className="row" id="landing-r2">
          <div className="col">
            <h4 id="jumbo-h4">
              Organize 2.0 <span className="color-span">||</span> Connect{" "}
              <span className="color-span">||</span> Share{" "}
              <span className="color-span">||</span> Mobilize
            </h4>
            <p>
              events, resources, and organizations that are changing our society
              for the better
            </p>
          </div>
        </div>

        <div className="row" id="landing-r3">
          <div className="card col-xs-12 col-sm-12 col-md col-lg" id="tile">
            <div className="card-body">
              <h5 className="card-title">Community Resources</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Articles and Resources
              </h6>
            </div>
          </div>

          <div className="card col-xs-12 col-sm-12 col-md col-lg" id="tile">
            <div className="card-body">
              <h5 className="card-title">Donate</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Organizations and Causes
              </h6>
            </div>
          </div>

          <div className="card col-xs-12 col-sm-12 col-md col-lg" id="tile">
            <div className="card-body">
              <h5 className="card-title">Video Links</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Live and Archived Streams
              </h6>
            </div>
          </div>
          <div className="card col-xs-12 col-sm-12 col-md col-lg" id="tile">
            <div className="card-body">
              <h5 className="card-title">Connect</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Connect to Contributors
              </h6>
            </div>
          </div>
        </div>

        <div className="row" id="landing-r4">
          <div className="jumbotron jumbotron-fluid col" id="calendar-jumbo">
            <div className="container">
              <Calendar events={event} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

/*
<h1 className="display-4">Display Calendar here</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
*/
/*
// 
*/
