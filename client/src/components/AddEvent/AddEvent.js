import React from "react";
//add a disabled class for button for extra validation?
function AddEvent({}) {
  return (
    <>
      <div className="card" id="manage-add-event">
        <div className="card-header">
          <h4 className="card-title" id="add-event-title">
            Add Event
          </h4>
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
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="start_date">Start date</label>
                <input type="date" className="form-control" id="start_date" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="end_date">End Date</label>
                <input type="date" className="form-control" id="end_date" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="start_time">Start time</label>
                <input
                  type="time"
                  className="form-control"
                  id="start_time"
                  placeholder="00:00"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="am-pm"></label>
                <select className="custom-select " id="timeSelect">
                  <option defaultValue></option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="end_time">End time</label>
                <input
                  type="time"
                  className="form-control"
                  id="end_time"
                  placeholder="00:00"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="am-pm"></label>
                <select className="custom-select" id="timeSelect">
                  <option defaultValue></option>
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
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <textarea
                className="form-control"
                id="location"
                rows="1"
                name="location"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-add">
              Add Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddEvent;
