import React from "react";
import AddResource from "../../components/AddResource/AddResource";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddVideo from "../../components/AddVideo/AddVideo";

function Manage() {
  return (
    <>
      <div className="container">
        <h1>Administration Management Page here</h1>
        <div className="row">
          <div className="col m-2">
            <AddResource />
          </div>
          <div className="col m-2">
            <AddEvent />
          </div>
        </div>
        <div className="row">
          <div className="col m-2">
            <AddVideo />
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;
