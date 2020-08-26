import React from "react";

function Landing() {
  return (
    <>
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4>Some about us Heading here</h4>
            <p>Some about us verbiage so people know how to use our website</p>
          </div>
        </div>

        <div className="row">
          <div className="card col-3">
            <div className="card-body">
              <h5 className="card-title">Community Resources</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div className="card col-3">
            <div className="card-body">
              <h5 className="card-title">Video Links</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div className="card col-3">
            <div className="card-body">
              <h5 className="card-title">Connect</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
          <div className="card col-3">
            <div className="card-body">
              <h5 className="card-title">Register/Login</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron-fluid mt-5">
          <div className="container">
            <h1 className="display-4">Display Calendar here</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>

        <div className="container" style={{ textAlign: "center" }}>
          <div className="row">
            <div className="col">
              <h4 style={{ textAlign: "center" }}>About us title</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <h6>Information Block 1</h6>
              <p>Information verbiage</p>
            </div>
            <div className="col-4">
              <h6>Information Block 2</h6>
              <p>Information verbiage</p>
            </div>
            <div className="col-4">
              <h6>Information Block 3</h6>
              <p>Information verbiage</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
