import React, { useEffect } from "react";
import AddResource from "../../components/AddResource/AddResource";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddVideo from "../../components/AddVideo/AddVideo";
import ListEvents from "../../components/ListEvents/ListEvents";
import ListResources from "../../components/ListResources/ListResources";
import ListVideo from "../../components/ListVideo/ListVideo";

function Manage() {
  // const [addEvent, setAddEvent] = useState({});

  // useEffect(() => {

  // });

  //concatenate date and time together? to create a javascript date object? to be read by calendar

  return (
    <>
      <div className="container">
        <h1>Administration Management Page</h1>
        <div className="row">
          <div className="col-5 m-1">
            <AddEvent />
          </div>
          <div className="col-6 m-1">
            <ListEvents />
          </div>
        </div>

        <div className="row">
          <div className="col-5 m-1">
            <AddResource />
          </div>
          <div className="col-6 m-1">
            <ListResources />
          </div>
        </div>

        <div className="row">
          <div className="col-5 m-1">
            <AddVideo />
          </div>
          <div className="col-6 m-1">
            <ListVideo />
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;
