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
        <iframe 
        style={{
          height: "300px",
          width: "100%",
        }}
        src="https://www.youtube.com/embed/Xgis2DQdBuM" allowfullscreen>
    </iframe>
      </div>
    </>
  );
}
export default VideoLiveStream;
