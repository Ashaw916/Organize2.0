import React from "react";
import "./AddEventStyle.css";
//add a disabled class for button for extra validation?
function AddEvent(
  { handleInputChange, 
    handleFormSubmit,
    startAMPM,
    endAMPM, 
    errorStartDate,
    errorEndDate,
    errorTitle,
    errorStartTime,
    errorEndTime,
    errorOrganization,
    errorUrl,
    errorDescription,
    errorLocation,
    errorStartAMPM,
    errorEndAMPM
  }) {
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
                  className={`form-control ${errorTitle ? "inputErr" : ""}`}
                  id="event-title"
                  placeholder="Event Title"
                  name="title"
                  onChange={handleInputChange}
                />
                <small id="textHelp" className="form-text text-muted">MM/DD/YYYY</small>
                {errorTitle && <div className="err">More then five characters</div>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="start_date">Start date</label>
                <input
                  type="text"
                  className={`form-control ${errorStartDate ? "inputErr" : ""}`}
                  id="start_date"
                  placeholder="MM/DD/YYYY"
                  name="start_date"
                  onChange={handleInputChange}
                />
                <small id="textHelp" className="form-text text-muted">MM/DD/YYYY</small>
                {errorStartDate && <div className="err">Check Format</div>}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="end_date">End Date</label>
                <input
                  type="text"
                  className={`form-control ${errorEndDate ? "inputErr" : ""}`}
                  id="end_date"
                  placeholder="MM/DD/YYYY"
                  name="end_date"
                  onChange={handleInputChange}
                />
                <small id="textHelp" className="form-text text-muted">MM/DD/YYYY</small>
                {errorEndDate && <div className="err">Check Format</div>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="start_time">Start time</label>
                <input
                  type="text"
                  className={`form-control ${errorStartTime ? "inputErr" : ""}`}
                  id="start_time"
                  placeholder="00:00"
                  name="start_time"
                  onChange={handleInputChange}
                />
                <small id="textHelp" className="form-text text-muted">hh:mm (e.g. 01:00, 11:00)</small>
                {errorStartTime && <div className="err">Check Format</div>}
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="am-pm"></label>
                <select className={`custom-select ${errorStartAMPM ? "inputErr" : ""}`} id="timeSelect" name="startAMPM" onChange={handleInputChange}>
                  <option value={startAMPM}>Open this to Select AM/PM</option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
                <small id="textHelp" className="form-text text-muted">Choose One</small>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="end_time">End time</label>
                <input
                  type="text"
                  className={`form-control ${errorEndTime ? "inputErr" : ""}`}
                  id="end_time"
                  placeholder="00:00"
                  name="end_time"
                  onChange={handleInputChange}
                />
                <small id="textHelp" className="form-text text-muted">hh:mm (e.g. 09:00, 12:00)</small>
                {errorEndTime && <div className="err">Check Format</div>}
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="am-pm"></label>
                <select className={`custom-select ${errorEndAMPM ? "inputErr" : ""}`} id="timeSelect" name="endAMPM" onChange={handleInputChange}>
                  <option value={endAMPM}>Open this to Select AM/PM</option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
                <small id="textHelp" className="form-text text-muted">Choose One</small>
              </div>
            </div>
            <div className="form-row">
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="type">Sponsoring Organization</label>
                  <input
                    type="text"
                    className={`form-control ${errorOrganization ? "inputErr" : ""}`}
                    id="organization"
                    placeholder="Org Name"
                    name="organization"
                    onChange={handleInputChange}
                  />
                  <small id="textHelp" className="form-text text-muted">Name of your Organization</small>
                  {errorOrganization && <div className="err">Required</div>}
                </div>
              </div>
              <div className="form-group col">
                <label htmlFor="source">Event(url)</label>
                <input
                  type="url"
                  className={`form-control ${errorUrl ? "inputErr" : ""}`}
                  id="event_url"
                  placeholder="Website"
                  name="event_url"
                  onChange={handleInputChange}
                />
                <small id="textHelp" className="form-text text-muted">Url of Event</small>
                <small id="textHelp" className="form-text text-muted">http(s)://website/page</small>
                {errorUrl && <div className="err">Required</div>}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className={`form-control ${errorDescription ? "inputErr" : ""}`}
                id="description"
                rows="1"
                name="description"
                onChange={handleInputChange}
              ></textarea>
              <small id="textHelp" className="form-text text-muted">Describe this Event</small>
              {errorDescription && <div className="err">Required</div>}
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <textarea
                className={`form-control ${errorLocation ? "inputErr" : ""}`}
                id="location"
                rows="1"
                name="location"
                onChange={handleInputChange}
              ></textarea>
              <small id="textHelp" className="form-text text-muted">E.g. Sacramento, 2nd Street, etc.</small>
              {errorLocation && <div className="err">Required</div>}
            </div>
            <button 
            type="submit" 
            className="btn btn-primary" 
            >
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
