import React from "react";

function VideoLiveStream() {
  return (
    <>
      <div
        className="video-wrapper"
        style={{
          height: "300px",
          width: "100%",
          borderRadius: "5px",
          border: "1px gray solid",
          padding: "10px",
          margin: "15px",
        }}
      >
        <p>I am the VideoLiveStream Component</p>

        <p>LiveStream Video will go here</p>
      </div>
    </>
  );
}
export default VideoLiveStream;
