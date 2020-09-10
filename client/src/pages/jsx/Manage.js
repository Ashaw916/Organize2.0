import React, { useState, useEffect } from "react";
// import { getEvents, deleteEvent } from "../../resources/events";
// import { getArticles } from "../../resources/articles";
// import { getVideos } from "../../resources/videos";
import AddResource from "../../components/AddResource/AddResource";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddVideo from "../../components/AddVideo/AddVideo";

import ListVideo from "../../components/ListVideo/ListVideo";
import API from "../../utils/API";
import useDebounced from "../../utils/useDebounced";

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
        console.log(res.data);  //for the date, use toISOString for date and then slice it after the T and concatenate the returned 24hr time to it
        setGetEvents(res.data)
      })
      .catch((err) => console.log(err));
  };
//slices incoming iso date, so only get the date part
  function sliceDate(date) {
    return date.slice(0, 10);
  }

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

  //state object for form values
  const [formObject, setFormObject] = useState({});
  //to send a success message to the user after a successful submission
  const [success, setSuccess] = useState("");
  //object of error messages (booleans to be set as true if triggered) for the different inputs
  const [errorObject, setErrorObject] = useState({
    start_date: false,
    start_time: false,
    startAMPM: false,
    end_date: false,
    end_time: false,
    endAMPM: false,
    title: false,
    organization: false,
    event_url: false,
    description: false,
    location: false
  });

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
    const date = new Date(eventDate);//takes in 10/01/1992
    const newDate = date.toISOString();//produces 1992-10-01T07:00:00.000Z
    return newDate.slice(0, 10);
  };

  const validDateRegex = RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
  const validTimeRegex = RegExp(/^(0[0-9]|1[0-2]):[0-5][0-9]$/);
  const validUrl = RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

  //for grabbing the start time and end time values
  const handleInputChange = e => {
    const { name, value } = e.target;
//this works but when clicking into another input while another is still false, the error disappears
//wait i think it re-renders each time i click into it but then why does the error state reset but not the formObject
//i think the switch is the culprit
    switch (name) {
      case 'title':
        value.length > 5
        ? setErrorObject({ title: false }) : setErrorObject({ title: true });
        break;
      case 'organization':
        value.length > 5
        ? setErrorObject({ organization: false }) : setErrorObject({ organization: true });
        break;
      case 'event_url':
        validUrl.test(value)
        ? setErrorObject({ event_url: false }) : setErrorObject({ event_url: true })
        break;
      case 'description':
        value.length > 5
        ? setErrorObject({ description: false }) : setErrorObject({ description: true });
        break;
      case 'location':
        value.length > 5
        ? setErrorObject({ location: false }) : setErrorObject({ location: true });
        break;
      case 'start_date':
        validDateRegex.test(value)
          ? setErrorObject({ start_date: false }) : setErrorObject({ start_date: true });
        break;
      case 'end_date':
        validDateRegex.test(value)
          ? setErrorObject({ end_date: false }) : setErrorObject({ end_date: true });
        break;
      case 'start_time':
        validTimeRegex.test(value)
          ? setErrorObject({ start_time: false }) : setErrorObject({ start_time: true });
        break;
      case 'end_time':
        validTimeRegex.test(value)
          ? setErrorObject({ end_time: false }) : setErrorObject({ end_time: true });
        break;
      case 'startAMPM':
        value === "am" || value === "pm"
        ? setErrorObject({ startAMPM: false }) : setErrorObject({ startAMPM: true });
        break;
      case 'endAMPM':
        value === "am" || value === "pm"
        ? setErrorObject({ endAMPM: false }) : setErrorObject({ endAMPM: true });
        break;
      default:
        break;  
    }

    setFormObject({ ...formObject, [name]: value });
  };
//it stops at returns, try this - haven't tried it yet
//if can get error messages not to disappear, can use this
  // function validateFormErrors() {
  //   let valid = true;

  //   if (errorObject.start_time == true) {
  //     valid = false;
  //     setErrorObject({ start_time: true });
  //   }

  //   if (errorObject.end_time == true) {
  //     valid = false;
  //     setErrorObject({ end_time: true });
  //   } 

  //   // if (errorObject.end_date === false) {
  //   //   return valid;
  //   // } else {
  //   //   return valid = false;
  //   // }

  //   return valid;
  // };

/////////////////////////////////////////does not work

//all are firing, the console logs prove it but only one error is showing
//is the setState async? why is it going back to false after becoming true?
  function validateFormObject() {
    let valid = true;

    if (!formObject.start_time) {
      valid = false;
      console.log("no start time")//console logs are working
      setErrorObject({ start_time: true });
    } 

    if (!formObject.title) {
      valid = false;
      console.log("no title")
      setErrorObject({ title: true });
    } 

    if (!formObject.end_time) {
      valid = false;
      console.log("no end time")
      setErrorObject({ end_time: true });
    } 

    if (!formObject.start_date) {
      valid = false;
      console.log("no start date")
      setErrorObject({ start_date: true });
    } 

    if (!formObject.end_date) {
      valid = false;
      console.log("no end date");
      setErrorObject({ end_date: true });
    } 

    if (!formObject.startAMPM) {
      valid = false;
      console.log("no start ampm")
      setErrorObject({ startAMPM: true });
    } 

    if (!formObject.endAMPM) {
      valid = false;
      console.log("no end ampm")
      setErrorObject({ endAMPM: true });
    } 

    if (!formObject.organization) {
      valid = false;
      console.log("no organization")
      setErrorObject({ organization: true });
    } 

    if (!formObject.event_url) {
      valid = false;
      console.log("no url")
      setErrorObject({ event_url: true });
    } 
    
    if (!formObject.description) {
      valid = false;
      console.log("no description")
      setErrorObject({ description: true });
    } 

    if (!formObject.location) {
      valid = false;
      console.log("no location")
      setErrorObject({ location: true });
    } 

    return valid;
  };


  const handleFormSubmit = (e) => {///////insert validation, if else the heck out of it and then else= all the function callbacks
    e.preventDefault();

  // && validateFormObject(formObject)

    // if(validateFormErrors(errorObject)) {
    //   console.log("valid form");
    // } else {
    //   console.log("invalid form");
    // }

    if(validateFormObject()) {
      console.log("valid form");
    } else {
      console.log("invalid form");
    }
    

    //create a seperate error state that will be the same for every input
    //if (any are empty (using || ) then error will appear, "required or red outline")

    ///////for valid form
    // const startTime = twelveHoursToTwentyFourHours(dateObject.start_time, dateObject.startAMPM);
    // const endTime = twelveHoursToTwentyFourHours(dateObject.end_time, dateObject.endAMPM);
    // const startDate = isoDate(dateObject.start_date);
    // const endDate = isoDate(dateObject.end_date);
    // const sDate = `${startDate}T${startTime}`;
    // const eDate = `${endDate}T${endTime}`;
    ///////////for valid form
    //insert above values into the object for api call and 
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
              handleFormSubmit={handleFormSubmit}
              startAMPM={formObject.startAMPM}
              endAMPM={formObject.endAMPM}
              errorStartDate={errorObject.start_date}
              errorEndDate={errorObject.end_date}
              errorTitle={errorObject.title}
              errorStartTime={errorObject.start_time}
              errorEndTime={errorObject.end_time}
              errorStartAMPM={errorObject.startAMPM}
              errorEndAMPM={errorObject.endAMPM}
              errorOrganization={errorObject.organization}
              errorUrl={errorObject.event_url}
              errorDescription={errorObject.description}
              errorLocation={errorObject.location}
            />
          </div>
          <div className="col-6 m-1">
            <div className="card">
              <div className="card-header">Your posted events</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {getEvents.map((event) => (
                    <li className="list-group-item" key={event._id}>
                      {event.title}: {sliceDate(event.start_date)}{" "}
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
