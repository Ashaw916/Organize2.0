import React, { useState, useEffect } from "react";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddResource from "../../components/AddResource/AddResource";
import AddDonation from "../../components/AddDonation/AddDonation";
import AddVideo from "../../components/AddVideo/AddVideo";
import API from "../../utils/API";
import "../css/Manage.css";

function Manage(props) {
  //states for events, articles, and videos
  const [getEvents, setGetEvents] = useState([]);
  const [getArticles, setGetArticles] = useState([]);
  const [getVideos, setGetVideos] = useState([]);
  const [getLinks, setGetLinks] = useState([]);

  //functions to load arrays of objects for the page
  function loadEvents() {
    API.getEvents()
      .then((res) => {
        console.log(res.data);
        setGetEvents(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadArticles() {
    API.getArticles()
      .then((res) => {
        console.log(res.data);
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
        console.log(res.data);
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
  //state for values that can go straight into state
  // const [formObject, setFormObject] = useState({});
  // //all other states for values that must be modified before pushing to backend
  // const [start, ]

  //concatenate dates and times together with a T together
  //will need to convert 12hr times to 24 before concatenating

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
          <AddEvent />
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
          <AddResource />
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
          <AddVideo />
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
