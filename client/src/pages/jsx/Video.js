import React, { useState, useEffect } from "react";
// import { getVideos } from "../../resources/videos";
import API from "../../utils/API";
import VideoLiveStream from "../../components/VideoLiveStream/VideoLiveStream";
import "../css/Video.css";

// import { Link, Route } from "react-router-dom";
// import VideoArchive from "../../components/VideoArchive/VideoArchive.js";

function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);
  // Loads all books and sets them to books
  function loadVideos() {
    API.getVideos()
      .then((res) => setVideos(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Video Page</h1>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md col-lg"
            id="livestream-wrapper"
          >
            <VideoLiveStream />
          </div>

          <div
            className="col-xs-12 col-sm-12 col-md col-lg"
            id="videoMain-wrapper"
          >
            <div className="card" id="video-main">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <h2>Video Links Archive</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="list-group">
              {videos.map((video) => (
                <div
                  key={video._id}
                  className="list-group-item list-group-item-action"
                >
                  <iframe
                    style={{ height: "300px", width: "auto" }}
                    src={video.src}
                    allowFullScreen
                  ></iframe>

                  <h5> Title: {video.title} </h5>
                  <p>Description: {video.description}</p>
                  <a href={video.src}>Source: {video.src}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
