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
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4>Some about us Heading here</h4>
            <p>Some about us verbiage so people know how to use our website</p>
          </div>
        </div>

        <div className="row">
          <div className="card col-xs-12 col-sm-12 col-md col-lg" id="tile">
            <div className="card-body">
              <h5 className="card-title">Community Resources</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div className="card col-xs-12 col-sm-12 col-md col-lg" id="tile">
            <div className="card-body">
              <h5 className="card-title">Video Links</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div className="card col-xs-12 col-sm-12 col-md col-lg" id="tile">
            <div className="card-body">
              <h5 className="card-title">Connect</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div className="card col-xs-12 col-sm-12 col-md col-lg" id="tile">
            <div className="card-body">
              <h5 className="card-title">Donate</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron-fluid mt-5">
          <div className="container">
            <Calendar events={event} />
          </div>
        </div>

        <div className="container" id="bottom-info">
          <div className="row">
            <div className="col">
              <h4>About us title</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <h6>Information Block 1</h6>
              <p>Information verbiage</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <h6>Information Block 2</h6>
              <p>Information verbiage</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <h6>Information Block 3</h6>
              <p>Information verbiage</p>
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
