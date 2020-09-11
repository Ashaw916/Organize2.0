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
  // const [formObject, setFormObject] = useState({});
  // //all other states for values that must be modified before pushing to backend
  // const [start, ]

  //cocatenate dates and times together with a T together
  //will need to convert 12hr times to 24 before concatenating



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
            <AddResource />
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
            <AddVideo />
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
