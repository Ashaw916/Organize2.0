import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import VideoLiveStream from "../../components/VideoLiveStream/VideoLiveStream";
import "../css/Video.css";

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
          <div
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
            id="livestream-wrapper"
          >
            <VideoLiveStream />
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-8 col-lg-8"
            id="video-title-wrapper"
          >
            <div className="card" id="video-card">
              <div className="card-header">
                <h4>Livestream Footage and Video Archive</h4>
              </div>
              <div className="card-body" id="video-card-body">
                <h6>
                  View livestream video or browse the video archive below.
                </h6>
                <hr />
                <h5>Current Live Stream</h5>
                <p className="card-text">{videos.title}Video Title</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href={videos.src} target="_blank">
                      <button type="button" className="btn btn-sm">
                        Source
                      </button>
                    </a>
                  </div>
                  <small className="text-muted">
                    {videos.date_added} 09-10-2020
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="album py-5 bg-light" id="videoMain-wrapper">
        <div className="container">
          <div className="row">
            {videos.map((video) => (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow" key={video._id}>
                  <iframe
                    className="card-img-top"
                    style={{ height: "300px", width: "auto" }}
                    src={video.src}
                    allowFullScreen
                  ></iframe>
                  <div className="card-body">
                    <h5>Videos Archive</h5>
                    <p className="card-text">{video.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href={video.src} target="_blank">
                          <button type="button" className="btn btn-sm">
                            Source
                          </button>
                        </a>
                      </div>
                      <small className="text-muted">{video.date_added}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
