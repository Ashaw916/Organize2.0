import React from "react";
import "../../pages/css/ResourceCard.css";

function ResourceCard(props) {
  return (
    <>
      <div className="col-2 mb-4" id="resource-image">
        Sidebar or images here
      </div>
      <div className="col-10 mb-4">
        <div className="card text-center">
          <div className="card-header">{props.author}</div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">{props.source}</a>
          </div>
          <div className="card-footer text-muted">{props.dateAdded}</div>
        </div>
      </div>
    </>
  );
}

export default ResourceCard;
