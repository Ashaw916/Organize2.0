import React, { Component } from "react";
import { getVideos } from "../../resources/videos";
import VideoLiveStream from "../../components/VideoLiveStream/VideoLiveStream";

// import { Link, Route } from "react-router-dom";
// import VideoArchive from "../../components/VideoArchive/VideoArchive.js";

class Video extends Component {
  state = {
    videos: getVideos(),
  };

  render() {
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
                {this.state.videos.map((video) => (
                  <div className="list-group-item list-group-item-action">
                    <iframe
                      style={{ height: "300px", width: "auto" }}
                      src={video.url}
                      allowfullscreen
                    ></iframe>

                    <h5> Title: {video.title} </h5>
                    <p>Description: {video.description}</p>
                    <a href={video.url}>Source: {video.url}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Video;
