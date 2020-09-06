import React from "react";
//add a disabled class for button for extra validation?
function AddEvent({  }) {
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
                <label for="event-title">Event Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="event-title"
                  placeholder="Event Title"
                  name="title"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="start_date">Start date</label>
                <input
                  type="text"
                  className="form-control"
                  id="start_date"
                  placeholder="MM/DD/YYYY"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="end_date">End Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="end_date"
                  placeholder="MM/DD/YYYY"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="start_time">Start time</label>
                <input
                  type="text"
                  className="form-control"
                  id="start_time"
                  placeholder="00:00"
                />
              </div>
              <div className="form-group col-md-2">
                <label for="am-pm"></label>
                <select className="custom-select " id="timeSelect">
                  <option selected></option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label for="end_time">End time</label>
                <input
                  type="text"
                  className="form-control"
                  id="end_time"
                  placeholder="00:00"
                />
              </div>
              <div className="form-group col-md-2">
                <label for="am-pm"></label>
                <select className="custom-select" id="timeSelect">
                  <option selected></option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-row">
                <div className="form-group col">
                  <label for="type">Sponsoring Organization</label>
                  <input
                    type="text"
                    className="form-control"
                    id="organization"
                    placeholder="Org Name"
                    name="organization"
                  />
                </div>
              </div>
              <div className="form-group col">
                <label for="source">Event(url)</label>
                <input
                  type="url"
                  className="form-control"
                  id="event_url"
                  placeholder="Website"
                  name="event_url"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="1"
                name="description"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="location">Location</label>
              <textarea
                className="form-control"
                id="location"
                rows="1"
                name="location"
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
