import React, { useState, useEffect } from "react";
// import { getEvents, deleteEvent } from "../../resources/events";
// import { getArticles } from "../../resources/articles";
// import { getVideos } from "../../resources/videos";
import AddResource from "../../components/AddResource/AddResource";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddVideo from "../../components/AddVideo/AddVideo";

import ListVideo from "../../components/ListVideo/ListVideo";
import API from "../../utils/API";

function Manage() {

  ////////////////////////////////// For Loading Events, Articles, Videos ///////////////////////////
  //states for events, articles, and videos
  const [getEvents, setGetEvents] = useState([]);
  const [getArticles, setGetArticles] = useState([]);
  const [getVideos, setGetVideos] = useState([]);
  //functions to load arrays of objects for the page
  function loadEvents() {
    API.getEvents()
      .then((res) => {
        console.log(res.data);
        setGetEvents(res.data)
      })
      .catch((err) => console.log(err));
  };

  function loadArticles() {
    API.getArticles()
      .then((res) => {
        console.log(res.data);
        setGetArticles(res.data)
      })
      .catch((err) => console.log(err));
  };

  function loadVideos() {
    API.getVideos()
      .then((res) => {
        console.log(res.data);
        setGetVideos(res.data);
      })
      .catch((err) => console.log(err));
  };
  // three indiviual use effects to load events, articles and videos
  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    loadVideos();
  }, []);

  //all three functions delete an event, article or video using the id for the document
  function deleteEvent(id) {
    API.deleteEvent(id)
      .then(res => loadEvents())
      .catch(err => console.log(err));
  }

  function deleteArticle(id) {
    API.deleteArticle(id)
      .then(res => loadArticles())
      .catch(err => console.log(err));
  }

  function deleteVideo(id) {
    API.deleteVideo(id)
      .then(res => loadVideos())
      .catch(err => console.log(err));
  }


  //////////////////////// FOR EVENT FORM ///////////////////////// 

  //state for values that can go straight into state
  const [formObject, setFormObject] = useState({});
  //to hold values from the form before being altered
  const [dateObject, setDateObject] = useState({
    start_date: "",
    start_time: "",
    startAMPM: "",
    end_date: "",
    end_time: "",
    endAMPM: ""
  });
  //to hold the converted and concatenated start_date string for the db
  const [timeStartStr, setStartStr] = useState("");
  //to hold the converted and concatenated end_date string for the db
  const [timeEndStr, setEndStr] = useState("");
  //to send a success message to the user after a successful submission
  const [success, setSuccess] = useState("");
  // //to hold values from the form before being altered
  // const [endObject, setEndObject] = useState({
    
  // });
  //star_date ==> dateTtime(as 24hrs 00:00:00)
  //end_date ==> dateTtime(as 24hrs 00:00:00)
  //check to see how the date comes in as and if the calendar can parse it

  //same handleinputchange for start date, time and am/pm ==> concatenate all three values together and save into state (startDate)
  //for the date, use toISOString for date and then slice it after the T and concatenate the returned 24hr time to it
  function twelveHoursToTwentyFourHours(inputTime, amPm) {////////////////////this needs to be tested
    //concatenate variables to be fed into next set of lines
    var time = `${inputTime} ${amPm}`;

    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var AMPM = time.match(/\s(.*)$/)[1];

    if (AMPM == "pm" && hours < 12) hours = hours + 12;
    if (AMPM == "am" && hours == 12) hours = hours - 12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;

    return sHours + ':' + sMinutes;
  };

  function isoDate(eventDate) {///////////////////////this needs to be tested too
    const date = new Date(eventDate);
    return date.toISOString();
  };

  //for grabbing the start time and end time values
  const handleDateInputChange = e => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log(name);
    // console.log(value);
    setDateObject({ ...dateObject, [name]: value });
  };
  // //grab ampm option value
  // const handleAMPMInputChange = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(value);
  //   console.log(name);
  //   // setStartObject({...startObject, name:value});
  // };
  //another handleinputchange for end date, end time and am/pm ==> concatenate all three values together and save into state (endDate)
  // const handleEndInputChange = e => {
  //   const { name, value } = e.target;
  //   // const name = e.target.name;
  //   // const value = e.target.value;
  //   // console.log(name);
  //   // console.log(value);
  //   setEndObject({ ...endObject, [name]: value })
  // };
  //another handldinputchange for everything else that ...formObject, [name]:value through the rest of them
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };

  //cocatenate dates and times together with a T together
  //will need to convert 12hr times to 24 before concatenating
  // add validation here!
  handleFormSubmit = (e) => {//////////////////////////////////////////////test this as is first and then insert validation, if else the heck out of it and then else= all the function callbacks
    e.preventDefault();
    
    const startTime = twelveHoursToTwentyFourHours(dateObject.start_time, dateObject.startAMPM);
    const endTime = twelveHoursToTwentyFourHours(dateObject.end_time, dateObject.endAMPM);
    console.log(startTime);
    console.log(endTime);
    const startDate = isoDate(dateObject.start_date);
    const endDate = isoDate(dateObject.end_date);
    console.log(startDate);
    console.log(endDate);
    const sDate = `${startDate}T${startTime}`;
    const eDate = `${endDate}T${endTime}`;

    ///////////////////insert above values into the object for api call and 
    // API.saveEvent({
    //   title: ,
    //   start_date: ,
    //   end_date: ,
    //   description: ,
    //   location: ,
    //   organization: ,
    //   event_url: ,
    //   date_added: ,
    // })
    // .then((res) => {
    //   //resetform, clear inputs
    //   //for formObject, do formObject.title = "", if it doesn't work then make an individual state for each
    // })
    // .catch((err) => console.log(err));
  }

////////////////////////////////////// For Articles Form /////////////////////////////////

//////////////////////////////////// For Videos Form ////////////////////////////////////

  return (
    <>
      <div className="container">
        <h1>Administration Management Page</h1>
        <div className="row">
          <div className="col-5 m-1">
            <AddEvent
              handleInputChange={handleInputChange}
              // handleAMPMInputChange={handleAMPMInputChange}
              handleDateInputChange={handleDateInputChange}
              // handleEndInputChange={handleEndInputChange}
            />
          </div>
          <div className="col-6 m-1">
            <div className="card">
              <div className="card-header">Your posted events</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {getEvents.map((event) => (
                    <li className="list-group-item" key={event._id}>
                      {event.title}: {event.start_date}{" "}
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteEvent(event._id)}
                      >
                        Delete
                        </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-5 m-1">
            <AddResource 
            
            />
          </div>
          <div className="col-6 m-1">
            <div className="card">
              <div className="card-header">Your posted articles</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {getArticles.map((article) => (
                    <li className="list-group-item" key={article._id}>
                      {article.title}
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteArticle(article._id)}
                      >
                        Delete
                        </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-5 m-1">
            <AddVideo 
            
            />
          </div>
          <div className="col-6 m-1">
            <div className="card">
              <div className="card-header">Your posted videos</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {getVideos.map((video) => (
                    <li className="list-group-item" key={video._id}>
                      {video.title}
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteVideo(video._id)}
                      >
                        Delete
                        </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;
