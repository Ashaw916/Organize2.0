import React from "react";
//list events
function ListEvents() {
  return (
    <>
      <div className="card">
        <div className="card-header">Your posted events</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Event 1</li>
          <li className="list-group-item">Event 2</li>
          <li className="list-group-item">Event 3</li>
        </ul>
      </div>
    </>
  );
}

export default ListEvents;
