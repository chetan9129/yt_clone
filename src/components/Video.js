import React from "react";
import { AiFillEye } from "react-icons/ai";
import "../css/video.css";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/qt4LZ0E2xyU/hq720_live.jpg?sqp=COCB-50G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALJuKImFBg0Ncog-yLsiR0K49tzg"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title">Bunks Bhai Ran Fushhhh..</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 1,243 views •
        </span>
        <span> Live</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/g8K59sYJ_9TVmh7I3_Xqyxm5aP297ifg5GzfKhAwqhk6ElI4TCx4CB9iwOlhwndtPKSypc8F=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>8bit Binks69</p>
      </div>
    </div>
  );
};

export default Video;
