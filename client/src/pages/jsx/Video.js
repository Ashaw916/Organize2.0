import React, { useState, useEffect } from "react";
// import { getVideos } from "../../resources/videos";
import API from "../../utils/API";
import VideoLiveStream from "../../components/VideoLiveStream/VideoLiveStream";

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
          <VideoLiveStream />
        </div>

        <div className="row">
          <h2>Video Links Archive</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="list-group">
              {videos.map((video) => (
                <div className="list-group-item list-group-item-action">
                  <iframe
                    style={{ height: "300px", width: "auto" }}
                    src={video.src}
                    // allowfullscreen
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
