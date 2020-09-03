import React from "react";

function AddVideo() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          I am an "AddVideo" Component<h5>Add Video Information Here</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="videoTitle">Video Title</label>
              <input
                type="text"
                className="form-control"
                id="videoTitle"
                placeholder="Enter Title for video"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Brief Description</label>
              <textarea
                className="form-control"
                id="videoDescription"
                rows="2"
              ></textarea>
            </div>

            <div className="form-group">
              <label for="videoUrl">Video Url</label>
              <input
                type="url"
                className="form-control"
                id="videoUrl"
                placeholder="Video url"
              />
            </div>
          </form>
          <button type="submit" className="btn btn-primary">
            Add Video
          </button>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </>
  );
}

export default AddVideo;
