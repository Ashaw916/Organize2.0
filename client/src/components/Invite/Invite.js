import React from "react";

function Invite() {
  return (
    <>
      <div className="card-header">
        I am the Invite Component<h4>Invite Another User</h4>
      </div>
      <div className="card-body">
        <p>Please enter information for the user you would like to invite</p>
        <form>
          <div className="form-group">
            <label HTMLFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label HTMLFor="organization">Organization Name</label>
            <input
              className="form-control"
              id="organization"
              placeholder="Please enter the name of the organization you would like to invite"
            />
          </div>
          <button type="button" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Invite;
