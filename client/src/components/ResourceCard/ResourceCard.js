import React from "react";
import "../css/ResourceCard.css";

function ResourceCard(props) {
  return (
    <>
      <div className="row">
        <div className="col-2" id="resource-image">
          Sidebar or images here
        </div>
        <div className="col-10">
          <div className="card text-center">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceCard;
