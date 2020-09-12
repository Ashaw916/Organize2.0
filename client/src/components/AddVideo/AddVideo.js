import React from "react";

function AddVideo() {
  return (
    <>
      <div className="card" id="manage-add-video">
        <div className="card-header">
          <h4 id="add-video-title">Add Video</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="videoTitle">Video Title</label>
              <input
                type="text"
                className="form-control"
                id="videoTitle"
                placeholder="Enter Title for video"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Brief Description
              </label>
              <textarea
                className="form-control"
                id="videoDescription"
                rows="2"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="videoUrl">Video Url</label>
              <input
                type="url"
                className="form-control"
                id="videoUrl"
                placeholder="Video url"
              />
            </div>
          </form>
          <button type="submit" className="btn btn-add">
            Add Video
          </button>
        </div>
      </div>
    </>
  );
}

export default AddVideo;
