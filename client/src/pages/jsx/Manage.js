import React, { useState, useEffect } from "react";
import AddResource from "../../components/AddResource/AddResource";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddVideo from "../../components/AddVideo/AddVideo";
import ListVideo from "../../components/ListVideo/ListVideo";
import API from "../../utils/API";
import eventValidation from "../../utils/EventValidation";

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
  //object of error messages (booleans to be set as true if triggered) for the different inputs
  const [errorObject, setErrorObject] = useState({})
  //to send a success message to the user after a successful submission
  const [success, setSuccess] = useState("");

  const [articleObject, setArticleObject] = useState({});
  const [articleErrors, setAritcleErrors] = useState({});
  //for showing a successful submission
  const [articleSuccess, setArticleSuccess] = useState(false);
  //works with use effect, with checking errors, will start submit, and let user know
  const [isSubmitting, setIsSubmitting] = useState(false);
  //if an unsuccesful submission, will show an error to user
  const [notSubmitted, setNotSubmitted] = useState(false);
  

  // function twelveHoursToTwentyFourHours(inputTime, amPm) {////////////////////this needs to be tested
  //   //concatenate variables to be fed into next set of lines
  //   var time = `${inputTime} ${amPm}`;

  //   var hours = Number(time.match(/^(\d+)/)[1]);
  //   var minutes = Number(time.match(/:(\d+)/)[1]);
  //   var AMPM = time.match(/\s(.*)$/)[1];

  //   if (AMPM == "pm" && hours < 12) hours = hours + 12;
  //   if (AMPM == "am" && hours == 12) hours = hours - 12;
  //   var sHours = hours.toString();
  //   var sMinutes = minutes.toString();
  //   if (hours < 10) sHours = "0" + sHours;
  //   if (minutes < 10) sMinutes = "0" + sMinutes;

  //   return sHours + ':' + sMinutes;
  // };

  // function isoDate(eventDate) {///////////////////////this needs to be tested too
  //   const date = new Date(eventDate);//takes in 10/01/1992
  //   const newDate = date.toISOString();//produces 1992-10-01T07:00:00.000Z
  //   return newDate.slice(0, 10);
  // };

  const validDateRegex = RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
  const validTimeRegex = RegExp(/^(0[0-9]|1[0-2]):[0-5][0-9]$/);
  const validUrl = RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

  

  useEffect(() => {
    if (Object.keys(articleErrors).length === 0 && isSubmitting) {
      //function for api call
      submitArticle();
    }
  }, [articleErrors]);

  const handleArticleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleObject({ ...articleObject, [name]:value });
  };

  function submitArticle() {
    console.log("submitted successfully!");
    //when successful, setArticleSuccess(true)
    //if unsuccesfful, setNotSubmitted(true)
    API.saveArticle({
      title: articleObject.title,
      author: articleObject.author,
      body: articleObject.body,
      description: articleObject.description,
      source: articleObject.source_url,
      type: articleObject.type
    }).then((res) => {
      loadArticles();
      setArticleSuccess(true);
    }).catch((err) => {
      console.log(err);
      setNotSubmitted(true);
    });
    //restform needed?

    setTimeout(() => {
      setArticleSuccess(false);
    }, 1200)

  };

  function validateArticles(values) {
    let errors = {};
    if(!values.title) {
      errors.title = "A title is required";
    } else if (values.title.length < 5) {
      errors.title = "Must be 5 or more characters long"
    }
    if (!values.author) {
      errors.author = "An author is required";
    } else if (values.author.length < 5) {
      errors.author = "Must be 5 or more characters long"
    }
    if (!values.body) {
      errors.body = "Hint: copy&paste";
    } else if (values.body.length < 20) {
      errors.body = "Must be 20 or more characters long"
    }
    if (!values.description) {
      errors.description = "Describe this in 15 characters or less";
    } else if (values.description.length < 15) {
      errors.description = "Must be 15 or more characters long"
    }
    if (!values.source_url) {
      errors.source_url = "A source url is required";
    } else if (!validUrl.test(values.source_url)) {
      errors.source_url = "Url is invalid"
    }
    if (!values.type) {
      errors.type = "Type of article is required";
    } else if (values.type.length < 5) {
      errors.type = "Must be 5 or more characters long"
    }
    return errors;
  };

  const handleArticleSubmit = (e) => {
    if (e) e.preventDefault();
    setAritcleErrors(validateArticles(articleObject));
    setIsSubmitting(true);
  };



    
    //if (any are empty (using || ) then error will appear, "required or red outline")

//     ///////for valid form
//     // const startTime = twelveHoursToTwentyFourHours(dateObject.start_time, dateObject.startAMPM);
//     // const endTime = twelveHoursToTwentyFourHours(dateObject.end_time, dateObject.endAMPM);
//     // const startDate = isoDate(dateObject.start_date);
//     // const endDate = isoDate(dateObject.end_date);
//     // const sDate = `${startDate}T${startTime}`;
//     // const eDate = `${endDate}T${endTime}`;
//     ///////////for valid form
//     //insert above values into the object for api call and 
//     // API.saveEvent({
//     //   title: ,
//     //   start_date: ,
//     //   end_date: ,
//     //   description: ,
//     //   location: ,
//     //   organization: ,
//     //   event_url: ,
//     //   date_added: ,
//     // })
//     // .then((res) => {
//     //   //resetform, clear inputs
//     //   //for formObject, do formObject.title = "", if it doesn't work then make an individual state for each
//     // })
//     // .catch((err) => console.log(err));
//   }

  ////////////////////////////////////// For Articles Form /////////////////////////////////

  const [articleObject, setArticleObject] = useState({});
  const [articleErrors, setAritcleErrors] = useState({});
  //for showing a successful submission
  const [articleSuccess, setArticleSuccess] = useState(false);
  //works with use effect, with checking errors, will start submit, and let user know
  const [isSubmitting, setIsSubmitting] = useState(false);
  //if an unsuccesful submission, will show an error to user
  const [notSubmitted, setNotSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(articleErrors).length === 0 && isSubmitting) {
      //function for api call
      submitArticle();
    }
  }, [articleErrors]);

  const handleArticleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleObject({ ...articleObject, [name]:value });
  };

  function submitArticle() {
    console.log("submitted successfully!");
    //when successful, setArticleSuccess(true)
    //if unsuccesfful, setNotSubmitted(true)
    API.saveArticle({
      title: articleObject.title,
      author: articleObject.author,
      body: articleObject.body,
      description: articleObject.description,
      source: articleObject.source_url,
      type: articleObject.type
    }).then((res) => {
      loadArticles();
      setArticleSuccess(true);
    }).catch((err) => {
      console.log(err);
      setNotSubmitted(true);
    });
    //restform needed?

    setTimeout(() => {
      setArticleSuccess(false);
    }, 1200)

  };

  function validateArticles(values) {
    let errors = {};
    if(!values.title) {
      errors.title = "A title is required";
    } else if (values.title.length < 5) {
      errors.title = "Must be 5 or more characters long"
    }
    if (!values.author) {
      errors.author = "An author is required";
    } else if (values.author.length < 5) {
      errors.author = "Must be 5 or more characters long"
    }
    if (!values.body) {
      errors.body = "Hint: copy&paste";
    } else if (values.body.length < 20) {
      errors.body = "Must be 20 or more characters long"
    }
    if (!values.description) {
      errors.description = "Describe this in 15 characters or less";
    } else if (values.description.length < 15) {
      errors.description = "Must be 15 or more characters long"
    }
    if (!values.source_url) {
      errors.source_url = "A source url is required";
    } else if (!validUrl.test(values.source_url)) {
      errors.source_url = "Url is invalid"
    }
    if (!values.type) {
      errors.type = "Type of article is required";
    } else if (values.type.length < 5) {
      errors.type = "Must be 5 or more characters long"
    }
    return errors;
  };

  const handleArticleSubmit = (e) => {
    if (e) e.preventDefault();
    setAritcleErrors(validateArticles(articleObject));
    setIsSubmitting(true);
  };

  //////////////////////////////////// For Videos Form ////////////////////////////////////

  const [articleObject, setArticleObject] = useState({});
  const [articleErrors, setAritcleErrors] = useState({});
  //for showing a successful submission
  const [articleSuccess, setArticleSuccess] = useState(false);
  //works with use effect, with checking errors, will start submit, and let user know
  const [isSubmitting, setIsSubmitting] = useState(false);
  //if an unsuccesful submission, will show an error to user
  const [notSubmitted, setNotSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(articleErrors).length === 0 && isSubmitting) {
      //function for api call
      submitArticle();
    }
  }, [articleErrors]);

  const handleArticleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleObject({ ...articleObject, [name]:value });
  };

  function submitArticle() {
    console.log("submitted successfully!");
    //when successful, setArticleSuccess(true)
    //if unsuccesfful, setNotSubmitted(true)
    API.saveArticle({
      title: articleObject.title,
      author: articleObject.author,
      body: articleObject.body,
      description: articleObject.description,
      source: articleObject.source_url,
      type: articleObject.type
    }).then((res) => {
      loadArticles();
      setArticleSuccess(true);
    }).catch((err) => {
      console.log(err);
      setNotSubmitted(true);
    });
    //restform needed?

    setTimeout(() => {
      setArticleSuccess(false);
    }, 1200)

  };

  function validateArticles(values) {
    let errors = {};
    if(!values.title) {
      errors.title = "A title is required";
    } else if (values.title.length < 5) {
      errors.title = "Must be 5 or more characters long"
    }
    if (!values.author) {
      errors.author = "An author is required";
    } else if (values.author.length < 5) {
      errors.author = "Must be 5 or more characters long"
    }
    if (!values.body) {
      errors.body = "Hint: copy&paste";
    } else if (values.body.length < 20) {
      errors.body = "Must be 20 or more characters long"
    }
    if (!values.description) {
      errors.description = "Describe this in 15 characters or less";
    } else if (values.description.length < 15) {
      errors.description = "Must be 15 or more characters long"
    }
    if (!values.source_url) {
      errors.source_url = "A source url is required";
    } else if (!validUrl.test(values.source_url)) {
      errors.source_url = "Url is invalid"
    }
    if (!values.type) {
      errors.type = "Type of article is required";
    } else if (values.type.length < 5) {
      errors.type = "Must be 5 or more characters long"
    }
    return errors;
  };

  const handleArticleSubmit = (e) => {
    if (e) e.preventDefault();
    setAritcleErrors(validateArticles(articleObject));
    setIsSubmitting(true);
  };




  return (
    <>
      <div className="container">
        <h1>Administration Management Page</h1>
        <div className="row">
          <div className="col-5 m-1">
            <AddEvent
              
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
              handleArticleInputChange={handleArticleInputChange}
              handleArticleSubmit={handleArticleSubmit}
              articleObject={articleObject}
              articleErrors={articleErrors}
              articleSuccess={articleSuccess}
              notSubmitted={notSubmitted}
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
