import React from "react";
import "./AddVideoStyle.css";

function AddVideo({
  handleVideoInputChange,
  handleVideoSubmit,
  submitVideoUpdate,
  videoObject,
  videoErrors,
  videoSuccess,
  notVideoSubmitted,
  videoUpdateErrors,
  videoId
}) {
  return (
    <>
      <div className="card" id="add-video-card">
        <div className="card-header">
          <h4 id="add-video-header">Add Video</h4>
        </div>
        <div className="card-body">
          <form noValidate>
            <div className="form-group">
              <label htmlFor="title">Video Title</label>
              <input
                type="text"
                className={`form-control ${videoErrors.title ? "inputErr" : videoUpdateErrors.title ? "inputErr" : ""}`}
                id="title"
                placeholder="Enter Title for Video"
                name="title"
                onChange={handleVideoInputChange}
                value={videoObject.title || ""}
                required
              />
              {videoErrors.title && (<p className="err">{videoErrors.title}</p>)}
              {videoUpdateErrors.title && (<p className="err">{videoErrors.title}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="description">
                Brief Description
              </label>
              <textarea
                className={`form-control ${videoErrors.description ? "inputErr" : videoUpdateErrors.description ? "inputErr" : ""}`}
                id="description"
                rows="2"
                name="description"
                onChange={handleVideoInputChange}
                value={videoObject.description || ""}
                required
              ></textarea>
              {videoErrors.description && (<p className="err">{videoErrors.description}</p>)}
              {videoUpdateErrors.description && (<p className="err">{videoErrors.description}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="src">Video Url</label>
              <input
                type="text"
                className={`form-control ${videoErrors.src ? "inputErr" : videoUpdateErrors.src ? "inputErr" : ""}`}
                id="src"
                placeholder="Video url"
                name="src"
                onChange={handleVideoInputChange}
                value={videoObject.src || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Embedded Link Only</small>
              <small id="textHelp" className="form-text text-muted">src="http(s)://www.dailymotion.com/embed/video"</small>
              {videoErrors.src && (<p className="err">{videoErrors.src}</p>)}
              {videoUpdateErrors.src && (<p className="err">{videoErrors.src}</p>)}
            </div>

            <div className="form-group">
              <label htmlFor="type">Video Type</label>
              <input
                type="text"
                className={`form-control ${videoErrors.type ? "inputErr" : videoUpdateErrors.type ? "inputErr" : ""}`}
                id="type"
                placeholder="Type of Video"
                name="type"
                onChange={handleVideoInputChange}
                value={videoObject.type || ""}
                required
              />
              <small id="textHelp" className="form-text text-muted">Type of video (e.g. protest, tribute)</small>
              {videoErrors.type && (<p className="err">{videoErrors.type}</p>)}
              {videoUpdateErrors.type && (<p className="err">{videoErrors.type}</p>)}
            </div>
          </form>
          <button type="submit" className="btn btn-add" onClick={handleVideoSubmit} disabled={!(videoId.length === 0)}>
            Add Video
          </button>
          <button type="submit" className="btn btn-add" onClick={submitVideoUpdate} disabled={(videoId.length === 0)}>
            Update
          </button>
          {videoSuccess && <div className="success">Submitted</div>}
          {notVideoSubmitted && <div className="notSubmitted">Not Submitted :(</div>}
        </div>
      </div>
    </>
  );
}

export default AddVideo;
