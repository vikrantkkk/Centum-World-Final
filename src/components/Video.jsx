import React from "react";
import JetVideo from "../assets/video/JETTRADEFX.mp4";

const Video = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center">
      <div className="">
        <video
          src={JetVideo}
          muted
          autoPlay
          className="rounded-lg"
          loop

        />
      </div>
    </div>
  );
};

export default Video;
