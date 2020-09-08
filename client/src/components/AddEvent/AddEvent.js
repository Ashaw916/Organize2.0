import React from "react";
//add a disabled class for button for extra validation?
function AddEvent({ handleInputChange, handleAMPMInputChange, handleDateInputChange, handleDateInputChange }) {
  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          I am an "AddEvent" Component
          <h5 className="card-title">Add Event Here</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="event-title">Event Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="event-title"
                  placeholder="Event Title"
                  name="title"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="start_date">Start date</label>
                <input
                  type="text"
                  className="form-control"
                  id="start_date"
                  placeholder="MM/DD/YYYY"
                  name="start_date"
                  onChange={handleDateInputChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="end_date">End Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="end_date"
                  placeholder="MM/DD/YYYY"
                  name="end_date"
                  onChange={handleDateInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="start_time">Start time</label>
                <input
                  type="text"
                  className="form-control"
                  id="start_time"
                  placeholder="00:00"
                  name="start_time"
                  onChange={handleDateInputChange}
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="am-pm"></label>
                <select className="custom-select " id="timeSelect" name="startAMPM" onChange={handleDateInputChange}>
                  <option value=""></option>{/*put {} for the value, have an initial state of "" and when input changes it changes to match selected option, it resets to "" when form is submitted */}
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="end_time">End time</label>
                <input
                  type="text"
                  className="form-control"
                  id="end_time"
                  placeholder="00:00"
                  name="end_time"
                  onChange={handleDateInputChange}
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="am-pm"></label>
                <select className="custom-select" id="timeSelect" name="endAMPM" onChange={handleDateInputChange}>
                  <option value=""></option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="type">Sponsoring Organization</label>
                  <input
                    type="text"
                    className="form-control"
                    id="organization"
                    placeholder="Org Name"
                    name="organization"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col">
                <label htmlFor="source">Event(url)</label>
                <input
                  type="url"
                  className="form-control"
                  id="event_url"
                  placeholder="Website"
                  name="event_url"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="1"
                name="description"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <textarea
                className="form-control"
                id="location"
                rows="1"
                name="location"
                onChange={handleInputChange}
              ></textarea>
            </div>
            {/*add a disabled class for button? for extra validation?*/}
            <button type="submit" className="btn btn-primary">
              Add Event
            </button>
          </form>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </>
  );
}

export default AddEvent;
