import React from "react";

function AddDonation() {
  return (
    <>
      <div className="card" id="add-donation-card">
        <div className="card-header">
          <h4 id="add-donation-header">Add Donation Recommendation</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="donationTitle">Donation Resource</label>
              <input
                type="text"
                className="form-control"
                id="donationTitle"
                placeholder="Enter Resource for Recommended Donation"
              />
            </div>

            <div className="form-group">
              <label htmlFor="donationDescription">Brief Description</label>
              <textarea
                className="form-control"
                id="donationDescription"
                rows="1"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="donationUrl">Donation url</label>
              <input
                type="url"
                className="form-control"
                id="donationUrl"
                placeholder="Donation url"
              />
            </div>
          </form>
          <button type="submit" className="btn btn-add">
            Add
          </button>
          {/*another button that appears, disabling or making the add button disappear?*/}
        </div>
      </div>
    </>
  );
}

export default AddDonation;
