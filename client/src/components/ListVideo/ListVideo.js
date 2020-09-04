import React from "react";

function ListVideo() {
  return (
    <>
      <div className="card">
        <div className="card-header">Your posted Videos</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Video 1</li>
          <li className="list-group-item">Video 2</li>
          <li className="list-group-item">Video 3</li>
        </ul>
      </div>
    </>
  );
}

export default ListVideo;
