import React, { useState, useEffect } from "react";
import API from "../../utils/API";
//video component
function VideoLiveStream() {
  //holds array of objects from database
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);
  // Loads all books and sets them to books
  function loadVideos() {
    API.getVideos()
      .then((res) => setVideos(res.data.reverse()[0]))
      .catch((err) => console.log(err));
  }
//slices isodate date added
  function splitDate(str) {
    return str.slice(0, 10);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
          id="livestream-wrapper"
        >
          <div className="video-wrapper">
            <iframe
              style={{
                height: "300px",
                width: "auto",
              }}
              src={videos.src}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-12 col-md-8 col-lg-8"
          id="video-title-wrapper"
        >
          <div className="card" id="video-card">
            <div className="card-header">
              <h4 id="video-header">Livestream Footage and Video Archive</h4>
            </div>
            <div className="card-body" id="video-card-body">
              <h6>View livestream video or browse the video archive below.</h6>
              <hr />
              <h5>Current Live Stream</h5>
              <p className="card-text">{videos.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href={videos.src} target="_blank">
                    <button type="button" className="btn btn-sm ">
                      Source
                    </button>
                  </a>
                </div>
                {/* <small className="text-muted">
                  Date Added: {videos.date_added}
                </small> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoLiveStream;
