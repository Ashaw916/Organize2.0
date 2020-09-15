import React from "react";
import "./AddDonationStyle.css";

function AddDonation({
  handleDonateInputChange,
  handleDonateSubmit,
  donateObject,
  donateErrors,
  donateSuccess,
  notDonateSubmitted
}) {
  return (
    <>
      <div className="card" id="add-donation-card">
        <div className="card-header">
          <h4 id="add-donation-header">Add Donation Recommendation</h4>
        </div>
        <div className="card-body">
          <form noValidate>
            <div className="form-group">
              <label htmlFor="title">Donation Resource</label>
              <input
                type="text"
                className={`form-control ${donateErrors.title ? "inputErr" : ""}`}
                id="title"
                placeholder="Title of Resource for Recommended Donation"
                name="donationTitle"
                onChange={handleDonateInputChange}
                value={donateObject.title || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Title of Resource for Recommended Donation</small>
              {donateErrors.title && (<p className="err">{donateErrors.title}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="description">Brief Description</label>
              <textarea
                className={`form-control ${donateErrors.description ? "inputErr" : ""}`}
                id="description"
                rows="1"
                name="description"
                onChange={handleDonateInputChange}
                value={donateObject.description || ""}
                required
              ></textarea>
              <small id="textHelp" className="form-text text-muted">Describe the Donation</small>
              {donateErrors.description && (<p className="err">{donateErrors.description}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="src">Donation url</label>
              <input
                type="text"
                className={`form-control ${donateErrors.src ? "inputErr" : ""}`}
                id="src"
                placeholder="Source Url"
                name="src"
                onChange={handleDonateInputChange}
                value={donateObject.src || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Source Url</small>
              {donateErrors.src && (<p className="err">{donateErrors.src}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="type">Donation Type</label>
              <input
                type="text"
                className={`form-control ${donateErrors.type ? "inputErr" : ""}`}
                id="type"
                placeholder="Type of Donation"
                name="type"
                onChange={handleDonateInputChange}
                value={donateObject.type || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Type of Donation</small>
              {donateErrors.type && (<p className="err">{donateErrors.type}</p>)}
            </div>
          </form>
          <button type="submit" className="btn btn-add" onClick={handleDonateSubmit}>
            Add
          </button>
          {donateSuccess && <div className="success">Submitted</div>}
          {notDonateSubmitted && <div className="notSubmitted">Not Submitted :(</div>}
          {/*another button that appears, disabling or making the add button disappear?*/}
        </div>
      </div>
    </>
  );
}

export default AddDonation;
