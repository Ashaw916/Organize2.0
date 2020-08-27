import React from "react";
import { Link, Route } from "react-router-dom";

function Video(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <h1>Video Page</h1>
      </div>
      <div className="row">
        <div
          className="video-wrapper"
          style={{ height: "300px", backgroundColor: "#379683", width: "100%" }}
        >
          Video here
        </div>
      </div>

      <div className="row">
        <h2>Video Links Archive</h2>
      </div>
      <div className="row">
        <div className="col">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">
              Video Archive Links
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Dapibus ac facilisis in
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Morbi leo risus
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Porta ac consectetur ac
            </a>
            <a href="#" class="list-group-item list-group-item-action disabled">
              Vestibulum at eros
            </a>
          </div>
        </div>

        <div className="col">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">
              Video Archive Links
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Dapibus ac facilisis in
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Morbi leo risus
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Porta ac consectetur ac
            </a>
            <a href="#" class="list-group-item list-group-item-action disabled">
              Vestibulum at eros
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
