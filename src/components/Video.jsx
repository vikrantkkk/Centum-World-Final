import React from "react";
import JetVideo from "../assets/video/JETTRADEFX.mp4";
import { styles } from "../styles";

const Video = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto translate-y-40">
      <h2 className={`${styles.sectionHeadText}`}>More About Us.</h2>
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="">
          <video src={JetVideo} muted autoPlay className="rounded-lg" loop />
        </div>
      </div>
      </div>
    </>
  );
};

export default Video;
