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
      .then((res) => setVideos(res.data.reverse()))
      .catch((err) => console.log(err));
  }

  function splitDate(str) {
    return str.slice(5, 10);
  }

  function splitYear(str) {
    return str.slice(0, 4);
  }

  return (
    <>
      <div className="container">
        <VideoLiveStream />
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
                      <small className="text-muted">
                        {splitDate(video.date_added)}-
                        {splitYear(video.date_added)}
                      </small>
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
