import React from "react";
import { Link, Route } from "react-router-dom";
import VideoArchive from "../../components/VideoArchive/VideoArchive.js";
import VideoLiveStream from "../../components/VideoLiveStream/VideoLiveStream";

function Video(props) {
  console.log(props);

  return (
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
        <VideoArchive />
      </div>
    </div>
  );
}

export default Video;
