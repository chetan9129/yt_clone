import React from "react";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src="" alt="" />
        <span>05:43</span>
      </div>
      <div className="video__title">Bunks Bhai Ran Fushhhh..</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 1,243 watching <br />
        </span>
        <span>Live</span>
      </div>
      <div className="video__channel">
        <img src="" alt="" />
        <p>8bit Binks69</p>
      </div>
    </div>
  );
};

export default Video;
