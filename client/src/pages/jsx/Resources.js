import React from "react";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

function Resources() {
  return (
    <div className="container">
      <div className="row">
        <h1>Articles and Community Resources</h1>
      </div>
      <div className="row">
        <form className="form-inline">
          <div className="form-group mb-2">
            <label for="staticEmail2" className="sr-only">
              Email
            </label>
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail2"
              value="Search Articles"
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" className="sr-only">
              Type to search by term
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Type to search by term"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>

      <div className="card-wrapper">
        <ResourceCard />
      </div>
    </div>
  );
}

export default Resources;
