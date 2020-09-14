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
              <label htmlFor="donationTitle">Donation Resource</label>
              <input
                type="text"
                className={`form-control ${donateErrors.donationTitle ? "inputErr" : ""}`}
                id="donationTitle"
                placeholder="Title of Resource for Recommended Donation"
                name="donationTitle"
                onChange={handleDonateInputChange}
                value={donateObject.donationTitle || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Title of Resource for Recommended Donation</small>
              {donateErrors.donationTitle && (<p className="err">{donateErrors.donationTitle}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="donationDescription">Brief Description</label>
              <textarea
                className={`form-control ${donateErrors.donationDescription ? "inputErr" : ""}`}
                id="donationDescription"
                rows="1"
                name="donationDescription"
                onChange={handleDonateInputChange}
                value={donateObject.donationDescription || ""}
                required
              ></textarea>
              <small id="textHelp" className="form-text text-muted">Describe the Donation</small>
              {donateErrors.donationDescription && (<p className="err">{donateErrors.donationDescription}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="donationUrl">Donation url</label>
              <input
                type="text"
                className={`form-control ${donateErrors.donationUrl ? "inputErr" : ""}`}
                id="donationUrl"
                placeholder="Donation Url"
                name="donationUrl"
                onChange={handleDonateInputChange}
                value={donateObject.donationUrl || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Source Url</small>
              {donateErrors.donationUrl && (<p className="err">{donateErrors.donationUrl}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="donationType">Donation Type</label>
              <input
                type="text"
                className={`form-control ${donateErrors.donationType ? "inputErr" : ""}`}
                id="donationType"
                placeholder="Type of Donation"
                name="donationType"
                onChange={handleDonateInputChange}
                value={donateObject.donationType || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Type of Donation</small>
              {donateErrors.donationType && (<p className="err">{donateErrors.donationType}</p>)}
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
