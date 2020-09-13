import React, { useState, useEffect } from "react";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddResource from "../../components/AddResource/AddResource";
import AddDonation from "../../components/AddDonation/AddDonation";
import AddVideo from "../../components/AddVideo/AddVideo";
import API from "../../utils/API";
import eventValidation from "../../utils/EventValidation";
import articleValidation from "../../utils/ArticleValidation";
import videoValidation from "../../utils/VideoValidation";
// import linkValidation from "../../utils/LinkValidation";
import "../css/Manage.css";

////////////////////////////////// For Loading Events, Articles, Videos ///////////////////////////

function Manage() {
  // function Manage(props) {

  //states for events, articles, and videos
  const [getEvents, setGetEvents] = useState([]);
  const [getArticles, setGetArticles] = useState([]);
  const [getVideos, setGetVideos] = useState([]);
  const [getLinks, setGetLinks] = useState([]);

  //functions to load arrays of objects for the page
  function loadEvents() {
    API.getEvents()
      .then((res) => {
        setGetEvents(res.data);
      })
      .catch((err) => console.log(err));
  }
  //slices incoming iso date, so only get the date part
  function sliceDate(date) {
    return date.slice(0, 10);
  }

  function loadArticles() {
    API.getArticles()
      .then((res) => {
        setGetArticles(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadLinks() {
    API.getLinks()
      .then((res) => {
        console.log(res.data);
        setGetLinks(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadVideos() {
    API.getVideos()
      .then((res) => {
        setGetVideos(res.data);
      })
      .catch((err) => console.log(err));
  }
  // three indiviual use effects to load events, articles and videos
  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    loadLinks();
  }, []);

  useEffect(() => {
    loadVideos();
  }, []);

  //all three functions delete an event, article or video using the id for the document
  function deleteEvent(id) {
    API.deleteEvent(id)
      .then((res) => loadEvents())
      .catch((err) => console.log(err));
  }

  function deleteArticle(id) {
    // const accessTokenObj = JSON.stringify(localStorage.getItem("token"));
    // console.log(user);

    API.deleteArticle(id)
      .then((res) => loadArticles())
      .catch((err) => console.log(err));
  }

  function deleteLink(id) {
    API.deleteLink(id)
      .then((res) => loadLinks())
      .catch((err) => console.log(err));
  }

  function deleteVideo(id) {
    API.deleteVideo(id)
      .then((res) => loadVideos())
      .catch((err) => console.log(err));
  }

  //////////////////////// FOR EVENT FORM /////////////////////////

  const [eventObject, setEventObject] = useState({});
  const [eventErrors, setEventErrors] = useState({});
  //for showing a successful submission
  const [eventSuccess, setEventSuccess] = useState(false);
  //works with use effect, with checking errors, will start submit, and let user know
  const [isEventSubmitting, setIsEventSubmitting] = useState(false);
  //if an unsuccesful submission, will show an error to user
  const [notEventSubmitted, setNotEventSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(eventErrors).length === 0 && isEventSubmitting) {
      //function for api call
      submitEvent();
    }
  }, [eventErrors]);

  const handleEventInputChange = (e) => {
    const { name, value } = e.target;
    setEventObject({ ...eventObject, [name]: value });
  };

  function submitEvent() {
    console.log("submitted successfully!");

    const sDate = `${eventObject.start_date}T${eventObject.start_time}`;
    const eDate = `${eventObject.end_date}T${eventObject.end_time}`;

    console.log(sDate);
    console.log(eDate);

    ////////////////////////the path for url might work, test it out ---via atlas once
    API.saveEvent({
      title: eventObject.title,
      start_date: sDate,
      end_date: eDate,
      description: eventObject.description,
      location: eventObject.location,
      organization: eventObject.organization,
      event_url: "/events", //this might need to be a https url of the heroku address/events or this will need to be a click event in the calendar component
    })
      .then((res) => {
        loadEvents();
        setEventSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setNotEventSubmitted(true);
      });
    // RESET FORM HERE
    setEventObject({
      //add event_url if want it back, and uncomment out in validation and in addevent
      title: "",
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      organization: "",
      description: "",
      location: "",
    });

    setTimeout(() => {
      setEventSuccess(false);
    }, 1500);
  }

  const handleEventSubmit = (e) => {
    if (e) e.preventDefault();
    console.log("eventsubmit");
    setEventErrors(eventValidation(eventObject));
    setIsEventSubmitting(true);
  };

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
    setArticleObject({ ...articleObject, [name]: value });
  };

  function submitArticle() {
    console.log("submitted successfully!");

    API.saveArticle({
      title: articleObject.title,
      author: articleObject.author,
      body: articleObject.body,
      description: articleObject.description,
      source: articleObject.source_url,
      type: articleObject.type,
    })
      .then((res) => {
        loadArticles();
        setArticleSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setNotSubmitted(true);
      });
    //resets form
    setArticleObject({
      title: "",
      author: "",
      body: "",
      description: "",
      source: "",
      type: "",
    });

    setTimeout(() => {
      setArticleSuccess(false);
    }, 1500);
  }

  const handleArticleSubmit = (e) => {
    if (e) e.preventDefault();
    console.log("articlesubmit");
    setAritcleErrors(articleValidation(articleObject));
    setIsSubmitting(true);
  };

  //////////////////////////////////// For Videos Form ////////////////////////////////////

  const [videoObject, setVideoObject] = useState({});
  const [videoErrors, setVideoErrors] = useState({});
  //for showing a successful submission
  const [videoSuccess, setVideoSuccess] = useState(false);
  //works with use effect, with checking errors, will start submit, and let user know
  const [isVideoSubmitting, setIsVideoSubmitting] = useState(false);
  //if an unsuccesful submission, will show an error to user
  const [notVideoSubmitted, setNotVideoSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(videoErrors).length === 0 && isVideoSubmitting) {
      //function for api call
      submitVideo();
    }
  }, [videoErrors]);

  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setVideoObject({ ...videoObject, [name]: value });
  };

  function submitVideo() {
    console.log("submitted successfully!");

    API.saveVideo({
      title: videoObject.videoTitle,
      description: videoObject.videoDescription,
      src: videoObject.videoUrl,
      type: videoObject.videoType,
    })
      .then((res) => {
        loadVideos();
        setVideoSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setNotVideoSubmitted(true);
      });
    //resetsform
    setVideoObject({
      videoTitle: "",
      videoDescription: "",
      videoUrl: "",
      videoType: "",
    });

    setTimeout(() => {
      setVideoSuccess(false);
    }, 1500);
  }

  const handleVideoSubmit = (e) => {
    if (e) e.preventDefault();
    setVideoErrors(videoValidation(videoObject));
    setIsVideoSubmitting(true);
  };

  /////////////////////////////// Links Form //////////////////////////

  // const [videoObject, setVideoObject] = useState({});
  //   const [videoErrors, setVideoErrors] = useState({});
  //   //for showing a successful submission
  //   const [videoSuccess, setVideoSuccess] = useState(false);
  //   //works with use effect, with checking errors, will start submit, and let user know
  //   const [isVideoSubmitting, setIsVideoSubmitting] = useState(false);
  //   //if an unsuccesful submission, will show an error to user
  //   const [notVideoSubmitted, setNotVideoSubmitted] = useState(false);

  //   useEffect(() => {
  //     if (Object.keys(videoErrors).length === 0 && isVideoSubmitting) {
  //       //function for api call
  //       submitVideo();
  //     }
  //   }, [videoErrors]);

  //   const handleVideoInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setVideoObject({ ...videoObject, [name]:value });
  //   };

  //   function submitVideo() {
  //     console.log("submitted successfully!");
  //     //when successful, setArticleSuccess(true)
  //     //if unsuccesfful, setNotSubmitted(true)
  //     // API.saveVideo({
  //     //
  //     // }).then((res) => {
  //     //   loadVideos();
  //     //   setVideoSuccess(true);
  //     // }).catch((err) => {
  //     //   console.log(err);
  //     //   setNotVideoSubmitted(true);
  //     // });
  //     // //restform needed?

  //     // setTimeout(() => {
  //     //   setVideoSuccess(false);
  //     // }, 1200)

  //   };

  //   const handleVideoSubmit = (e) => {
  //     if (e) e.preventDefault();
  //     setVideoErrors(videoValidation(videoObject));
  //     setIsVideoSubmitting(true);
  //   };

  return (
    <>
      <div className="jumbotron jumbotron-fluid" id="manage-jumbo-container">
        <div className="container" id="jumbo-img-container">
          <h1 className="display-4">Manage</h1>
          <p className="lead" id="lead-text">
            Add and manage your Organization's posts
          </p>
        </div>
      </div>

      <div className="row" id="row-events">
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <AddEvent
            handleEventInputChange={handleEventInputChange}
            handleEventSubmit={handleEventSubmit}
            eventObject={eventObject}
            eventErrors={eventErrors}
            eventSuccess={eventSuccess}
            notEventSubmitted={notEventSubmitted}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card" id="post-events-card">
            <div className="card-header">
              <h4 id="post-events-header">Your Posted Events</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {getEvents.map((event) => (
                  <li className="list-group-item" key={event._id}>
                    {event.title}: {event.start_date}{" "}
                    <button
                      type="button"
                      className="btn btn btn-sm"
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

      <div className="row" id="row-articles">
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <AddResource
            handleArticleInputChange={handleArticleInputChange}
            handleArticleSubmit={handleArticleSubmit}
            articleObject={articleObject}
            articleErrors={articleErrors}
            articleSuccess={articleSuccess}
            notSubmitted={notSubmitted}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card" id="post-articles-card">
            <div className="card-header">
              <h4 id="post-articles-header">
                Your Posted Articles and Resources
              </h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {getArticles.map((article) => (
                  <li className="list-group-item" key={article._id}>
                    {article.title}
                    <button
                      type="button"
                      className="btn btn btn-sm"
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

      <div className="row" id="row-donations">
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <AddDonation />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card" id="post-donations-card">
            <div className="card-header">
              <h4 id="post-donations-header">Your Posted Donation Resources</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {getLinks.map((link) => (
                  <li className="list-group-item" key={link._id}>
                    {link.title}
                    <button
                      type="button"
                      className="btn btn btn-sm"
                      onClick={() => deleteLink(link._id)}
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

      <div className="row" id="row-videos">
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <AddVideo
            handleVideoInputChange={handleVideoInputChange}
            handleVideoSubmit={handleVideoSubmit}
            videoObject={videoObject}
            videoErrors={videoErrors}
            videoSuccess={videoSuccess}
            notVideoSubmitted={notVideoSubmitted}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card" id="post-videos-card">
            <div className="card-header">
              <h4 id="post-videos-header">Your Posted Videos</h4>
            </div>
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
    </>
  );
}

export default Manage;
