import React from "react";
//list resources
function ListResources() {
  return (
    <>
      <div className="card">
        <div className="card-header">Your posted Articles/Resources</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Resource 1</li>
          <li className="list-group-item">Resource 2</li>
          <li className="list-group-item">Resource 3</li>
        </ul>
      </div>
    </>
  );
}

export default ListResources;
