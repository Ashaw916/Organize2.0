import React from "react";
import "./AddEventStyle.css";

function AddEvent({ 
  handleEventInputChange,
  handleEventSubmit,
  eventObject,
  eventErrors,
  eventSuccess,
  notEventSubmitted
  }) {
  return (
    <>
      <div className="card" id="manage-add-event">
        <div className="card-header">
          <h4 className="card-title" id="add-event-title">
            Add Event
          </h4>
        </div>
        <div className="card-body">
          <form noValidate>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="event-title">Event Title</label>
                <input
                  type="text"
                  className={`form-control ${eventErrors.title ? "inputErr" : ""}`}
                  id="event-title"
                  placeholder="Event Title"
                  name="title"
                  onChange={handleEventInputChange}
                  value={eventObject.title || ""}
                  required
                />
                <small id="textHelp" className="form-text text-muted">MM/DD/YYYY</small>
                {eventErrors.title && (<p className="err">{eventErrors.title}</p>)}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="start_date">Start date</label>
                <input
                  type="date"
                  className={`form-control ${eventErrors.start_date ? "inputErr" : ""}`}
                  id="start_date"
                  name="start_date"
                  onChange={handleEventInputChange}
                  value={eventObject.start_date || ""}
                  required
                />
                <small id="textHelp" className="form-text text-muted">MM/DD/YYYY</small>
                {eventErrors.start_date && (<p className="err">{eventErrors.start_date}</p>)}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="end_date">End Date</label>
                <input
                  type="date"
                  className={`form-control ${eventErrors.end_date ? "inputErr" : ""}`}
                  id="end_date"
                  name="end_date"
                  onChange={handleEventInputChange}
                  value={eventObject.end_date || ""}
                  required
                />
                <small id="textHelp" className="form-text text-muted">MM/DD/YYYY</small>
                {eventErrors.end_date && (<p className="err">{eventErrors.end_date}</p>)}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="start_time">Start time</label>
                <input
                  type="time"
                  className={`form-control ${eventErrors.start_time ? "inputErr" : ""}`}
                  id="start_time"
                  name="start_time"
                  onChange={handleEventInputChange}
                  value={eventObject.start_time || ""}
                  required
                />
                <small id="textHelp" className="form-text text-muted">hh:mm (e.g. 01:00, 11:00)</small>
                {eventErrors.start_time && (<p className="err">{eventErrors.start_time}</p>)}
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="end_time">End time</label>
                <input
                  type="time"
                  className={`form-control ${eventErrors.end_time ? "inputErr" : ""}`}
                  id="end_time"
                  name="end_time"
                  onChange={handleEventInputChange}
                  value={eventObject.end_time || ""}
                  required
                />
                <small id="textHelp" className="form-text text-muted">hh:mm (e.g. 09:00, 12:00)</small>
                {eventErrors.end_time && (<p className="err">{eventErrors.end_time}</p>)}
              </div>
            </div>
            <div className="form-row">
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="type">Sponsoring Organization</label>
                  <input
                    type="text"
                    className={`form-control ${eventErrors.organization ? "inputErr" : ""}`}
                    id="organization"
                    placeholder="Organization Name"
                    name="organization"
                    onChange={handleEventInputChange}
                    value={eventObject.organization || ""}
                    required
                  />
                  <small id="textHelp" className="form-text text-muted">Name of Organization Hosting Event</small>
                  {eventErrors.organization && (<p className="err">{eventErrors.organization}</p>)}
                </div>
              </div>
              {/* <div className="form-group col">
                <label htmlFor="source">Event(url)</label>
                <input
                  type="url"
                  className={`form-control ${eventErrors.event_url ? "inputErr" : ""}`}
                  id="event_url"
                  placeholder="Url to Event"
                  name="event_url"
                  onChange={handleEventInputChange}
                  value={eventObject.event_url || ""}
                  required
                />
                <small id="textHelp" className="form-text text-muted">http(s)://website/page</small>
                {eventErrors.event_url && (<p className="err">{eventErrors.event_url}</p>)}
              </div> */}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className={`form-control ${eventErrors.description ? "inputErr" : ""}`}
                id="description"
                rows="1"
                name="description"
                onChange={handleEventInputChange}
                value={eventObject.description || ""}
                required
              ></textarea>
              <small id="textHelp" className="form-text text-muted">Describe this Event</small>
              {eventErrors.description && (<p className="err">{eventErrors.description}</p>)}
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <textarea
                className={`form-control ${eventErrors.location ? "inputErr" : ""}`}
                id="location"
                rows="1"
                name="location"
                onChange={handleEventInputChange}
                value={eventObject.location || ""}
                required
              ></textarea>
              <small id="textHelp" className="form-text text-muted">E.g. Sacramento, 2nd Street, etc.</small>
              {eventErrors.location && (<p className="err">{eventErrors.location}</p>)}
            </div>
            <button type="submit" className="btn btn-add" onClick={handleEventSubmit}>
              Add Event
            </button>
            {eventSuccess && <div className="success">Submitted</div>}
            {notEventSubmitted && <div className="notSubmitted">Not Submitted :(</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddEvent;
