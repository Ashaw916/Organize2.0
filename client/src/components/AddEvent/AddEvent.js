import React from "react";

function AddEvent() {
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
                  placeholder="MM/DD/YY"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="end_date">End Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="end_date"
                  placeholder="MM/DD/YY"
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
                <label for="am-pm">AM/PM</label>
                <select className="custom-select " id="inlineFormCustomSelect">
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
                <label for="am-pm">AM/PM</label>
                <select className="custom-select " id="inlineFormCustomSelect">
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
                  />
                </div>
              </div>
              <div className="form-group col">
                <label for="source">Event Website(url)</label>
                <input type="text" className="form-control" id="event_url" />
              </div>
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="2"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="location">Location</label>
              <textarea
                className="form-control"
                id="location"
                rows="2"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </>
  );
}

export default AddEvent;
