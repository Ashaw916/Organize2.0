import React from "react";

function AddEvent() {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">I am an "AddEvent" Component</div>
        <div className="card-body">
          <h5 className="card-title">Add Event Here</h5>
          <p className="card-text">
            I need to add functionality to add a Event Title, location, date and
            time, url, text, record the date, and have it save to a db and
            render in the calendar
          </p>
          <a href="#" className="btn btn-primary">
            Do Something
          </a>
        </div>
        <div className="card-footer text-muted">Posted: 8-27-20</div>
      </div>
    </>
  );
}

export default AddEvent;
