import React from "react";
import "./AddVideoStyle.css";

function AddVideo({
  handleVideoInputChange,
  handleVideoSubmit,
  videoObject,
  videoErrors,
  videoSuccess,
  notVideoSubmitted
}) {
  return (
    <>
      <div className="card" id="manage-add-video">
        <div className="card-header">
          <h4 id="add-video-title">Add Video</h4>
        </div>
        <div className="card-body">
          <form noValidate>
            <div className="form-group">
              <label htmlFor="videoTitle">Video Title</label>
              <input
                type="text"
                className={`form-control ${videoErrors.videoTitle ? "inputErr" : ""}`}
                id="videoTitle"
                placeholder="Enter Title for Video"
                name="videoTitle"
                onChange={handleVideoInputChange}
                value={videoObject.videoTitle || ""}
                required
              />
              {videoErrors.videoTitle && (<p className="err">{videoErrors.videoTitle}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Brief Description
              </label>
              <textarea
                className={`form-control ${videoErrors.videoDescription ? "inputErr" : ""}`}
                id="videoDescription"
                rows="2"
                name="videoDescription"
                onChange={handleVideoInputChange}
                value={videoObject.videoDescription || ""}
                required
              ></textarea>
              {videoErrors.videoDescription && (<p className="err">{videoErrors.videoDescription}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="videoUrl">Video Url</label>
              <input
                type="text"
                className={`form-control ${videoErrors.videoUrl ? "inputErr" : ""}`}
                id="videoUrl"
                placeholder="Video url"
                name="videoUrl"
                onChange={handleVideoInputChange}
                value={videoObject.videoUrl || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Embedded Link Only</small>
              <small id="textHelp" className="form-text text-muted">src="http(s)://www.dailymotion.com/embed/video"</small>
              {videoErrors.videoUrl && (<p className="err">{videoErrors.videoUrl}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="videoUrl">Video Type</label>
              <input
                type="text"
                className={`form-control ${videoErrors.videoType ? "inputErr" : ""}`}
                id="videoType"
                placeholder="Type of Video"
                name="videoType"
                onChange={handleVideoInputChange}
                value={videoObject.videoType || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Type of video (e.g. protest, tribute)</small>
              {videoErrors.videoType && (<p className="err">{videoErrors.videoType}</p>)}
            </div>
          </form>
          <button type="submit" className="btn btn-add" onClick={handleVideoSubmit} >
            Add Video
          </button>
          {videoSuccess && <div className="success">Submitted</div>}
          {notVideoSubmitted && <div className="notSubmitted">Not Submitted :(</div>}
        </div>
      </div>
    </>
  );
}

export default AddVideo;
