import React, { useState, useEffect } from "react";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddResource from "../../components/AddResource/AddResource";
import AddDonation from "../../components/AddDonation/AddDonation";
import AddVideo from "../../components/AddVideo/AddVideo";
import API from "../../utils/API";
import eventValidation from "../../utils/EventValidation";
import articleValidation from "../../utils/ArticleValidation";
import videoValidation from "../../utils/VideoValidation";
import donateValidation from "../../utils/DonateValidation";
import "../css/Manage.css";
import NavTabs from "../../components/NavTabs/NavTabs";

////////////////////////////////// For Loading Events, Articles, Videos ///////////////////////////

function Manage() {
  let userObj = JSON.stringify(localStorage.getItem("user"));
  const userObjId = userObj.slice(1, -1);

  //states for events, articles, and videos
  const [getEvents, setGetEvents] = useState([]);
  const [getArticles, setGetArticles] = useState([]);
  const [getVideos, setGetVideos] = useState([]);
  const [getDonations, setGetDonations] = useState([]);

  //functions to load arrays of objects for the page
  function loadEvents() {
    API.getEvents()
      .then((res) => {
        console.log(res.data);
        setGetEvents(res.data);
      })
      .catch((err) => console.log(err));
  }
  //slices incoming iso date, so only get the date part
  function splitDate(str) {
    return str.slice(5, 10);
  }

  function splitYear(str) {
    return str.slice(0, 4);
  }

  function loadArticles() {
    API.getArticles()
      .then((res) => {
        setGetArticles(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadDonations() {
    API.getLinks()
      .then((res) => {
        setGetDonations(res.data);
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
    loadDonations();
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
    API.deleteArticle(id)
      .then((res) => loadArticles())
      .catch((err) => console.log(err));
  }

  function deleteDonation(id) {
    API.deleteLink(id)
      .then((res) => loadDonations())
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
  //holds errors when updating a donation link
  const [eventUpdateErrors, setEventUpdateErrors] = useState({});
  //holds id to request one donate document
  const [eventId, setEventId] = useState("");
  //works with useEffect for updating entry, works with checking errors while updating
  const [isEventUpdating, setIsEventUpdating] = useState(false);

  useEffect(() => {
    if (Object.keys(eventErrors).length === 0 && isEventSubmitting) {
      //function for api call
      submitEvent();
    }
  }, [eventErrors]);

  //triggers when erros object keys have length of 0 when submitting an update to an already existing donation
  useEffect(() => {
    if (Object.keys(eventUpdateErrors).length === 0 && isEventUpdating) {
      //function for PUT api call
      updateEvent();
    }
  }, [eventUpdateErrors]);

  function splitDBDate(obj) {
    const startISODate = obj.start_date;
    const endISODate = obj.end_date;

    const dbSDate = startISODate.split("T");
    const dbEDate = endISODate.split("T");
    const sDateOnly = dbSDate[0];
    const sTimeOnly = dbSDate[1];
    const eDateOnly = dbEDate[0];
    const eTimeOnly = dbEDate[1];

    setEventObject({
      title: obj.title,
      start_date: sDateOnly,
      end_date: eDateOnly,
      start_time: sTimeOnly,
      end_time: eTimeOnly,
      organization: obj.organization,
      description: obj.description,
      location: obj.location,
    });
  }

  function getOneEvent(id) {
    API.getEvent(id)
      .then((res) => {
        splitDBDate(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleEventInputChange = (e) => {
    const { name, value } = e.target;
    setEventObject({ ...eventObject, [name]: value });
  };

  function submitEvent() {
    const sDate = `${eventObject.start_date}T${eventObject.start_time}`;
    const eDate = `${eventObject.end_date}T${eventObject.end_time}`;

    API.saveEvent({
      title: eventObject.title,
      start_date: sDate,
      end_date: eDate,
      description: eventObject.description,
      location: eventObject.location,
      organization: eventObject.organization,
      event_url: "/events",
      user: userObjId,
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
    }, 2300);

    setTimeout(() => {
      setNotEventSubmitted(false);
    }, 23000);
  }

  function updateEvent() {
    const sUpdateDate = `${eventObject.start_date}T${eventObject.start_time}`;
    const eUpdateDate = `${eventObject.end_date}T${eventObject.end_time}`;

    API.updateEvent(eventId, {
      title: eventObject.title,
      start_date: sUpdateDate,
      end_date: eUpdateDate,
      description: eventObject.description,
      location: eventObject.location,
      organization: eventObject.organization,
      event_url: "/events",
    })
      .then((res) => {
        loadEvents();
        setEventSuccess(true);
        setEventId("");
      })
      .catch((err) => {
        console.log(err);
        setNotEventSubmitted(true);
        setEventId("");
      });

    //resets form
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
    }, 2300);

    setTimeout(() => {
      setNotEventSubmitted(false);
    }, 23000);
  }

  const handleEventSubmit = (e) => {
    if (e) e.preventDefault();
    setEventErrors(eventValidation(eventObject));
    setIsEventSubmitting(true);
  };

  //listens for click of 'edit' button and grabs id for a donation link that already exists
  const updatingEvent = (id) => {
    console.log(id);
    //save the id to a state, that id is passed to api call via useeffect
    setEventId(id);
    getOneEvent(id);
  };
  //handles the click of the update button in the form
  const submitEventUpdate = (e) => {
    if (e) e.preventDefault();
    setEventUpdateErrors(eventValidation(eventObject));
    setIsEventUpdating(true);
  };

  ////////////////////////////////////// For Articles Form /////////////////////////////////

  const [articleObject, setArticleObject] = useState({});
  const [articleErrors, setArticleErrors] = useState({});
  //for showing a successful submission
  const [articleSuccess, setArticleSuccess] = useState(false);
  //works with use effect, with checking errors, will start submit, and let user know
  const [isSubmitting, setIsSubmitting] = useState(false);
  //if an unsuccesful submission, will show an error to user
  const [notSubmitted, setNotSubmitted] = useState(false);
  //holds errors when updating a donation link
  const [articleUpdateErrors, setArticleUpdateErrors] = useState({});
  //holds id to request one donate document
  const [articleId, setArticleId] = useState("");
  //works with useEffect for updating entry, works with checking errors while updating
  const [isArticleUpdating, setIsArticleUpdating] = useState(false);

  useEffect(() => {
    if (Object.keys(articleErrors).length === 0 && isSubmitting) {
      //function for api call
      submitArticle();
    }
  }, [articleErrors]);

  //triggers when erros object keys have length of 0 when submitting an update to an already existing donation
  useEffect(() => {
    if (Object.keys(articleUpdateErrors).length === 0 && isArticleUpdating) {
      //function for PUT api call
      updateArticle();
    }
  }, [articleUpdateErrors]);

  useEffect(() => {
    API.getArticle(articleId)
      .then((res) => {
        console.log(res.data);
        setArticleObject(res.data);
      })
      .catch((err) => console.log(err));
  }, [articleId]);

  const handleArticleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleObject({ ...articleObject, [name]: value });
  };

  function submitArticle() {
    API.saveArticle({
      title: articleObject.title,
      author: articleObject.author,
      body: articleObject.body,
      description: articleObject.description,
      source: articleObject.source,
      type: articleObject.type,
      user: userObjId,
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
    }, 2300);

    setTimeout(() => {
      setNotSubmitted(false);
    }, 23000);
  }

  function updateArticle() {
    API.updateArticle(articleId, {
      title: articleObject.title,
      author: articleObject.author,
      body: articleObject.body,
      description: articleObject.description,
      source: articleObject.source,
      type: articleObject.type,
    })
      .then((res) => {
        loadArticles();
        setArticleSuccess(true);
        setArticleId("");
      })
      .catch((err) => {
        console.log(err);
        setNotSubmitted(true);
        setArticleId("");
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
    }, 2300);

    setTimeout(() => {
      setNotSubmitted(false);
    }, 23000);
  }

  const handleArticleSubmit = (e) => {
    if (e) e.preventDefault();
    setArticleErrors(articleValidation(articleObject));
    setIsSubmitting(true);
  };

  //listens for click of 'edit' button and grabs id for a donation link that already exists
  const updatingArticle = (id) => {
    //save the id to a state, that id is passed to api call via useeffect
    setArticleId(id);
  };
  //handles the click of the update button in the form
  const submitArticleUpdate = (e) => {
    if (e) e.preventDefault();
    setArticleUpdateErrors(articleValidation(articleObject));
    setIsArticleUpdating(true);
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
  //holds errors when updating a donation link
  const [videoUpdateErrors, setVideoUpdateErrors] = useState({});
  //holds id to request one donate document
  const [videoId, setVideoId] = useState("");
  //works with useEffect for updating entry, works with checking errors while updating
  const [isVideoUpdating, setIsVideoUpdating] = useState(false);

  useEffect(() => {
    if (Object.keys(videoErrors).length === 0 && isVideoSubmitting) {
      //function for api call
      submitVideo();
    }
  }, [videoErrors]);
  //triggers when erros object keys have length of 0 when submitting an update to an already existing donation
  useEffect(() => {
    if (Object.keys(videoUpdateErrors).length === 0 && isVideoUpdating) {
      //function for PUT api call
      updateVideo();
    }
  }, [videoUpdateErrors]);

  useEffect(() => {
    API.getVideo(videoId)
      .then((res) => {
        setVideoObject(res.data);
      })
      .catch((err) => console.log(err));
  }, [videoId]);

  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setVideoObject({ ...videoObject, [name]: value });
  };

  function submitVideo() {
    API.saveVideo({
      title: videoObject.title,
      description: videoObject.description,
      src: videoObject.src,
      type: videoObject.type,
      user: userObjId,
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
      title: "",
      description: "",
      src: "",
      type: "",
    });

    setTimeout(() => {
      setVideoSuccess(false);
    }, 2300);

    setTimeout(() => {
      setNotVideoSubmitted(false);
    }, 23000);
  }

  function updateVideo() {
    API.updateVideo(videoId, {
      title: videoObject.title,
      description: videoObject.description,
      src: videoObject.src,
      type: videoObject.type,
    })
      .then((res) => {
        loadVideos();
        setVideoSuccess(true);
        setVideoId("");
      })
      .catch((err) => {
        console.log(err);
        setNotVideoSubmitted(true);
        setVideoId("");
      });

    //resets form
    setVideoObject({
      title: "",
      description: "",
      src: "",
      type: "",
    });

    setTimeout(() => {
      setVideoSuccess(false);
    }, 2300);

    setTimeout(() => {
      setNotVideoSubmitted(false);
    }, 23000);
  }

  const handleVideoSubmit = (e) => {
    if (e) e.preventDefault();
    setVideoErrors(videoValidation(videoObject));
    setIsVideoSubmitting(true);
  };

  //listens for click of 'edit' button and grabs id for a donation link that already exists
  const updatingVideo = (id) => {
    //save the id to a state, that id is passed to api call via useeffect
    setVideoId(id);
  };
  //handles the click of the update button in the form
  const submitVideoUpdate = (e) => {
    if (e) e.preventDefault();
    setVideoUpdateErrors(videoValidation(videoObject));
    setIsVideoUpdating(true);
  };

  /////////////////////////////// Donate Form //////////////////////////

  const [donateObject, setDonateObject] = useState({});
  const [donateErrors, setDonateErrors] = useState({});
  //for showing a successful submission
  const [donateSuccess, setDonateSuccess] = useState(false);
  //works with use effect, with checking errors, will start submit
  const [isDonateSubmitting, setIsDonateSubmitting] = useState(false);
  //if an unsuccesful submission, will show an error to user
  const [notDonateSubmitted, setNotDonateSubmitted] = useState(false);
  //holds errors when updating a donation link
  const [donationUpdateErrors, setDonationUpdateErrors] = useState({});
  //holds id to request one donate document
  const [donateId, setDonateId] = useState("");
  //works with useEffect for updating entry, works with checking errors while updating
  const [isDonationUpdating, setIsDonationUpdating] = useState(false);

  //triggers when erros object keys have length of 0 when submitting a new donation
  useEffect(() => {
    if (Object.keys(donateErrors).length === 0 && isDonateSubmitting) {
      //function for api call
      submitDonate();
    }
  }, [donateErrors]);

  //triggers when erros object keys have length of 0 when submitting an update to an already existing donation
  useEffect(() => {
    if (Object.keys(donationUpdateErrors).length === 0 && isDonationUpdating) {
      //function for PUT api call
      updateDonation();
    }
  }, [donationUpdateErrors]);

  useEffect(() => {
    API.getLink(donateId)
      .then((res) => {
        console.log(res.data);
        setDonateObject(res.data);
      })
      .catch((err) => console.log(err));
  }, [donateId]);

  const handleDonateInputChange = (e) => {
    const { name, value } = e.target;
    setDonateObject({ ...donateObject, [name]: value });
  };

  function submitDonate() {
    API.saveLink({
      title: donateObject.title,
      description: donateObject.description,
      url: donateObject.url,
      type: donateObject.type,
      user: userObjId,
    })
      .then((res) => {
        loadDonations();
        setDonateSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setNotDonateSubmitted(true);
      });
    //resets form
    setDonateObject({
      title: "",
      description: "",
      url: "",
      type: "",
    });

    setTimeout(() => {
      setDonateSuccess(false);
    }, 2300);

    setTimeout(() => {
      setNotDonateSubmitted(false);
    }, 23000);
  }

  function updateDonation() {
    API.updateLink(donateId, {
      title: donateObject.title,
      description: donateObject.description,
      url: donateObject.url,
      type: donateObject.type,
    })
      .then((res) => {
        loadDonations();
        setDonateSuccess(true);
        setDonateId("");
      })
      .catch((err) => {
        console.log(err);
        setNotDonateSubmitted(true);
        setDonateId("");
      });

    //resets form
    setDonateObject({
      title: "",
      description: "",
      url: "",
      type: "",
    });

    setTimeout(() => {
      setDonateSuccess(false);
    }, 2300);

    setTimeout(() => {
      setNotDonateSubmitted(false);
    }, 23000);
  }

  const handleDonateSubmit = (e) => {
    if (e) e.preventDefault();
    setDonateErrors(donateValidation(donateObject));
    setIsDonateSubmitting(true);
  };
  //listens for click of 'edit' button and grabs id for a donation link that already exists
  const updatingDonation = (id) => {
    //save the id to a state, that id is passed to api call via useeffect
    console.log(id);
    setDonateId(id);
  };
  //handles the click of the update button in the form
  const submitDonateUpdate = (e) => {
    if (e) e.preventDefault();
    setDonationUpdateErrors(donateValidation(donateObject));
    setIsDonationUpdating(true);
  };

  return (
    <>
      <NavTabs />
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
            submitEventUpdate={submitEventUpdate}
            eventUpdateErrors={eventUpdateErrors}
            eventId={eventId}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card" id="post-events-card">
            <div className="card-header">
              <h4 id="post-events-header">Your Posted Events</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {getEvents
                  .filter((event) => event.user === userObjId)
                  .map((event) => (
                    <li className="list-group-item manage-post" key={event._id}>
                      <div className="row">
                        <div className="col-12">
                          {event.title}: {splitDate(event.start_date)}-
                          {splitYear(event.start_date)}{" "}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button
                            type="button"
                            className="btn btn btn-sm manage-btn mr-2"
                            onClick={() => updatingEvent(event._id)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn btn-sm delete-btn"
                            onClick={() => deleteEvent(event._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
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
            articleUpdateErrors={articleUpdateErrors}
            articleId={articleId}
            submitArticleUpdate={submitArticleUpdate}
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
                {getArticles
                  .filter((article) => article.user === userObjId)
                  .map((article) => (
                    <li
                      className="list-group-item manage-post"
                      key={article._id}
                    >
                      <div className="row">
                        <div className="col-12">{article.title}</div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <button
                            type="button"
                            className="btn btn btn-sm manage-btn mr-2"
                            onClick={() => updatingArticle(article._id)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn btn-sm delete-btn"
                            onClick={() => deleteArticle(article._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row" id="row-donations">
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <AddDonation
            handleDonateInputChange={handleDonateInputChange}
            handleDonateSubmit={handleDonateSubmit}
            submitDonateUpdate={submitDonateUpdate}
            donateObject={donateObject}
            donateSuccess={donateSuccess}
            donateErrors={donateErrors}
            donationUpdateErrors={donationUpdateErrors}
            notDonateSubmitted={notDonateSubmitted}
            donateId={donateId}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card" id="post-donations-card">
            <div className="card-header">
              <h4 id="post-donations-header">Your Posted Donation Resources</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {getDonations
                  .filter((donation) => donation.user === userObjId)
                  .map((donation) => (
                    <li
                      className="list-group-item manage-post"
                      key={donation._id}
                    >
                      <div className="row">
                        <div className="col-12">{donation.title}</div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <button
                            type="button"
                            className="btn btn btn-sm manage-btn mr-2"
                            onClick={() => updatingDonation(donation._id)}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="btn btn btn-sm delete-btn"
                            onClick={() => deleteDonation(donation._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
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
            submitVideoUpdate={submitVideoUpdate}
            videoObject={videoObject}
            videoErrors={videoErrors}
            videoSuccess={videoSuccess}
            notVideoSubmitted={notVideoSubmitted}
            videoUpdateErrors={videoUpdateErrors}
            videoId={videoId}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="card" id="post-videos-card">
            <div className="card-header">
              <h4 id="post-videos-header">Your Posted Videos</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {getVideos
                  .filter((video) => video.user === userObjId)
                  .map((video) => (
                    <li className="list-group-item manage-post" key={video._id}>
                      <div className="row">
                        <div className="col-12">{video.title}</div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button
                            type="button"
                            className="btn btn btn-sm manage-btn mr-2"
                            onClick={() => updatingVideo(video._id)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn btn-sm delete-btn"
                            onClick={() => deleteVideo(video._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
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
