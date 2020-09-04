import React from "react";

function VideoLiveStream() {
  return (
    <>
      <div
        className="video-wrapper"
        style={{
          height: "100%",
          width: "auto",
          borderRadius: "5px",
          border: "1px gray solid",
          padding: "10px",
          margin: "15px",
        }}
      >
        <iframe
          style={{
            height: "300px",
            width: "auto",
          }}
          src="https://www.youtube.com/embed/Xgis2DQdBuM"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
export default VideoLiveStream;
