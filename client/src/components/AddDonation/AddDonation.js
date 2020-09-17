import React from "react";
import "./AddDonationStyle.css";

function AddDonation({
  handleDonateInputChange,
  handleDonateSubmit,
  submitDonateUpdate,
  donateObject,
  donateErrors,
  donationUpdateErrors,
  donateSuccess,
  notDonateSubmitted,
  donateId
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
                className={`form-control ${donateErrors.title ? "inputErr" : donationUpdateErrors.title ? "inputErr" : ""}`}
                id="title"
                placeholder="Title of Resource for Recommended Donation"
                name="title"
                onChange={handleDonateInputChange}
                value={donateObject.title || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Title of Resource for Recommended Donation</small>
              {donateErrors.title && (<p className="err">{donateErrors.title}</p>)}
              {donationUpdateErrors.title && (<p className="err">{donationUpdateErrors.title}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="description">Brief Description</label>
              <textarea
                className={`form-control ${donateErrors.description ? "inputErr" : donationUpdateErrors.description ? "inputErr" : ""}`}
                id="description"
                rows="1"
                name="description"
                onChange={handleDonateInputChange}
                value={donateObject.description || ""}
                required
              ></textarea>
              <small id="textHelp" className="form-text text-muted">Describe the Donation</small>
              {donateErrors.description && (<p className="err">{donateErrors.description}</p>)}
              {donationUpdateErrors.description && (<p className="err">{donationUpdateErrors.description}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="url">Donation url</label>
              <input
                type="text"
                className={`form-control ${donateErrors.url ? "inputErr" : donationUpdateErrors.url ? "inputErr" : ""}`}
                id="url"
                placeholder="Source url"
                name="url"
                onChange={handleDonateInputChange}
                value={donateObject.url || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">e.g. https://www.example.com/page</small>
              {donateErrors.url && (<p className="err">{donateErrors.url}</p>)}
              {donationUpdateErrors.url && (<p className="err">{donationUpdateErrors.url}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="type">Donation Type</label>
              <input
                type="text"
                className={`form-control ${donateErrors.type ? "inputErr" : donationUpdateErrors.type ? "inputErr" : ""}`}
                id="type"
                placeholder="Type of Donation"
                name="type"
                onChange={handleDonateInputChange}
                value={donateObject.type || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Type of Donation</small>
              {donateErrors.type && (<p className="err">{donateErrors.type}</p>)}
              {donationUpdateErrors.type && (<p className="err">{donationUpdateErrors.type}</p>)}
            </div>
          </form>
          <button type="submit" className="btn btn-add" onClick={handleDonateSubmit} disabled={!(donateId.length === 0)}>
            Add
          </button>
          <button type="submit" className="btn btn-add" onClick={submitDonateUpdate} disabled={(donateId.length === 0)}>
            Update
          </button>
          {donateSuccess && <div className="success">Submitted</div>}
          {notDonateSubmitted && <div className="notSubmitted">Not Submitted :(</div>}
        </div>
      </div>
    </>
  );
}

export default AddDonation;
